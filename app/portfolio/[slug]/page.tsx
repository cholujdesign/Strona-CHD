import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import CTA from '@/components/ui/CTA'
import Watermark from '@/components/ui/Watermark'
import { BreadcrumbJsonLd, ProjectJsonLd } from '@/components/seo/JsonLd'
import { projects, getProjectBySlug } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}

  return {
    title: `${project.title} — ${project.year ?? ''} | CHD Architekci`,
    description: project.shortDescription,
    alternates: {
      canonical: `${SITE_URL}/portfolio/${project.slug}`,
      languages: { pl: `${SITE_URL}/portfolio/${project.slug}`, en: `${SITE_URL}/en/portfolio/${project.slug}` },
    },
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: `${SITE_URL}/portfolio/${project.slug}`,
      images: project.images[0] ? [{ url: `${SITE_URL}${project.images[0]}` }] : [],
    },
  }
}

const categoryLabel: Record<string, string> = {
  architektura: 'Architektura',
  wnetrza: 'Wnętrza',
  'b2b-3d': 'B2B / 3D',
}

const tagLabel: Record<string, string> = {
  autorski: 'autorski',
  wspolpraca: 'współpraca',
  realizacja: 'realizacja',
  dokumentacja: 'dokumentacja',
  CGI: 'CGI',
  wnetrza: 'wnętrza',
  architektura: 'architektura',
  B2B: 'B2B',
  rewitalizacja: 'rewitalizacja',
  zabytek: 'zabytek',
  premium: 'premium',
  gastronomia: 'gastronomia',
  mieszkanie: 'mieszkanie',
  seria: 'seria',
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const validImages = project.images.filter((img) => img && !img.endsWith('/.webp') && !img.endsWith('/.png'))

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Portfolio', href: '/portfolio' },
          { name: project.title, href: `/portfolio/${project.slug}` },
        ]}
      />
      <ProjectJsonLd
        title={project.title}
        description={project.shortDescription}
        slug={project.slug}
        year={project.year}
        image={validImages[0]}
      />

      {/* Hero image */}
      {validImages[0] && (
        <div className="relative h-[60vh] min-h-[400px] bg-stone-200">
          <Image
            src={validImages[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
          <Watermark collaborator={project.collaborators?.[0]?.name} />
          {project.collaborators?.[0]?.url && (
            <a
              href={project.collaborators[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-navy text-white text-[11px] px-3 py-1.5 tracking-wide hover:bg-gold transition-colors z-10"
            >
              {project.collaborators[0].name} ↗
            </a>
          )}
        </div>
      )}

      {/* Meta + title */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: title + description */}
            <div className="lg:col-span-2">
              <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                <Link href="/" className="hover:text-gold">Strona główna</Link>
                <span>/</span>
                <Link href="/portfolio" className="hover:text-gold">Portfolio</Link>
                <span>/</span>
                <span className="text-gray-600">{project.title}</span>
              </nav>

              <p className="text-xs uppercase tracking-widest text-gold mb-3">
                {categoryLabel[project.category]}
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-navy mb-6">{project.title}</h1>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {project.fullDescription ?? project.shortDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-gray-200 text-gray-500 px-3 py-1"
                  >
                    {tagLabel[tag] ?? tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: metadata */}
            <div className="lg:col-span-1">
              <div className="bg-stone-50 p-8 space-y-6">
                {project.year && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Rok</p>
                    <p className="text-sm text-navy">{project.year}</p>
                  </div>
                )}
                {project.location && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Lokalizacja</p>
                    <p className="text-sm text-navy">{project.location}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Rola CHD</p>
                  <p className="text-sm text-navy">{project.role}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Kategoria</p>
                  <p className="text-sm text-navy">{categoryLabel[project.category]}</p>
                </div>
                {project.collaborators && project.collaborators.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Współpraca</p>
                    <div className="flex flex-col gap-1.5">
                      {project.collaborators.map((c) => (
                        c.url ? (
                          <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="text-sm text-gold hover:underline">
                            {c.name} ↗
                          </a>
                        ) : (
                          <span key={c.name} className="text-sm text-navy">{c.name}</span>
                        )
                      ))}
                    </div>
                  </div>
                )}
                {project.externalLinks && project.externalLinks.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Linki</p>
                    <div className="flex flex-col gap-1.5">
                      {project.externalLinks.map((l) => (
                        <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="text-sm text-gold hover:underline">
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {validImages.length > 1 && (
        <section className="py-12 bg-stone-50">
          <div className="container-site">
            <p className="section-subtitle">Galeria</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-6">
              {validImages.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-[4/3] bg-stone-200">
                  <Image
                    src={img}
                    alt={`${project.title} — zdjęcie ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <Watermark collaborator={project.collaborators?.[0]?.name} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.videoUrl && (
        <section className="py-12 bg-white">
          <div className="container-site">
            <p className="section-subtitle mb-6">Film</p>
            <div className="relative w-full aspect-video">
              <iframe
                src={project.videoUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      <CTA
        title="Interesuje Cię podobny projekt?"
        description="Opowiedz nam o swoich potrzebach. Chętnie odpowiemy na pytania."
      />
    </>
  )
}
