import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import ProjectCard from '@/components/ui/ProjectCard'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { getFeaturedProjects } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Zakres usług — Architektura, Wnętrza, B2B 3D | CHD Architekci',
  description:
    'Od koncepcji po sprzedaż. Architektura, projektowanie wnętrz i B2B 3D — kompleksowo lub na wybranym etapie. CHD Architekci Kraków.',
  alternates: { canonical: `${SITE_URL}/zakres`, languages: { pl: `${SITE_URL}/zakres`, en: `${SITE_URL}/en/services` } },
  openGraph: {
    title: 'Zakres usług — CHD Architekci',
    url: `${SITE_URL}/zakres`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'Zakres usług CHD Architekci — architektura, wnętrza, 3D' }],
  },
}

const SPECS = [
  {
    title: 'Mieszkania / budynki mieszkalne',
    tagline: 'Dom, apartament, budynek wielorodzinny.',
    desc: 'Projektujemy domy, apartamenty i budynki wielorodzinne — od małej działki podmiejskiej po inwestycje deweloperskie. Skupiamy się na potrzebach przyszłych użytkowników i realnym budżecie, nie na trendach. Nasze projekty dobrze się starzeją.',
    points: [
      'Projekt koncepcyjny i wykonawczy',
      'Nadzór autorski i budowlany',
      'Wizualizacje i modele 3D',
      'Analizy chłonności i feasibility',
      'Adaptacja istniejących projektów',
    ],
    why: [
      'Ponad 15 lat realizacji w różnych skalach',
      'Realistyczne podejście do budżetu i harmonogramu',
      'Klienci wracają z kolejnymi zleceniami',
    ],
    link: '/architektura',
  },
  {
    title: 'Gastronomia / lokale usługowe',
    tagline: 'Kawiarnie, restauracje, bistro, lokale biurowe.',
    desc: 'Dobry projekt lokalu gastronomicznego zwiększa przepustowość, obniża koszty obsługi i buduje tożsamość miejsca. Projektowaliśmy lokale w historycznych kamienicach Krakowa, szpitalach i obiektach hotelowych.',
    points: [
      'Projekt wnętrza i projekt mebli na zamówienie',
      'Doradztwo funkcjonalne (układ lady, zaplecze, sanitariat)',
      'Wizualizacje i CGI sprzedażowe',
      'Materiały marketingowe i identyfikacja wizualna lokalu',
      'Projekt szyldu zgodny z uchwałą krajobrazową',
    ],
    why: [
      'Ponad 10 zrealizowanych lokali gastronomicznych',
      'Kurka Wodna, Szoberowska — w zabytkowym centrum Krakowa',
      'Uzdrowisko Bistro, Dzień Dobry Cafe — gastronomia w szpitalach (wymagający klient, wysokie normy sanitarne)',
      'Doświadczenie własne w prowadzeniu gastronomii',
    ],
    link: '/wnetrza',
  },
  {
    title: 'Hotele / apartamenty na wynajem',
    tagline: 'Przestrzeń na pobyt czasowy — od willi po apartamenty inwestycyjne.',
    desc: 'Projektowanie przestrzeni na wynajem różni się od projektowania mieszkań. Dobrze zaprojektowany obiekt przekłada się bezpośrednio na obłożenie, oceny i zwrot z inwestycji. Pracowaliśmy przy obiektach w Polsce i w Wielkiej Brytanii.',
    points: [
      'Projekt funkcjonalny i wnętrzarski',
      'Dokumentacja dla wykonawcy',
      'CGI i wizualizacje sprzedażowe',
      'Feasibility study i doradztwo biznesowe',
      'Obsługa procesu inwestycyjnego od A do Z',
    ],
    why: [
      'Doświadczenie własne w prowadzeniu wynajmu apartamentów',
      'Współpraca z MA Architecture (UK) — realizacje w Londynie',
      'Realizacje w Krakowie i Krynicy-Zdroju',
    ],
    link: '/portfolio',
  },
  {
    title: 'Rewitalizacja i obiekty zabytkowe',
    tagline: 'Kamienice, wille, obiekty w strefach konserwatorskich.',
    desc: 'Duży procent naszych projektów to obiekty w gminnej ewidencji zabytków lub w strefach ochrony konserwatorskiej. Znamy procedury, materiały i sposób pracy z WKZ — zabytek to dla nas kontekst projektowy, nie przeszkoda formalna.',
    points: [
      'Inwentaryzacja i dokumentacja stanu istniejącego',
      'Projekt z uwzględnieniem wymogów konserwatorskich',
      'Uzgodnienia z Wojewódzkim Konserwatorem Zabytków',
      'Dobór właściwych materiałów i technik budowlanych',
      'Doradztwo w zakresie dotacji i ulg podatkowych',
    ],
    why: [
      'Pawła 12 Katowice, Willa Złocień Krynica, Kurka Wodna — Kanonicza',
      'Biuro przy Rynku Głównym 43 — własne doświadczenia ze Strefą A',
      'Olbrzymi procent projektów w strefach konserwatorskich',
    ],
    link: '/architektura',
  },
  {
    title: 'B2B / CGI / modele 3D',
    tagline: 'Dokumentacja i wizualizacje dla biur architektonicznych.',
    desc: 'Współpracujemy z biurami architektonicznymi w Polsce, USA i UK. Przygotowujemy dokumentację projektową, modele BIM i Rhino, wizualizacje, animacje i pliki VR — w tempie i formacie gotowym do użycia w istniejącym workflow biura.',
    points: [
      'Modelowanie złożonej geometrii (Rhino / Grasshopper)',
      'Dokumentacja wykonawcza i rysunki warsztatowe',
      'BIM i pliki IFC (Revit, ArchiCAD)',
      'Rendering i CGI, animacje',
      'Pliki VR w Unreal Engine',
    ],
    why: [
      'Stała współpraca z Idea Development (PL), CAD Designing Syndicate (USA), MA Architecture (UK)',
      'Realizacje przy Central Park Tower NYC i California Villa',
      'Znajomość lokalnych kodów budowlanych rynku UK i USA',
    ],
    link: '/b2b-3d',
  },
  {
    title: 'www i marketing dla deweloperów',
    tagline: 'Od projektu do sprzedaży — jeden zespół.',
    desc: 'Deweloperzy współpracujący z CHD cenią kompleksowość. Możemy prowadzić cały lejek komunikacji inwestycji: od projektu i wizualizacji po stronę internetową i materiały sprzedażowe. To szczególnie wartościowe przy inwestycjach premium, gdzie spójność komunikacji decyduje o cenie.',
    points: [
      'Strony internetowe dla inwestycji deweloperskich',
      'Materiały sprzedażowe: broszury, prezentacje, teczki',
      'Identyfikacja wizualna inwestycji',
      'CGI i wizualizacje sprzedażowe',
      'Szyldy i systemy oznaczeń zgodne z uchwałą krajobrazową',
    ],
    why: [
      'Zrealizowane strony: willazlocien.com, pawla12.pl, kmtlegal.pl',
      'Jeden zespół = spójność projektu i komunikacji',
      'Znajomość przepisów reklamowych Krakowa (uchwała krajobrazowa)',
    ],
    link: '/kontakt',
  },
  {
    title: 'Obsługa inwestora zagranicznego',
    tagline: 'Lokalny reprezentant w polskim procesie inwestycyjnym.',
    desc: 'Pomagamy zagranicznym inwestorom i biurom architektonicznym poruszać się w polskich realiach projektowych, urzędowych i wykonawczych. Możemy być lokalnym punktem kontaktu i odpowiedzialności — od analizy działki po odbiór budynku.',
    points: [
      'Reprezentowanie inwestora wobec polskich urzędów',
      'Dobór i koordynacja podwykonawców',
      'Tłumaczenie wymagań projektowych na polskie normy i procedury',
      'Raportowanie w języku angielskim',
      'Koordynacja dokumentacji między rynkami',
    ],
    why: [
      'Stała współpraca z biurami z UK i USA od ponad 10 lat',
      'Angielskojęzyczny workflow — bez barier komunikacyjnych',
      'Znajomość kodów budowlanych UK (PD, BS) i USA (IBC, NYC BC)',
    ],
    link: '/kontakt',
  },
  {
    title: 'Projektowanie ekologiczne i certyfikaty energetyczne',
    tagline: 'Efektywność energetyczna i zrównoważone budownictwo.',
    desc: 'Efektywność energetyczna to nie tylko moda — to wymóg prawny i kryterium finansowania. Posiadamy uprawnienia do wystawiania świadectw charakterystyki energetycznej i doradzamy w zakresie rozwiązań energooszczędnych, szczególnie przy zabytkach, gdzie standardowe metody ocieplenia są niedopuszczalne.',
    points: [
      'Świadectwa charakterystyki energetycznej (mieszkania od ~500 zł)',
      'Doradztwo przy wyborze izolacji i źródeł ciepła',
      'Projektowanie energooszczędne przy obiektach zabytkowych',
      'Analiza i optymalizacja istniejących instalacji',
    ],
    why: [
      'Własne uprawnienia do wystawiania świadectw',
      'Doświadczenie przy zabytkach (Willa Złocień — pompa ciepła + izolacja od wewnątrz)',
      'Znajomość materiałów kompatybilnych z drewnem i historyczną substancją',
    ],
    link: '/kontakt',
  },
]

const PIPELINE = [
  {
    step: '01',
    title: 'Koncepcja',
    desc: 'Analiza potrzeb, kontekstu i budżetu. Feasibility study, research, moodboard, układ funkcjonalny. Dla deweloperów: analiza chłonności działki, optymalizacja pod PUM, ocena opłacalności.',
    domains: ['Architektura', 'Wnętrza'],
  },
  {
    step: '02',
    title: 'Projekt techniczny',
    desc: 'Dokumentacja budowlana, rysunki wykonawcze, modele 3D, BIM. Precyzja, która eliminuje problemy zanim pojawią się na budowie.',
    domains: ['Architektura', 'Wnętrza', 'B2B'],
  },
  {
    step: '03',
    title: 'Komunikacja projektu',
    desc: 'CGI, wizualizacje, animacje, VR w Unreal Engine. Narzędzia, które przekonują inwestorów i klientów lepiej niż jakikolwiek opis.',
    domains: ['B2B', 'Wnętrza', 'Architektura'],
  },
  {
    step: '04',
    title: 'Realizacja',
    desc: 'Nadzór autorski, generalne wykonawstwo, prowadzenie budowy. Jeden zespół od projektu po klucze — bez rozrzuconej odpowiedzialności.',
    domains: ['Wnętrza', 'Architektura'],
  },
  {
    step: '05',
    title: 'Sprzedaż',
    desc: 'Strona internetowa inwestycji, materiały marketingowe, CGI sprzedażowe. Projekt gotowy do sprzedaży, nie tylko do budowy.',
    domains: ['Architektura', 'B2B'],
  },
]

const DOMAINS = [
  {
    id: 'architektura',
    href: '/architektura',
    label: 'Architektura',
    tagline: 'Budynki, które służą.',
    desc: 'Projekty indywidualne i inwestycyjne — od domu na podmiejskiej działce po rewitalizację zabytkowej kamienicy w centrum Katowic.',
    points: [
      'Domy jednorodzinne i willowe',
      'Budynki wielorodzinne',
      'Rewitalizacje zabytkowe',
      'Analizy deweloperskie i feasibility',
      'Nadzór autorski i dokumentacja',
    ],
    style: 'light',
  },
  {
    id: 'wnetrza',
    href: '/wnetrza',
    label: 'Wnętrza',
    tagline: 'Przestrzenie, które opowiadają.',
    desc: 'Autorskie projekty mieszkań, willi i lokali. Od koncepcji po generalne wykonawstwo. Obsługujemy też zagranicznych inwestorów w Polsce — projekt, realizacja i sprzedaż lokali.',
    points: [
      'Mieszkania i domy',
      'Lokale usługowe',
      'Gastronomia',
      'Obsługa inwestorów zagranicznych w Polsce',
      'Sprzedaż lokali',
    ],
    style: 'mid',
  },
  {
    id: 'b2b',
    href: '/b2b-3d',
    label: 'B2B / 3D',
    tagline: 'Narzędzia dla profesjonalistów.',
    desc: 'Modele 3D, dokumentacja wykonawcza i CGI dla biur architektonicznych w Polsce, UK i USA. Wchodzimy w istniejący workflow klienta.',
    points: [
      'Modele 3D — Rhino3D, parametryka',
      'Dokumentacja BIM i wykonawcza',
      'CGI: wizualizacje, animacje, VR',
      'Strony www i marketing deweloperski',
      'Stała współpraca USA · UK · PL',
    ],
    style: 'dark',
  },
]

const CLIENT_TYPES = [
  {
    who: 'Inwestor prywatny',
    need: 'Budujesz dom lub remont, chcesz jednego punktu kontaktu.',
    value: 'Koncepcja → projekt techniczny → nadzór autorski → generalne wykonawstwo. Od pierwszego szkicu do klucza w drzwiach.',
    tags: ['Architektura', 'Wnętrza'],
    link: '/kontakt',
    cta: 'Porozmawiajmy',
  },
  {
    who: 'Deweloper',
    need: 'Projektujesz inwestycję i chcesz ją sprawnie sprzedać.',
    value: 'Projekt architektoniczny → analizy → CGI → strona www inwestycji → materiały sprzedażowe. Szybciej od projektu do sprzedaży.',
    tags: ['Architektura', 'B2B'],
    link: '/kontakt',
    cta: 'Zapytaj o projekt',
  },
  {
    who: 'Biuro architektoniczne',
    need: 'Potrzebujesz wsparcia dokumentacyjnego lub zaawansowanych modeli.',
    value: 'Modele 3D → dokumentacja wykonawcza → CGI → animacje → VR. Zewnętrzny team, który działa jak wewnętrzny.',
    tags: ['B2B'],
    link: '/b2b-3d',
    cta: 'Współpraca B2B',
  },
]

const DOMAIN_TAG_STYLE: Record<string, string> = {
  'Architektura': 'bg-stone-200 text-navy',
  'Wnętrza':      'bg-stone-300 text-navy',
  'B2B':          'bg-stone-900 text-white',
}

export default function ZakresPage() {
  const featured = getFeaturedProjects().slice(0, 3)

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Zakres usług', href: '/zakres' },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/nystair1.webp"
            alt="CHD — zakres usług"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container-site relative z-10 pt-32 pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Czym się zajmujemy</p>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6 max-w-3xl">
            Od szkicu do sprzedaży.
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-10">
            Architektura, wnętrza i 3D — osobno jako specjalizacje,
            razem jako jeden zintegrowany proces. Działamy tam gdzie jesteśmy potrzebni,
            na etapie który ma dla Ciebie sens.
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { stat: '20+', label: 'lat\ndoświadczenia' },
                { stat: '3', label: 'rynki —\nPL · UK · USA' },
                { stat: 'Arch · Int · B2B', label: 'szerokie spektrum\ndoświadczenia' },
                { stat: '01→05', label: 'od koncepcji\npo sprzedaż' },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <p className="font-display text-3xl md:text-4xl text-white mb-1">{stat}</p>
                  <p className="text-xs text-white/60 whitespace-pre-line leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── PIPELINE — CO ROBIMY NA KAŻDYM ETAPIE ────────── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Kompetencje</p>
            <h2 className="section-title">Co robimy na każdym etapie.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-16">
              Nie jesteśmy od wszystkiego — jesteśmy kompetentni na każdym etapie procesu
              projektowego. Możemy wejść w jeden etap albo poprowadzić cały projekt.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-stone-200">
              {PIPELINE.map((pt) => (
                <div key={pt.step} className="bg-white p-6 flex flex-col gap-3">
                  <p className="font-display text-3xl text-gold leading-none">{pt.step}</p>
                  <p className="font-display text-lg text-navy">{pt.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">{pt.desc}</p>
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-stone-100">
                    {pt.domains.map((d) => (
                      <span
                        key={d}
                        className={`text-[10px] uppercase tracking-widest px-2 py-0.5 ${DOMAIN_TAG_STYLE[d] ?? 'bg-stone-100 text-gray-500'}`}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3 DZIEDZINY ──────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Specjalizacje</p>
            <h2 className="section-title">Trzy dziedziny. Jeden zespół.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-16">
              Każda dziedzina to osobna, głęboka specjalizacja — nie zestaw usług
              wykupiony razem. Razem tworzą możliwość kompleksowej obsługi.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">

            {/* Architektura */}
            <FadeIn delay={0}>
              <div className="bg-white p-10 h-full border border-stone-200 flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Architektura</p>
                <h3 className="font-display text-3xl text-navy mb-2">Budynki,<br/>które służą.</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">{DOMAINS[0].desc}</p>
                <ul className="space-y-3 flex-1">
                  {DOMAINS[0].points.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-gold shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-6 border-t border-stone-100">
                  <Link href="/architektura" className="text-xs uppercase tracking-widest text-gold hover:text-navy transition-colors">
                    Strona Architektura →
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Wnętrza */}
            <FadeIn delay={80}>
              <div className="bg-stone-100 p-10 h-full flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Wnętrza</p>
                <h3 className="font-display text-3xl text-navy mb-2">Przestrzenie,<br/>które opowiadają.</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">{DOMAINS[1].desc}</p>
                <ul className="space-y-3 flex-1">
                  {DOMAINS[1].points.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-gold shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-6 border-t border-stone-300">
                  <Link href="/wnetrza" className="text-xs uppercase tracking-widest text-gold hover:text-navy transition-colors">
                    Strona Wnętrza →
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* B2B */}
            <FadeIn delay={160}>
              <div className="bg-stone-900 p-10 h-full flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">B2B / 3D</p>
                <h3 className="font-display text-3xl text-white mb-2">Narzędzia<br/>dla profesjonalistów.</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8">{DOMAINS[2].desc}</p>
                <ul className="space-y-3 flex-1">
                  {DOMAINS[2].points.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="text-gold shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-6 border-t border-white/10">
                  <Link href="/b2b-3d" className="text-xs uppercase tracking-widest text-gold hover:text-white transition-colors">
                    Strona B2B →
                  </Link>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── CO DOSTAJE KLIENT ─────────────────────────────── */}
      <section className="py-24 bg-stone-900">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle text-gold">Value dla klienta</p>
            <h2 className="font-display text-4xl text-white mb-4">Co dostajesz — zależnie od potrzeb.</h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xl mb-16">
              Nie masz obowiązku korzystać ze wszystkiego naraz. Wchodzimy na etap
              który ma sens — i robimy go dobrze.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {CLIENT_TYPES.map((ct, i) => (
              <FadeIn key={ct.who} delay={i * 80}>
                <div className="bg-stone-900 p-8 h-full flex flex-col">
                  <div className="flex flex-wrap gap-1 mb-6">
                    {ct.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] uppercase tracking-widest px-2 py-0.5 ${DOMAIN_TAG_STYLE[tag] ?? 'bg-stone-100'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="font-display text-xl text-white mb-2">{ct.who}</p>
                  <p className="text-xs text-white/40 leading-relaxed mb-6">{ct.need}</p>
                  <p className="text-sm text-white/70 leading-relaxed flex-1">{ct.value}</p>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <Link
                      href={ct.link}
                      className="text-xs uppercase tracking-widest text-gold hover:text-white transition-colors"
                    >
                      {ct.cta} →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TYPY PROJEKTÓW ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Typy projektów</p>
            <h2 className="section-title max-w-xl">W czym się specjalizujemy.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mt-4 mb-16">
              Każda typologia rządzi się innymi prawami — inny klient, inny proces, inne ryzyka.
              Poniżej opisujemy co robimy i dlaczego warto nam to powierzyć.
            </p>
          </FadeIn>

          <div className="divide-y divide-stone-200 border-t border-stone-200">
            {SPECS.map((spec, i) => (
              <FadeIn key={spec.title} delay={i * 40}>
                <details className="group">
                  <summary className="flex items-center justify-between py-6 cursor-pointer list-none select-none gap-4">
                    <div>
                      <span className="font-display text-xl text-navy group-open:text-[#A97900] transition-colors">
                        {spec.title}
                      </span>
                      <span className="hidden md:inline text-sm text-gray-400 ml-4">{spec.tagline}</span>
                    </div>
                    <span className="text-[#A97900] text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>

                  <div className="pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">{spec.desc}</p>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Co robimy</p>
                      <ul className="space-y-2">
                        {spec.points.map((p) => (
                          <li key={p} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="text-[#A97900] shrink-0 mt-0.5">—</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-stone-50 p-6">
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Dlaczego CHD</p>
                      <ul className="space-y-2">
                        {spec.why.map((w) => (
                          <li key={w} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="text-[#A97900] shrink-0 mt-0.5">—</span>
                            {w}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-5 border-t border-stone-200">
                        <Link
                          href={spec.link}
                          className="text-xs uppercase tracking-widest text-[#A97900] hover:text-navy transition-colors"
                        >
                          Więcej →
                        </Link>
                      </div>
                    </div>
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WYBRANE PROJEKTY ─────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Realizacje</p>
            <h2 className="section-title">Projekty z każdej dziedziny.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-12">
            {featured.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 80}>
                <ProjectCard project={p} size="large" />
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center mt-10">
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
        title="Masz projekt?"
        description="Powiedz nam na jakim etapie jesteś — ocenimy co ma sens."
        dark
      />
    </>
  )
}
