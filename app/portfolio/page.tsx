import type { Metadata } from 'next'
import Hero from '@/components/ui/Hero'
import ProjectGrid from '@/components/ui/ProjectGrid'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { projects } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Portfolio — projekty architektoniczne, wnętrza, B2B 3D',
  description:
    'Portfolio CHD Architekci — architektura, wnętrza, modelowanie 3D i CGI. Projekty w Polsce, UK i USA. Kurka Wodna, California Villa, NYC 111 West 57th.',
  alternates: { canonical: `${SITE_URL}/portfolio`, languages: { pl: `${SITE_URL}/portfolio`, en: `${SITE_URL}/en/portfolio` } },
  openGraph: {
    title: 'Portfolio — CHD Architekci',
    url: `${SITE_URL}/portfolio`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'Portfolio CHD Architekci — architektura, wnętrza, 3D' }],
  },
}

export default function PortfolioPage() {
  const primary = projects.filter((p) => p.visibility === 'primary')

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Portfolio', href: '/portfolio' },
        ]}
      />

      <Hero
        subtitle="Nasze realizacje"
        title="Portfolio."
        description="Wybrane projekty z zakresu architektury, wnętrz i modelowania 3D. Polska, UK, USA."
        size="medium"
      />

      <section className="py-16 bg-white">
        <div className="container-site">
          <ProjectGrid projects={primary} showFilters showSecondary={false} />

          <div className="mt-20 pt-12 border-t border-gray-100">
            <p className="section-subtitle">Więcej projektów</p>
            <p className="text-sm text-gray-500 mb-8">
              Poniżej dodatkowe realizacje — koncepcje, prace studyjne i starsze projekty.
            </p>
            <ProjectGrid
              projects={projects.filter((p) => p.visibility === 'secondary')}
              showFilters={false}
              showSecondary
            />
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
