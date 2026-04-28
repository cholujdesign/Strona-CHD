import type { Metadata } from 'next'
import Hero from '@/components/ui/Hero'
import CTA from '@/components/ui/CTA'
import EnPortfolioGrid from '@/components/ui/EnPortfolioGrid'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { projects } from '@/data/projects'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Portfolio — architecture, interiors, B2B 3D projects',
  description:
    'Portfolio of CHD Chołuj Design — architecture, interiors, 3D modelling and CGI. Projects in Poland, UK and USA. Kurka Wodna, Sycamore, NYC 11 West 57th.',
  alternates: {
    canonical: `${SITE_URL}/en/portfolio`,
    languages: { pl: `${SITE_URL}/portfolio`, en: `${SITE_URL}/en/portfolio` },
  },
  openGraph: {
    title: 'Portfolio — CHD Chołuj Design',
    url: `${SITE_URL}/en/portfolio`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'Portfolio CHD — architecture, interiors, 3D' }],
  },
}

export default function EnPortfolioPage() {
  const primary = projects.filter((p) => p.visibility === 'primary')
  const secondary = projects.filter((p) => p.visibility === 'secondary')

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/en' },
          { name: 'Portfolio', href: '/en/portfolio' },
        ]}
      />

      <Hero
        subtitle="Our work"
        title="Portfolio."
        description="Selected projects in architecture, interiors and 3D modelling. Poland, UK, USA."
        size="medium"
      />

      <section className="py-16 bg-white">
        <div className="container-site">
          <EnPortfolioGrid primary={primary} secondary={secondary} />
        </div>
      </section>

      <CTA
        title="Interested in working together?"
        description="Tell us about your project — we'll get back to you."
        href="/en/contact"
        label="Get in touch"
      />
    </>
  )
}
