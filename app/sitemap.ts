import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { posts } from '@/app/blog/[slug]/page'
import { SITE_URL } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    // Polish (root)
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/zakres`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/architektura`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/wnetrza`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/b2b-3d`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/proces-wspolpracy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/kontakt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/architekt-krakow`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/polityka-prywatnosci`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },

    // English (/en/)
    { url: `${SITE_URL}/en`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/en/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/en/architecture`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/interiors`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/b2b-3d`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/en/process`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = Object.keys(posts).flatMap((slug) => [
    { url: `${SITE_URL}/blog/${slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${SITE_URL}/en/blog/${slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ])

  const projectRoutes: MetadataRoute.Sitemap = projects.flatMap((p) => [
    {
      url: `${SITE_URL}/portfolio/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: p.featured ? 0.8 : 0.6,
    },
    {
      url: `${SITE_URL}/en/portfolio/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: p.featured ? 0.8 : 0.6,
    },
  ])

  return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
