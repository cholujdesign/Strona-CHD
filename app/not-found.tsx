import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Strona nie znaleziona | CHD Architekci',
}

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="container-site text-center">
        <p className="font-display text-8xl text-gold mb-6">404</p>
        <h1 className="font-display text-3xl text-navy mb-4">Strona nie istnieje.</h1>
        <p className="text-gray-500 mb-12 max-w-md mx-auto">
          Nie znaleźliśmy szukanej strony. Możliwe, że adres uległ zmianie lub strona została usunięta.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Strona główna
          </Link>
          <Link href="/zakres" className="btn-outline">
            Zakres usług
          </Link>
          <Link href="/portfolio" className="btn-outline">
            Portfolio
          </Link>
          <Link href="/kontakt" className="btn-outline">
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  )
}
