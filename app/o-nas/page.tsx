import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'O pracowni — CHD Architekci | Kraków',
  description:
    'CHD Architekci — pracownia z Krakowa z ponad 20-letnim doświadczeniem. Architektura, projektowanie wnętrz i usługi B2B 3D dla klientów w Polsce, UK i USA.',
  alternates: { canonical: `${SITE_URL}/o-nas` },
  openGraph: {
    title: 'O pracowni — CHD Architekci',
    url: `${SITE_URL}/o-nas`,
  },
}

const DOMAINS = [
  {
    href: '/architektura',
    label: 'Architektura',
    desc: 'Budynki mieszkalne, rewitalizacje zabytkowe, inwestycje deweloperskie. Projekt i nadzór autorski.',
    items: ['Domy i budynki wielorodzinne', 'Rewitalizacje i zabytki', 'Współpraca z deweloperami'],
  },
  {
    href: '/wnetrza',
    label: 'Wnętrza',
    desc: 'Mieszkania, domy, restauracje i lokale usługowe — od koncepcji po generalne wykonawstwo.',
    items: ['Mieszkania i domy prywatne', 'Gastronomia i lokale', 'Generalne wykonawstwo'],
  },
  {
    href: '/b2b-3d',
    label: 'B2B / 3D',
    desc: 'Modele 3D, dokumentacja wykonawcza i CGI dla biur architektonicznych w Polsce, UK i USA.',
    items: ['Modelowanie 3D i BIM', 'Dokumentacja wykonawcza', 'Wizualizacje CGI'],
  },
]

const FOR_WHO = [
  {
    label: 'Klient indywidualny',
    desc:
      'Inwestujesz w dom, mieszkanie lub lokal. Szukasz pracowni, która przeprowadzi cię przez cały proces — od pomysłu do kluczy — bez rozproszenia odpowiedzialności.',
  },
  {
    label: 'Inwestor zagraniczny',
    desc:
      'Kupujesz nieruchomość w Polsce będąc za granicą. Reprezentujemy cię na miejscu: projekt, nadzór, koordynacja wykonawców, odbiory — jeden kontakt.',
  },
  {
    label: 'Biuro architektoniczne',
    desc:
      'Potrzebujesz zewnętrznego wsparcia przy modelowaniu 3D, dokumentacji wykonawczej lub CGI. Wchodzimy w twój workflow bez tarcia.',
  },
]

const HIGHLIGHTS = [
  { image: '/images/kurkaWodna.webp', title: 'Kurka Wodna', meta: 'Gastronomia · Kraków 2014', href: '/portfolio/kurka-wodna' },
  { image: '/images/rakowicka151.webp', title: 'Pi i Sigma', meta: 'Architektura · Kraków 2016', href: '/portfolio/pi-i-sigma-rakowicka' },
  { image: '/images/ben/VIEW3.webp', title: 'California Villa', meta: 'B2B · California 2022–2024', href: '/portfolio/california-villa' },
  { image: '/images/nystair1.webp', title: 'Eliptical Duplex Stair', meta: 'B2B · NYC 2023', href: '/portfolio/eliptical-duplex-stair-nyc' },
]

export default function ONasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'O pracowni', href: '/o-nas' },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/leszek/pawla12a.webp"
            alt="CHD Architekci — pracownia"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container-site relative z-10 pt-36 pb-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">O pracowni</p>
            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6 max-w-3xl">
              Architektura, wnętrza i B2B — w jednym miejscu.
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed">
              Pracownia z Krakowa z ponad 20-letnim doświadczeniem. Projekty dla klientów
              indywidualnych, inwestorów zagranicznych i biur architektonicznych w Polsce, UK i USA.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <FadeIn>
        <section className="py-12 bg-gold">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: '20+', label: 'lat doświadczenia' },
                { stat: 'PL · UK · USA', label: 'rynki działalności' },
                { stat: '3', label: 'dziedziny — jeden zespół' },
                { stat: 'Kraków', label: 'siedziba pracowni' },
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

      {/* ── KIM JESTEŚMY ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Kim jesteśmy</p>
              <h2 className="font-display text-4xl text-navy mb-0 leading-tight">
                CHD Architekci
              </h2>
            </FadeIn>
            <FadeIn delay={80}>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Pracownia działa od ponad dwóch dekad i przez ten czas wypracowała jeden model
                  pracy: inwestor dostaje jeden zespół i jeden kontakt — niezależnie od tego czy
                  projekt dotyczy wnętrza mieszkania, rewitalizacji kamienicy czy dokumentacji
                  wykonawczej dla nowojorskiego developera.
                </p>
                <p>
                  Łączymy tradycyjne projektowanie architektoniczne z pracą w środowiskach
                  cyfrowych — Rhino3D, Grasshopper, BIM. Dzięki temu wchodzimy równie sprawnie
                  w projekty realizacyjne w Krakowie co w workflow biur z Londynu czy Chicago.
                </p>
                <p>
                  Część projektów realizujemy samodzielnie, część we współpracy z wyspecjalizowanymi
                  partnerami (Idea Development w architekturze, MA Architecture w UK).
                  W obu przypadkach CHD jest punktem kontaktu i odpowiedzialności.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TRZY DZIEDZINY ───────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Czym się zajmujemy</p>
            <h2 className="font-display text-4xl text-navy mb-16">Trzy dziedziny, jeden zespół.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
            {DOMAINS.map((d, i) => (
              <FadeIn key={d.label} delay={i * 80}>
                <Link href={d.href} className="group block bg-white p-10 h-full hover:bg-stone-50 transition-colors">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{`0${i + 1}`}</p>
                  <h3 className="font-display text-2xl text-navy mb-4 group-hover:text-gold transition-colors">{d.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{d.desc}</p>
                  <ul className="space-y-2">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xs text-gray-500">
                        <span className="text-gold shrink-0 mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DLA KOGO ─────────────────────────────────────── */}
      <section className="py-24 bg-navy">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Dla kogo pracujemy</p>
            <h2 className="font-display text-4xl text-white mb-16">Trzy typy klientów.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {FOR_WHO.map((item, i) => (
              <FadeIn key={item.label} delay={i * 80}>
                <div className="bg-navy p-10 h-full">
                  <p className="font-display text-3xl text-gold mb-1 leading-none">{`0${i + 1}`}</p>
                  <h3 className="font-display text-xl text-white mb-4 mt-3">{item.label}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WYBRANE REALIZACJE ───────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Wybrane realizacje</p>
            <h2 className="font-display text-4xl text-navy mb-16">Projekty mówią same za siebie.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
            {HIGHLIGHTS.map((p, i) => (
              <FadeIn key={p.href} delay={i * 60}>
                <Link href={p.href} className="group block overflow-hidden bg-white">
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.15em] text-gold mb-1">{p.meta}</p>
                    <h3 className="font-display text-lg text-navy">{p.title}</h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 mt-px">
            {[
              { href: '/portfolio/pawla-12-katowice', image: '/images/leszek/pawla12a.webp', title: 'Pawła 12, Katowice', meta: 'Rewitalizacja zabytkowa · 2024' },
              { href: '/portfolio/krynica-zdroj-willa-zlocien', image: '/images/leszek/krynica2.webp', title: 'Willa Złocień, Krynica-Zdrój', meta: 'Rewitalizacja energooszczędna · 2022' },
            ].map((p, i) => (
              <FadeIn key={p.href} delay={i * 80}>
                <Link href={p.href} className="group flex items-center gap-6 bg-white p-6 hover:bg-stone-50 transition-colors overflow-hidden">
                  <div className="relative w-24 h-16 shrink-0 overflow-hidden bg-stone-100">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="96px" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-gold mb-1">{p.meta}</p>
                    <h3 className="font-display text-base text-navy group-hover:text-gold transition-colors">{p.title}</h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-10 text-center">
              <Link
                href="/portfolio"
                className="border border-navy text-navy hover:bg-navy hover:text-white transition-colors px-8 py-3 text-xs tracking-widest uppercase inline-flex items-center"
              >
                Całe portfolio →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA
        title="Porozmawiajmy o projekcie."
        description="Napisz do nas."
      />
    </>
  )
}
