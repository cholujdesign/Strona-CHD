import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { SITE_URL, SITE_NAME } from '@/lib/utils'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'CHD Architekci — Architektura, Wnętrza, 3D | Kraków',
    template: '%s | CHD Architekci',
  },
  description:
    'Pracownia architektoniczna z Krakowa. Projektujemy domy, wnętrza, rewitalizacje zabytków. Modelowanie 3D i CGI dla klientów B2B w Polsce i za granicą.',
  keywords: [
    'architekt Kraków',
    'projekty wnętrz Kraków',
    'rewitalizacja zabytków',
    'modelowanie 3D',
    'CGI architektura',
    'projekt domu Kraków',
    'interior design Kraków',
    'CHD Architekci',
  ],
  authors: [{ name: 'CHD Architekci', url: SITE_URL }],
  creator: 'CHD Architekci',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'CHD Architekci — Architektura, Wnętrza, 3D | Kraków',
    description:
      'Pracownia architektoniczna z Krakowa. Projektujemy domy, wnętrza, rewitalizacje zabytków. Modelowanie 3D i CGI dla klientów B2B.',
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'CHD Architekci — pracownia architektoniczna Kraków' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHD Architekci — Architektura, Wnętrza, 3D | Kraków',
    description: 'Pracownia architektoniczna z Krakowa.',
    images: ['/images/rakowicka151.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300..600&family=Luxurious+Roman&family=Nanum+Myeongjo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  )
}
