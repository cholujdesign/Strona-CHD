import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/ui/Hero'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog — architecture, interiors, 3D | CHD Chołuj Design',
  description:
    'Articles on architecture, interior design, 3D modelling and the investment process. CHD Chołuj Design — Kraków.',
  alternates: {
    canonical: `${SITE_URL}/en/blog`,
    languages: { pl: `${SITE_URL}/blog`, en: `${SITE_URL}/en/blog` },
  },
  openGraph: {
    title: 'Blog — CHD Chołuj Design',
    url: `${SITE_URL}/en/blog`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'CHD Blog — architecture, interiors, 3D' }],
  },
}

const posts: {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  lang: 'pl' | 'en'
}[] = [
  {
    slug: 'newhaven-place-of-disappearance',
    title: 'Newhaven, Place of Disappearance — a study in light and form',
    date: '2016-06-01',
    category: 'Conceptual architecture',
    excerpt: 'The sun path defined the form. The form and its strategic placement defined the entire master plan. A study in the revitalisation of a coastal town in England, 2016.',
    lang: 'pl',
  },
  {
    slug: 'east-london-organic-development',
    title: 'East London, Organic Development — the algorithmic city',
    date: '2018-09-01',
    category: 'Conceptual architecture',
    excerpt: 'A response to the decentralised structure of East London — a project rooted in Metabolism, Situationism and New Babylon. Algorithmic tetrahedral structures whose scale was set by the user.',
    lang: 'pl',
  },
  {
    slug: 'modelowanie-3d-dla-biur-architektonicznych',
    title: 'Why architecture firms outsource 3D modelling',
    date: '2025-02-10',
    category: 'B2B / 3D',
    excerpt: 'Outsourcing 3D modelling lets firms scale their capabilities without increasing fixed costs. How does it work in practice?',
    lang: 'pl',
  },
  {
    slug: 'rewitalizacja-zabytkow-jak-to-dziala',
    title: 'Heritage renovations — what to know before you buy',
    date: '2025-03-05',
    category: 'Architecture',
    excerpt: 'Buying a listed tenement or villa is a rare opportunity — but it comes with significant obligations. We explain what to look out for.',
    lang: 'pl',
  },
  {
    slug: 'rakowicka-15a-plomba-architektoniczna',
    title: 'Rakowicka 15A — designing an infill building in Kraków',
    date: '2025-04-25',
    category: 'Architecture',
    excerpt: 'A narrow plot, a neighbouring palace, conservation requirements and a mixed-use programme. How the Pi and Sigma project at Rakowicka 15A came to be — on difficult compromises in the centre of Kraków.',
    lang: 'pl',
  },
  {
    slug: 'gastronomia-w-szpitalu',
    title: 'Hospitality in hospitals — designing a bistro for patients',
    date: '2025-04-28',
    category: 'Interiors',
    excerpt: 'Uzdrowisko Bistro in an oncology hospital and Dzień Dobry Cafe in the University Hospital in Kraków. What makes a hospitality venue succeed in a medical setting?',
    lang: 'pl',
  },
  {
    slug: 'pawla-12-katowice-rewitalizacja',
    title: 'Pawła 12, Katowice — tenement renovation in the city centre',
    date: '2025-04-10',
    category: 'Architecture',
    excerpt: 'A listed tenement at ul. Pawła 12 in Katowice — how to approach a heritage renovation in the centre of Silesia\'s largest city. CHD and Idea Development project in progress.',
    lang: 'pl',
  },
]

export default function EnBlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/en' },
          { name: 'Blog', href: '/en/blog' },
        ]}
      />

      <Hero
        subtitle="Knowledge & inspiration"
        title="CHD Blog."
        description="Articles on architecture, interiors, 3D design and the investment process."
        size="medium"
      />

      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="divide-y divide-gray-100">
            {posts.map((post) => (
              <article key={post.slug} className="py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <p className="text-xs uppercase tracking-widest text-gold mb-1">{post.category}</p>
                  <time className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <div className="md:col-span-3">
                  <Link href={`/en/blog/${post.slug}`} className="group">
                    <h2 className="font-display text-2xl text-navy group-hover:text-gold transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-xs text-gold tracking-widest uppercase group-hover:underline">
                      Read more →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Have a question about a project?"
        description="Direct contact is faster than the blog."
        href="/en/contact"
        label="Get in touch"
      />
    </>
  )
}
