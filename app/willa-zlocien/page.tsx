import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTA from '@/components/ui/CTA'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Mieszkania na sprzedaż — Willa Złocień, Krynica-Zdrój | CHD Architekci',
  description: 'Rewitalizowana willa w centrum uzdrowiska Krynica-Zdrój. Mieszkania na sprzedaż — bezpośrednio od architekta prowadzącego projekt rewitalizacji.',
  alternates: { canonical: `${SITE_URL}/willa-zlocien` },
}

const apartments = [
  {
    id: 'W1',
    floor: 'Parter',
    area: '58 m²',
    rooms: '2 pokoje',
    desc: 'Wyjście na ogród, bezpośredni dostęp do tarasu, wysoki parter z dużymi oknami.',
  },
  {
    id: 'W2',
    floor: 'Parter',
    area: '72 m²',
    rooms: '3 pokoje',
    desc: 'Przestronne mieszkanie z oryginalną drewnianą stolarką, widok na park zdrojowy.',
  },
  {
    id: 'W3',
    floor: '1. piętro',
    area: '64 m²',
    rooms: '3 pokoje',
    desc: 'Panorama na Góry Beskidzkie, historyczna balustrada schodowa, wysoki sufit.',
  },
  {
    id: 'W4',
    floor: '1. piętro',
    area: '49 m²',
    rooms: '2 pokoje',
    desc: 'Narożny lokal z podwójną ekspozycją, jasny i słoneczny przez cały dzień.',
  },
  {
    id: 'W5',
    floor: 'Poddasze',
    area: '55 m²',
    rooms: '2 pokoje + antresola',
    desc: 'Skosy i antresola — unikalny charakter, widok na Beskid Sądecki, taras dachowy.',
  },
]

export default function WillaZlocienPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-[#1b222e] flex items-center pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/leszek/krynica2.webp"
            alt="Willa Złocień Krynica-Zdrój"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative container-site">
          <p className="text-xs uppercase tracking-[0.2em] text-[#A97900] mb-4">Krynica-Zdrój · Centrum uzdrowiska</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 max-w-2xl">
            Willa Złocień — mieszkania w uzdrowisku
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Historyczna willa z przełomu wieków w centrum Krynicy-Zdroju — po rewitalizacji z naciskiem na energooszczędność i zachowanie zabytkowego charakteru. Sprzedaż bezpośrednio przez biuro architektoniczne prowadzące projekt.
          </p>
          <a href="mailto:cholujdesign@gmail.com?subject=Willa Złocień — zapytanie o mieszkanie" className="btn-primary">
            Zapytaj o mieszkanie
          </a>
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-[#A97900] py-4">
        <div className="container-site flex flex-wrap gap-8 text-white text-sm">
          <span><strong>Lokalizacja:</strong> Krynica-Zdrój — centrum, przy parku zdrojowym</span>
          <span><strong>Budynek:</strong> zabytkowa willa drewniana, ok. 1900 r.</span>
          <span><strong>Rewitalizacja:</strong> 2022–2024</span>
          <span><strong>Standard:</strong> wysoki, pompa ciepła, drewniana stolarka</span>
        </div>
      </div>

      {/* O projekcie */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#A97900] mb-3">O inwestycji</p>
              <h2 className="font-display text-3xl text-[#1b222e] mb-6">Uzdrowisko na co dzień — nie tylko na wakacje</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Willa Złocień to historyczna drewniana willa w centrum Krynicy-Zdroju, wpisana do gminnej ewidencji zabytków. Rewitalizacja prowadzona przez CHD Architekci obejmuje pełną modernizację przy zachowaniu oryginalnej elewacji drewnianej, historycznej stolarki okiennej i charakteru wnętrz z przełomu XIX i XX wieku.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Budynek wyposażony w pompę ciepła powietrzną z kotłem szczytowym — niskie koszty ogrzewania przy zachowaniu wygody całorocznego użytkowania. Izolacja termiczna wykonana materiałami kompatybilnymi z drewnem (włókno drzewne) — bez ryzyka problemów z kondensacją.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Mieszkania w centrum uzdrowiska to lokata, która łączy wartość historyczną nieruchomości z komfortem użytkowania zgodnym z dzisiejszymi standardami.
              </p>
              <Link href="/portfolio/krynica-zdroj-willa-zlocien" className="text-[#A97900] text-sm tracking-widest uppercase hover:underline">
                Zobacz projekt architektoniczny →
              </Link>
            </div>
            <div className="relative aspect-[4/3]">
              <Image src="/images/krynica3.webp" alt="Willa Złocień Krynica-Zdrój" fill className="object-cover" />
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
                  href={`mailto:cholujdesign@gmail.com?subject=Willa Złocień — lokal ${apt.id} (${apt.area})`}
                  className="text-xs uppercase tracking-widest text-[#A97900] hover:underline"
                >
                  Zapytaj o cenę →
                </a>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-8">Ceny dostępne po kontakcie bezpośrednim. Możliwość indywidualnego wykończenia w standardzie projektu wnętrz prowadzonego przez CHD.</p>
        </div>
      </section>

      {/* Standard */}
      <section className="py-20 bg-[#1b222e]">
        <div className="container-site">
          <p className="text-xs uppercase tracking-widest text-[#A97900] mb-3">Standard techniczny</p>
          <h2 className="font-display text-3xl text-white mb-10">Co wchodzi w zakres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Elewacja', desc: 'Drewniana, odrestaurowana. Lazura paroprzepuszczalna, impregnacja głęboka — trwałość min. 15 lat.' },
              { title: 'Okna', desc: 'Drewniane skrzynkowe z szybą zespoloną — historyczny profil, współczesne parametry termiczne.' },
              { title: 'Ogrzewanie', desc: 'Pompa ciepła powietrzna + kocioł szczytowy. Niskie koszty eksploatacji całorocznie.' },
              { title: 'Tynki', desc: 'Wapno hydrauliczne wewnątrz — oddychające ściany, brak ryzyka zawilgocenia.' },
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
        title="Interesuje Cię lokal w Willi Złocień?"
        description="Skontaktuj się bezpośrednio. Odpowiemy na pytania o projekt, standard i dostępność."
        dark={false}
      />
    </>
  )
}
