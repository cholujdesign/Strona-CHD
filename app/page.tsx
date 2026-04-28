import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import HeroVideo from '@/components/ui/HeroVideo'
import { LocalBusinessJsonLd, OrganizationJsonLd } from '@/components/seo/JsonLd'
import { getFeaturedProjects } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Chołuj Design — Architektura, Wnętrza, B2B | Kraków',
  description:
    'Pracownia projektowa z Krakowa. Architektura, projektowanie wnętrz i B2B 3D — od koncepcji po realizację. Projekty w Polsce, UK i USA.',
  alternates: { canonical: SITE_URL, languages: { pl: SITE_URL, en: `${SITE_URL}/en` } },
  openGraph: {
    title: 'Chołuj Design — Architektura, Wnętrza, B2B | Kraków',
    url: SITE_URL,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'CHD Architekci — pracownia architektoniczna Kraków' }],
  },
}

const blocks = [
  {
    slug: 'eliptical-duplex-stair-nyc',
    image: '/images/nystair1.webp',
    title: 'Eliptical Duplex Stair',
    meta: '11 West 57th, NYC · 2023',
    points: ['B2B', 'Projekt wykonawczy', 'Modelowanie 3D'],
    description:
      'Projekt wykonawczy i model 3D eliptycznych schodów w jednym z najwyższych budynków mieszkalnych na świecie — 11 West 57th w Nowym Jorku.',
  },
  {
    slug: 'sycamore',
    image: '/images/ben/VIEW3.webp',
    title: 'Sycamore',
    meta: 'Chicago, IL · 2022–2024',
    points: ['B2B', 'Modelowanie 3D', 'Dokumentacja', 'CGI'],
    description:
      'Trzyletnia współpraca przy prestiżowej inwestycji mieszkaniowej w Chicago. Modele 3D, dokumentacja wykonawcza schodów i elementów stalowych, wizualizacje CGI.',
  },
  {
    slug: 'kurka-wodna',
    image: '/images/kurkaWodna.webp',
    title: 'Kurka Wodna',
    meta: 'Kanonicza 15, Kraków · 2014',
    points: ['Wnętrza', 'Projekt autorski', 'Gastronomia'],
    description:
      'Autorski projekt wnętrz restauracji w sercu Krakowa — jeden z pierwszych i najbardziej rozpoznawalnych projektów studio. Kamienica przy Kanoniczej.',
  },
  {
    slug: 'pawla-12-katowice',
    image: '/images/leszek/pawla12a.webp',
    title: 'Pawła 12, Katowice',
    meta: 'Katowice · 2024',
    points: ['Architektura', 'Rewitalizacja', 'Zabytek'],
    description:
      'Rewitalizacja zabytkowej kamienicy w centrum Katowic. Projekt w trakcie realizacji — modernizacja z zachowaniem historycznego charakteru obiektu.',
  },
  {
    slug: 'uzdrowisko-bistro',
    image: '/images/uzdrowiskoBistro.webp',
    title: 'Uzdrowisko Bistro',
    meta: 'Warszawa · 2023',
    points: ['Wnętrza', 'Gastronomia', 'Projekt autorski'],
    description:
      'Projekt wnętrz restauracyjnych w szpitalach w Warszawie. Funkcjonalna estetyka bistro — ciepłe wnętrze w trudnym instytucjonalnym kontekście.',
  },
]

const DOMAINS = [
  {
    href: '/architektura',
    label: 'Architektura',
    tagline: 'Budynki, które służą.',
    desc: 'Domy jednorodzinne, budynki wielorodzinne, rewitalizacje zabytkowe. Dla klientów indywidualnych i deweloperów.',
    points: ['Projekty indywidualne', 'Inwestycje deweloperskie', 'Rewitalizacje zabytkowe'],
  },
  {
    href: '/wnetrza',
    label: 'Wnętrza',
    tagline: 'Przestrzenie, które opowiadają.',
    desc: 'Mieszkania, wille, restauracje — projekt autorski z możliwością generalnego wykonawstwa. Jeden punkt kontaktu od koncepcji po klucze.',
    points: ['Mieszkania i domy', 'Lokale usługowe', 'Gastronomia'],
  },
  {
    href: '/b2b-3d',
    label: 'B2B / 3D',
    tagline: 'Narzędzia dla profesjonalistów.',
    desc: 'Modele 3D, dokumentacja wykonawcza i CGI dla biur architektonicznych w Polsce, UK i USA. Wchodzimy w istniejący workflow.',
    points: ['Modele 3D i dokumentacja BIM', 'CGI · animacje · VR', 'USA · UK · Polska'],
  },
]

const PROCESS = [
  { step: '01', title: 'Koncepcja', desc: 'Szkic, analiza, moodboard, feasibility, research.' },
  { step: '02', title: 'Projekt', desc: 'Dokumentacja techniczna, BIM.' },
  { step: '03', title: 'Komunikacja', desc: 'CGI, animacje, VR.' },
  { step: '04', title: 'Realizacja', desc: 'Nadzór, generalne wykonawstwo.' },
  { step: '05', title: 'Sprzedaż', desc: 'Marketing, strona, materiały.' },
]

export default function HomePage() {
  const featured = getFeaturedProjects()
  const featuredSlugs = new Set(featured.map((p) => p.slug))
  const visibleBlocks = blocks.filter((b) => featuredSlugs.has(b.slug))

  return (
    <>
      <LocalBusinessJsonLd />
      <OrganizationJsonLd />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden bg-stone-900">
        <HeroVideo />
        <div className="absolute inset-0 bg-stone-900/50" />
        {/* gradient for navbar readability */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="block w-fit mx-auto text-[5rem] md:text-[8rem] lg:text-[10rem] text-white leading-none tracking-[0.12em] mb-6 border border-white/60 pl-[calc(0.12em+1rem)] pr-4 md:pl-[calc(0.12em+1.5rem)] md:pr-6 lg:pl-[calc(0.12em+2rem)] lg:pr-8 pt-8 md:pt-12 lg:pt-14 pb-2"
            style={{ fontFamily: '"Nanum Myeongjo", Georgia, serif', fontWeight: 400 }}
          >
            CHD
          </h1>
          <p className="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase mb-8">
            Architektura&nbsp;&nbsp;·&nbsp;&nbsp;Wnętrza&nbsp;&nbsp;·&nbsp;&nbsp;B2B 3D
          </p>
          <div className="bg-black/20 backdrop-blur-sm px-8 py-6 max-w-sm md:max-w-md">
            <p className="text-white/75 text-sm leading-relaxed mb-8">
              Pracownia projektowa z Krakowa. Od projektów wnętrz
              w Krakowie po współpracę przy projektach w 111W57
              w Nowym Jorku i Chicago.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/zakres" className="btn-primary text-xs">
                Zakres usług
              </Link>
              <Link
                href="/portfolio"
                className="border border-white/30 text-white/70 hover:bg-white/10 transition-colors px-6 py-3 text-xs tracking-widest uppercase"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-white/25 text-[10px] tracking-[0.25em] uppercase">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <FadeIn>
        <section className="py-10 bg-gold">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: '20+', label: 'lat doświadczenia' },
                { stat: 'PL · UK · USA', label: 'rynki' },
                { stat: 'Arch · Int · B2B', label: 'szerokie spektrum doświadczenia' },
                { stat: '3', label: 'dziedziny — jeden zespół' },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <p className="font-display text-xl md:text-2xl text-white leading-tight">{stat}</p>
                  <p className="text-[11px] text-white/60 mt-1 uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 3 DZIEDZINY ───────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Co robimy</p>
            <h2 className="section-title max-w-xl">Trzy specjalizacje.<br />Jeden zintegrowany proces.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mt-14">
            <FadeIn delay={0}>
              <div className="bg-white border border-stone-200 p-10 h-full flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Architektura</p>
                <h3 className="font-display text-2xl text-navy mb-3">Budynki,<br/>które służą.</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-1">{DOMAINS[0].desc}</p>
                <ul className="space-y-2 mb-8">
                  {DOMAINS[0].points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-gray-600">
                      <span className="text-gold shrink-0">—</span>{pt}
                    </li>
                  ))}
                </ul>
                <Link href="/architektura" className="text-xs uppercase tracking-widest text-gold hover:text-navy transition-colors">
                  Architektura →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <div className="bg-stone-100 p-10 h-full flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Wnętrza</p>
                <h3 className="font-display text-2xl text-navy mb-3">Przestrzenie,<br/>które opowiadają.</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-1">{DOMAINS[1].desc}</p>
                <ul className="space-y-2 mb-8">
                  {DOMAINS[1].points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-gray-700">
                      <span className="text-gold shrink-0">—</span>{pt}
                    </li>
                  ))}
                </ul>
                <Link href="/wnetrza" className="text-xs uppercase tracking-widest text-gold hover:text-navy transition-colors">
                  Wnętrza →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <div className="bg-stone-900 p-10 h-full flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">B2B / 3D</p>
                <h3 className="font-display text-2xl text-white mb-3">Narzędzia<br/>dla profesjonalistów.</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8 flex-1">{DOMAINS[2].desc}</p>
                <ul className="space-y-2 mb-8">
                  {DOMAINS[2].points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-white/70">
                      <span className="text-gold shrink-0">—</span>{pt}
                    </li>
                  ))}
                </ul>
                <Link href="/b2b-3d" className="text-xs uppercase tracking-widest text-gold hover:text-white transition-colors">
                  Współpraca B2B →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PROJECT BLOCKS ────────────────────────────────── */}
      <div className="bg-white">
        {visibleBlocks.map((block, i) => (
          <FadeIn key={block.slug} className="border-b border-stone-100 last:border-b-0">
            <article className="pt-20 pb-16 md:pt-28 md:pb-20">
              <div className="container-site">
                <div className="relative w-full aspect-[16/9] bg-stone-100 overflow-hidden">
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 100vw"
                    priority={i === 0}
                  />
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-6 md:gap-16">
                  <FadeIn delay={80}>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
                      {block.title}
                    </h2>
                    <p className="text-xs text-gray-400 mt-2 tracking-wide">{block.meta}</p>
                  </FadeIn>

                  <FadeIn delay={160}>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-4">
                      {block.points.map((p) => (
                        <span key={p} className="text-[11px] uppercase tracking-widest text-gray-400">
                          {p}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
                      {block.description}
                    </p>
                    <Link
                      href={`/portfolio/${block.slug}`}
                      className="inline-block mt-6 text-[11px] uppercase tracking-widest text-gold hover:underline"
                    >
                      Zobacz projekt →
                    </Link>
                  </FadeIn>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      {/* ── PROCESS STRIP ─────────────────────────────────── */}
      <FadeIn>
        <section className="py-20 bg-stone-900">
          <div className="container-site">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Jak pracujemy</p>
                <h2 className="font-display text-3xl text-white">Od szkicu do sprzedaży.</h2>
              </div>
              <Link
                href="/zakres"
                className="text-xs uppercase tracking-widest text-gold hover:text-white transition-colors shrink-0"
              >
                Pełny zakres usług →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10">
              {PROCESS.map((pt) => (
                <div key={pt.step} className="bg-stone-900 p-6">
                  <p className="font-display text-2xl text-gold mb-3 leading-none">{pt.step}</p>
                  <p className="font-display text-base text-white mb-1">{pt.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── O STUDIO ──────────────────────────────────────── */}
      <FadeIn>
        <section className="py-24 bg-white border-t border-stone-100">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              <div>
                <p className="section-subtitle">Studio</p>
                <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-6">
                  Chołuj Design
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Pracownia projektowa z Krakowa działająca od ponad 20 lat. Projektujemy
                  w trzech dziedzinach — architektura, wnętrza i zaawansowane usługi 3D dla
                  klientów B2B w Polsce, Wielkiej Brytanii i Stanach Zjednoczonych.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Nasze podejście: wchodzimy w materię projektu. Prototypy, obecność na budowie,
                  własne skrypty parametryczne gdy geometria wymaga precyzji — bez gotowych
                  schematów, bez podwykonawców których nie znamy.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mb-10">
                  Obsługujemy też zagranicznych inwestorów kupujących nieruchomości w Polsce —
                  projekt, realizacja, reprezentacja i sprzedaż lokali w jednym miejscu.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/kontakt" className="btn-primary">
                    Skontaktuj się
                  </Link>
                  <Link
                    href="/portfolio"
                    className="border border-stone-300 text-navy hover:border-navy transition-colors px-6 py-3 text-xs tracking-widest uppercase"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>

              <div className="space-y-1">
                {[
                  {
                    label: 'Polska',
                    text: 'Kraków jako baza. Projekty architektoniczne i wnętrz w całym kraju. Stała współpraca z Idea Development.',
                  },
                  {
                    label: 'Wielka Brytania',
                    text: 'Aktywna współpraca z MA Architecture, Brighton. Projekty w standardzie UK Building Regulations.',
                  },
                  {
                    label: 'USA',
                    text: 'Realizacje w Nowym Jorku (11 West 57th) i Chicago (Sycamore). Workflow generalnych wykonawców.',
                  },
                ].map((item) => (
                  <div key={item.label} className="bg-stone-50 p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">{item.label}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </FadeIn>
    </>
  )
}
