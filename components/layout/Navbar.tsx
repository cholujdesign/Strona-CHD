'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navPl = [
  { label: 'Zakres', href: '/zakres' },
  { label: 'Architektura', href: '/architektura' },
  { label: 'Wnętrza', href: '/wnetrza' },
  { label: 'Współpraca B2B', href: '/b2b-3d' },
  { label: 'Proces', href: '/proces-wspolpracy' },
  { label: 'Kontakt', href: '/kontakt' },
]

const navEn = [
  { label: 'Services', href: '/en/services' },
  { label: 'Architecture', href: '/en/architecture' },
  { label: 'Interiors', href: '/en/interiors' },
  { label: 'B2B Collaboration', href: '/en/b2b-3d' },
  { label: 'Process', href: '/en/process' },
  { label: 'Contact', href: '/en/contact' },
]

const plToEn: Record<string, string> = {
  '/': '/en',
  '/zakres': '/en/services',
  '/architektura': '/en/architecture',
  '/wnetrza': '/en/interiors',
  '/b2b-3d': '/en/b2b-3d',
  '/portfolio': '/en/portfolio',
  '/kontakt': '/en/contact',
  '/blog': '/en/blog',
  '/proces-wspolpracy': '/en/process',
}

function getEnRoute(pathname: string): string {
  if (plToEn[pathname]) return plToEn[pathname]
  if (pathname.startsWith('/portfolio/')) return '/en' + pathname
  if (pathname.startsWith('/blog/')) return '/en' + pathname
  return '/en'
}

function getPlRoute(pathname: string): string {
  if (!pathname.startsWith('/en')) return pathname
  const without = pathname.replace(/^\/en/, '') || '/'
  const enToPl = Object.fromEntries(Object.entries(plToEn).map(([k, v]) => [v, k]))
  if (enToPl[without]) return enToPl[without]
  if (without.startsWith('/portfolio/')) return without
  if (without.startsWith('/blog/')) return without
  return '/'
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isEN = pathname?.startsWith('/en')
  const isHome = pathname === '/' || pathname === '/en'
  const nav = isEN ? navEn : navPl

  useEffect(() => {
    if (!isHome) return
    const onScroll = () => setScrolled(window.scrollY > 72)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const transparent = isHome && !scrolled
  const logoText = transparent ? 'text-white/90' : 'text-navy'
  const linkColor = transparent
    ? 'text-white/70 hover:text-white'
    : 'text-gray-600 hover:text-gold'

  const langSwitcherBase = transparent
    ? 'text-xs tracking-widest font-medium transition-colors'
    : 'text-xs tracking-widest font-medium transition-colors'

  const plHref = getPlRoute(pathname ?? '/')
  const enHref = getEnRoute(pathname ?? '/')

  return (
    <header
      className={[
        'fixed top-0 w-full z-50 transition-all duration-300',
        transparent
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white/95 backdrop-blur border-b border-gray-100',
      ].join(' ')}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16">
          <Link href={isEN ? '/en' : '/'} className="flex items-center gap-3">
            <span
              className={`inline-flex items-center justify-center px-2.5 py-1 text-base tracking-[0.12em] border ${
                transparent ? 'border-white/50 text-white' : 'border-navy text-navy'
              }`}
              style={{ fontFamily: '"Nanum Myeongjo", Georgia, serif' }}
            >
              CHD
            </span>
            <span className={`text-sm font-sans font-normal tracking-wider ${transparent ? 'text-white/60' : 'text-gray-500'}`}>
              Chołuj Design
            </span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors tracking-wide ${linkColor}`}
              >
                {item.label}
              </Link>
            ))}
            <span className={`flex items-center gap-1.5 ${transparent ? 'text-white/40' : 'text-gray-300'}`}>|</span>
            <Link
              href={plHref}
              className={`${langSwitcherBase} ${!isEN ? (transparent ? 'text-white' : 'text-navy font-semibold') : (transparent ? 'text-white/40 hover:text-white/70' : 'text-gray-400 hover:text-gray-600')}`}
            >
              PL
            </Link>
            <Link
              href={enHref}
              className={`${langSwitcherBase} ${isEN ? (transparent ? 'text-white' : 'text-navy font-semibold') : (transparent ? 'text-white/40 hover:text-white/70' : 'text-gray-400 hover:text-gray-600')}`}
            >
              EN
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 ${transparent ? 'text-white' : 'text-navy'}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden py-4 border-t border-gray-100 bg-white">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-sm text-gray-700 hover:text-gold transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-2 flex gap-4">
              <Link href={plHref} className={`text-xs tracking-widest ${!isEN ? 'text-navy font-semibold' : 'text-gray-400'}`}>PL</Link>
              <Link href={enHref} className={`text-xs tracking-widest ${isEN ? 'text-navy font-semibold' : 'text-gray-400'}`}>EN</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
