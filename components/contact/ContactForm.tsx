'use client'

import { useState, useRef, FormEvent } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError(false)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_a1wwmva'
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_jnm4g0d'
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'user_x9kPpW1JmhYVbwVWmxAVD'

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)
      setSent(true)
      formRef.current?.reset()
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="bg-stone-50 border border-gold p-8 text-center">
        <p className="font-display text-xl text-navy mb-2">Wiadomość wysłana!</p>
        <p className="text-sm text-gray-500">Dziękujemy za wiadomość.</p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="user_name" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
            Imię i nazwisko
          </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            required
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            placeholder="Jan Kowalski"
          />
        </div>
        <div>
          <label htmlFor="user_email" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
            Email *
          </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            required
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            placeholder="jan@firma.pl"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
          Temat
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-white"
        >
          <option value="">Wybierz temat...</option>
          <option value="Projekt architektoniczny">Projekt architektoniczny</option>
          <option value="Projekt wnętrz">Projekt wnętrz</option>
          <option value="Modelowanie 3D / CGI">Modelowanie 3D / CGI</option>
          <option value="Współpraca B2B">Współpraca B2B</option>
          <option value="Inne">Inne</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
          Wiadomość *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
          placeholder="Opisz krótko projekt — lokalizacja, skala, termin..."
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">
          Wystąpił błąd. Spróbuj ponownie lub napisz na biuro@cholujdesign.com
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="btn-primary w-full text-center disabled:opacity-60"
      >
        {sending ? 'Wysyłanie...' : 'Wyślij wiadomość'}
      </button>
    </form>
  )
}
