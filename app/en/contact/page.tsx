import type { Metadata } from 'next'
import ContactFormEn from '@/components/contact/ContactFormEn'
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL, SITE_EMAIL, SITE_PHONE, SITE_ADDRESS } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact — Chołuj Design',
  description:
    'Contact CHD Chołuj Design. Architecture and interior design studio in Kraków — interiors, architecture, B2B 3D collaboration.',
  alternates: {
    canonical: `${SITE_URL}/en/contact`,
    languages: { pl: `${SITE_URL}/kontakt`, en: `${SITE_URL}/en/contact` },
  },
  openGraph: {
    title: 'Contact — Chołuj Design',
    url: `${SITE_URL}/en/contact`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'CHD Chołuj Design — contact, Rynek Główny 43 Kraków' }],
  },
}

export default function EnContactPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/en' },
          { name: 'Contact', href: '/en/contact' },
        ]}
      />

      {/* Details + form */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24 items-start">

            {/* Left: title + form */}
            <div>
              <p className="section-subtitle mb-4">Contact</p>
              <h1 className="font-display text-5xl md:text-7xl text-navy mb-6 max-w-2xl">Contact</h1>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-12">
                Describe your project or the type of collaboration you have in mind. We&apos;ll respond with a reply tailored to the topic.
              </p>
              <ContactFormEn />
            </div>

            {/* Right: Street View (desktop) + contact details */}
            <aside className="lg:sticky lg:top-28 space-y-10">

              {/* Street View — hidden on mobile */}
              <div className="hidden lg:block h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1669903688989!6m8!1m7!1sqqOp2tv1wHHcfbRb263CQQ!2m2!1d19.9382368!2d50.0622368!3f0.72!4f-15.68!5f0.7820865974627469"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chołuj Design — street view"
                />
              </div>

              <div>
                <p className="section-subtitle mb-6">Contact details</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1.5">Address</p>
                    <address className="not-italic text-sm text-navy leading-relaxed">
                      Chołuj Design S.C.<br />
                      {SITE_ADDRESS}
                    </address>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1.5">Phone</p>
                    <a
                      href={`tel:${SITE_PHONE.replace(/\s/g, '')}`}
                      className="text-sm text-navy hover:text-gold transition-colors"
                    >
                      {SITE_PHONE}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1.5">E-mail</p>
                    <a
                      href={`mailto:${SITE_EMAIL}`}
                      className="text-sm text-navy hover:text-gold transition-colors"
                    >
                      {SITE_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Map</p>
                <a
                  href="https://maps.google.com/?q=Rynek+Główny+43,+31-013+Kraków"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gold hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className="bg-stone-50 p-6 space-y-3">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">When to get in touch?</p>
                {[
                  'You are planning an interior or architectural project',
                  'You need a subcontractor for 3D modelling or CGI',
                  'You want to discuss long-term B2B collaboration',
                  'You need construction documentation or site supervision',
                ].map((item) => (
                  <p key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-gold shrink-0">—</span>
                    {item}
                  </p>
                ))}
              </div>

              <div className="border-t border-stone-100 pt-6">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Team</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We work as a permanent, close-knit team of experienced designers and specialists — selected to match the scale and nature of our projects. We are not currently expanding the team or accepting internship applications.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[380px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d269.2208349337302!2d19.938172454009088!3d50.062417692695604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0e1dd33297%3A0xa8c90fce36f5f86b!2sCho%C5%82uj%20Design%20s.c.!5e0!3m2!1spl!2sus!4v1669903688989!5m2!1spl!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Chołuj Design — Rynek Główny 43, Kraków"
        />
      </section>
    </>
  )
}
