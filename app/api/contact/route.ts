import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'biuro@cholujdesign.com'
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'onboarding@resend.dev'

// Rate limiting — best-effort in-memory (resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    if (rateLimitMap.size > 5000) {
      rateLimitMap.forEach((v, k) => {
        if (now > v.resetAt) rateLimitMap.delete(k)
      })
    }
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

// Spam detection — random strings have >30% uppercase with no spaces and length >8
function looksLikeRandomString(s: string): boolean {
  if (!s || s.length < 9) return false
  if (/\s/.test(s)) return false
  const upper = (s.match(/[A-Z]/g) ?? []).length
  return upper / s.length > 0.3
}

// Spam email: many dot-separated single chars before @ (e.g. a.q.ix.o.bo.wi.f52@...)
function looksLikeSpamEmail(email: string): boolean {
  const local = email.split('@')[0]
  const dots = (local.match(/\./g) ?? []).length
  return dots >= 3
}

const INQUIRY_LABELS: Record<string, string> = {
  wnetrza: 'Wnętrza',
  deweloperzy: 'Dla deweloperów',
  b2b: 'Współpraca B2B',
  inne: 'Inne',
}

const STAGE_LABELS: Record<string, string> = {
  pomysl: 'Pomysł',
  koncepcja: 'Koncepcja',
  'w-toku': 'Projekt w toku',
  realizacja: 'Realizacja',
  inne: 'Inne',
}

const B2B_SCOPE_LABELS: Record<string, string> = {
  'modelowanie-3d': 'Modelowanie 3D',
  dokumentacja: 'Dokumentacja',
  cgi: 'CGI',
  unreal: 'Unreal Engine',
  'animacja-vr': 'Animacja / VR / Panorama 360',
  koordynacja: 'Koordynacja detali',
  inne: 'Inne',
}

function sanitize(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

function row(label: string, value: string) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #eee;color:#888;font-size:12px;width:160px;vertical-align:top;">${label}</td>
      <td style="padding:8px 0;border-bottom:1px solid #eee;font-size:13px;color:#1b222e;">${value}</td>
    </tr>`
}

function buildEmailHtml(data: {
  name: string
  email: string
  phone: string
  inquiryLabel: string
  location: string
  stageLabel: string
  description: string
  budget: string
  b2bScopeLabels: string[]
  deadline: string
  materialsLink: string
  source: string
}) {
  const {
    name, email, phone, inquiryLabel, location,
    stageLabel, description, budget,
    b2bScopeLabels, deadline, materialsLink, source,
  } = data

  const sourceNote = source === 'footer' ? '<p style="font-size:11px;color:#aaa;margin-bottom:16px;">Zapytanie ze stopki strony</p>' : ''

  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8"><title>Nowe zapytanie</title></head>
<body style="font-family:system-ui,sans-serif;color:#1b222e;max-width:600px;margin:0 auto;padding:24px;">
  <h2 style="margin:0 0 4px;font-size:20px;">Nowe zapytanie — Chołuj Design</h2>
  <p style="color:#B08840;font-size:13px;margin:0 0 24px;">${inquiryLabel}</p>
  ${sourceNote}
  <table style="width:100%;border-collapse:collapse;">
    ${row('Imię i nazwisko', name)}
    ${row('E-mail', email)}
    ${row('Telefon', phone)}
    ${row('Typ zapytania', inquiryLabel)}
    ${row('Lokalizacja', location)}
    ${row('Etap projektu', stageLabel)}
    ${row('Orientacyjny budżet', budget)}
    ${b2bScopeLabels.length ? row('Zakres B2B', b2bScopeLabels.join(', ')) : ''}
    ${row('Deadline', deadline)}
    ${materialsLink ? row('Link do materiałów', `<a href="${materialsLink}">${materialsLink}</a>`) : ''}
  </table>
  <div style="margin-top:24px;background:#f9f7f4;padding:16px;border-left:3px solid #B08840;">
    <p style="font-size:11px;color:#888;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.1em;">Opis projektu</p>
    <p style="font-size:14px;white-space:pre-wrap;margin:0;line-height:1.6;">${description}</p>
  </div>
  <p style="margin-top:24px;font-size:11px;color:#bbb;">Odpowiedź: reply do tego maila trafia bezpośrednio do ${email}</p>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await req.json()

    // Honeypot — silent success
    if (sanitize(body.website)) {
      return NextResponse.json({ success: true })
    }

    // Time-to-submit — < 3 s → silent success
    const loadTime = Number(body._loadTime)
    if (!isNaN(loadTime) && Date.now() - loadTime < 3000) {
      return NextResponse.json({ success: true })
    }

    // Rate limiting by IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ success: true })
    }

    const name = sanitize(body.name, 100)
    const email = sanitize(body.email, 200)
    const phone = sanitize(body.phone, 30)
    const inquiryType = sanitize(body.inquiryType, 50)
    const location = sanitize(body.location, 200)
    const projectStage = sanitize(body.projectStage, 50)
    const description = sanitize(body.description, 3000)
    const budget = sanitize(body.budget, 100)
    const rodo = body.rodo === true || body.rodo === 'true'
    const b2bScope = Array.isArray(body.b2bScope)
      ? (body.b2bScope as unknown[]).map((s) => sanitize(s as string, 50)).filter(Boolean)
      : []
    const deadline = sanitize(body.deadline, 100)
    const materialsLink = sanitize(body.materialsLink, 500)
    const source = sanitize(body.source, 20) || 'contact'

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Podaj poprawny adres e-mail.' }, { status: 400 })
    }
    if (!description) {
      return NextResponse.json({ error: 'Opisz projekt lub zapytanie.' }, { status: 400 })
    }

    // Spam detection — silent success so bots think they succeeded
    if (
      looksLikeSpamEmail(email) ||
      looksLikeRandomString(name) ||
      looksLikeRandomString(location) ||
      looksLikeRandomString(budget)
    ) {
      return NextResponse.json({ success: true })
    }
    if (source !== 'footer' && !name) {
      return NextResponse.json({ error: 'Podaj imię i nazwisko.' }, { status: 400 })
    }
    if (source !== 'footer' && !rodo) {
      return NextResponse.json({ error: 'Wymagana zgoda RODO.' }, { status: 400 })
    }

    const inquiryLabel = INQUIRY_LABELS[inquiryType] ?? (inquiryType || 'Inne')
    const stageLabel = STAGE_LABELS[projectStage] ?? (projectStage || '')
    const b2bScopeLabels = b2bScope.map((s) => B2B_SCOPE_LABELS[s] ?? s)

    const subject = `[Chołuj Design] ${inquiryLabel} — nowe zapytanie`

    const html = buildEmailHtml({
      name: name || '(nie podano)',
      email, phone, inquiryLabel, location,
      stageLabel, description, budget,
      b2bScopeLabels, deadline, materialsLink, source,
    })

    await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] error:', err)
    return NextResponse.json({ error: 'Błąd serwera. Spróbuj ponownie.' }, { status: 500 })
  }
}
