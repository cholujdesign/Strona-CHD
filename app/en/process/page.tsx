import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/ui/CTA'
import Hero from '@/components/ui/Hero'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'How we work — from brief to handover | CHD',
  description:
    'How does collaboration with CHD work? A transparent process for private clients and B2B partners. Steps, required materials and FAQ.',
  alternates: {
    canonical: `${SITE_URL}/en/process`,
    languages: { pl: `${SITE_URL}/proces-wspolpracy`, en: `${SITE_URL}/en/process` },
  },
  openGraph: {
    title: 'How we work — CHD Chołuj Design',
    url: `${SITE_URL}/en/process`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'CHD process — from sketch to handover' }],
  },
}

const stepsIndividual = [
  {
    n: '01',
    title: 'First meeting',
    desc: 'A conversation about the project, location and expectations. Online or in person at our office at Rynek Główny.',
  },
  {
    n: '02',
    title: 'Scope & quote',
    desc: 'Based on the brief we prepare a scope of work and fee proposal. Transparent, no hidden costs.',
  },
  {
    n: '03',
    title: 'Concept design',
    desc: 'We develop design alternatives. We review them with you and agree on a direction.',
  },
  {
    n: '04',
    title: 'Construction documentation',
    desc: 'Detailed design documentation ready for building authorities and contractors.',
  },
  {
    n: '05',
    title: 'Supervision & delivery',
    desc: 'Author supervision or full general contracting — depending on the agreed scope.',
  },
]

const stepsB2B = [
  {
    n: '01',
    title: 'Brief & materials',
    desc: 'You send us a brief and available materials: sketches, drawings, 3D model, geometry description — or a point cloud from a laser scan.',
  },
  {
    n: '02',
    title: 'Quote',
    desc: 'Based on the brief we prepare a quote. Cost decreases with repeat commissions.',
  },
  {
    n: '03',
    title: 'Delivery',
    desc: 'We work iteratively, adapting to changes in the documentation. Regular progress updates.',
  },
  {
    n: '04',
    title: 'File delivery & formats',
    desc: 'We deliver files in agreed formats (.dwg, .ifc, .3dm, .pdf and others).',
  },
]

const faqIndividual = [
  {
    q: 'How long does a project take?',
    a: 'A concept design typically takes 2–4 weeks. Full building documentation — from 2 to 6 months depending on the scale.',
  },
  {
    q: 'What do I need to prepare for the first meeting?',
    a: 'Just a general idea and information about the plot or location. If you have a map, plan or reference images — bring them along.',
  },
  {
    q: 'Do you handle planning permissions?',
    a: 'Yes. We prepare documentation for building authorities and can represent the client in the administrative process.',
  },
  {
    q: 'Can I commission just an interior design without architecture?',
    a: 'Yes. We carry out interior design projects independently — from concept to full construction documentation.',
  },
]

const faqB2B = [
  {
    q: 'What is the minimum project value?',
    a: 'There is no formal minimum. We take on both small commissions (a steel element, an ornament) and multi-month collaborations.',
  },
  {
    q: 'Can we work remotely?',
    a: 'Yes. Most of our B2B clients are firms from the UK and USA. Communication via email, Zoom and file-sharing platforms.',
  },
  {
    q: 'What if the documentation changes mid-project?',
    a: 'We adapt. We work in iterations — changes to documentation are a standard part of the process.',
  },
  {
    q: 'What software do you use?',
    a: 'Rhino 3D, Grasshopper, ArchiCAD (BIM), AutoCAD, Unreal Engine 5, Photoshop.',
  },
]

export default function EnProcessPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/en' },
          { name: 'Process', href: '/en/process' },
        ]}
      />

      <Hero
        subtitle="How we work"
        title="A clear process — from conversation to delivery."
        description="No hidden costs, no unnecessary bureaucracy. We adapt to you."
        size="medium"
      />

      {/* Individual client */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <p className="section-subtitle">Private client</p>
          <h2 className="section-title max-w-xl">How we start — house, interiors, renovation.</h2>
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

      {/* B2B client */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <p className="section-subtitle">B2B client</p>
          <h2 className="section-title max-w-xl">How we start — 3D, documentation, CGI.</h2>
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

      {/* FAQ individual */}
      <section className="py-20 bg-white">
        <div className="container-site max-w-3xl">
          <p className="section-subtitle">FAQ</p>
          <h2 className="section-title">Frequently asked questions — private clients.</h2>
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

      {/* Point cloud section */}
      <section className="py-20 bg-[#1b222e]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A97900] mb-4">Remote precision</p>
              <h2 className="font-display text-3xl text-white mb-6">
                We work from point clouds — no site visit required.
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Many of the architecture firms that commission us work on buildings in the UK, USA or other countries.
                In these cases we often receive the project as a <strong className="text-white">point cloud</strong> —
                a digital representation of the space obtained through laser scanning (LiDAR).
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                From the point cloud we create a precise 3D model or documentation without needing a site visit.
                The building geometry — every angle, every deviation from vertical, every detail — is encoded
                in the scan data to within a few millimetres.
              </p>
              <p className="text-white/70 leading-relaxed">
                This means the project is <strong className="text-white">highly accurate</strong> — often more accurate
                than a traditional manual survey — and we can start work immediately upon receiving the file,
                regardless of distance.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Input formats', desc: '.pts, .e57, .las, .xyz, .rcp — we handle all common point cloud formats.' },
                { title: 'Software', desc: 'Rhino3D + PointCloud plugin, Autodesk ReCap, CloudCompare — full workflow from raw scan to model.' },
                { title: 'Accuracy', desc: 'Laser scanning achieves accuracy of 2–5 mm — this translates directly into the quality of construction documentation.' },
                { title: 'Remote = efficient', desc: 'No site visit means lower cost and a faster project start — without compromising quality.' },
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
          <h2 className="section-title">Frequently asked questions — B2B clients.</h2>
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

      <CTA
        title="Ready to start?"
        description="Send us a brief or just a short description of your project — we'll take it from there."
        href="/en/contact"
        label="Get in touch"
      />
    </>
  )
}
