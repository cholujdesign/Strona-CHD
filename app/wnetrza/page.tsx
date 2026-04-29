import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import ProjectCard from '@/components/ui/ProjectCard'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { getProjectsByCategory, getProjectBySlug } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Wnętrza — projekty mieszkań, lokali, gastronomii | Kraków',
  description:
    'Projekty wnętrz mieszkań, willi, lokali gastronomicznych i przestrzeni publicznych. Autorskie projekty i generalne wykonawstwo. CHD Architekci — Kraków.',
  alternates: { canonical: `${SITE_URL}/wnetrza`, languages: { pl: `${SITE_URL}/wnetrza`, en: `${SITE_URL}/en/interiors` } },
  openGraph: {
    title: 'Wnętrza — CHD Architekci',
    url: `${SITE_URL}/wnetrza`,
    images: [{ url: '/images/kurkaWodna.webp', width: 1920, height: 1080, alt: 'Wnętrza CHD — Kurka Wodna, Kraków' }],
  },
}

const KURKA_STATS = [
  { label: 'Rok realizacji', value: '2014' },
  { label: 'Lokalizacja', value: 'Kanonicza 15, Kraków' },
  { label: 'Typ obiektu', value: 'Restauracja' },
  { label: 'Zakres', value: 'Projekt + realizacja' },
]

const KURKA_SCOPE = [
  'Koncepcja przestrzenna i układ funkcjonalny',
  'Projekt wnętrz i dobór materiałów',
  'Meble i elementy na wymiar',
  'Oświetlenie dekoracyjne i techniczne',
  'Nadzór autorski nad realizacją',
]

const SYCAMORE_STATS = [
  { label: 'Rok realizacji', value: '2022–2024' },
  { label: 'Lokalizacja', value: 'California, USA' },
  { label: 'Typ projektu', value: 'B2B / Modelowanie 3D' },
  { label: 'Zakres', value: 'Dokumentacja + CGI' },
]

const SYCAMORE_SCOPE = [
  'Modele 3D elementów architektonicznych',
  'Dokumentacja wykonawcza schodów i balustrad',
  'Wizualizacje CGI dla inwestora',
  'Skrypty parametryczne Grasshopper',
  'Koordynacja z fabrykatorem stali',
]

const WWA_PROCESS = [
  {
    step: '01',
    title: 'Koncepcja',
    desc: 'Analiza potrzeb, styl życia, moodboard. Wstępny układ funkcjonalny i dobór kierunku stylistycznego.',
  },
  {
    step: '02',
    title: 'Projekt wykonawczy',
    desc: 'Rysunki techniczne, specyfikacje materiałów, projekt instalacji elektrycznej i sanitarnej.',
  },
  {
    step: '03',
    title: 'Nadzór autorski',
    desc: 'Obecność na budowie, weryfikacja zgodności z projektem, bieżące decyzje materiałowe i techniczne.',
  },
  {
    step: '04',
    title: 'Generalne wykonawstwo',
    desc: 'Jeden kontrahent dla inwestora. Koordynacja wszystkich branż — od wyburzeń po wykończenie.',
  },
  {
    step: '05',
    title: 'Prowadzenie budowy',
    desc: 'Harmonogram prac, rozliczenia z podwykonawcami, odbiory częściowe i końcowy protokół przekazania.',
  },
]

export default function WnetrszaPage() {
  const all = getProjectsByCategory('wnetrza')

  const kurkaWodna  = getProjectBySlug('kurka-wodna')
  const mieszkanieWwa = getProjectBySlug('mieszkanie-wwa')
  const sycamore    = getProjectBySlug('california-villa')
  const nycStair    = getProjectBySlug('eliptical-duplex-stair-nyc')
  const uzdrowisko  = getProjectBySlug('uzdrowisko-bistro')
  const dzienDobry  = getProjectBySlug('dzien-dobry-cafe')
  const m15a        = getProjectBySlug('mieszkanie-15a')
  const m15b        = getProjectBySlug('mieszkanie-15b')
  const m15c        = getProjectBySlug('mieszkanie-15c')

  const caseStudySlugs = new Set([
    'kurka-wodna', 'mieszkanie-wwa', 'uzdrowisko-bistro', 'dzien-dobry-cafe',
    'mieszkanie-15a', 'mieszkanie-15b', 'mieszkanie-15c',
  ])
  const remaining = all.filter((p) => !caseStudySlugs.has(p.slug))

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Wnętrza', href: '/wnetrza' },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kurkaWodna.webp"
            alt="Wnętrza CHD — Kurka Wodna, Kraków"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="container-site relative z-10 pt-32 pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Projektowanie wnętrz</p>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6 max-w-3xl">
            Wnętrza, które opowiadają historię.
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-10">
            Projekty autorskie z myślą o konkretnym człowieku i konkretnym miejscu.
            Od kawiarni przy Kanoniczej po apartamenty w Nowym Jorku.
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
              Ponad <strong className="text-white">20 lat</strong> projektowania wnętrz w Krakowie i za granicą.
              Od restauracji przy <strong className="text-white">Kanoniczej</strong> po apartamenty
              w <strong className="text-white">111 West 57th, Nowy Jork</strong>.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── CASE STUDY: KURKA WODNA ──────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Case study — gastronomia</p>
            <h2 className="font-display text-4xl text-navy mb-2">Kurka Wodna</h2>
            <p className="text-sm text-gray-400 mb-10">Kanonicza 15, Kraków · 2014</p>
          </FadeIn>

          {/* Stats boxes */}
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 mb-10">
              {KURKA_STATS.map((s) => (
                <div key={s.label} className="bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-gold mb-2">{s.label}</p>
                  <p className="font-display text-lg text-navy leading-snug">{s.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <p className="text-gray-600 leading-relaxed mb-8">
                Jeden z pierwszych i najbardziej rozpoznawalnych projektów CHD. Autorska koncepcja wnętrz
                restauracji w sercu Krakowa — kamienica przy ul. Kanoniczej, charakter historyczny,
                nowoczesne podejście do przestrzeni gastronomicznej. Projekt łączy surowe detale ceglane
                z ciepłymi akcentami drewna i autorskim oświetleniem.
              </p>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Zakres prac</p>
              <ul className="space-y-3 mb-8">
                {KURKA_SCOPE.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-gold shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/portfolio/kurka-wodna" className="btn-primary">
                Zobacz pełny projekt →
              </Link>
            </FadeIn>

            <FadeIn delay={100}>
              {kurkaWodna && <ProjectCard project={kurkaWodna} size="large" />}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY: UZDROWISKO BISTRO + DZIEŃ DOBRY ──── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Gastronomia i przestrzenie publiczne</p>
            <h2 className="section-title">Wnętrza dla ludzi w ruchu.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-16">
              Restauracje, kawiarnie i bistro — projekty gdzie funkcjonalność i atmosfera muszą
              działać jednocześnie od rana do wieczora.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {uzdrowisko && (
              <FadeIn delay={0}>
                <Link
                  href="/portfolio/uzdrowisko-bistro"
                  className="group block bg-stone-50 border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={uzdrowisko.images[0]}
                      alt="Uzdrowisko Bistro — Warszawa"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Warszawa · 2023</p>
                    <h3 className="font-display text-2xl text-navy mb-3">Uzdrowisko Bistro</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Projekt wnętrz dla restauracji w szpitalach — Szpital Onkologiczny
                      i Szpital Uniwersytecki. Funkcjonalność z przyjazną atmosferą bistro.
                    </p>
                  </div>
                </Link>
              </FadeIn>
            )}

            {dzienDobry && (
              <FadeIn delay={80}>
                <Link
                  href="/portfolio/dzien-dobry-cafe"
                  className="group block bg-stone-50 border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={dzienDobry.images[0]}
                      alt="Dzień Dobry Cafe — Szpital Uniwersytecki Kraków"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Kraków · 2019</p>
                    <h3 className="font-display text-2xl text-navy mb-3">Dzień Dobry Cafe</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Kawiarnia w Szpitalu Uniwersyteckim w Krakowie. Projekt w trudnym
                      kontekście szpitalnym — ciepłe wnętrze, które odwraca uwagę od otoczenia.
                    </p>
                  </div>
                </Link>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY: MIESZKANIE WWA ────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Case study — od koncepcji po klucz</p>
            <h2 className="font-display text-4xl text-navy mb-2">Mieszkanie WWA</h2>
            <p className="text-sm text-gray-400 mb-10">Warszawa · 2022 · ok. 70 m²</p>
          </FadeIn>

          {/* Zdjęcia */}
          {mieszkanieWwa && (
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 mb-10">
                {mieszkanieWwa.images.slice(0, 2).map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <Image
                      src={src}
                      alt={`Mieszkanie WWA — widok ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Opis */}
          <FadeIn>
            <p className="text-gray-600 leading-relaxed max-w-2xl mb-12">
              Kompleksowa realizacja mieszkania w Warszawie — jeden projekt, jeden zespół, zero
              rozrzuconych odpowiedzialności. Inwestor dostał klucze, nie koordynację. 
            </p>
          </FadeIn>

          {/* Proces — poziomy flow */}
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Jak wyglądała współpraca</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-stone-200 mb-10">
              {WWA_PROCESS.map((pt) => (
                <div key={pt.step} className="bg-white p-6">
                  <p className="font-display text-3xl text-gold mb-3 leading-none">{pt.step}</p>
                  <p className="font-display text-base text-navy mb-2">{pt.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <Link href="/portfolio/mieszkanie-wwa" className="btn-primary">
              Zobacz projekt →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── CASE STUDY: SYCAMORE ─────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Case study — California, USA</p>
            <h2 className="font-display text-4xl text-navy mb-2">California Villa</h2>
            <p className="text-sm text-gray-400 mb-10">California, USA · 2022–2024</p>
          </FadeIn>

          {/* Stats boxes */}
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 mb-10">
              {SYCAMORE_STATS.map((s) => (
                <div key={s.label} className="bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-gold mb-2">{s.label}</p>
                  <p className="font-display text-lg text-navy leading-snug">{s.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <p className="text-gray-600 leading-relaxed mb-8">
                Trzyletnia współpraca przy prestiżowej inwestycji mieszkaniowej w Kalifornii.
                Szczegółowe modele 3D, dokumentacja wykonawcza elementów stalowych i schodów,
                wizualizacje CGI. Projekt wymagał precyzyjnego modelowania parametrycznego
                i pisania własnych skryptów Grasshopper dla niestandardowej geometrii.
              </p>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Zakres prac</p>
              <ul className="space-y-3 mb-8">
                {SYCAMORE_SCOPE.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-gold shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/portfolio/california-villa" className="btn-primary">
                Zobacz pełny projekt →
              </Link>
            </FadeIn>

            <FadeIn delay={100}>
              {sycamore && (
                <Link href="/portfolio/california-villa" className="group block overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src="/images/ben/ben8.webp"
                      alt="California Villa — California, USA"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </Link>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY: NYC STAIR ────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Case study — Nowy Jork, USA</p>
            <h2 className="font-display text-4xl text-navy mb-2">Eliptical Duplex Stair</h2>
            <p className="text-sm text-gray-400 mb-10">111 West 57th, Manhattan · 2023</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              {nycStair && (
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <Image
                    src={nycStair.images[0]}
                    alt="Eliptical Duplex Stair — 111 West 57th NYC"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
            </FadeIn>

            <FadeIn delay={100}>
              <p className="text-gray-600 leading-relaxed mb-8">
                Projekt wykonawczy i model 3D eliptycznych schodów dwupoziomowych w jednym z najwyższych
                budynków mieszkalnych na świecie. 111 West 57th — Manhattan.
                Geometria schodów wymagała precyzji co do milimetra.
              </p>
              <ul className="space-y-3 mb-8">
                {['Projekt wykonawczy schodów eliptycznych', 'Precyzyjny model 3D — Rhino3D', 'Koordynacja z fabrykatorem na miejscu', 'Dokumentacja zgodna z NYC codes'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-gold shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/portfolio/eliptical-duplex-stair-nyc" className="btn-primary">
                Zobacz projekt →
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── OBSŁUGA INWESTORÓW ZAGRANICZNYCH ────────────── */}
      <section className="py-20 bg-stone-900">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Dla inwestorów zagranicznych</p>
              <h2 className="font-display text-3xl text-white mb-4">
                Reprezentujemy zagranicznych inwestorów w Polsce.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Klienci z UK, USA i Europy Zachodniej kupujący nieruchomości w Polsce potrzebują
                kogoś, kto zadba o całość na miejscu. Projektujemy, nadzorujemy realizację,
                koordynujemy wykonawców, a w razie potrzeby — prowadzimy sprzedaż lokali.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Inwestor dostaje jeden kontakt i pewność, że jego inwestycja jest prowadzona
                z taką samą starannością jak gdyby był na miejscu.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="grid grid-cols-1 gap-px bg-white/10">
                {[
                  { label: 'Projekt i realizacja', desc: 'Projekt wnętrz, nadzór autorski, generalne wykonawstwo — kompleksowo.' },
                  { label: 'Reprezentacja inwestora', desc: 'Działamy jako pełnomocnik na miejscu. Koordynujemy urzędy, wykonawców i odbiory.' },
                  { label: 'Sprzedaż lokali', desc: 'Przygotowanie lokalu do sprzedaży, materiały, obsługa procesu dla właściciela.' },
                ].map((item) => (
                  <div key={item.label} className="bg-stone-900 p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">{item.label}</p>
                    <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/kontakt" className="btn-primary">
                  Skontaktuj się →
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Realizacje — Mieszkania Rakowicka 15 */}
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Przykładowe realizacje — Rakowicka 15A, Kraków 2014</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[m15a, m15b, m15c].map((project, i) =>
              project ? (
                <FadeIn key={project.slug} delay={i * 80}>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block overflow-hidden bg-stone-900"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-800">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-[0.2em] text-gold mb-1">Generalne wykonawstwo</p>
                      <h3 className="font-display text-lg text-white">{project.title}</h3>
                    </div>
                  </Link>
                </FadeIn>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* ── REALIZACJE ───────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Realizacje</p>
            <h2 className="section-title">Wybrane projekty wnętrz.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mb-16">
              Mieszkania, domy, hostele, restauracje — każdy projekt powstawał indywidualnie,
              z różnym zakresem: od samego projektu po pełne generalne wykonawstwo.
              Wspólny mianownik: konkretny człowiek, konkretne miejsce.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {remaining.map((project, i) => (
              <FadeIn key={project.slug} delay={(i % 3) * 80}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 text-center">
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

      {/* Blog */}
      <section className="py-16 bg-stone-50">
        <div className="container-site">
          <p className="text-xs uppercase tracking-widest text-[#A97900] mb-3">Z bloga</p>
          <h2 className="font-display text-2xl text-[#1b222e] mb-8">Artykuły o wnętrzach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { slug: 'gastronomia-w-zabytkowym-centrum-krakowa', title: 'Lokale gastronomiczne w zabytkowym centrum Krakowa — cztery realizacje', cat: 'Wnętrza' },
              { slug: 'gastronomia-w-szpitalu', title: 'Gastronomia w szpitalu — jak projektować bistro i kawiarnię dla pacjentów', cat: 'Wnętrza' },
              { slug: 'krynica-zdroj-willa-zlocien', title: 'Willa Złocień, Krynica-Zdrój — rewitalizacja z myślą o energooszczędności', cat: 'Architektura' },
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
        title="Masz pomysł na wnętrze?"
        description="Porozmawiajmy o Twoim projekcie."
      />
    </>
  )
}
