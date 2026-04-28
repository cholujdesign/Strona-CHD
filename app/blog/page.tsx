import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/ui/Hero'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog — architektura, wnętrza, 3D | CHD Chołuj Design',
  description:
    'Artykuły o architekturze, projektowaniu wnętrz, modelowaniu 3D i procesie inwestycyjnym. CHD Architekci — Kraków.',
  alternates: { canonical: `${SITE_URL}/blog`, languages: { pl: `${SITE_URL}/blog`, en: `${SITE_URL}/en/blog` } },
  openGraph: {
    title: 'Blog — CHD Architekci',
    url: `${SITE_URL}/blog`,
    images: [{ url: '/images/rakowicka151.webp', width: 1920, height: 1080, alt: 'Blog CHD Architekci — architektura, wnętrza, 3D' }],
  },
}

// Placeholder — treści zostaną dodane w kolejnym etapie
const posts: {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
}[] = [
  {
    slug: 'newhaven-place-of-disappearance',
    title: 'Newhaven, Place of Disappearance — studium światła i formy',
    date: '2016-06-01',
    category: 'Architektura koncepcyjna',
    excerpt:
      'Ścieżka słońca definiowała bryłę. Bryła i jej strategiczne posadowienie definiowały cały master plan. Studium rewitalizacji nadmorskiego miasta w Anglii, 2016.',
  },
  {
    slug: 'east-london-organic-development',
    title: 'East London, Organic Development — algorytmiczne miasto',
    date: '2018-09-01',
    category: 'Architektura koncepcyjna',
    excerpt:
      'Odpowiedź na zdecentralizowaną strukturę East London — projekt oparty na metabolistach, filozofii sytuacjonizmu i New Babylon. Algorytmiczne struktury z tetrahedronu, których wielkość ustalał sam użytkownik.',
  },
  {
    slug: 'swiadectwo-charakterystyki-energetycznej',
    title: 'Świadectwo charakterystyki energetycznej — kiedy jest wymagane i ile kosztuje',
    date: '2023-05-10',
    category: 'Proces',
    excerpt:
      'Od 28 kwietnia 2023 r. obowiązują nowe przepisy dotyczące świadectw energetycznych. Kiedy musisz je mieć, ile kosztuje i kto jest zwolniony z obowiązku.',
  },
  {
    slug: 'jak-zaczac-projekt-architektoniczny',
    title: 'Jak zacząć projekt architektoniczny — od działki do pozwolenia',
    date: '2025-01-15',
    category: 'Architektura',
    excerpt:
      'Pierwsze kroki, które musisz zrobić zanim zaangażujesz architekta. Działka, warunki zabudowy, budżet i harmonogram.',
  },
  {
    slug: 'modelowanie-3d-dla-biur-architektonicznych',
    title: 'Dlaczego biura architektoniczne zlecają modelowanie 3D na zewnątrz',
    date: '2025-02-10',
    category: 'B2B / 3D',
    excerpt:
      'Outsourcing modelowania 3D pozwala skalować możliwości biura bez zwiększania stałych kosztów. Jak to działa w praktyce?',
  },
  {
    slug: 'uchwala-krajobrazowa-krakow-stare-miasto',
    title: 'Uchwała krajobrazowa Krakowa — jak legalnie reklamować firmę na Starym Mieście',
    date: '2026-04-28',
    category: 'Prawo / Regulacje',
    excerpt:
      'Kraków ma jedną z najsurowszych uchwał krajobrazowych w Polsce. Szyldy, neony, potykacze, parasole — co wolno a czego nie w Strefie A. I jak CHD pomaga firmom na Starym Mieście poruszać się w tych przepisach.',
  },
  {
    slug: 'rewitalizacja-zabytkow-jak-to-dziala',
    title: 'Rewitalizacja obiektów zabytkowych — co musisz wiedzieć przed zakupem',
    date: '2025-03-05',
    category: 'Architektura',
    excerpt:
      'Zakup zabytkowej kamienicy lub willi to wyjątkowa okazja, ale też liczne obowiązki. Tłumaczymy, na co zwrócić uwagę.',
  },
  {
    slug: 'rakowicka-15a-plomba-architektoniczna',
    title: 'Rakowicka 15A — jak zaprojektować plombę architektoniczną w Krakowie',
    date: '2025-04-25',
    category: 'Architektura',
    excerpt:
      'Wąska działka, sąsiedztwo pałacu, wymogi konserwatora i program mieszkalno-usługowy. Jak powstawał projekt Pi i Sigma przy Rakowickiej 15A — o trudnych kompromisach w centrum Krakowa.',
  },
  {
    slug: 'gastronomia-w-szpitalu',
    title: 'Gastronomia w szpitalu — jak projektować bistro i kawiarnię dla pacjentów',
    date: '2025-04-28',
    category: 'Wnętrza',
    excerpt:
      'Uzdrowisko Bistro w szpitalu onkologicznym i Dzień Dobry Cafe w Szpitalu Uniwersyteckim w Krakowie. Co decyduje o powodzeniu lokalu gastronomicznego w instytucji medycznej?',
  },
  {
    slug: 'gastronomia-w-zabytkowym-centrum-krakowa',
    title: 'Lokale gastronomiczne w zabytkowym centrum Krakowa — cztery realizacje',
    date: '2025-05-05',
    category: 'Wnętrza',
    excerpt:
      'Kurka Wodna, Ingo Hostel, Restauracja Szoberowska, Pod Słońcem — projektowanie wnętrz gastronomicznych w kamienicach Starego Miasta. Ograniczenia konserwatorskie jako narzędzie projektowe.',
  },
  {
    slug: 'pawla-12-katowice-rewitalizacja',
    title: 'Pawła 12, Katowice — rewitalizacja kamienicy w centrum miasta',
    date: '2025-04-10',
    category: 'Architektura',
    excerpt:
      'Zabytkowa kamienica przy ul. Pawła 12 w Katowicach — jak podchodzi się do rewitalizacji w centrum śląskiej metropolii. Projekt CHD i Idea Development w toku.',
  },
  {
    slug: 'krynica-zdroj-willa-zlocien',
    title: 'Willa Złocień, Krynica-Zdrój — rewitalizacja z myślą o energooszczędności',
    date: '2025-04-20',
    category: 'Architektura',
    excerpt:
      'Jak pogodzić wymogi konserwatora z nowoczesnymi standardami energetycznymi? Projekt rewitalizacji Willi Złocień w Krynicy-Zdroju — podejście, materiały, wnioski.',
  },
]

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Blog', href: '/blog' },
        ]}
      />

      <Hero
        subtitle="Wiedza i inspiracje"
        title="Blog CHD — Chołuj Design."
        description="Artykuły o architekturze, wnętrzach, projektowaniu 3D i procesie inwestycyjnym."
        size="medium"
      />

      <section className="py-20 bg-white">
        <div className="container-site">
          {/* Lista wpisów */}
          <div className="divide-y divide-gray-100">
            {posts.map((post) => (
              <article key={post.slug} className="py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <p className="text-xs uppercase tracking-widest text-gold mb-1">{post.category}</p>
                  <time className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString('pl-PL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <div className="md:col-span-3">
                  <Link href={`/blog/${post.slug}`} className="group">
                    <h2 className="font-display text-2xl text-navy group-hover:text-gold transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-xs text-gold tracking-widest uppercase group-hover:underline">
                      Czytaj więcej →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-center text-gray-400 py-20">
              Pierwsze artykuły pojawią się wkrótce.
            </p>
          )}
        </div>
      </section>

      <CTA
        title="Masz pytania o projekt?"
        description="Chętnie porozmawiamy. Kontakt bezpośredni jest szybszy niż blog."
        dark={false}
      />
    </>
  )
}
