import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { getProjectBySlug } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Interiors — apartments, restaurants, bespoke design | Kraków',
  description:
    'Interior design for apartments, villas, restaurants and public spaces. Bespoke design with full project management available. CHD Chołuj Design — Kraków.',
  alternates: {
    canonical: `${SITE_URL}/en/interiors`,
    languages: { pl: `${SITE_URL}/wnetrza`, en: `${SITE_URL}/en/interiors` },
  },
  openGraph: {
    title: 'Interiors — CHD Chołuj Design',
    url: `${SITE_URL}/en/interiors`,
    images: [{ url: '/images/kurkaWodna.webp', width: 1920, height: 1080, alt: 'CHD Interiors — Kurka Wodna, Kraków' }],
  },
}

const KURKA_STATS = [
  { label: 'Year', value: '2014' },
  { label: 'Location', value: 'Kanonicza 15, Kraków' },
  { label: 'Type', value: 'Restaurant' },
  { label: 'Scope', value: 'Design + build' },
]

const KURKA_SCOPE = [
  'Spatial concept and functional layout',
  'Interior design and material selection',
  'Bespoke furniture and joinery',
  'Decorative and technical lighting',
  'Author supervision during construction',
]

const WWA_PROCESS = [
  { step: '01', title: 'Concept', desc: 'Needs analysis, lifestyle brief, moodboard. Initial functional layout and stylistic direction.' },
  { step: '02', title: 'Construction documents', desc: 'Technical drawings, material specifications, electrical and plumbing design.' },
  { step: '03', title: 'Author supervision', desc: 'Site presence, compliance checks, on-the-spot material and technical decisions.' },
  { step: '04', title: 'General contracting', desc: 'Single point of contact for the client. Coordination of all trades — from demolition to finishing.' },
  { step: '05', title: 'Site management', desc: 'Work schedule, subcontractor billing, partial and final handover protocols.' },
]

export default function EnInteriorsPage() {
  const kurkaWodna    = getProjectBySlug('kurka-wodna')
  const mieszkanieWwa = getProjectBySlug('mieszkanie-wwa')
  const uzdrowisko    = getProjectBySlug('uzdrowisko-bistro')
  const dzienDobry    = getProjectBySlug('dzien-dobry-cafe')
  const nycStair      = getProjectBySlug('eliptical-duplex-stair-nyc')
  const m15a          = getProjectBySlug('mieszkanie-15a')
  const m15b          = getProjectBySlug('mieszkanie-15b')
  const m15c          = getProjectBySlug('mieszkanie-15c')

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/en' },
          { name: 'Interiors', href: '/en/interiors' },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kurkaWodna.webp"
            alt="CHD Interiors — Kurka Wodna, Kraków"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="container-site relative z-10 pt-32 pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Interior design</p>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6 max-w-3xl">
            Spaces that tell stories.
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-10">
            Bespoke design for a specific person and a specific place.
            From a café on Kanonicza Street to apartments in New York.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/en/contact" className="btn-primary">
              Let&apos;s talk about your project
            </Link>
            <Link
              href="/en/portfolio"
              className="border border-white/40 text-white/80 hover:bg-white/10 transition-colors px-8 py-3 text-xs tracking-widest uppercase inline-flex items-center"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ─────────────────────────────────── */}
      <FadeIn>
        <section className="py-16 bg-gold">
          <div className="container-site">
            <p className="text-white/90 text-center text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              Over <strong className="text-white">20 years</strong> of interior design in Kraków and abroad.
              From restaurants on <strong className="text-white">Kanonicza Street</strong> to apartments at{' '}
              <strong className="text-white">11 West 57th, New York</strong>.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── CASE STUDY: KURKA WODNA ──────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Case study — hospitality</p>
            <h2 className="font-display text-4xl text-navy mb-2">Kurka Wodna</h2>
            <p className="text-sm text-gray-400 mb-10">Kanonicza 15, Kraków · 2014</p>
          </FadeIn>

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
                One of CHD&apos;s first and most recognised projects. A bespoke interior concept for a
                restaurant in the heart of Kraków — a tenement on Kanonicza Street, a historic character,
                a modern approach to hospitality space. The design combines raw brick details with warm
                timber accents and bespoke lighting.
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Scope of work</p>
              <ul className="space-y-3 mb-8">
                {KURKA_SCOPE.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-gold shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/en/portfolio/kurka-wodna" className="btn-primary">
                View full project →
              </Link>
            </FadeIn>

            <FadeIn delay={100}>
              {kurkaWodna && (
                <Link href="/en/portfolio/kurka-wodna" className="group block overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={kurkaWodna.images[0]}
                      alt="Kurka Wodna — Kanonicza 15, Kraków"
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

      {/* ── HOSPITALITY INTERIORS ────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Hospitality & public spaces</p>
            <h2 className="section-title">Interiors for people on the move.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-16">
              Restaurants, cafés and bistros — where functionality and atmosphere must work
              simultaneously from morning to evening.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {uzdrowisko && (
              <FadeIn delay={0}>
                <Link
                  href="/en/portfolio/uzdrowisko-bistro"
                  className="group block bg-stone-50 border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={uzdrowisko.images[0]}
                      alt="Uzdrowisko Bistro — Warsaw"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Warsaw · 2023</p>
                    <h3 className="font-display text-2xl text-navy mb-3">Uzdrowisko Bistro</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Interior design for hospital dining spaces — an oncology hospital
                      and a university hospital. Functionality with a warm bistro atmosphere.
                    </p>
                  </div>
                </Link>
              </FadeIn>
            )}

            {dzienDobry && (
              <FadeIn delay={80}>
                <Link
                  href="/en/portfolio/dzien-dobry-cafe"
                  className="group block bg-stone-50 border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={dzienDobry.images[0]}
                      alt="Dzień Dobry Cafe — University Hospital Kraków"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Kraków · 2019</p>
                    <h3 className="font-display text-2xl text-navy mb-3">Dzień Dobry Cafe</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Café in the University Hospital in Kraków. A warm interior that offers
                      a moment of respite in a challenging institutional environment.
                    </p>
                  </div>
                </Link>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* ── APARTMENT CASE STUDY ─────────────────────────── */}
      {mieszkanieWwa && (
        <section className="py-24 bg-stone-50">
          <div className="container-site">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Case study — concept to keys</p>
              <h2 className="font-display text-4xl text-navy mb-2">Warsaw Apartment</h2>
              <p className="text-sm text-gray-400 mb-10">Warsaw · 2022 · approx. 70 m²</p>
            </FadeIn>

            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 mb-10">
                {mieszkanieWwa.images.slice(0, 2).map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <Image
                      src={src}
                      alt={`Warsaw Apartment — view ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-gray-600 leading-relaxed max-w-2xl mb-12">
                A complete apartment delivery in Warsaw — one project, one team, zero scattered responsibility.
                The client received keys, not a coordination headache.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">How the collaboration worked</p>
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
              <Link href="/en/portfolio/mieszkanie-wwa" className="btn-primary">
                View project →
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── NYC STAIR ────────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Case study — New York, USA</p>
            <h2 className="font-display text-4xl text-navy mb-2">Elliptical Duplex Stair</h2>
            <p className="text-sm text-gray-400 mb-10">11 West 57th, Manhattan · 2023</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              {nycStair && (
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <Image
                    src={nycStair.images[0]}
                    alt="Elliptical Duplex Stair — 11 West 57th NYC"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
            </FadeIn>

            <FadeIn delay={100}>
              <p className="text-gray-600 leading-relaxed mb-8">
                Construction documentation and 3D model for an elliptical duplex staircase in one of
                the tallest residential buildings in the world. 11 West 57th — Manhattan.
                The staircase geometry required millimetre precision.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Construction documentation for elliptical staircase',
                  'Precise 3D model — Rhino3D',
                  'Coordination with on-site fabricator',
                  'Documentation compliant with NYC codes',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-gold shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/en/portfolio/eliptical-duplex-stair-nyc" className="btn-primary">
                View project →
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FOREIGN INVESTOR SUPPORT ─────────────────────── */}
      <section className="py-20 bg-stone-900">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">For foreign investors</p>
              <h2 className="font-display text-3xl text-white mb-4">
                We represent foreign investors in Poland.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Clients from the UK, USA and Western Europe buying property in Poland need someone to
                manage everything on the ground. We design, supervise construction, coordinate contractors
                and — if needed — manage the sale of units.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                The investor gets a single point of contact and the assurance that their investment is
                being managed with the same care as if they were on site.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="grid grid-cols-1 gap-px bg-white/10">
                {[
                  { label: 'Design & build', desc: 'Interior design, author supervision, general contracting — all in one.' },
                  { label: 'Investor representation', desc: 'We act as on-site representative. Coordinating authorities, contractors and handovers.' },
                  { label: 'Apartment sales', desc: 'Preparing the unit for sale, marketing materials, full process support for the owner.' },
                ].map((item) => (
                  <div key={item.label} className="bg-stone-900 p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">{item.label}</p>
                    <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/en/contact" className="btn-primary">
                  Get in touch →
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Example projects — Rakowicka 15A, Kraków 2014</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[m15a, m15b, m15c].map((project, i) =>
              project ? (
                <FadeIn key={project.slug} delay={i * 80}>
                  <Link
                    href={`/en/portfolio/${project.slug}`}
                    className="group block overflow-hidden bg-stone-900"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-800">
                      <Image
                        src={project.images[0]}
                        alt={project.titleEn ?? project.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-[0.2em] text-gold mb-1">General contracting</p>
                      <h3 className="font-display text-lg text-white">{project.titleEn ?? project.title}</h3>
                    </div>
                  </Link>
                </FadeIn>
              ) : null
            )}
          </div>
        </div>
      </section>

      <CTA
        title="Have an interior project in mind?"
        description="Tell us about your project — we'll get back to you."
        href="/en/contact"
        label="Get in touch"
      />
    </>
  )
}
