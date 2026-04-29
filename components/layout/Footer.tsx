'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE_EMAIL, SITE_PHONE, SITE_ADDRESS } from '@/lib/utils'
import FooterContactForm from '@/components/contact/FooterContactForm'

const linksPl = {
  usługi: [
    { label: 'Zakres usług', href: '/zakres' },
    { label: 'Wnętrza', href: '/wnetrza' },
    { label: 'B2B / 3D', href: '/b2b-3d' },
  ],
  studio: [
    { label: 'O nas', href: '/o-nas' },
    { label: 'Proces', href: '/proces-wspolpracy' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  info: [
    { label: 'Blog', href: '/blog' },
    { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
  ],
}

const linksEn = {
  usługi: [
    { label: 'Services', href: '/en/services' },
    { label: 'Interiors', href: '/en/interiors' },
    { label: 'B2B / 3D', href: '/en/b2b-3d' },
  ],
  studio: [
    { label: 'Architecture', href: '/en/architecture' },
    { label: 'Process', href: '/en/process' },
    { label: 'Contact', href: '/en/contact' },
  ],
  info: [
    { label: 'Blog', href: '/en/blog' },
    { label: 'Privacy policy', href: '/polityka-prywatnosci' },
  ],
}

export default function Footer() {
  const pathname = usePathname()
  const isEN = pathname?.startsWith('/en')
  const links = isEN ? linksEn : linksPl

  return (
    <footer className="bg-stone-900 text-white">

      {/* Mini contact form */}
      <div className="border-b border-white/10">
        <div className="container-site py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                {isEN ? 'Get in touch' : 'Napisz do nas'}
              </p>
              <p className="font-display text-2xl text-white mb-2">
                {isEN ? 'Have a question?' : 'Masz pytanie?'}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                {isEN
                  ? 'Leave a message — we\'ll reply shortly. The full project enquiry form is on the contact page.'
                  : 'Zostaw wiadomość — odpiszemy wkrótce. Pełny formularz z detalami projektu dostępny na stronie kontaktu.'}
              </p>
            </div>
            <div>
              <FooterContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-xl mb-4">
              Chołuj <span className="text-gold">Design</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {isEN
                ? 'Design studio from Kraków. Architecture, interiors and B2B solutions.'
                : 'Studio designu z Krakowa. Architektura, wnętrza i rozwiązania B2B.'}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.facebook.com/CHDarchitekci/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gold transition-colors tracking-wide"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://pl.linkedin.com/in/robert-cho%C5%82uj-735a59a5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gold transition-colors tracking-wide"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn — Robert Chołuj
              </a>
              <a
                href="https://pl.linkedin.com/in/jakubcholuj21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gold transition-colors tracking-wide"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn — Jakub Chołuj
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              {isEN ? 'Services' : 'Usługi'}
            </p>
            <ul className="space-y-2">
              {links.usługi.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-300 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Studio</p>
            <ul className="space-y-2">
              {links.studio.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-300 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              {isEN ? 'Contact' : 'Kontakt'}
            </p>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>{SITE_ADDRESS}</p>
              <p>
                <a href={`tel:${SITE_PHONE.replace(/\s/g, '')}`} className="hover:text-gold transition-colors">
                  {SITE_PHONE}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-gold transition-colors">
                  {SITE_EMAIL}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Choluj Design Spółka Cywilna.{' '}
            {isEN ? 'All rights reserved.' : 'Wszelkie prawa zastrzeżone.'}
          </p>
          <div className="flex gap-4">
            {links.info.map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
