/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/portfolio/sycamore', destination: '/portfolio/california-villa', permanent: true },
    ]
  },
}

export default nextConfig
