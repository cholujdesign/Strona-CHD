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

  const title = project.titleEn ?? project.title
  const description = project.shortDescriptionEn ?? project.shortDescription

  return {
    title: `${title} — ${project.year ?? ''} | CHD Architekci`,
    description,
    alternates: {
      canonical: `${SITE_URL}/en/portfolio/${project.slug}`,
      languages: {
        pl: `${SITE_URL}/portfolio/${project.slug}`,
        en: `${SITE_URL}/en/portfolio/${project.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/en/portfolio/${project.slug}`,
      images: project.images[0] ? [{ url: `${SITE_URL}${project.images[0]}` }] : [],
    },
  }
}

const categoryLabelEn: Record<string, string> = {
  architektura: 'Architecture',
  wnetrza: 'Interiors',
  'b2b-3d': 'B2B / 3D',
}

const tagLabelEn: Record<string, string> = {
  autorski: 'bespoke',
  wspolpraca: 'collaboration',
  realizacja: 'built project',
  dokumentacja: 'documentation',
  CGI: 'CGI',
  wnetrza: 'interiors',
  architektura: 'architecture',
  B2B: 'B2B',
  rewitalizacja: 'renovation',
  zabytek: 'listed building',
  premium: 'premium',
  gastronomia: 'hospitality',
  mieszkanie: 'apartment',
  seria: 'series',
}

export default function EnProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const title = project.titleEn ?? project.title
  const description = project.fullDescriptionEn ?? project.shortDescriptionEn ?? project.fullDescription ?? project.shortDescription
  const role = project.roleEn ?? project.role

  const validImages = project.images.filter((img) => img && !img.endsWith('/.webp') && !img.endsWith('/.png'))

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/en' },
          { name: 'Portfolio', href: '/en/portfolio' },
          { name: title, href: `/en/portfolio/${project.slug}` },
        ]}
      />
      <ProjectJsonLd
        title={title}
        description={project.shortDescriptionEn ?? project.shortDescription}
        slug={project.slug}
        year={project.year}
        image={validImages[0]}
      />

      {/* Hero image */}
      {validImages[0] && (
        <div className="relative h-[60vh] min-h-[400px] bg-stone-200">
          <Image
            src={validImages[0]}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
          <Watermark collaborator={project.collaborators?.[0]?.name} />
          {project.collaborators?.[0] && (
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
                <Link href="/en" className="hover:text-gold">Home</Link>
                <span>/</span>
                <Link href="/en/portfolio" className="hover:text-gold">Portfolio</Link>
                <span>/</span>
                <span className="text-gray-600">{title}</span>
              </nav>

              <p className="text-xs uppercase tracking-widest text-gold mb-3">
                {categoryLabelEn[project.category]}
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-navy mb-6">{title}</h1>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-gray-200 text-gray-500 px-3 py-1"
                  >
                    {tagLabelEn[tag] ?? tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: metadata */}
            <div className="lg:col-span-1">
              <div className="bg-stone-50 p-8 space-y-6">
                {project.year && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Year</p>
                    <p className="text-sm text-navy">{project.year}</p>
                  </div>
                )}
                {project.location && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Location</p>
                    <p className="text-sm text-navy">{project.location}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">CHD role</p>
                  <p className="text-sm text-navy">{role}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Category</p>
                  <p className="text-sm text-navy">{categoryLabelEn[project.category]}</p>
                </div>
                {project.collaborators && project.collaborators.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Collaboration</p>
                    <div className="flex flex-col gap-1.5">
                      {project.collaborators.map((c) => (
                        <a
                          key={c.url}
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gold hover:underline"
                        >
                          {c.name} ↗
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
            <p className="section-subtitle">Gallery</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-6">
              {validImages.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-[4/3] bg-stone-200">
                  <Image
                    src={img}
                    alt={`${title} — image ${i + 2}`}
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
            <p className="section-subtitle mb-6">Video</p>
            <div className="relative w-full aspect-video">
              <iframe
                src={project.videoUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      <CTA
        title="Interested in a similar project?"
        description="Tell us about your needs — we'll be happy to answer your questions."
        href="/en/contact"
        label="Get in touch"
      />
    </>
  )
}
