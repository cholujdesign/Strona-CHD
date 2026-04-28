import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { getProjectBySlug } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Architecture — residential, renovations, developer projects | Kraków',
  description:
    'Architecture projects for private clients and developers. Houses, heritage renovations, multi-family buildings. CHD Chołuj Design — Kraków, Poland.',
  alternates: {
    canonical: `${SITE_URL}/en/architecture`,
    languages: { pl: `${SITE_URL}/architektura`, en: `${SITE_URL}/en/architecture` },
  },
  openGraph: {
    title: 'Architecture — CHD Chołuj Design',
    url: `${SITE_URL}/en/architecture`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'CHD Architecture — Pi i Sigma, Rakowicka, Kraków' }],
  },
}

const PRIVATE_LIST = [
  'Single-family and villa projects',
  'Bespoke design for individual plots',
  'Extensions and conversions',
  'Heritage building renovations',
  'Design + author supervision',
  'Full service from concept to handover',
]

const DEVELOPER_LIST = [
  'Multi-family residential buildings',
  'Plot capacity analysis & feasibility study',
  'Layout optimisation for GFA and profitability',
  'Concept designs for investment sales',
  'Building and construction documentation',
  'Heritage renovations',
  'Coordination with authorities and conservation officers',
]

export default function EnArchitecturePage() {
  const rakowicka  = getProjectBySlug('pi-i-sigma-rakowicka')
  const katowice   = getProjectBySlug('pawla-12-katowice')
  const krynica    = getProjectBySlug('krynica-zdroj-willa-zlocien')

  const analiza1      = getProjectBySlug('analiza-1')
  const analiza2      = getProjectBySlug('analiza-2')
  const analiza3      = getProjectBySlug('analiza-3')

  const poludnie      = getProjectBySlug('poludnie-polski-rewitalizacja')
  const eastGrafton   = getProjectBySlug('east-grafton-renovation')
  const domyPrefab    = getProjectBySlug('domy-prefabrykowane')

  const grandHotel        = getProjectBySlug('elewacja-grand-hotel')
  const nycElewacja       = getProjectBySlug('elewacja-nyc-manhattan')
  const szkolaKrosno      = getProjectBySlug('szkola-krosno')
  const szkolaModliniczka = getProjectBySlug('szkola-podstawowa-modliniczka')
  const muzeum            = getProjectBySlug('muzeum-samochodowe-brzozow')
  const domPrefab1        = getProjectBySlug('dom-prefabrykowany-1')
  const domPrefab2        = getProjectBySlug('dom-prefabrykowany-2')
  const domPrefab3        = getProjectBySlug('dom-prefabrykowany-3')
  const domySzeregowe     = getProjectBySlug('domy-szeregowe')

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/en' },
          { name: 'Architecture', href: '/en/architecture' },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/rakowicka151.webp"
            alt="CHD Architecture — Pi i Sigma, Rakowicka, Kraków"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container-site relative z-10 pt-32 pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Architectural services</p>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6 max-w-3xl">
            Architecture that serves people and place.
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-10">
            We design with respect for context — the history of the place, the needs of the users
            and the surrounding space. For private clients and developers.
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
              Projects in <strong className="text-white">Kraków, Katowice and Krynica-Zdrój</strong>.
              From <strong className="text-white">single-family houses</strong> to{' '}
              <strong className="text-white">listed building renovations</strong> — for private
              clients and developers.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── TWO CARDS ───────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Who we design for</p>
            <h2 className="section-title max-w-2xl">Two client types. One approach.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-16">
              Whether you are building a family home or a multi-unit development —
              we start by understanding the context and the goal, not the template.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <FadeIn delay={0}>
              <div className="bg-white p-10 h-full border border-stone-200">
                <h3 className="font-display text-4xl text-navy mb-2">Private clients</h3>
                <p className="text-sm text-gold mb-8 tracking-wide">House, villa, renovation</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  Projects for private investors — from first sketch to building handover.
                  Each project created for a specific plot, a specific family, a specific budget.
                </p>
                <ul className="space-y-3">
                  {PRIVATE_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-gold shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-stone-100">
                  <p className="text-xs text-gray-400">
                    One team, one point of responsibility — from concept to handover.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="bg-stone-900 p-10 h-full">
                <h3 className="font-display text-4xl text-white mb-2">Developers</h3>
                <p className="text-sm text-gold mb-8 tracking-wide">Investments, analysis, documentation</p>
                <p className="text-sm text-white/60 leading-relaxed mb-8">
                  Multi-family projects, heritage renovations and investment analysis for developers.
                  Experience with listed buildings and projects requiring coordination with
                  conservation authorities.
                </p>
                <ul className="space-y-3">
                  {DEVELOPER_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="text-gold shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs text-white/30">
                    Heritage renovations · Kraków · Katowice · Krynica-Zdrój
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── DEVELOPER PROJECTS ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Developer projects</p>
            <h2 className="section-title">Completed investments.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-12">
              Multi-family buildings, tenement and heritage renovations.
              Projects realised in partnership with Idea Development.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[rakowicka, katowice, krynica].map((project, i) =>
              project ? (
                <FadeIn key={project.slug} delay={i * 80}>
                  <Link
                    href={`/en/portfolio/${project.slug}`}
                    className="group block bg-stone-50 border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                      <Image
                        src={project.images[0]}
                        alt={project.titleEn ?? project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-widest text-gold mb-1">
                        {project.location} · {project.year}
                      </p>
                      <h3 className="font-display text-xl text-navy mb-2">{project.titleEn ?? project.title}</h3>
                      <p className="text-xs text-gray-400">{project.roleEn ?? project.role}</p>
                    </div>
                  </Link>
                </FadeIn>
              ) : null
            )}
          </div>

          <FadeIn>
            <div className="mt-1 bg-stone-900 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Apartments for sale</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  We sell apartments directly from the studio — no agents, with full design knowledge
                  of every unit. Foreign investor support available.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: 'Willa Złocień — Krynica', href: '/willa-zlocien' },
                  { label: 'Pawła 12 — Katowice', href: '/pawla-12' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs text-gold border border-gold/40 hover:border-gold hover:text-white transition-colors px-4 py-2 tracking-widest uppercase"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DEVELOPER CONCEPTS & ANALYSES ───────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Developer projects</p>
            <h2 className="section-title">Concepts and investment analyses.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-12">
              Concept designs, plot capacity analyses and feasibility studies
              produced to support investment decisions.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 bg-stone-200">
            {[analiza1, analiza2, analiza3].map((a, i) =>
              a ? (
                <FadeIn key={a.slug} delay={(i + 1) * 80}>
                  <div className="bg-white p-5 h-full">
                    <div className="aspect-[4/3] bg-stone-100 border border-dashed border-stone-300 flex flex-col items-center justify-center mb-4 gap-2">
                      <p className="font-display text-base text-navy">{a.titleEn ?? a.title}</p>
                      <p className="text-xs text-gold">— details coming soon —</p>
                    </div>
                    <p className="font-display text-base text-navy mb-1">{a.titleEn ?? a.title}</p>
                    <p className="text-xs text-gray-400">{a.roleEn ?? a.role}</p>
                  </div>
                </FadeIn>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* ── PRIVATE CLIENTS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Private clients</p>
            <h2 className="section-title">Houses and renovations.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-12">
              Projects for private investors — from renovating an old farmhouse to a modern
              prefabricated home. Each one designed for a specific plot and specific needs.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {[poludnie, eastGrafton, domyPrefab].map((project, i) =>
              project ? (
                <FadeIn key={project.slug} delay={i * 80}>
                  <Link
                    href={`/en/portfolio/${project.slug}`}
                    className="group block bg-stone-50 border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                      <Image
                        src={project.images[0]}
                        alt={project.titleEn ?? project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-8">
                      <p className="text-xs uppercase tracking-widest text-gold mb-1">
                        {project.location} · {project.year}
                      </p>
                      <h3 className="font-display text-2xl text-navy mb-2">{project.titleEn ?? project.title}</h3>
                      <p className="text-sm text-gray-400">{project.roleEn ?? project.role}</p>
                    </div>
                  </Link>
                </FadeIn>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* ── OTHER ────────────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Other projects</p>
            <h2 className="section-title">Commercial and public buildings.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-16">
              Building façades, educational buildings, museums and timber houses —
              projects outside the main portfolio categories.
            </p>
          </FadeIn>

          {/* Façades */}
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Façades</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-12">
            {grandHotel && (
              <FadeIn delay={0}>
                <Link
                  href={`/en/portfolio/${grandHotel.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={grandHotel.images[0]}
                      alt={grandHotel.titleEn ?? grandHotel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{grandHotel.location} · {grandHotel.year}</p>
                    <h3 className="font-display text-xl text-navy mb-1">{grandHotel.titleEn ?? grandHotel.title}</h3>
                    <p className="text-xs text-gray-400">{grandHotel.roleEn ?? grandHotel.role}</p>
                  </div>
                </Link>
              </FadeIn>
            )}
            {nycElewacja && (
              <FadeIn delay={80}>
                <Link
                  href={`/en/portfolio/${nycElewacja.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={nycElewacja.images[0]}
                      alt={nycElewacja.titleEn ?? nycElewacja.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{nycElewacja.location} · {nycElewacja.year}</p>
                    <h3 className="font-display text-xl text-navy mb-1">{nycElewacja.titleEn ?? nycElewacja.title}</h3>
                    <p className="text-xs text-gray-400">{nycElewacja.roleEn ?? nycElewacja.role}</p>
                  </div>
                </Link>
              </FadeIn>
            )}
          </div>

          {/* Schools & museums */}
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Schools & museums</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-12">
            {szkolaKrosno && (
              <FadeIn delay={0}>
                <Link
                  href={`/en/portfolio/${szkolaKrosno.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={szkolaKrosno.images[0]}
                      alt={szkolaKrosno.titleEn ?? szkolaKrosno.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{szkolaKrosno.location} · {szkolaKrosno.year}</p>
                    <h3 className="font-display text-xl text-navy mb-1">{szkolaKrosno.titleEn ?? szkolaKrosno.title}</h3>
                    <p className="text-xs text-gray-400">{szkolaKrosno.roleEn ?? szkolaKrosno.role}</p>
                  </div>
                </Link>
              </FadeIn>
            )}
            {szkolaModliniczka && (
              <FadeIn delay={80}>
                <Link
                  href={`/en/portfolio/${szkolaModliniczka.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={szkolaModliniczka.images[0]}
                      alt={szkolaModliniczka.titleEn ?? szkolaModliniczka.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{szkolaModliniczka.location} · {szkolaModliniczka.year}</p>
                    <h3 className="font-display text-xl text-navy mb-1">{szkolaModliniczka.titleEn ?? szkolaModliniczka.title}</h3>
                    <p className="text-xs text-gray-400">{szkolaModliniczka.roleEn ?? szkolaModliniczka.role}</p>
                  </div>
                </Link>
              </FadeIn>
            )}
            {muzeum && (
              <FadeIn delay={160}>
                <Link
                  href={`/en/portfolio/${muzeum.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={muzeum.images[0]}
                      alt={muzeum.titleEn ?? muzeum.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{muzeum.location} · {muzeum.year}</p>
                    <h3 className="font-display text-xl text-navy mb-1">{muzeum.titleEn ?? muzeum.title}</h3>
                    <p className="text-xs text-gray-400">{muzeum.roleEn ?? muzeum.role}</p>
                  </div>
                </Link>
              </FadeIn>
            )}
          </div>

          {/* Prefabricated & system homes */}
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Prefabricated & system homes</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[domPrefab1, domPrefab2, domPrefab3].map((p, i) => p && (
              <FadeIn key={p.slug} delay={i * 80}>
                <Link
                  href={`/en/portfolio/${p.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={p.images[0]}
                      alt={p.titleEn ?? p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{p.year}</p>
                    <h3 className="font-display text-xl text-navy mb-1">{p.titleEn ?? p.title}</h3>
                    <p className="text-xs text-gray-400">{p.roleEn ?? p.role}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROW HOUSES ───────────────────────────────────── */}
      {domySzeregowe && (
        <FadeIn>
          <section className="py-24 bg-white border-t border-stone-100">
            <div className="container-site">
              <FadeIn>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Terraced housing</p>
                <h2 className="section-title">Row houses.</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-12">
                  A series of semi-detached single-family houses — optimised for function,
                  cost and buyer appeal.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-2xl">
                <FadeIn delay={0}>
                  <Link
                    href={`/en/portfolio/${domySzeregowe.slug}`}
                    className="group block bg-stone-50 border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                      <Image
                        src={domySzeregowe.images[0]}
                        alt={domySzeregowe.titleEn ?? domySzeregowe.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-widest text-gold mb-1">
                        {domySzeregowe.location} · {domySzeregowe.year}
                      </p>
                      <h3 className="font-display text-xl text-navy mb-1">{domySzeregowe.titleEn ?? domySzeregowe.title}</h3>
                      <p className="text-xs text-gray-400">{domySzeregowe.roleEn ?? domySzeregowe.role}</p>
                    </div>
                  </Link>
                </FadeIn>
              </div>
            </div>
          </section>
        </FadeIn>
      )}

      {/* ── BLOG ARTICLES ────────────────────────────────── */}
      <section className="py-16 bg-stone-50">
        <div className="container-site">
          <p className="text-xs uppercase tracking-widest text-gold mb-3">From the blog</p>
          <h2 className="font-display text-2xl text-navy mb-8">Articles on architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                slug: 'rakowicka-15a-plomba-architektoniczna',
                title: 'Rakowicka 15A — designing an infill building in Kraków',
                cat: 'Architecture',
              },
              {
                slug: 'rewitalizacja-zabytkow-jak-to-dziala',
                title: 'Heritage renovations — what to know before you buy',
                cat: 'Architecture',
              },
              {
                slug: 'pawla-12-katowice-rewitalizacja',
                title: 'Pawła 12, Katowice — tenement renovation in the city centre',
                cat: 'Architecture',
              },
            ].map((post) => (
              <a
                key={post.slug}
                href={`/en/blog/${post.slug}`}
                className="group bg-white p-6 border border-stone-200 hover:border-gold transition-colors"
              >
                <p className="text-xs uppercase tracking-widest text-gold mb-2">{post.cat}</p>
                <h3 className="font-display text-base text-navy group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Have a building project?"
        description="We'll assess the possibilities and prepare an initial concept."
        href="/en/contact"
        label="Get in touch"
      />
    </>
  )
}
