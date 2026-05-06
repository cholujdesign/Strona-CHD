/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 180,
    },
  },
  async redirects() {
    return [
      { source: '/portfolio/sycamore', destination: '/portfolio/california-villa', permanent: true },
      { source: '/en/portfolio/sycamore', destination: '/en/portfolio/california-villa', permanent: true },
{ source: '/', has: [{ type: 'query', key: 'langset', value: 'en' }], destination: '/en', permanent: true },
{ source: '/milewski', destination: '/portfolio', permanent: true },
      { source: '/dom-3', destination: '/portfolio', permanent: true },
      { source: '/contakt', destination: '/kontakt', permanent: true },
      { source: '/Portfolio', destination: '/portfolio', permanent: true },
      { source: '/Portfolio/:path*', destination: '/portfolio/:path*', permanent: true },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.cholujdesign.com' }],
        destination: 'https://cholujdesign.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
