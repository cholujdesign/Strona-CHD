'use client'

import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react'
import Link from 'next/link'

const INPUT = 'field'
const LABEL = 'block text-[10px] font-medium uppercase tracking-[0.15em] text-gold mb-2'

const INQUIRY_OPTIONS = [
  { value: 'wnetrza', label: 'Wnętrza' },
  { value: 'deweloperzy', label: 'Dla deweloperów' },
  { value: 'b2b', label: 'Współpraca B2B' },
  { value: 'inne', label: 'Inne' },
]

const STAGE_OPTIONS = [
  { value: 'pomysl', label: 'Pomysł' },
  { value: 'koncepcja', label: 'Koncepcja' },
  { value: 'w-toku', label: 'Projekt w toku' },
  { value: 'realizacja', label: 'Realizacja' },
  { value: 'inne', label: 'Inne' },
]

const B2B_SCOPE_OPTIONS = [
  { value: 'modelowanie-3d', label: 'Modelowanie 3D' },
  { value: 'dokumentacja', label: 'Dokumentacja' },
  { value: 'cgi', label: 'CGI' },
  { value: 'unreal', label: 'Unreal Engine' },
  { value: 'animacja-vr', label: 'Animacja / VR / Panorama 360' },
  { value: 'koordynacja', label: 'Koordynacja detali' },
  { value: 'inne', label: 'Inne' },
]

export default function ContactFormFull() {
  const [inquiryType, setInquiryType] = useState('')
  const [b2bScope, setB2bScope] = useState<string[]>([])
  const [rodo, setRodo] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const loadTimeRef = useRef<number>(0)

  useEffect(() => {
    loadTimeRef.current = Date.now()
  }, [])

  function toggleB2bScope(value: string) {
    setB2bScope((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    const body = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      inquiryType,
      location: data.get('location'),
      projectStage: data.get('projectStage'),
      description: data.get('description'),
      budget: data.get('budget'),
      rodo,
      b2bScope,
      deadline: data.get('deadline'),
      materialsLink: data.get('materialsLink'),
      website: data.get('website'), // honeypot
      _loadTime: loadTimeRef.current,
      source: 'contact',
    }

    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const json = await res.json()
      if (!res.ok || json.error) {
        setError(json.error ?? 'Wystąpił błąd. Spróbuj ponownie.')
      } else {
        setSent(true)
      }
    } catch {
      setError('Brak połączenia. Spróbuj ponownie lub napisz na biuro@cholujdesign.com')
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="border border-gold bg-stone-50 p-10 text-center">
        <p className="font-display text-2xl text-navy mb-3">Wiadomość wysłana.</p>
        <p className="text-sm text-gray-500">Dziękujemy za wiadomość.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* Honeypot — hidden from users, visible to bots */}
      <div aria-hidden="true" style={{ display: 'none' }}>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Dane kontaktowe */}
      <fieldset className="space-y-6">
        <legend className="section-subtitle mb-4">Dane kontaktowe</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={LABEL}>Imię i nazwisko *</label>
            <input id="name" name="name" type="text" required maxLength={100} className={INPUT} placeholder="Jan Kowalski" />
          </div>
          <div>
            <label htmlFor="email" className={LABEL}>E-mail *</label>
            <input id="email" name="email" type="email" required maxLength={200} className={INPUT} placeholder="jan@firma.pl" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className={LABEL}>Telefon</label>
            <input id="phone" name="phone" type="tel" maxLength={30} className={INPUT} placeholder="+48 000 000 000" />
          </div>
          <div>
            <label htmlFor="inquiryType" className={LABEL}>Typ zapytania *</label>
            <select
              id="inquiryType"
              name="inquiryType"
              required
              value={inquiryType}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setInquiryType(e.target.value)}
              className={INPUT}
            >
              <option value="">Wybierz...</option>
              {INQUIRY_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      {/* Szczegóły projektu */}
      <fieldset className="space-y-6">
        <legend className="section-subtitle mb-4">Szczegóły projektu</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="location" className={LABEL}>Lokalizacja</label>
            <input id="location" name="location" type="text" maxLength={200} className={INPUT} placeholder="np. Kraków, Małopolska" />
          </div>
          <div>
            <label htmlFor="projectStage" className={LABEL}>Etap projektu</label>
            <select id="projectStage" name="projectStage" className={INPUT}>
              <option value="">Wybierz...</option>
              {STAGE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="description" className={LABEL}>Opis projektu *</label>
          <textarea
            id="description"
            name="description"
            required
            rows={6}
            maxLength={3000}
            className={`${INPUT} resize-none`}
            placeholder="Opisz projekt — zakres, lokalizacja, termin, oczekiwania..."
          />
        </div>
        <div>
          <label htmlFor="budget" className={LABEL}>Orientacyjny budżet</label>
          <input
            id="budget"
            name="budget"
            type="text"
            maxLength={100}
            className={INPUT}
            placeholder="np. 50 000–100 000 zł (opcjonalnie)"
          />
        </div>
      </fieldset>

      {/* Pola B2B — warunkowe */}
      {inquiryType === 'b2b' && (
        <fieldset className="space-y-6 border-l-2 border-gold pl-6">
          <legend className="section-subtitle mb-4">Szczegóły B2B</legend>
          <div>
            <p className={LABEL}>Zakres</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              {B2B_SCOPE_OPTIONS.map((o) => (
                <label key={o.value} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    value={o.value}
                    checked={b2bScope.includes(o.value)}
                    onChange={() => toggleB2bScope(o.value)}
                    className="w-4 h-4 accent-gold"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-navy transition-colors">
                    {o.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="deadline" className={LABEL}>Deadline</label>
              <input id="deadline" name="deadline" type="text" maxLength={100} className={INPUT} placeholder="np. koniec Q1 2025" />
            </div>
            <div>
              <label htmlFor="materialsLink" className={LABEL}>Link do materiałów / folderu</label>
              <input id="materialsLink" name="materialsLink" type="url" maxLength={500} className={INPUT} placeholder="https://drive.google.com/..." />
            </div>
          </div>
        </fieldset>
      )}

      {/* RODO */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={rodo}
            onChange={(e) => setRodo(e.target.checked)}
            required
            className="w-4 h-4 mt-0.5 shrink-0 accent-gold"
          />
          <span className="text-xs text-gray-500 leading-relaxed">
            Akceptuję przetwarzanie danych osobowych w celu obsługi zapytania zgodnie z{' '}
            <Link href="/polityka-prywatnosci" className="underline hover:text-gold transition-colors">
              Polityką prywatności
            </Link>
            . *
          </span>
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {sending ? 'Wysyłanie...' : 'Wyślij zapytanie'}
      </button>

      <p className="text-xs text-gray-400 text-center">* pola wymagane</p>
    </form>
  )
}
