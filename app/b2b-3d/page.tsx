import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { getProjectsByCategory } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Współpraca B2B — modelowanie 3D, dokumentacja wykonawcza, CGI',
  description:
    'Współpracujemy z biurami architektonicznymi i firmami budowlanymi w Polsce, UK i USA. Szczegółowe modele 3D, dokumentacja wykonawcza BIM-ready i CGI. Rhino3D, Solidworks, Unreal Engine.',
  alternates: { canonical: `${SITE_URL}/b2b-3d`, languages: { pl: `${SITE_URL}/b2b-3d`, en: `${SITE_URL}/en/b2b-3d` } },
  openGraph: {
    title: 'Współpraca B2B — Chołuj Design',
    url: `${SITE_URL}/b2b-3d`,
    images: [{ url: '/images/nystair1.webp', width: 1920, height: 1080, alt: 'B2B 3D modelling — CHD, NYC Stair project' }],
  },
}

const TRACK_CGI = [
  'Fotorealistyczne wizualizacje CGI',
  'Animacje i filmy architektoniczne',
  'Panoramy 360°',
  'Wirtualne środowiska i spacery',
  'VR / real-time w Unreal Engine',
]

const TRACK_DOC = [
  'Precyzyjne modele 3D — 100% z dokumentacji',
  'Dokumentacja wykonawcza na budowę',
  'Import / export BIM (Revit, ArchiCAD)',
  'Formaty: .ifc .dwg .dxf .3dm .rvt .fbx',
  'Wykrywanie kolizji przed budową',
  'Własne skrypty Grasshopper / parametryka',
]

const MARKETS = [
  {
    region: 'USA',
    points: [
      'IBC, lokalne kody NYC, Chicago, LA',
      'Workflow generalnych wykonawców (GC)',
      'Shop drawings i submittal process',
      'Koordynacja z fabrykatorem stali / drewna',
      'Doświadczenie: 11 West 57th, Chicago Sycamore',
    ],
  },
  {
    region: 'Wielka Brytania',
    points: [
      'UK Building Regulations',
      'Planning permission documentation',
      'Współpraca z biurami architektonicznymi',
      'Standardy brytyjskiej dokumentacji wykonawczej',
      'Aktywna współpraca: MA Architecture, Brighton',
    ],
  },
  {
    region: 'Polska i Europa',
    points: [
      'Polskie warunki techniczne (WT)',
      'Normy europejskie EN / Eurokody',
      'Projekty budowlane i wykonawcze',
      'Współpraca z biurami i deweloperami',
      'Kraków jako baza operacyjna',
    ],
  },
]

const WORKFLOW_POINTS = [
  {
    title: 'Wchodzimy w istniejący workflow',
    body: 'Nie narzucamy własnego procesu. Dostosowujemy się do narzędzi i procedur klienta — Revit, BIM 360, Procore, Slack, Basecamp. Działamy jak przedłużenie wewnętrznego zespołu.',
  },
  {
    title: 'Iteracje i zmiany to standard',
    body: 'Duże projekty żyją — dokumentacja się zmienia, zakres rośnie. Przyzwyczailiśmy się do pracy na wielu iteracjach. Każda zmiana jest wyceniana i realizowana bez opóźnień całego projektu.',
  },
  {
    title: 'Transparentna komunikacja',
    body: 'Update postępów co 2–3 dni. Drobne korekty realizujemy bez osobnego zlecenia. Klient zawsze wie na jakim etapie jest praca i co zostało do zrobienia.',
  },
  {
    title: 'Długoterminowa relacja obniża koszty',
    body: 'Im dłużej współpracujemy, tym sprawniej przebiega każde kolejne zlecenie. Znamy standardy klienta, jego proces decyzyjny i preferencje — to przekłada się na szybkość i cenę.',
  },
]

export default function B2B3DPage() {
  const allB2b = getProjectsByCategory('b2b-3d')

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Współpraca B2B', href: '/b2b-3d' },
        ]}
      />

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/nystair1.webp"
            alt="Modelowanie 3D — 11 West 57th NYC"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container-site relative z-10 pt-32 pb-24">
          <p className="section-subtitle text-gold">Dla profesjonalistów</p>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6 max-w-3xl">
            Współpraca B2B
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-10">
            Modelowanie 3D, dokumentacja wykonawcza i CGI dla biur architektonicznych
            i firm budowlanych w Polsce, Wielkiej Brytanii i Stanach Zjednoczonych.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/kontakt" className="btn-primary">
              Zapytaj o wycenę
            </Link>
            <Link
              href="/portfolio"
              className="border border-white/40 text-white/80 hover:bg-white/10 transition-colors px-8 py-3 text-xs tracking-widest uppercase inline-flex items-center"
            >
              Zobacz projekty
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ───────────────────────────────── */}
      <FadeIn>
        <section className="py-16 bg-gold">
          <div className="container-site">
            <p className="text-white/90 text-center text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              Nasze modele trafiły na budowy apartamentów i willi w{' '}
              <strong className="text-white">Nowym Jorku, Chicago i Brighton</strong>{' '}
              wartych łącznie <strong className="text-white">setki milionów dolarów</strong>.
              Współpracujemy stale z biurami architektonicznymi w Polsce, UK i USA.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── DWA TRYBY WSPÓŁPRACY ────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Zakres usług</p>
            <h2 className="section-title max-w-2xl">Dwa tryby współpracy.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-16">
              W zależności od etapu projektu pracujemy w trybie sprzedażowo-koncepcyjnym
              lub wykonawczo-dokumentacyjnym — albo łączymy oba.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">

            {/* Track 1: CGI / Sprzedaż */}
            <FadeIn delay={0}>
              <div className="bg-white p-10 h-full border border-stone-200">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
                  Sprzedaż / Koncepcja
                </p>
                <h3 className="font-display text-3xl text-navy mb-3">
                  Wizualizacje, animacje, VR
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  Pomagamy sprzedać projekt zanim powstanie. Wizualizacje CGI, animacje
                  i środowiska VR w Unreal Engine — narzędzia, które przekonują inwestorów
                  i klientów końcowych lepiej niż jakikolwiek opis.
                </p>
                <ul className="space-y-3">
                  {TRACK_CGI.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-gold shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-stone-100">
                  <p className="text-xs text-gray-400">
                    Po zamówieniu pierwszego wideo nasi klienci już nie chcą wizualizacji — tylko animacje.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Track 2: Dokumentacja wykonawcza */}
            <FadeIn delay={120}>
              <div className="bg-stone-900 p-10 h-full">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
                  Projekt wykonawczy
                </p>
                <h3 className="font-display text-3xl text-white mb-3">
                  Dokumentacja i modele BIM
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8">
                  Robimy bardzo dokładne modele — w 100% bazujemy na dokumentacji.
                  Jeżeli w dokumentacji jest narysowana śruba, ta śruba pojawia się w modelu.
                  Dzięki tej precyzji wychodzimy z problemami, które ujawniłyby się dopiero na budowie.
                </p>
                <ul className="space-y-3">
                  {TRACK_DOC.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="text-gold shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs text-white/30">
                    Narzędzia: Rhino3D · Grasshopper · Solidworks · AutoCAD
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── RYNKI ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Znajomość rynku</p>
            <h2 className="section-title">Rozumiemy lokalne uwarunkowania.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-16">
              Każdy rynek ma własne przepisy, standardy dokumentacji i oczekiwania
              dotyczące procesu projektowego. Zdobyliśmy to doświadczenie pracując
              bezpośrednio z biurami i wykonawcami w USA, UK i Polsce.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {MARKETS.map((m, i) => (
              <FadeIn key={m.region} delay={i * 80}>
                <div className="bg-stone-50 p-8 h-full">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">{m.region}</p>
                  <ul className="space-y-3">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="text-gold shrink-0 mt-0.5">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCES WSPÓŁPRACY ───────────────────────────── */}
      <section className="py-24 bg-stone-900">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle text-gold">Jak pracujemy</p>
            <h2 className="font-display text-4xl text-white mb-4">Proces współpracy.</h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xl mb-16">
              Pracujemy jako zewnętrzny team projektowy — bez narzucania własnego procesu,
              bez biurokratycznych opóźnień. Wchodzimy w istniejący workflow klienta
              i realizujemy zlecenia tak, jakbyśmy byli częścią jego firmy.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {WORKFLOW_POINTS.map((pt, i) => (
              <FadeIn key={pt.title} delay={i * 60}>
                <div className="bg-stone-900 p-8">
                  <p className="font-display text-xl text-white mb-3">{pt.title}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{pt.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { stat: '8+', label: 'lat współpracy\nz biurami w UK i USA' },
                { stat: 'USA · UK · PL', label: 'rynki gdzie\nrealizowaliśmy projekty' },
                { stat: '100%', label: 'projektów zakończonych\nz sukcesem' },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <p className="font-display text-4xl text-gold mb-2">{stat}</p>
                  <p className="text-xs text-white/40 whitespace-pre-line leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── REALIZACJE ─────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Realizacje</p>
            <h2 className="section-title">Przykładowe projekty B2B.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-12">
            {allB2b.map((project, i) => (
              <FadeIn key={project.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">
                      {project.location}
                    </p>
                    <h3 className="font-display text-xl text-navy mb-2">{project.title}</h3>
                    <p className="text-xs text-gray-400">{project.year}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CZEGO POTRZEBUJEMY ──────────────────────────── */}
      <FadeIn>
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Co możemy wykonać</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Praktycznie każdą geometrię — od małych elementów stalowych i ornamentów
                  po schody, elewacje i całe budynki. Często piszemy własne skrypty
                  dla maksymalnej dokładności.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Czego potrzebujemy</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  W zależności od zlecenia: szkic, rysunki techniczne lub model 3D
                  istniejącego budynku. Przy złożonych projektach pracujemy na wielu
                  iteracjach — dostosowujemy się do zmian w dokumentacji.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Wycena</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Na podstawie dostarczonej dokumentacji i briefu przygotujemy wycenę.
                  Koszt zależy od czasu i zasobów. Stali klienci otrzymują korzystniejsze
                  warunki współpracy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Blog */}
      <section className="py-16 bg-stone-50">
        <div className="container-site">
          <p className="text-xs uppercase tracking-widest text-[#A97900] mb-3">Z bloga</p>
          <h2 className="font-display text-2xl text-[#1b222e] mb-8">Artykuły o współpracy B2B i 3D</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { slug: 'modelowanie-3d-dla-biur-architektonicznych', title: 'Dlaczego biura architektoniczne zlecają modelowanie 3D na zewnątrz', cat: 'B2B / 3D' },
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
        title="Zapytaj o wycenę"
        description="Na podstawie dokumentacji i briefu przygotujemy wycenę. Pracujemy zdalnie z biurami w całej Europie i USA."
        label="Wyślij brief"
        dark
      />
    </>
  )
}
