import { SITE_URL, SITE_NAME, SITE_EMAIL, SITE_PHONE, SITE_ADDRESS } from '@/lib/utils'

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_URL,
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rynek Główny 43',
      addressLocality: 'Kraków',
      postalCode: '31-013',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.062417,
      longitude: 19.938172,
    },
    priceRange: '$$',
    description:
      'Pracownia architektoniczna z Krakowa. Architektura, wnętrza, modelowanie 3D i CGI.',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 50.062417,
        longitude: 19.938172,
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo192.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_PHONE,
      contactType: 'customer service',
      availableLanguage: ['Polish', 'English'],
    },
    sameAs: ['https://pl.linkedin.com/in/robert-cho%C5%82uj-735a59a5'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  date,
  image,
  category,
}: {
  title: string
  description: string
  slug: string
  date: string
  image?: string
  category?: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: date,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo192.png` },
    },
    ...(image && { image: `${SITE_URL}${image}` }),
    ...(category && { articleSection: category }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function ProjectJsonLd({
  title,
  description,
  slug,
  year,
  image,
}: {
  title: string
  description: string
  slug: string
  year?: string
  image?: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description,
    url: `${SITE_URL}/portfolio/${slug}`,
    creator: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(year && { dateCreated: year }),
    ...(image && { image: `${SITE_URL}${image}` }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
