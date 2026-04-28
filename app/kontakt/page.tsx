import type { Metadata } from 'next'
import ContactFormFull from '@/components/contact/ContactFormFull'
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL, SITE_EMAIL, SITE_PHONE, SITE_ADDRESS } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Kontakt — Chołuj Design',
  description:
    'Skontaktuj się z Chołuj Design. Studio designu w Krakowie — wnętrza, projekty dla inwestycji i współpraca B2B.',
  alternates: { canonical: `${SITE_URL}/kontakt`, languages: { pl: `${SITE_URL}/kontakt`, en: `${SITE_URL}/en/contact` } },
  openGraph: {
    title: 'Kontakt — Chołuj Design',
    url: `${SITE_URL}/kontakt`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'CHD Architekci — kontakt, Rynek Główny 43 Kraków' }],
  },
}

export default function KontaktPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Kontakt', href: '/kontakt' },
        ]}
      />

      {/* Dane + formularz */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24 items-start">

            {/* Lewa kolumna: tytuł + formularz */}
            <div>
              <p className="section-subtitle mb-4">Kontakt</p>
              <h1 className="font-display text-5xl md:text-7xl text-navy mb-6 max-w-2xl">Kontakt</h1>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-12">
                Opisz projekt lub zakres współpracy. Na podstawie informacji wrócimy z odpowiedzią dopasowaną do tematu.
              </p>
              <ContactFormFull />
            </div>

            {/* Prawa kolumna: Street View (desktop) + dane kontaktowe */}
            <aside className="lg:sticky lg:top-28 space-y-10">

              {/* Street View — ukryty na mobile */}
              <div className="hidden lg:block h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1669903688989!6m8!1m7!1sqqOp2tv1wHHcfbRb263CQQ!2m2!1d19.9382368!2d50.0622368!3f0.72!4f-15.68!5f0.7820865974627469"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chołuj Design — widok z ulicy"
                />
              </div>
              <div>
                <p className="section-subtitle mb-6">Dane kontaktowe</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1.5">Adres</p>
                    <address className="not-italic text-sm text-navy leading-relaxed">
                      Chołuj Design S.C.<br />
                      {SITE_ADDRESS}
                    </address>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1.5">Telefon</p>
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
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1.5">NIP</p>
                    <p className="text-sm text-navy">6762437655</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Mapa</p>
                <a
                  href="https://maps.google.com/?q=Rynek+Główny+43,+31-013+Kraków"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gold hover:underline"
                >
                  Otwórz w Google Maps →
                </a>
              </div>

              <div className="bg-stone-50 p-6 space-y-3">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Kiedy się odezwać?</p>
                {[
                  'Planujesz projekt wnętrz lub architektoniczny',
                  'Szukasz podwykonawcy do modeli 3D lub CGI',
                  'Chcesz omówić długoterminową współpracę B2B',
                  'Potrzebujesz dokumentacji lub nadzoru',
                ].map((item) => (
                  <p key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-gold shrink-0">—</span>
                    {item}
                  </p>
                ))}
              </div>

              <div className="border-t border-stone-100 pt-6">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Zespół</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Pracujemy w stałym, zgranym zespole doświadczonych projektantów i specjalistów — dobranych do skali i charakteru naszych projektów. Obecnie nie poszerzamy składu ani nie prowadzimy rekrutacji i naboru na praktyki.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mapa */}
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
