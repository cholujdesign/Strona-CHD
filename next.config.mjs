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
