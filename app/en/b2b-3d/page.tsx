import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { getProjectsByCategory } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'B2B Collaboration — 3D modelling, construction documentation, CGI',
  description:
    'We collaborate with architecture firms and construction companies in Poland, the UK and USA. Detailed 3D models, BIM-ready documentation and CGI. Rhino3D, Solidworks, Unreal Engine.',
  alternates: {
    canonical: `${SITE_URL}/en/b2b-3d`,
    languages: { pl: `${SITE_URL}/b2b-3d`, en: `${SITE_URL}/en/b2b-3d` },
  },
  openGraph: {
    title: 'B2B Collaboration — CHD Chołuj Design',
    url: `${SITE_URL}/en/b2b-3d`,
    images: [{ url: '/images/nystair1.webp', width: 1920, height: 1080, alt: 'B2B 3D modelling — CHD, NYC Stair project' }],
  },
}

const TRACK_CGI = [
  'Photorealistic CGI visualisations',
  'Architectural animations and fly-throughs',
  '360° panoramas',
  'Virtual environments and walkthroughs',
  'VR / real-time in Unreal Engine',
]

const TRACK_DOC = [
  'Precise 3D models — 100% from documentation',
  'Construction and shop drawings',
  'BIM import / export (Revit, ArchiCAD)',
  'Formats: .ifc .dwg .dxf .3dm .rvt .fbx',
  'Clash detection before construction',
  'Custom Grasshopper scripts / parametrics',
]

const MARKETS = [
  {
    region: 'USA',
    points: [
      'IBC, local codes — NYC, Chicago, LA',
      'General contractor (GC) workflow',
      'Shop drawings and submittal process',
      'Coordination with steel / timber fabricators',
      'Experience: 11 West 57th, Chicago Sycamore',
    ],
  },
  {
    region: 'United Kingdom',
    points: [
      'UK Building Regulations',
      'Planning permission documentation',
      'Collaboration with architecture offices',
      'British construction documentation standards',
      'Active collaboration: MA Architecture, Brighton',
    ],
  },
  {
    region: 'Poland & Europe',
    points: [
      'Polish technical conditions (WT)',
      'European EN / Eurocode standards',
      'Building and construction drawings',
      'Collaboration with firms and developers',
      'Kraków as operational base',
    ],
  },
]

const WORKFLOW_POINTS = [
  {
    title: 'We join your existing workflow',
    body: 'We don\'t impose our own process. We adapt to your tools and procedures — Revit, BIM 360, Procore, Slack, Basecamp. We act as an extension of your internal team.',
  },
  {
    title: 'Iterations and changes are standard',
    body: 'Large projects evolve — documentation changes, scope grows. We\'re accustomed to working across many iterations. Every change is quoted and delivered without delaying the rest of the project.',
  },
  {
    title: 'Transparent communication',
    body: 'Progress updates every 2–3 days. Minor corrections delivered without a separate order. The client always knows what stage the work is at and what remains.',
  },
  {
    title: 'Long-term relationships reduce costs',
    body: 'The longer we collaborate, the more efficient each subsequent commission becomes. We know the client\'s standards, decision-making process and preferences — which translates into speed and price.',
  },
]

export default function EnB2B3DPage() {
  const allB2b = getProjectsByCategory('b2b-3d')

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/en' },
          { name: 'B2B Collaboration', href: '/en/b2b-3d' },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/nystair1.webp"
            alt="3D modelling — 11 West 57th NYC"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container-site relative z-10 pt-32 pb-24">
          <p className="section-subtitle text-gold">For professionals</p>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6 max-w-3xl">
            B2B Collaboration
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-10">
            3D modelling, construction documentation and CGI for architecture firms
            and construction companies in Poland, the UK and the United States.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/en/contact" className="btn-primary">
              Request a quote
            </Link>
            <Link
              href="/en/portfolio"
              className="border border-white/40 text-white/80 hover:bg-white/10 transition-colors px-8 py-3 text-xs tracking-widest uppercase inline-flex items-center"
            >
              View projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ─────────────────────────────────── */}
      <FadeIn>
        <section className="py-16 bg-gold">
          <div className="container-site">
            <p className="text-white/90 text-center text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              Our models have been used in apartment and villa construction in{' '}
              <strong className="text-white">New York, Chicago and Brighton</strong>{' '}
              — projects worth a combined{' '}
              <strong className="text-white">hundreds of millions of dollars</strong>.
              We collaborate on an ongoing basis with architecture firms in Poland, the UK and the USA.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── TWO COLLABORATION MODES ─────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Services</p>
            <h2 className="section-title max-w-2xl">Two modes of collaboration.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-16">
              Depending on the project stage we work in a sales/concept mode
              or in a construction documentation mode — or both combined.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <FadeIn delay={0}>
              <div className="bg-white p-10 h-full border border-stone-200">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Sales / Concept</p>
                <h3 className="font-display text-3xl text-navy mb-3">Visualisations, animations, VR</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  We help sell a project before it is built. CGI visualisations, animations
                  and VR environments in Unreal Engine — tools that convince investors
                  and end clients better than any written description.
                </p>
                <ul className="space-y-3">
                  {TRACK_CGI.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-gold shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-stone-100">
                  <p className="text-xs text-gray-400">
                    Once clients receive their first animation, they no longer want still images.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="bg-stone-900 p-10 h-full">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Construction documentation</p>
                <h3 className="font-display text-3xl text-white mb-3">Documentation & BIM models</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8">
                  We build very precise models — 100% based on the documentation.
                  If a bolt is drawn in the drawings, that bolt appears in the model.
                  This precision reveals problems that would only surface on site.
                </p>
                <ul className="space-y-3">
                  {TRACK_DOC.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="text-gold shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs text-white/30">
                    Tools: Rhino3D · Grasshopper · Solidworks · AutoCAD
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── MARKETS ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Market knowledge</p>
            <h2 className="section-title">We understand local requirements.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-16">
              Each market has its own regulations, documentation standards and expectations
              regarding the design process. We gained this experience by working directly
              with firms and contractors in the USA, UK and Poland.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {MARKETS.map((m, i) => (
              <FadeIn key={m.region} delay={i * 80}>
                <div className="bg-stone-50 p-8 h-full">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">{m.region}</p>
                  <ul className="space-y-3">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="text-gold shrink-0 mt-0.5">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ─────────────────────────────────── */}
      <section className="py-24 bg-stone-900">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle text-gold">How we work</p>
            <h2 className="font-display text-4xl text-white mb-4">Collaboration process.</h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xl mb-16">
              We work as an external design team — without imposing our own process,
              without bureaucratic delays. We join your existing workflow and deliver
              as if we were part of your firm.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {WORKFLOW_POINTS.map((pt, i) => (
              <FadeIn key={pt.title} delay={i * 60}>
                <div className="bg-stone-900 p-8">
                  <p className="font-display text-xl text-white mb-3">{pt.title}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{pt.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { stat: '8+', label: 'years of B2B\ncollaboration with UK & US firms' },
                { stat: 'USA · UK · PL', label: 'markets where we\nhave delivered projects' },
                { stat: '100%', label: 'of projects completed\nsuccessfully' },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <p className="font-display text-4xl text-gold mb-2">{stat}</p>
                  <p className="text-xs text-white/40 whitespace-pre-line leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="container-site">
          <FadeIn>
            <p className="section-subtitle">Projects</p>
            <h2 className="section-title">Selected B2B projects.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-12">
            {allB2b.map((project, i) => (
              <FadeIn key={project.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/en/portfolio/${project.slug}`}
                  className="group block bg-white border border-stone-100 hover:border-gold transition-colors overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={project.images[0]}
                      alt={project.titleEn ?? project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">
                      {project.location}
                    </p>
                    <h3 className="font-display text-xl text-navy mb-2">{project.titleEn ?? project.title}</h3>
                    <p className="text-xs text-gray-400">{project.year}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE NEED ────────────────────────────────── */}
      <FadeIn>
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">What we can deliver</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Practically any geometry — from small steel elements and ornaments
                  to staircases, façades and entire buildings. We often write custom scripts
                  for maximum accuracy.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">What we need from you</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Depending on the commission: sketches, technical drawings or a 3D model
                  of the existing building. On complex projects we work across multiple
                  iterations — adapting to changes in documentation as they happen.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Pricing</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Based on the documentation and brief we will prepare a quote.
                  Cost depends on time and resources. Regular clients receive
                  preferential terms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <CTA
        title="Request a quote"
        description="Send us your brief and documentation — we'll prepare a quote. We work remotely with firms across Europe and the USA."
        label="Send brief"
        href="/en/contact"
        dark
      />
    </>
  )
}
