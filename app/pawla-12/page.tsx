import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTA from '@/components/ui/CTA'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Mieszkania na sprzedaż — Pawła 12, Katowice | CHD Architekci',
  description: 'Rewitalizacja zabytkowej kamienicy przy ul. Pawła 12 w Katowicach. Mieszkania na sprzedaż w centrum miasta — bezpośrednio od architekta prowadzącego projekt.',
  alternates: { canonical: `${SITE_URL}/pawla-12` },
}

const apartments = [
  {
    id: 'A1',
    floor: '1. piętro',
    area: '52 m²',
    rooms: '2 pokoje',
    desc: 'Mieszkanie z widokiem na dziedziniec, wysokie sufity, oryginalna posadzka.',
  },
  {
    id: 'A2',
    floor: '1. piętro',
    area: '68 m²',
    rooms: '3 pokoje',
    desc: 'Przestronne mieszkanie narożne, dwa okna ekspozycyjne, duży salon.',
  },
  {
    id: 'B1',
    floor: '2. piętro',
    area: '47 m²',
    rooms: '2 pokoje',
    desc: 'Widok na ulicę Pawła, wysoka kondygnacja, jasne wnętrza.',
  },
  {
    id: 'B2',
    floor: '2. piętro',
    area: '81 m²',
    rooms: '3 pokoje + gabinet',
    desc: 'Największy lokal w budynku, balkon od dziedzińca, możliwość adaptacji na 4 pokoje.',
  },
  {
    id: 'C1',
    floor: '3. piętro',
    area: '44 m²',
    rooms: '2 pokoje',
    desc: 'Poddasze częściowe, skosy od strony podwórza, przytulny charakter.',
  },
]

export default function Pawla12Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-[#1b222e] flex items-center pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/leszek/pawla12a.webp"
            alt="Pawła 12 Katowice"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative container-site">
          <p className="text-xs uppercase tracking-[0.2em] text-[#A97900] mb-4">Katowice · Centrum</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 max-w-2xl">
            Pawła 12 — mieszkania w rewitalizowanej kamienicy
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Zabytkowa kamienica w centrum Katowic — po generalnej rewitalizacji z zachowaniem historycznego charakteru. Sprzedaż bezpośrednio przez biuro architektoniczne prowadzące projekt.
          </p>
          <a href="mailto:cholujdesign@gmail.com?subject=Pawła 12 — zapytanie o mieszkanie" className="btn-primary">
            Zapytaj o mieszkanie
          </a>
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-[#A97900] py-4">
        <div className="container-site flex flex-wrap gap-8 text-white text-sm">
          <span><strong>Lokalizacja:</strong> ul. Pawła 12, Katowice — centrum</span>
          <span><strong>Budynek:</strong> zabytkowa kamienica, ok. 1900 r.</span>
          <span><strong>Rewitalizacja:</strong> 2024–2026</span>
          <span><strong>Standard:</strong> wysoki, z zachowaniem detalu historycznego</span>
        </div>
      </div>

      {/* O projekcie */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#A97900] mb-3">O inwestycji</p>
              <h2 className="font-display text-3xl text-[#1b222e] mb-6">Kamienica z historią — standard nowego budownictwa</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kamienica przy ul. Pawła 12 w Katowicach to obiekt z przełomu XIX i XX wieku, wpisany do gminnej ewidencji zabytków. Projekt rewitalizacji prowadzony przez CHD Architekci i Idea Development zakłada pełne odtworzenie elewacji z oryginalnym detalem sztukatorskim, wymianę instalacji oraz modernizację układów mieszkalnych przy zachowaniu historycznych proporcji i elementów wykończenia.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kupując mieszkanie bezpośrednio przez biuro architektoniczne prowadzące projekt, masz bezpośredni kontakt z osobą znającą budynek od strony projektowej — bez pośredników i marketingowych uproszeń.
              </p>
              <Link href="/portfolio/pawla-12-katowice" className="text-[#A97900] text-sm tracking-widest uppercase hover:underline">
                Zobacz projekt architektoniczny →
              </Link>
            </div>
            <div className="relative aspect-[4/3]">
              <Image src="/images/leszek/katowice.webp" alt="Pawła 12 Katowice — kamienica" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mieszkania */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <p className="text-xs uppercase tracking-widest text-[#A97900] mb-3">Dostępne lokale</p>
          <h2 className="font-display text-3xl text-[#1b222e] mb-10">Mieszkania na sprzedaż</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apartments.map((apt) => (
              <div key={apt.id} className="bg-white p-8 border border-stone-200">
                <p className="text-xs uppercase tracking-widest text-[#A97900] mb-2">{apt.floor}</p>
                <h3 className="font-display text-xl text-[#1b222e] mb-1">Lokal {apt.id}</h3>
                <p className="text-2xl font-display text-[#A97900] mb-3">{apt.area} · {apt.rooms}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{apt.desc}</p>
                <a
                  href={`mailto:cholujdesign@gmail.com?subject=Pawła 12 — lokal ${apt.id} (${apt.area})`}
                  className="text-xs uppercase tracking-widest text-[#A97900] hover:underline"
                >
                  Zapytaj o cenę →
                </a>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-8">Ceny dostępne po kontakcie bezpośrednim. Możliwość indywidualnego wykończenia w ramach projektu wnętrz prowadzonego przez CHD.</p>
        </div>
      </section>

      {/* Standard */}
      <section className="py-20 bg-[#1b222e]">
        <div className="container-site">
          <p className="text-xs uppercase tracking-widest text-[#A97900] mb-3">Co wchodzi w standard</p>
          <h2 className="font-display text-3xl text-white mb-10">Rewitalizacja bez kompromisów</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Elewacja', desc: 'Odtworzona z historycznym detalem sztukatorskim, kolorystyka z odkrywek historycznych tynków.' },
              { title: 'Okna', desc: 'Drewniane skrzynkowe z szybą zespoloną — wymóg konserwatora i właściwy wybór dla kamienicy tego okresu.' },
              { title: 'Instalacje', desc: 'Nowe instalacje elektryczne, wodno-kanalizacyjne i centralnego ogrzewania w całym budynku.' },
              { title: 'Klatka schodowa', desc: 'Oryginalna posadzka terakotowa odrestaurowana, balustrada kuta odtworzona z dokumentacji.' },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-[#A97900] font-display text-lg mb-2">{item.title}</p>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Interesuje Cię lokal przy Pawłej 12?"
        description="Skontaktuj się bezpośrednio. Odpowiemy na pytania o projekt, standard i dostępność."
        dark={false}
      />
    </>
  )
}
