import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import HeroVideo from '@/components/ui/HeroVideo'
import { LocalBusinessJsonLd, OrganizationJsonLd } from '@/components/seo/JsonLd'
import { getFeaturedProjects } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'CHD — Architecture, Interiors, B2B 3D | Kraków',
  description:
    'Design studio from Kraków, Poland. Architecture, interior design and B2B 3D — from concept to completion. Projects in Poland, UK and USA.',
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: { pl: SITE_URL, en: `${SITE_URL}/en` },
  },
  openGraph: {
    title: 'CHD — Architecture, Interiors, B2B 3D | Kraków',
    url: `${SITE_URL}/en`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'CHD Architekci — design studio Kraków' }],
  },
}

const blocks = [
  {
    slug: 'eliptical-duplex-stair-nyc',
    image: '/images/nystair1.webp',
    title: 'Elliptical Duplex Stair',
    meta: '111 West 57th, NYC · 2023',
    points: ['B2B', 'Construction documentation', '3D modelling'],
    description:
      'Construction documentation and 3D model of an elliptical duplex staircase in one of the tallest residential buildings in the world — 111 West 57th, New York.',
  },
  {
    slug: 'california-villa',
    image: '/images/ben/VIEW3.webp',
    title: 'California Villa',
    meta: 'California, USA · 2022–2024',
    points: ['B2B', '3D modelling', 'Documentation', 'CGI'],
    description:
      'Three-year B2B collaboration on a prestigious residential development in California. 3D models, construction documentation for stairs and steel elements, CGI visualisations.',
  },
  {
    slug: 'kurka-wodna',
    image: '/images/kurkaWodna.webp',
    title: 'Kurka Wodna',
    meta: 'Kanonicza 15, Kraków · 2014',
    points: ['Interiors', 'Bespoke design', 'Restaurant'],
    description:
      'Bespoke interior design for a restaurant in the heart of Kraków — one of the studio\'s first and most recognised projects. A medieval tenement on Kanonicza Street.',
  },
  {
    slug: 'pawla-12-katowice',
    image: '/images/leszek/pawla12a.webp',
    title: 'Pawła 12, Katowice',
    meta: 'Katowice · 2024',
    points: ['Architecture', 'Renovation', 'Listed building'],
    description:
      'Renovation of a listed tenement building in central Katowice. Project in progress — full modernisation with preservation of the building\'s historic character.',
  },
  {
    slug: 'uzdrowisko-bistro',
    image: '/images/uzdrowiskoBistro.webp',
    title: 'Uzdrowisko Bistro',
    meta: 'Warsaw · 2023',
    points: ['Interiors', 'Restaurant', 'Bespoke design'],
    description:
      'Interior design for hospital dining spaces in Warsaw. A warm bistro atmosphere delivered in a challenging institutional context.',
  },
]

const DOMAINS = [
  {
    href: '/en/architecture',
    label: 'Architecture',
    tagline: 'Buildings that serve people.',
    desc: 'Single-family homes, multi-unit residential, heritage renovations. For private clients and developers.',
    points: ['Individual projects', 'Developer commissions', 'Heritage renovations'],
  },
  {
    href: '/en/interiors',
    label: 'Interiors',
    tagline: 'Spaces that tell stories.',
    desc: 'Apartments, villas, restaurants — bespoke design with full project management available.',
    points: ['Apartments & houses', 'Retail & hospitality', 'Restaurants'],
  },
  {
    href: '/en/b2b-3d',
    label: 'B2B / 3D',
    tagline: 'Tools for professionals.',
    desc: '3D models, construction documentation and CGI for architecture firms in Poland, UK and USA. We integrate into your existing workflow.',
    points: ['3D modelling & BIM documentation', 'CGI · animations · VR', 'USA · UK · Poland'],
  },
]

const PROCESS = [
  { step: '01', title: 'Concept', desc: 'Sketch, analysis, moodboard, feasibility, research.' },
  { step: '02', title: 'Design', desc: 'Technical documentation, BIM.' },
  { step: '03', title: 'Communication', desc: 'CGI, animations, VR.' },
  { step: '04', title: 'Delivery', desc: 'Supervision, general contracting.' },
  { step: '05', title: 'Sales', desc: 'Marketing, website, materials.' },
]

export default function EnHomePage() {
  const featured = getFeaturedProjects()
  const featuredSlugs = new Set(featured.map((p) => p.slug))
  const visibleBlocks = blocks.filter((b) => featuredSlugs.has(b.slug))

  return (
    <>
      <LocalBusinessJsonLd />
      <OrganizationJsonLd />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden bg-stone-900">
        <HeroVideo />
        <div className="absolute inset-0 bg-stone-900/50" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="block w-fit mx-auto text-[5rem] md:text-[8rem] lg:text-[10rem] text-white leading-none tracking-[0.12em] mb-6 border border-white/60 pl-[calc(0.12em+1rem)] pr-4 md:pl-[calc(0.12em+1.5rem)] md:pr-6 lg:pl-[calc(0.12em+2rem)] lg:pr-8 pt-8 md:pt-12 lg:pt-14 pb-2"
            style={{ fontFamily: '"Nanum Myeongjo", Georgia, serif', fontWeight: 400 }}
          >
            CHD
          </h1>
          <p className="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase mb-8">
            Architecture&nbsp;&nbsp;·&nbsp;&nbsp;Interiors&nbsp;&nbsp;·&nbsp;&nbsp;B2B 3D
          </p>
          <div className="bg-black/20 backdrop-blur-sm px-8 py-6 max-w-sm md:max-w-md">
            <p className="text-white/75 text-sm leading-relaxed mb-8">
              Design studio from Kraków, Poland. From interior projects in Kraków to collaboration on 111W57 in New York and California Villa.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/en/services" className="btn-primary text-xs">
                Our services
              </Link>
              <Link
                href="/en/portfolio"
                className="border border-white/30 text-white/70 hover:bg-white/10 transition-colors px-6 py-3 text-xs tracking-widest uppercase"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-white/25 text-[10px] tracking-[0.25em] uppercase">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <FadeIn>
        <section className="py-10 bg-gold">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: '20+', label: 'years of experience' },
                { stat: 'PL · UK · USA', label: 'markets' },
                { stat: 'Arch · Int · B2B', label: 'full-spectrum capability' },
                { stat: '3', label: 'disciplines — one team' },
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

      {/* ── 3 DOMAINS ─────────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">What we do</p>
            <h2 className="section-title max-w-xl">Three specialisations.<br />One integrated process.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mt-14">
            <FadeIn delay={0}>
              <div className="bg-white border border-stone-200 p-10 h-full flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Architecture</p>
                <h3 className="font-display text-2xl text-navy mb-3">Buildings<br/>that serve.</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-1">{DOMAINS[0].desc}</p>
                <ul className="space-y-2 mb-8">
                  {DOMAINS[0].points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-gray-600">
                      <span className="text-gold shrink-0">—</span>{pt}
                    </li>
                  ))}
                </ul>
                <Link href="/en/architecture" className="text-xs uppercase tracking-widest text-gold hover:text-navy transition-colors">
                  Architecture →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <div className="bg-stone-100 p-10 h-full flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Interiors</p>
                <h3 className="font-display text-2xl text-navy mb-3">Spaces<br/>that tell stories.</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-1">{DOMAINS[1].desc}</p>
                <ul className="space-y-2 mb-8">
                  {DOMAINS[1].points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-gray-700">
                      <span className="text-gold shrink-0">—</span>{pt}
                    </li>
                  ))}
                </ul>
                <Link href="/en/interiors" className="text-xs uppercase tracking-widest text-gold hover:text-navy transition-colors">
                  Interiors →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <div className="bg-stone-900 p-10 h-full flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">B2B / 3D</p>
                <h3 className="font-display text-2xl text-white mb-3">Tools<br/>for professionals.</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8 flex-1">{DOMAINS[2].desc}</p>
                <ul className="space-y-2 mb-8">
                  {DOMAINS[2].points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-white/70">
                      <span className="text-gold shrink-0">—</span>{pt}
                    </li>
                  ))}
                </ul>
                <Link href="/en/b2b-3d" className="text-xs uppercase tracking-widest text-gold hover:text-white transition-colors">
                  B2B Collaboration →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PROJECT BLOCKS ────────────────────────────────── */}
      <div className="bg-white">
        {visibleBlocks.map((block, i) => (
          <FadeIn key={block.slug} className="border-b border-stone-100 last:border-b-0">
            <article className="pt-20 pb-16 md:pt-28 md:pb-20">
              <div className="container-site">
                <div className="relative w-full aspect-[16/9] bg-stone-100 overflow-hidden">
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-6 md:gap-16">
                  <FadeIn delay={80}>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
                      {block.title}
                    </h2>
                    <p className="text-xs text-gray-400 mt-2 tracking-wide">{block.meta}</p>
                  </FadeIn>

                  <FadeIn delay={160}>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-4">
                      {block.points.map((p) => (
                        <span key={p} className="text-[11px] uppercase tracking-widest text-gray-400">{p}</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-lg">{block.description}</p>
                    <Link
                      href={`/en/portfolio/${block.slug}`}
                      className="inline-block mt-6 text-[11px] uppercase tracking-widest text-gold hover:underline"
                    >
                      View project →
                    </Link>
                  </FadeIn>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      {/* ── PROCESS STRIP ─────────────────────────────────── */}
      <FadeIn>
        <section className="py-20 bg-stone-900">
          <div className="container-site">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">How we work</p>
                <h2 className="font-display text-3xl text-white">From sketch to handover.</h2>
              </div>
              <Link href="/en/process" className="text-xs uppercase tracking-widest text-gold hover:text-white transition-colors shrink-0">
                Full process →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
              {PROCESS.map((step) => (
                <div key={step.step} className="bg-white/5 p-6">
                  <p className="font-display text-3xl text-gold mb-3">{step.step}</p>
                  <p className="text-sm font-medium text-white mb-2">{step.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── PORTFOLIO LINK ────────────────────────────────── */}
      <FadeIn>
        <section className="py-20 bg-white border-t border-stone-100">
          <div className="container-site text-center">
            <p className="section-subtitle">Portfolio</p>
            <h2 className="section-title mb-8">Selected projects.</h2>
            <Link href="/en/portfolio" className="btn-primary">
              View all projects
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  )
}
