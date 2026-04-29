import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { getFeaturedProjects } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Services — Architecture, Interiors, B2B 3D | CHD Architekci',
  description:
    'From concept to handover. Architecture, interior design and B2B 3D — full service or at a chosen stage. CHD Chołuj Design, Kraków.',
  alternates: {
    canonical: `${SITE_URL}/en/services`,
    languages: { pl: `${SITE_URL}/zakres`, en: `${SITE_URL}/en/services` },
  },
  openGraph: {
    title: 'Services — CHD Architekci',
    url: `${SITE_URL}/en/services`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'CHD services — architecture, interiors, 3D' }],
  },
}

const SERVICES = [
  {
    title: 'Residential buildings',
    tagline: 'House, apartment, multi-family building.',
    desc: 'We design houses, apartments and multi-family buildings — from a small suburban plot to developer investments. We focus on the needs of future users and a realistic budget, not trends.',
    points: [
      'Concept and construction documentation',
      'Author supervision and site management',
      'Visualisations and 3D models',
      'Plot capacity analysis and feasibility',
      'Adaptation of existing designs',
    ],
    why: [
      'Over 15 years of projects at various scales',
      'Realistic approach to budget and schedule',
      'Clients return with further commissions',
    ],
    href: '/en/architecture',
  },
  {
    title: 'Hospitality & retail',
    tagline: 'Cafés, restaurants, bistros, office spaces.',
    desc: 'A good hospitality design increases throughput, reduces service costs and builds the identity of the place. We have designed venues in historic tenement buildings in Kraków, hospitals and hotel properties.',
    points: [
      'Interior design and bespoke furniture',
      'Functional consultancy (counter layout, back-of-house, sanitation)',
      'Visualisations and CGI for sales',
      'Marketing materials and visual identity',
      'Signage design compliant with local landscape regulations',
    ],
    why: [
      'Over 10 completed hospitality interiors',
      'Kurka Wodna, Szoberowska — in the historic centre of Kraków',
      'Uzdrowisko Bistro, Dzień Dobry Cafe — hospitality in hospital settings',
    ],
    href: '/en/interiors',
  },
  {
    title: 'Hotels & serviced apartments',
    tagline: 'Short-stay spaces — from villas to investment apartments.',
    desc: 'Designing rental spaces differs from designing private homes. A well-designed property directly affects occupancy, reviews and return on investment. We have worked on properties in Poland and the UK.',
    points: [
      'Functional and interior design',
      'Construction documentation',
      'CGI and sales visualisations',
      'Feasibility study and business consultancy',
      'Full investment process management',
    ],
    why: [
      'First-hand experience managing rental apartments',
      'Collaboration with MA Architecture (UK) — London projects',
      'Projects in Kraków and Krynica-Zdrój',
    ],
    href: '/en/portfolio',
  },
  {
    title: 'Heritage renovations',
    tagline: 'Tenements, villas, buildings in conservation zones.',
    desc: 'A large proportion of our projects are listed or heritage-protected buildings. We know the procedures, materials and how to work with conservation authorities — a listed building is a design context for us, not a bureaucratic obstacle.',
    points: [
      'Survey and documentation of existing state',
      'Design meeting conservation requirements',
      'Coordination with conservation officers',
      'Selection of appropriate materials and techniques',
      'Advice on grants and tax incentives',
    ],
    why: [
      'Pawła 12 Katowice, Willa Złocień Krynica, Kurka Wodna — Kanonicza',
      'Our studio is at Rynek Główny 43 — personal experience in Kraków\'s Zone A',
    ],
    href: '/en/architecture',
  },
  {
    title: 'B2B / CGI / 3D modelling',
    tagline: 'Documentation and visualisations for architecture firms.',
    desc: 'We collaborate with architecture firms in Poland, USA and UK. We produce project documentation, BIM and Rhino models, visualisations, animations and VR files — at the pace and in the format ready to use in your existing workflow.',
    points: [
      'Detailed 3D models (Rhino3D, Solidworks, BIM)',
      'Construction and shop drawings',
      'CGI, animations, 360° panoramas, VR',
      'Parametric scripts (Grasshopper)',
      'Point cloud processing and as-built modelling',
    ],
    why: [
      '8+ years of B2B collaboration with UK and US firms',
      'NYC 111 West 57th, California Villa — references',
      'We integrate into your existing workflow',
    ],
    href: '/en/b2b-3d',
  },
  {
    title: 'Developer marketing & web',
    tagline: 'Marketing tools for investment projects.',
    desc: 'CGI, animations, VR tours, websites and marketing materials for developers. We prepare everything needed to sell an investment before it is built.',
    points: [
      'CGI and architectural animations',
      'VR tours (Unreal Engine)',
      '360° panoramas',
      'Developer websites and landing pages',
      'Print and digital marketing materials',
    ],
    why: [
      'End-to-end production from 3D to final render',
      'Experience with both Polish and international developers',
    ],
    href: '/en/b2b-3d',
  },
  {
    title: 'Foreign investor support',
    tagline: 'Full representation for clients based abroad.',
    desc: 'Foreign clients purchasing property in Poland need someone to manage everything on the ground. We design, supervise construction, coordinate contractors and — if needed — manage the sale of units.',
    points: [
      'Project design and on-site supervision',
      'Investor representation (POA)',
      'Coordination with authorities and contractors',
      'Apartment preparation and sales support',
    ],
    why: [
      'Active collaboration with UK and US clients',
      'English-speaking team',
    ],
    href: '/en/contact',
  },
  {
    title: 'Ecological design & energy certificates',
    tagline: 'Energy-efficient and sustainable architecture.',
    desc: 'Energy performance certificates, passive house design, renewable energy integration. We help clients meet current and future energy regulations — in Poland and the EU.',
    points: [
      'Energy performance certificates (EPC)',
      'Passive and low-energy design',
      'Renewable energy consultancy',
      'BREEAM / LEED guidance',
    ],
    why: [
      'Integrated approach — design and certification in one studio',
    ],
    href: '/en/contact',
  },
]

const WHAT_CLIENT_GETS = [
  {
    title: 'Concept design',
    items: ['Sketch studies and alternatives', 'Floor plan optimisation', 'Moodboard and material palette', 'Initial 3D model', '2 rounds of revisions included'],
  },
  {
    title: 'Construction documentation',
    items: ['Building permit drawings', 'Construction details', 'MEP coordination', 'Technical specifications', 'BIM model if required'],
  },
  {
    title: 'Delivery',
    items: ['Author supervision', 'General contracting (optional)', 'Contractor coordination', 'Acceptance protocol', 'Snag list and resolution'],
  },
]

export default function EnServicesPage() {
  const featured = getFeaturedProjects()

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/en' },
          { name: 'Services', href: '/en/services' },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-center bg-stone-900 overflow-hidden pt-32 pb-20">
        <div className="container-site relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Full-spectrum capability</p>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6 max-w-3xl">
            Services.
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            From concept to handover. Architecture, interiors and B2B 3D —
            full service or at a chosen stage. Three disciplines, one integrated process.
          </p>
        </div>
      </section>

      {/* ── WHAT CLIENT GETS ─────────────────────────────── */}
      <FadeIn>
        <section className="py-20 bg-white">
          <div className="container-site">
            <p className="section-subtitle">What you get</p>
            <h2 className="section-title max-w-xl">Clear deliverables at every stage.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-12">
              {WHAT_CLIENT_GETS.map((col, i) => (
                <FadeIn key={col.title} delay={i * 80}>
                  <div className="bg-stone-50 p-8 h-full">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">{col.title}</p>
                    <ul className="space-y-2">
                      {col.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="text-gold shrink-0 mt-0.5">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── ACCORDION — SERVICE TYPES ──────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Service types</p>
            <h2 className="section-title max-w-xl mb-12">What we work on.</h2>
          </FadeIn>

          <div className="space-y-px">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 40}>
                <details className="group bg-white">
                  <summary className="flex items-center justify-between cursor-pointer px-8 py-6 select-none list-none">
                    <div>
                      <p className="font-display text-xl text-navy group-open:text-gold transition-colors">{s.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{s.tagline}</p>
                    </div>
                    <span className="text-gold text-xl font-light ml-4 shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>

                  <div className="px-8 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-stone-100">
                      <div className="md:col-span-2">
                        <p className="text-sm text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                        <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-3">Scope of work</p>
                        <ul className="space-y-2 mb-6">
                          {s.points.map((pt) => (
                            <li key={pt} className="flex items-start gap-3 text-sm text-gray-600">
                              <span className="text-gold shrink-0 mt-0.5">—</span>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-3">Why CHD</p>
                        <ul className="space-y-2 mb-6">
                          {s.why.map((w) => (
                            <li key={w} className="flex items-start gap-3 text-sm text-gray-500">
                              <span className="text-gold shrink-0 mt-0.5">—</span>
                              {w}
                            </li>
                          ))}
                        </ul>
                        <Link href={s.href} className="text-xs uppercase tracking-widest text-gold hover:text-navy transition-colors">
                          Learn more →
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

      {/* ── SELECTED PROJECTS ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Portfolio</p>
            <h2 className="section-title mb-12">Selected projects.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {featured.slice(0, 3).map((project, i) => (
              <FadeIn key={project.slug} delay={i * 80}>
                <Link
                  href={`/en/portfolio/${project.slug}`}
                  className="group block bg-stone-50 border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  {project.images[0] && (
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                      <img
                        src={project.images[0]}
                        alt={project.titleEn ?? project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{project.location}</p>
                    <h3 className="font-display text-xl text-navy">{project.titleEn ?? project.title}</h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-10 text-center">
              <Link href="/en/portfolio" className="btn-primary">
                View all projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA
        title="Not sure where to start?"
        description="Tell us about your project and we'll suggest the right scope."
        href="/en/contact"
        label="Get in touch"
      />
    </>
  )
}
