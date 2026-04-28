import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import ProjectCard from '@/components/ui/ProjectCard'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { getProjectBySlug } from '@/data/projects'
import type { Project } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Architektura — projekty indywidualne, rewitalizacje, deweloperka | Kraków',
  description:
    'Projekty architektoniczne dla klientów indywidualnych i deweloperów. Domy, rewitalizacje, budynki wielorodzinne, analizy inwestycyjne. CHD Architekci — Kraków.',
  alternates: { canonical: `${SITE_URL}/architektura`, languages: { pl: `${SITE_URL}/architektura`, en: `${SITE_URL}/en/architecture` } },
  openGraph: {
    title: 'Architektura — CHD Architekci',
    url: `${SITE_URL}/architektura`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'Architektura CHD — Pi i Sigma, Rakowicka, Kraków' }],
  },
}

const INDYWIDUALNI_LIST = [
  'Domy jednorodzinne i willowe',
  'Projekty na indywidualną działkę',
  'Adaptacje i rozbudowy istniejących budynków',
  'Rewitalizacje obiektów z historią',
  'Projekt + nadzór autorski',
  'Pełna obsługa od koncepcji po odbiór',
]

const DEWELOPERZY_LIST = [
  'Budynki mieszkalne wielorodzinne',
  'Analiza chłonności działki i feasibility study',
  'Optymalizacja układu pod PUM i opłacalność',
  'Projekty koncepcyjne pod sprzedaż inwestycji',
  'Dokumentacja budowlana i wykonawcza',
  'Rewitalizacje obiektów zabytkowych',
  'Koordynacja z urzędami i konserwatorem',
]

function PlaceholderCard({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-stone-100 border border-dashed border-stone-300 aspect-[4/3] flex flex-col items-center justify-center p-8 gap-2">
      <p className="font-display text-lg text-navy text-center">{title}</p>
      {subtitle && <p className="text-xs text-gray-400 text-center">{subtitle}</p>}
      <p className="text-xs text-gold mt-2">— opis wkrótce —</p>
    </div>
  )
}

function AnalysisCard({ project }: { project: Project }) {
  if (!project.images.length) {
    return <PlaceholderCard title={project.title} subtitle={project.role} />
  }
  return <ProjectCard project={project} />
}

export default function ArchitekturaPage() {
  // Deweloperzy — główne projekty
  const rakowicka   = getProjectBySlug('pi-i-sigma-rakowicka')
  const katowice    = getProjectBySlug('pawla-12-katowice')
  const krynica     = getProjectBySlug('krynica-zdroj-willa-zlocien')

  // Deweloperzy — koncepcje
  const domPrefab1    = getProjectBySlug('dom-prefabrykowany-1')
  const domPrefab2    = getProjectBySlug('dom-prefabrykowany-2')
  const domPrefab3    = getProjectBySlug('dom-prefabrykowany-3')
  const domySzeregowe = getProjectBySlug('domy-szeregowe')
  const analiza1    = getProjectBySlug('analiza-1')
  const analiza2    = getProjectBySlug('analiza-2')
  const analiza3    = getProjectBySlug('analiza-3')

  // Klienci indywidualni
  const poludnie      = getProjectBySlug('poludnie-polski-rewitalizacja')
  const eastGrafton   = getProjectBySlug('east-grafton-renovation')
  const domyPrefab    = getProjectBySlug('domy-prefabrykowane')

  // Inne
  const grandHotel  = getProjectBySlug('elewacja-grand-hotel')
  const nycElewacja = getProjectBySlug('elewacja-nyc-manhattan')
  const szkolaKrosno      = getProjectBySlug('szkola-krosno')
  const szkolaModliniczka = getProjectBySlug('szkola-podstawowa-modliniczka')
  const muzeum            = getProjectBySlug('muzeum-samochodowe-brzozow')

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Architektura', href: '/architektura' },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/rakowicka151.webp"
            alt="Architektura CHD — Pi i Sigma, Rakowicka, Kraków"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container-site relative z-10 pt-32 pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Usługi architektoniczne</p>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6 max-w-3xl">
            Architektura, która służy ludziom i miejscu.
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-10">
            Projektujemy z szacunkiem dla kontekstu — historii miejsca, potrzeb użytkowników
            i otaczającej przestrzeni. Dla klientów indywidualnych i deweloperów.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/kontakt" className="btn-primary">
              Porozmawiajmy o projekcie
            </Link>
            <Link
              href="/portfolio"
              className="border border-white/40 text-white/80 hover:bg-white/10 transition-colors px-8 py-3 text-xs tracking-widest uppercase inline-flex items-center"
            >
              Zobacz portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ─────────────────────────────────── */}
      <FadeIn>
        <section className="py-16 bg-gold">
          <div className="container-site">
            <p className="text-white/90 text-center text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              Realizacje w <strong className="text-white">Krakowie, Katowicach i Krynicy-Zdroju</strong>.
              Projekty od <strong className="text-white">domów jednorodzinnych</strong> po
              <strong className="text-white"> rewitalizacje obiektów zabytkowych</strong> — dla prywatnych
              inwestorów i deweloperów.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── DWIE KARTY ───────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Dla kogo projektujemy</p>
            <h2 className="section-title max-w-2xl">Dwa segmenty. Jedno podejście.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-16">
              Niezależnie czy budujesz dom dla rodziny, czy inwestycję wielorodzinną —
              zaczynamy od zrozumienia kontekstu i celu, nie od szablonu.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">

            {/* Klienci indywidualni */}
            <FadeIn delay={0}>
              <div className="bg-white p-10 h-full border border-stone-200">
                <h3 className="font-display text-4xl text-navy mb-2">
                  Klienci indywidualni
                </h3>
                <p className="text-sm text-gold mb-8 tracking-wide">
                  Dom, willa, rewitalizacja
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  Projekty dla prywatnych inwestorów — od pierwszego szkicu po odbiór budynku.
                  Każdy projekt tworzony dla konkretnej działki, konkretnej rodziny i konkretnego
                  budżetu.
                </p>
                <ul className="space-y-3">
                  {INDYWIDUALNI_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-gold shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-stone-100">
                  <p className="text-xs text-gray-400">
                    Prowadzimy projekt od koncepcji do odbioru — jeden zespół, jedna odpowiedzialność.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Deweloperzy */}
            <FadeIn delay={120}>
              <div className="bg-stone-900 p-10 h-full">
                <h3 className="font-display text-4xl text-white mb-2">
                  Deweloperzy
                </h3>
                <p className="text-sm text-gold mb-8 tracking-wide">
                  Inwestycje, analizy, dokumentacja
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-8">
                  Projekty wielorodzinne, rewitalizacje i analizy inwestycyjne dla deweloperów.
                  Doświadczenie w pracy przy obiektach zabytkowych i projektach wymagających
                  koordynacji z konserwatorem zabytków.
                </p>
                <ul className="space-y-3">
                  {DEWELOPERZY_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="text-gold shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs text-white/30">
                    Rewitalizacje zabytkowe · Kraków · Katowice · Krynica-Zdrój
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── DEWELOPERZY — GŁÓWNE PROJEKTY ────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Deweloperzy</p>
            <h2 className="section-title">Realizacje inwestycyjne.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-12">
              Budynki wielorodzinne, rewitalizacje kamienic i obiektów zabytkowych.
              Projekty realizowane we współpracy z partnerem projektowym Idea Development.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[rakowicka, katowice, krynica].map((project, i) =>
              project ? (
                <FadeIn key={project.slug} delay={i * 80}>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block bg-stone-50 border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-widest text-gold mb-1">
                        {project.location} · {project.year}
                      </p>
                      <h3 className="font-display text-xl text-navy mb-2">{project.title}</h3>
                      <p className="text-xs text-gray-400">{project.role}</p>
                    </div>
                  </Link>
                </FadeIn>
              ) : null
            )}
          </div>

          {/* Sprzedaż mieszkań */}
          <FadeIn>
            <div className="mt-1 bg-stone-900 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Mieszkania na sprzedaż</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  W ramach obu inwestycji prowadzimy sprzedaż mieszkań bezpośrednio przez pracownię —
                  bez pośredników, z pełną wiedzą projektową o każdym lokalu.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: 'Willa Złocień — Krynica', href: '/willa-zlocien' },
                  { label: 'Pawła 12 — Katowice', href: '/pawla-12' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs text-gold border border-gold/40 hover:border-gold hover:text-white transition-colors px-4 py-2 tracking-widest uppercase"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DEWELOPERZY — KONCEPCJE I ANALIZY ────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Deweloperzy</p>
            <h2 className="section-title">Koncepcje i analizy inwestycyjne.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-12">
              Projekty koncepcyjne, analizy chłonności działek i studia wykonalności
              realizowane na potrzeby decyzji inwestycyjnych.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 bg-stone-200">
            {[analiza1, analiza2, analiza3].map((a, i) =>
              a ? (
                <FadeIn key={a.slug} delay={(i + 1) * 80}>
                  <div className="bg-white p-5 h-full">
                    <div className="aspect-[4/3] bg-stone-100 border border-dashed border-stone-300 flex flex-col items-center justify-center mb-4 gap-2">
                      <p className="font-display text-base text-navy">{a.title}</p>
                      <p className="text-xs text-gold">— opis wkrótce —</p>
                    </div>
                    <p className="font-display text-base text-navy mb-1">{a.title}</p>
                    <p className="text-xs text-gray-400">{a.role}</p>
                  </div>
                </FadeIn>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* ── KLIENCI INDYWIDUALNI ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Klienci indywidualni</p>
            <h2 className="section-title">Domy i rewitalizacje.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-12">
              Projekty dla prywatnych inwestorów — od rewitalizacji starego domu po
              nowoczesny dom prefabrykowany. Każdy na konkretną działkę i konkretne potrzeby.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {[poludnie, eastGrafton, domyPrefab].map((project, i) =>
              project ? (
                <FadeIn key={project.slug} delay={i * 80}>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block bg-stone-50 border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-8">
                      <p className="text-xs uppercase tracking-widest text-gold mb-1">
                        {project.location} · {project.year}
                      </p>
                      <h3 className="font-display text-2xl text-navy mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-400">{project.role}</p>
                    </div>
                  </Link>
                </FadeIn>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* ── INNE ─────────────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Inne realizacje</p>
            <h2 className="section-title">Budynki usługowe i użyteczności publicznej.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-16">
              Elewacje budynków, obiekty edukacyjne, muzea i domy drewniane —
              projekty spoza głównych kategorii portfolio.
            </p>
          </FadeIn>

          {/* Elewacje */}
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Elewacje</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-12">
            {grandHotel && (
              <FadeIn delay={0}>
                <Link
                  href={`/portfolio/${grandHotel.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={grandHotel.images[0]}
                      alt={grandHotel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{grandHotel.location} · {grandHotel.year}</p>
                    <h3 className="font-display text-xl text-navy mb-1">{grandHotel.title}</h3>
                    <p className="text-xs text-gray-400">{grandHotel.role}</p>
                  </div>
                </Link>
              </FadeIn>
            )}
            {nycElewacja && (
              <FadeIn delay={80}>
                <Link
                  href={`/portfolio/${nycElewacja.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={nycElewacja.images[0]}
                      alt={nycElewacja.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{nycElewacja.location} · {nycElewacja.year}</p>
                    <h3 className="font-display text-xl text-navy mb-1">{nycElewacja.title}</h3>
                    <p className="text-xs text-gray-400">{nycElewacja.role}</p>
                  </div>
                </Link>
              </FadeIn>
            )}
          </div>

          {/* Szkoły i muzea */}
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Szkoły i muzea</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-12">
            {szkolaKrosno && (
              <FadeIn delay={0}>
                <Link
                  href={`/portfolio/${szkolaKrosno.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={szkolaKrosno.images[0]}
                      alt={szkolaKrosno.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{szkolaKrosno.location} · {szkolaKrosno.year}</p>
                    <h3 className="font-display text-xl text-navy mb-1">{szkolaKrosno.title}</h3>
                    <p className="text-xs text-gray-400">{szkolaKrosno.role}</p>
                  </div>
                </Link>
              </FadeIn>
            )}
            {szkolaModliniczka && (
              <FadeIn delay={80}>
                <Link
                  href={`/portfolio/${szkolaModliniczka.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={szkolaModliniczka.images[0]}
                      alt={szkolaModliniczka.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{szkolaModliniczka.location} · {szkolaModliniczka.year}</p>
                    <h3 className="font-display text-xl text-navy mb-1">{szkolaModliniczka.title}</h3>
                    <p className="text-xs text-gray-400">{szkolaModliniczka.role}</p>
                  </div>
                </Link>
              </FadeIn>
            )}
            {muzeum && (
              <FadeIn delay={160}>
                <Link
                  href={`/portfolio/${muzeum.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={muzeum.images[0]}
                      alt={muzeum.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{muzeum.location} · {muzeum.year}</p>
                    <h3 className="font-display text-xl text-navy mb-1">{muzeum.title}</h3>
                    <p className="text-xs text-gray-400">{muzeum.role}</p>
                  </div>
                </Link>
              </FadeIn>
            )}
          </div>

          {/* Domy prefabrykowane */}
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Domy prefabrykowane i systemowe</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[domPrefab1, domPrefab2, domPrefab3].map((p, i) => p && (
              <FadeIn key={p.slug} delay={i * 80}>
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={p.images[0]}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{p.year}</p>
                    <h3 className="font-display text-xl text-navy mb-1">{p.title}</h3>
                    <p className="text-xs text-gray-400">{p.role}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOMY SZEREGOWE ───────────────────────────────── */}
      {domySzeregowe && (
        <FadeIn>
          <section className="py-24 bg-white border-t border-stone-100">
            <div className="container-site">
              <FadeIn>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Zabudowa szeregowa</p>
                <h2 className="section-title">Domy szeregowe.</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-12">
                  Projekt serii domów jednorodzinnych w zabudowie bliźniaczej — optymalizacja
                  pod kątem funkcji, kosztów i atrakcyjności dla nabywców.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-2xl">
                <FadeIn delay={0}>
                  <Link
                    href={`/portfolio/${domySzeregowe.slug}`}
                    className="group block bg-stone-50 border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                      <Image
                        src={domySzeregowe.images[0]}
                        alt={domySzeregowe.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-widest text-gold mb-1">
                        {domySzeregowe.location} · {domySzeregowe.year}
                      </p>
                      <h3 className="font-display text-xl text-navy mb-1">{domySzeregowe.title}</h3>
                      <p className="text-xs text-gray-400">{domySzeregowe.role}</p>
                    </div>
                  </Link>
                </FadeIn>
              </div>
            </div>
          </section>
        </FadeIn>
      )}

      {/* Blog */}
      <section className="py-16 bg-stone-50">
        <div className="container-site">
          <p className="text-xs uppercase tracking-widest text-[#A97900] mb-3">Z bloga</p>
          <h2 className="font-display text-2xl text-[#1b222e] mb-8">Artykuły o architekturze</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { slug: 'rakowicka-15a-plomba-architektoniczna', title: 'Rakowicka 15A — jak zaprojektować plombę architektoniczną w Krakowie', cat: 'Architektura' },
              { slug: 'rewitalizacja-zabytkow-jak-to-dziala', title: 'Rewitalizacja obiektów zabytkowych — co musisz wiedzieć przed zakupem', cat: 'Architektura' },
              { slug: 'jak-zaczac-projekt-architektoniczny', title: 'Jak zacząć projekt architektoniczny — od działki do pozwolenia', cat: 'Architektura' },
            ].map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="group bg-white p-6 border border-stone-200 hover:border-[#A97900] transition-colors">
                <p className="text-xs uppercase tracking-widest text-[#A97900] mb-2">{post.cat}</p>
                <h3 className="font-display text-base text-[#1b222e] group-hover:text-[#A97900] transition-colors leading-snug">{post.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Masz projekt budowlany?"
        description="Chętnie ocenimy możliwości i przygotujemy wstępną koncepcję."
      />
    </>
  )
}
