import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/ui/Hero'
import ProjectCard from '@/components/ui/ProjectCard'
import CTA from '@/components/ui/CTA'
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { projects } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Architekt Kraków — projekty domów, wnętrz i rewitalizacji | CHD Architekci',
  description:
    'Szukasz architekta w Krakowie? CHD Architekci — projekty domów jednorodzinnych, wnętrz, rewitalizacje zabytków. Rynek Główny 43, Kraków. Tel: +48 509 446 704.',
  alternates: { canonical: `${SITE_URL}/architekt-krakow` },
  openGraph: {
    title: 'Architekt Kraków — CHD Architekci',
    url: `${SITE_URL}/architekt-krakow`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'Architekt Kraków — CHD Architekci, Rynek Główny 43' }],
  },
}

const types = [
  { label: 'Projekty domów', desc: 'Domy jednorodzinne i wielorodzinne w Krakowie i okolicach.' },
  { label: 'Wnętrza', desc: 'Projekty mieszkań, apartamentów i lokali usługowych.' },
  { label: 'Rewitalizacje', desc: 'Modernizacja zabytkowych kamienic i willi.' },
  { label: 'Projekty komercyjne', desc: 'Biura, lokale gastronomiczne, przestrzenie publiczne.' },
]

const experience = [
  { value: '20+', label: 'lat doświadczenia' },
  { value: '50+', label: 'zrealizowanych projektów' },
  { value: '3', label: 'rynki: PL, UK, USA' },
]

const krakowProjects = projects.filter(
  (p) =>
    p.location?.toLowerCase().includes('kraków') ||
    p.location?.toLowerCase().includes('krakow') ||
    p.location?.toLowerCase().includes('wieliczka')
)

export default function ArchitektKrakowPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Architekt Kraków', href: '/architekt-krakow' },
        ]}
      />

      <Hero
        subtitle="Architekt Kraków"
        title="Pracownia architektoniczna w centrum Krakowa."
        description="CHD Architekci projektują domy, wnętrza i rewitalizacje zabytków od ponad 20 lat. Biuro przy Rynku Głównym 43."
        ctaLabel="Umów spotkanie"
        ctaHref="/kontakt"
        secondaryCtaLabel="Zobacz realizacje"
        secondaryCtaHref="/portfolio"
        size="medium"
      />

      {/* Typy projektów */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <p className="section-subtitle">Co projektujemy w Krakowie</p>
          <h2 className="section-title max-w-xl">Pełny zakres usług architektonicznych.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {types.map((t) => (
              <div key={t.label} className="border-t-2 border-gold pt-6">
                <h3 className="font-display text-lg text-navy mb-2">{t.label}</h3>
                <p className="text-sm text-gray-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doświadczenie */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle">Doświadczenie</p>
              <h2 className="section-title">Pracownia z historią i międzynarodowym zasięgiem.</h2>
              <p className="text-gray-600 leading-relaxed mt-4">
                CHD Architekci działają w Krakowie od ponad 20 lat. Nasze projekty to domy, wnętrza, rewitalizacje zabytkowych kamienic i obiekty na Rynku Głównym. Równolegle współpracujemy z biurami architektonicznymi w Londynie i Nowym Jorku.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Biuro przy Rynku Głównym 43 — w samym centrum Krakowa.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {experience.map((e) => (
                <div key={e.label} className="text-center border border-gray-100 p-8">
                  <p className="font-display text-4xl text-gold mb-2">{e.value}</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{e.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wybrane projekty z Krakowa */}
      {krakowProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-site">
            <p className="section-subtitle">Realizacje w Krakowie i okolicach</p>
            <h2 className="section-title">Wybrane projekty.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-10">
              {krakowProjects.slice(0, 6).map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/portfolio" className="btn-outline">
                Całe portfolio →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Proces */}
      <section className="py-20 bg-stone-50">
        <div className="container-site max-w-3xl">
          <p className="section-subtitle">Jak zacząć</p>
          <h2 className="section-title">Prosta droga od pomysłu do projektu.</h2>
          <ol className="space-y-6 mt-10">
            {[
              'Skontaktuj się telefonicznie, e-mailem lub przez formularz.',
              'Umówimy wstępne spotkanie — w biurze przy Rynku Głównym lub online.',
              'Omówimy Twój projekt i przygotujemy bezpłatną wstępną wycenę.',
              'Zaczynamy pracę po podpisaniu umowy i ustaleniu harmonogramu.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-6">
                <span className="font-display text-2xl text-gold min-w-[2rem]">0{i + 1}</span>
                <p className="text-gray-600 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA
        title="Umów się na spotkanie w Krakowie"
        description="Biuro przy Rynku Głównym 43. Zapraszamy na rozmowę."
        label="Skontaktuj się"
      />
    </>
  )
}
