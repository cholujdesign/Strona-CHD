'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import Link from 'next/link'

const INPUT = 'field-dark'

export default function FooterContactForm() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const loadTimeRef = useRef<number>(0)

  useEffect(() => {
    loadTimeRef.current = Date.now()
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)

    const body = {
      email: data.get('email'),
      inquiryType: data.get('inquiryType'),
      description: data.get('message'),
      website: data.get('website'), // honeypot
      _loadTime: loadTimeRef.current,
      source: 'footer',
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
        setError(json.error ?? 'Błąd wysyłania.')
      } else {
        setSent(true)
      }
    } catch {
      setError('Brak połączenia.')
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="py-4">
        <p className="text-white font-display text-lg mb-1">Wiadomość wysłana.</p>
        <p className="text-gray-400 text-sm">Odpiszemy wkrótce.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      {/* Honeypot */}
      <div aria-hidden="true" style={{ display: 'none' }}>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <input
          name="email"
          type="email"
          required
          maxLength={200}
          className={INPUT}
          placeholder="twój@email.pl"
        />
      </div>
      <div>
        <select name="inquiryType" className={INPUT}>
          <option value="">Typ zapytania...</option>
          <option value="wnetrza">Wnętrza</option>
          <option value="deweloperzy">Dla deweloperów</option>
          <option value="b2b">Współpraca B2B</option>
          <option value="inne">Inne</option>
        </select>
      </div>
      <div>
        <textarea
          name="message"
          required
          rows={3}
          maxLength={1000}
          className={`${INPUT} resize-none`}
          placeholder="Krótki opis zapytania..."
        />
      </div>

      {error && <p className="text-red-400 text-xs">{error}</p>}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="border border-gold text-gold px-5 py-2.5 text-xs tracking-wide hover:bg-gold hover:text-white transition-colors disabled:opacity-50"
        >
          {sending ? 'Wysyłanie...' : 'Wyślij'}
        </button>
        <Link href="/kontakt" className="text-xs text-gray-400 hover:text-gold transition-colors">
          Pełny formularz →
        </Link>
      </div>
    </form>
  )
}
