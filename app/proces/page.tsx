import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import CTA from '@/components/ui/CTA'
import Accordion from '@/components/ui/Accordion'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Proces współpracy — Chołuj Design',
  description:
    'Zobacz jak wygląda współpraca z Chołuj Design przy projektach wnętrz, inwestycjach deweloperskich i współpracy B2B.',
  alternates: { canonical: `${SITE_URL}/proces` },
  openGraph: {
    title: 'Proces współpracy — Chołuj Design',
    url: `${SITE_URL}/proces`,
  },
}

const content = {
  hero: {
    eyebrow: 'Jak pracujemy',
    title: 'Proces współpracy',
    description:
      'Każdy projekt prowadzimy indywidualnie, ale opieramy się na jasnym procesie: rozpoznanie potrzeb, decyzje projektowe, opracowanie i wdrożenie.',
  },
  individual: {
    eyebrow: 'Klient indywidualny',
    description:
      'Dla projektów wnętrz i przestrzeni prywatnych ważne jest zrozumienie miejsca, sposobu życia i oczekiwań inwestora. Proces prowadzimy tak, aby decyzje projektowe były czytelne i możliwe do przełożenia na realizację.',
    steps: [
      { n: '01', title: 'Rozmowa i rozpoznanie potrzeb' },
      { n: '02', title: 'Koncepcja' },
      { n: '03', title: 'Rozwój projektu' },
      { n: '04', title: 'Dokumentacja' },
      { n: '05', title: 'Nadzór lub wsparcie realizacji' },
    ],
  },
  b2b: {
    eyebrow: 'Deweloper / B2B',
    description:
      'W projektach dla deweloperów i biur architektonicznych pracujemy technicznie i procesowo. Ważna jest precyzja, komunikacja, zgodność zakresu oraz możliwość wykorzystania materiałów w dalszych etapach projektu lub sprzedaży.',
    steps: [
      { n: '01', title: 'Analiza materiałów i zakresu' },
      { n: '02', title: 'Koncepcja / optymalizacja' },
      { n: '03', title: 'Model, dokumentacja lub opracowanie projektowe' },
      { n: '04', title: 'Iteracje i koordynacja' },
      { n: '05', title: 'Finalny pakiet materiałów' },
    ],
  },
  faq: [
    {
      question: 'Kiedy najlepiej się zgłosić?',
      answer:
        'Najlepiej możliwie wcześnie — przed podjęciem kluczowych decyzji projektowych, zakupowych lub wykonawczych.',
    },
    {
      question: 'Czy trzeba mieć gotowy brief?',
      answer:
        'Nie. Brief może powstać w trakcie pierwszych rozmów. W przypadku B2B pomocne są materiały techniczne, rysunki, modele lub referencje.',
    },
    {
      question: 'Czy pracujecie zdalnie?',
      answer:
        'Tak, szczególnie przy współpracy B2B i projektach zagranicznych. Przy projektach lokalnych możliwa jest również praca na miejscu.',
    },
    {
      question: 'Czy zajmujecie się nadzorem?',
      answer: 'Tak, w wybranych projektach. Zakres nadzoru ustalamy indywidualnie.',
    },
    {
      question: 'Czy można zacząć od samej koncepcji?',
      answer:
        'Tak. Zakres może obejmować samą koncepcję, pełny projekt albo wybrany etap współpracy.',
    },
  ],
}

function StepList({ steps }: { steps: { n: string; title: string }[] }) {
  return (
    <ol className="space-y-0">
      {steps.map((step, i) => (
        <li key={step.n} className="flex items-start gap-5 py-4 border-b border-gray-100 last:border-0">
          <span className="font-display text-sm text-gold w-8 shrink-0 pt-0.5">{step.n}</span>
          <span className="text-navy text-sm">{step.title}</span>
        </li>
      ))}
    </ol>
  )
}

export default function ProcesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Proces', href: '/proces' },
        ]}
      />

      {/* Hero */}
      <section className="bg-stone-50 pt-32 pb-20">
        <div className="container-site">
          <p className="section-subtitle">{content.hero.eyebrow}</p>
          <h1 className="font-display text-5xl md:text-7xl text-navy mb-8 max-w-2xl">
            {content.hero.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Dwie ścieżki */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Klient indywidualny */}
            <div className="border-t-2 border-gold pt-8">
              <p className="section-subtitle">{content.individual.eyebrow}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-10 max-w-sm">
                {content.individual.description}
              </p>
              <StepList steps={content.individual.steps} />
            </div>

            {/* Deweloper / B2B */}
            <div className="border-t-2 border-gold pt-8">
              <p className="section-subtitle">{content.b2b.eyebrow}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-10 max-w-sm">
                {content.b2b.description}
              </p>
              <StepList steps={content.b2b.steps} />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <p className="section-subtitle">Najczęstsze pytania</p>
            </div>
            <div>
              <Accordion items={content.faq} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCES PROJEKTOWY ────────────────────────────── */}
      <FadeIn>
        <section className="py-24 bg-stone-50 border-t border-stone-200">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

              <div>
                <p className="section-subtitle">Proces projektowy</p>
                <h2 className="font-display text-3xl md:text-4xl text-navy mb-6 leading-tight">
                  Jak myślimy<br/>o projekcie.
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  Każdy projekt — niezależnie od skali — przechodzi przez te same fazy myślenia.
                  Różni się tempo, narzędzia i głębokość, ale logika pozostaje ta sama.
                </p>
                <Link
                  href="/blog"
                  className="text-xs uppercase tracking-widest text-gold hover:underline"
                >
                  Case studies i artykuły →
                </Link>
              </div>

              <div className="space-y-0 border-t border-stone-200">
                {[
                  {
                    n: '01',
                    title: 'Analiza i research',
                    desc: 'Miejsce, kontekst historyczny, warunki fizyczne, otoczenie — projekt zaczyna się od zrozumienia, nie od rysowania. Dla projektów badawczych: analiza precedensów i literatury.',
                  },
                  {
                    n: '02',
                    title: 'Koncepcja',
                    desc: 'Jeden lub kilka kierunków — szkice, diagramy, modele przestrzenne. Szukamy generatora formy: może to być światło, struktura, ruch, geometria lub relacja z otoczeniem.',
                  },
                  {
                    n: '03',
                    title: 'Weryfikacja i iteracje',
                    desc: 'Konfrontacja koncepcji z realiami: technologią, budżetem, przepisami, użytkownikiem. Iteracje — każda runda wnosi precyzję i usuwa to, co zbędne.',
                  },
                  {
                    n: '04',
                    title: 'Dokumentacja',
                    desc: 'Projekt techniczny, rysunki wykonawcze, modele BIM lub 3D. Dokumentacja jest przekładem myślenia projektowego na język, który rozumie ekipa budowlana.',
                  },
                  {
                    n: '05',
                    title: 'Realizacja i nadzór',
                    desc: 'Projekt żyje na placu budowy. Nadzór autorski to nie kontrola — to kontynuacja rozmowy między intencją a materią. Budowa zawsze stawia pytania, na które projekt musi odpowiedzieć.',
                  },
                ].map((step) => (
                  <div key={step.n} className="grid grid-cols-[3rem_1fr] gap-6 py-8 border-b border-stone-200 last:border-0">
                    <span className="font-display text-2xl text-gold leading-none pt-1">{step.n}</span>
                    <div>
                      <p className="font-display text-lg text-navy mb-2">{step.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── BLOG LINK ─────────────────────────────────────── */}
      <FadeIn>
        <section className="py-16 bg-stone-900">
          <div className="container-site">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Blog</p>
                <p className="font-display text-2xl text-white">Projekty badawcze i artykuły.</p>
              </div>
              <Link
                href="/blog"
                className="shrink-0 border border-gold text-gold px-8 py-4 text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition-colors"
              >
                Przejdź do bloga →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
              {[
                { href: '/blog/newhaven-place-of-disappearance', image: '/images/brighton.webp', title: 'Newhaven, Place of Disappearance', meta: 'Architektura koncepcyjna · 2016' },
                { href: '/blog/east-london-organic-development', image: '/images/oxford.webp', title: 'East London, Organic Development', meta: 'Architektura koncepcyjna · 2018' },
              ].map((post) => (
                <Link key={post.href} href={post.href} className="group block overflow-hidden bg-stone-900">
                  <div className="relative aspect-[16/9] overflow-hidden bg-stone-800">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.15em] text-gold mb-1">{post.meta}</p>
                    <h3 className="font-display text-lg text-white group-hover:text-gold transition-colors">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
<hr/>
      <CTA
        title="Opisz swój projekt"
        description="Krótki opis zakresu pozwoli nam lepiej ocenić, jak możemy pomóc."
        label="Kontakt"
        href="/kontakt"
      />
    </>
  )
}
