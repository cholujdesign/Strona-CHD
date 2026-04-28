import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/ui/Hero'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Proces współpracy — jak zaczynamy projekt',
  description:
    'Jak wygląda współpraca z CHD Architekci? Przejrzysty proces dla klientów indywidualnych i biznesowych. Etapy, wymagane materiały i FAQ.',
  alternates: { canonical: `${SITE_URL}/proces-wspolpracy`, languages: { pl: `${SITE_URL}/proces-wspolpracy`, en: `${SITE_URL}/en/process` } },
}

const stepsIndividual = [
  {
    n: '01',
    title: 'Pierwsze spotkanie',
    desc: 'Rozmowa o projekcie, lokalizacji i oczekiwaniach. Możliwa online lub w biurze przy Rynku Głównym.',
  },
  {
    n: '02',
    title: 'Wycena i zakres',
    desc: 'Na podstawie briefu przygotowujemy zakres prac i wycenę. Transparentnie i bez ukrytych kosztów.',
  },
  {
    n: '03',
    title: 'Koncepcja',
    desc: 'Opracowujemy wariantową koncepcję. Omawiamy ją z Tobą i wybieramy kierunek.',
  },
  {
    n: '04',
    title: 'Projekt budowlany i wykonawczy',
    desc: 'Szczegółowa dokumentacja projektowa gotowa do urzędów i wykonawców.',
  },
  {
    n: '05',
    title: 'Nadzór i realizacja',
    desc: 'Nadzór autorski lub pełne generalne wykonawstwo — zależnie od wybranego zakresu.',
  },
]

const stepsB2B = [
  {
    n: '01',
    title: 'Brief i dokumentacja',
    desc: 'Przesyłasz brief i dostępne materiały: szkice, rysunki, model 3D, opis geometrii — lub chmurę punktów ze skanowania laserowego.',
  },
  {
    n: '02',
    title: 'Wycena',
    desc: 'Na podstawie briefu przygotowujemy wycenę. Koszt maleje przy kolejnych zleceniach.',
  },
  {
    n: '03',
    title: 'Realizacja',
    desc: 'Pracujemy iteracyjnie, dostosowując się do zmian w dokumentacji. Regularne aktualizacje statusu.',
  },
  {
    n: '04',
    title: 'Dostawa i formaty',
    desc: 'Dostarczamy pliki w uzgodnionych formatach (.dwg, .ifc, .3dm, .pdf i inne).',
  },
]

const faqIndividual = [
  {
    q: 'Ile trwa projekt?',
    a: 'Projekt koncepcyjny to zwykle 2–4 tygodnie. Pełna dokumentacja budowlana — od 2 do 6 miesięcy, zależnie od skali.',
  },
  {
    q: 'Co muszę przygotować na pierwsze spotkanie?',
    a: 'Wystarczy ogólny pomysł i informacje o działce lub lokalizacji. Jeśli masz mapę, plan lub wizualizacje referencyjne — przynieś.',
  },
  {
    q: 'Czy zajmujecie się pozwoleniami?',
    a: 'Tak. Przygotowujemy dokumentację do urzędów i możemy reprezentować inwestora w procesie administracyjnym.',
  },
  {
    q: 'Czy mogę zamówić tylko projekt wnętrz bez architektury?',
    a: 'Tak. Realizujemy projekty wyłącznie wnętrz — od koncepcji po pełną dokumentację wykonawczą.',
  },
]

const faqB2B = [
  {
    q: 'Jaka jest minimalna wartość zlecenia?',
    a: 'Nie ma formalnego minimum. Realizujemy zarówno małe zlecenia (element stalowy, ornament), jak i wielomiesięczną współpracę.',
  },
  {
    q: 'Czy można współpracować zdalnie?',
    a: 'Tak. Większość naszych klientów B2B to firmy z UK i USA. Komunikacja przez e-mail, Zoom i platformy do udostępniania plików.',
  },
  {
    q: 'Co jeśli dokumentacja zmieni się w trakcie projektu?',
    a: 'Dostosowujemy się. Pracujemy na iteracjach — zmiana dokumentacji to standardowy element procesu.',
  },
  {
    q: 'Jakiego oprogramowania używacie?',
    a: 'Rhino 3D, Grasshopper, ArchiCad (BIM), AutoCAD, Unreal Engine 5, Photoshop.',
  },
]

export default function ProcesWspolpracyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Proces współpracy', href: '/proces-wspolpracy' },
        ]}
      />

      <Hero
        subtitle="Jak działamy"
        title="Przejrzysty proces — od rozmowy do realizacji."
        description="Bez ukrytych kosztów i zbędnej biurokracji. Dostosowujemy się do Ciebie."
        size="medium"
      />

      {/* Klient indywidualny */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <p className="section-subtitle">Klient indywidualny</p>
          <h2 className="section-title max-w-xl">Jak zaczynamy — dom, wnętrza, rewitalizacja.</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-12">
            {stepsIndividual.map((s) => (
              <div key={s.n} className="border-t-2 border-gold pt-6">
                <p className="font-display text-2xl text-gold mb-2">{s.n}</p>
                <h3 className="font-display text-base text-navy mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Klient biznesowy */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <p className="section-subtitle">Klient biznesowy (B2B)</p>
          <h2 className="section-title max-w-xl">Jak zaczynamy — 3D, dokumentacja, CGI.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {stepsB2B.map((s) => (
              <div key={s.n} className="border-t-2 border-gold pt-6">
                <p className="font-display text-2xl text-gold mb-2">{s.n}</p>
                <h3 className="font-display text-base text-navy mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ indywidualny */}
      <section className="py-20 bg-white">
        <div className="container-site max-w-3xl">
          <p className="section-subtitle">FAQ</p>
          <h2 className="section-title">Najczęstsze pytania — klient indywidualny.</h2>
          <div className="divide-y divide-gray-100 mt-10">
            {faqIndividual.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="font-display text-lg text-navy mb-2">{f.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chmura punktów */}
      <section className="py-20 bg-[#1b222e]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A97900] mb-4">Zdalna precyzja</p>
              <h2 className="font-display text-3xl text-white mb-6">
                Pracujemy na chmurze punktów — nie musimy być fizycznie na miejscu.
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Wiele biur architektonicznych zlecających nam prace pracuje na obiektach w UK, USA lub innych krajach. W takich przypadkach często przekazujemy projekt oparty o <strong className="text-white">chmurę punktów</strong> — cyfrowe odwzorowanie przestrzeni uzyskane ze skanowania laserowego (LiDAR).
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Na podstawie chmury punktów tworzymy precyzyjny model 3D lub dokumentację bez konieczności wizji lokalnej. Geometria budynku — każdy kąt, każde odchylenie od pionu, każdy detal — jest zakodowana w danych skanowania z dokładnością do kilku milimetrów.
              </p>
              <p className="text-white/70 leading-relaxed">
                To sprawia, że projekt jest <strong className="text-white">superdokładny</strong> — często dokładniejszy niż przy tradycyjnej inwentaryzacji ręcznej — a my możemy zacząć pracę od razu po otrzymaniu pliku, niezależnie od odległości.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Format wejściowy', desc: '.pts, .e57, .las, .xyz, .rcp — obsługujemy wszystkie popularne formaty chmur punktów.' },
                { title: 'Oprogramowanie', desc: 'Rhino3D + PointCloud plugin, Autodesk ReCap, CloudCompare — pełny workflow od surowego skanu do modelu.' },
                { title: 'Dokładność', desc: 'Skanowanie laserowe osiąga dokładność 2–5 mm — przekłada się to bezpośrednio na jakość dokumentacji wykonawczej.' },
                { title: 'Zdalnie = efektywnie', desc: 'Brak konieczności wizyty na miejscu oznacza niższy koszt i krótszy czas startu projektu — bez kompromisów na jakości.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-[#A97900] shrink-0 mt-0.5">—</span>
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ B2B */}
      <section className="py-20 bg-stone-50">
        <div className="container-site max-w-3xl">
          <p className="section-subtitle">FAQ</p>
          <h2 className="section-title">Najczęstsze pytania — klient biznesowy.</h2>
          <div className="divide-y divide-gray-100 mt-10">
            {faqB2B.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="font-display text-lg text-navy mb-2">{f.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <p className="text-xs uppercase tracking-widest text-[#A97900] mb-3">Z bloga</p>
          <h2 className="font-display text-2xl text-[#1b222e] mb-8">Artykuły o procesie i współpracy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { slug: 'jak-zaczac-projekt-architektoniczny', title: 'Jak zacząć projekt architektoniczny — od działki do pozwolenia', cat: 'Architektura' },
              { slug: 'swiadectwo-charakterystyki-energetycznej', title: 'Świadectwo charakterystyki energetycznej — kiedy jest wymagane', cat: 'Proces' },
              { slug: 'modelowanie-3d-dla-biur-architektonicznych', title: 'Dlaczego biura architektoniczne zlecają modelowanie 3D na zewnątrz', cat: 'B2B / 3D' },
            ].map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="group bg-stone-50 p-6 border border-stone-200 hover:border-[#A97900] transition-colors">
                <p className="text-xs uppercase tracking-widest text-[#A97900] mb-2">{post.cat}</p>
                <h3 className="font-display text-base text-[#1b222e] group-hover:text-[#A97900] transition-colors leading-snug">{post.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
