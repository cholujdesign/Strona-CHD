export type ProjectCategory = 'architektura' | 'wnetrza' | 'b2b-3d'

export type ProjectTag =
  | 'autorski'
  | 'wspolpraca'
  | 'realizacja'
  | 'dokumentacja'
  | 'CGI'
  | 'wnetrza'
  | 'architektura'
  | 'B2B'
  | 'rewitalizacja'
  | 'zabytek'
  | 'premium'
  | 'gastronomia'
  | 'mieszkanie'
  | 'seria'

export type ProjectVisibility = 'primary' | 'secondary'

export interface Collaborator {
  name: string
  url?: string
}

export interface ExternalLink {
  label: string
  url: string
}

export interface Project {
  title: string
  titleEn?: string
  slug: string
  year?: string
  location?: string
  role: string
  roleEn?: string
  category: ProjectCategory
  tags: ProjectTag[]
  shortDescription: string
  shortDescriptionEn?: string
  fullDescription?: string
  fullDescriptionEn?: string
  images: string[]
  featured: boolean
  visibility: ProjectVisibility
  collaborators?: Collaborator[]
  videoUrl?: string
  externalLinks?: ExternalLink[]
}

const MA_ARCHITECTURE: Collaborator[] = [
  { name: 'MA Architecture', url: 'https://www.maarchitecture.co.uk/about' },
  { name: 'Instagram', url: 'https://www.instagram.com/maarchitecture/' },
  { name: 'Asia Jędrzejec — LinkedIn', url: 'https://uk.linkedin.com/in/asia-jedrzejec-a9790060' },
]

const CDS_TECH: Collaborator[] = [
  { name: 'CDS Tech', url: 'https://cdstech.us' },
]

const IDEA_DEVELOPMENT: Collaborator[] = [
  { name: 'Idea Development' },
]

export const projects: Project[] = [
  // ─── FEATURED ────────────────────────────────────────────────────────────────

  {
    title: 'California Villa',
    titleEn: 'California Villa',
    slug: 'california-villa',
    year: '2022–2024',
    location: 'California, USA',
    role: 'Modelowanie 3D, dokumentacja wykonawcza, CGI',
    roleEn: '3D modelling, construction documentation, CGI',
    category: 'b2b-3d',
    tags: ['B2B', 'dokumentacja', 'CGI', 'premium', 'wspolpraca'],
    collaborators: CDS_TECH,
    shortDescription:
      'Długoterminowa współpraca B2B przy prestiżowej inwestycji mieszkaniowej w Kalifornii. Szczegółowe modele 3D, dokumentacja wykonawcza schodów i elementów stalowych, wizualizacje CGI.',
    shortDescriptionEn:
      'Long-term B2B collaboration on a prestigious residential development in California. Detailed 3D models, construction documentation for stairs and steel elements, CGI visualisations.',
    fullDescription:
      'California Villa to przykład długoterminowej, kompleksowej współpracy B2B przy prestiżowej inwestycji mieszkaniowej w Kalifornii. CHD realizowało kolejne etapy: szczegółowe modele 3D elementów architektonicznych, dokumentację wykonawczą schodów i balustrad, wizualizacje CGI dla inwestora. Projekt wymagał precyzyjnego modelowania parametrycznego oraz pisania własnych skryptów w Grasshopper dla elementów o niestandardowej geometrii.',
    fullDescriptionEn:
      'California Villa is an example of long-term, comprehensive B2B collaboration on a prestigious residential development in California. CHD delivered successive phases: detailed 3D models of architectural elements, construction documentation for stairs and balustrades, and CGI visualisations for the client. The project required precision parametric modelling and custom Grasshopper scripting for elements with non-standard geometry.',
    images: [
      '/images/ben/sycamore model 1.webp',
      '/images/ben/sycamore model 2.webp',
      '/images/ben/ben2.webp',
      '/images/ben/ben8.webp',
      '/images/ben/VIEW3.webp',
      '/images/ben/ben1.webp',
      '/images/ben/secondstair 2.webp',
      '/images/ben/secondstair 4.webp',
      '/images/ben/bead 47.webp',
      '/images/ben/bead 48.webp',
    ],
    featured: true,
    visibility: 'primary',
  },

  {
    title: 'Kurka Wodna',
    slug: 'kurka-wodna',
    year: '2014',
    location: 'Kanonicza 15, Kraków',
    role: 'Projekt autorski wnętrz',
    roleEn: 'Bespoke interior design',
    category: 'wnetrza',
    tags: ['autorski', 'realizacja', 'wnetrza', 'gastronomia'],
    shortDescription:
      'Autorski projekt wnętrz restauracji w sercu Krakowa. Jeden z pierwszych i najbardziej rozpoznawalnych projektów CHD — klimatyczny lokal przy ul. Kanoniczej.',
    shortDescriptionEn:
      'Bespoke interior design for a restaurant in the heart of Kraków — one of CHD\'s first and most recognised projects. A historic tenement on Kanonicza Street.',
    images: ['/images/kurkaWodna.webp', '/images/kurkaWodna2.webp'],
    featured: true,
    visibility: 'primary',
  },

  {
    title: 'Eliptical Duplex Stair, NYC',
    titleEn: 'Elliptical Duplex Stair, NYC',
    slug: 'eliptical-duplex-stair-nyc',
    year: '2023',
    location: '111 West 57th, New York, USA',
    role: 'Projekt wykonawczy, modelowanie 3D',
    roleEn: 'Construction documentation, 3D modelling',
    category: 'b2b-3d',
    tags: ['B2B', 'dokumentacja', 'premium', 'wnetrza'],
    collaborators: CDS_TECH,
    shortDescription:
      'Projekt wykonawczy i model 3D eliptycznych schodów dwupoziomowych w jednym z najwyższych budynków mieszkalnych na świecie — 111 West 57th w Nowym Jorku.',
    shortDescriptionEn:
      'Construction documentation and 3D model of an elliptical duplex staircase in one of the tallest residential buildings in the world — 111 West 57th, New York.',
    images: [
      '/images/nyc1.webp',
      '/images/nyc2.webp',
      '/images/nystair1.webp',
      '/images/nystair2.webp',
      '/images/nyc-stair/nyc-stair-1.webp',
      '/images/nyc-stair/nyc-stair-2.webp',
      '/images/nyc-stair/nyc-stair-3.webp',
      '/images/nyc-stair/nyc-stair-4.webp',
      '/images/nyc-stair/nyc-stair-5.webp',
      '/images/nyc-stair/nyc-stair-6.webp',
      '/images/nyc-stair/nyc-stair-7.webp',
      '/images/nyc-stair/nyc-stair-8.webp',
      '/images/nyc-stair/nyc-stair-9.webp',
    ],
    featured: true,
    visibility: 'primary',
  },

  {
    title: 'Pi i Sigma, Rakowicka 15A',
    titleEn: 'Pi & Sigma, Rakowicka 15A, Kraków',
    slug: 'pi-i-sigma-rakowicka',
    year: '2016',
    location: 'Rakowicka 15A, Kraków',
    role: 'Projekt architektoniczny (CHD + Idea Development)',
    roleEn: 'Architectural design (CHD + Idea Development)',
    category: 'architektura',
    tags: ['wspolpraca', 'realizacja', 'architektura'],
    shortDescription:
      'Budynek mieszkalno-usługowy zaprojektowany na trudnej wąskiej działce sąsiadującej z istniejącym pałacem. Forma oparta na przestrzeni negatywnej, zielony dach, wewnętrzny dziedziniec.',
    shortDescriptionEn:
      'Mixed-use infill building on a narrow plot adjacent to a listed palace. The design uses negative space to create an internal courtyard, a green roof and a landscaped ground floor.',
    fullDescription:
      'Plomba zaprojektowana na trudnej, wąskiej działce z istniejącym pałacem. Specyficzna bryła powstała z użyciem przestrzeni negatywnej i chęci uszanowania sąsiadującego obiektu zabytkowego. Przestrzeń między budynkiem istniejącym a projektowanym tworzy wewnętrzny plac. Parter "Sigma" i cały budynek "Pi" (istniejący pałac) pełnią funkcje usługowe; wyższe kondygnacje nowego budynku są mieszkalne. Zaproponowano dużą powierzchnię biologicznie czynną, ogród na parterze i zielony dach.',
    fullDescriptionEn:
      'An infill building designed on a narrow, challenging plot adjacent to an existing listed palace. The distinctive form was generated using negative space and a desire to respect the neighbouring heritage structure. The gap between the existing and new building creates an internal courtyard. The ground floor of "Sigma" and the entire "Pi" building (the existing palace) serve commercial uses; the upper floors of the new building are residential. A large biologically active surface, a ground-floor garden and a green roof were proposed.',
    collaborators: IDEA_DEVELOPMENT,
    videoUrl: 'https://www.youtube.com/embed/NdH_ev2LyRE',
    images: [
      '/images/rakowicka151.webp',
      '/images/rakowicka152.webp',
      '/images/rakowicka/rak-1.webp',
      '/images/rakowicka/rak-2.webp',
      '/images/rakowicka/rak-3.webp',
      '/images/rakowicka/rak-4.webp',
      '/images/rakowicka/rak-5.webp',
      '/images/rakowicka/rak-6.webp',
      '/images/rakowicka/rak-7.webp',
      '/images/rakowicka/rak-8.webp',
      '/images/rakowicka/rak-9.webp',
      '/images/rakowicka/rak-10.webp',
      '/images/rakowicka/rak-11.webp',
      '/images/rakowicka/rak-12.webp',
      '/images/rakowicka/rak-13.webp',
      '/images/rakowicka/rak-14.webp',
      '/images/rakowicka/rak-15.webp',
      '/images/rakowicka/rak-16.webp',
      '/images/rakowicka/rak-17.webp',
      '/images/rakowicka/rak-18.webp',
      '/images/rakowicka/rak-19.webp',
      '/images/rakowicka/rak-20.webp',
    ],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'Pawła 12, Katowice',
    titleEn: 'Pawła 12, Katowice — Heritage Renovation',
    slug: 'pawla-12-katowice',
    year: '2024',
    location: 'ul. Pawła 12, Katowice',
    role: 'Projekt rewitalizacji (CHD + Idea Development)',
    roleEn: 'Heritage renovation (CHD + Idea Development)',
    category: 'architektura',
    tags: ['rewitalizacja', 'zabytek', 'wspolpraca', 'architektura'],
    shortDescription:
      'Rewitalizacja zabytkowej kamienicy w centrum Katowic — projekt w trakcie realizacji. Modernizacja z zachowaniem historycznego charakteru obiektu.',
    shortDescriptionEn:
      'Renovation of a historic listed tenement in central Katowice — project in progress. Full modernisation with preservation of the building\'s historic character.',
    collaborators: IDEA_DEVELOPMENT,
    images: [
      '/images/leszek/pawla12a.webp',
      '/images/leszek/pawla12b.webp',
      '/images/leszek/katowice.webp',
      '/images/leszek/katowice1.webp',
      '/images/leszek/katowice2.webp',
      '/images/leszek/katowice3.webp',
      '/images/leszek/katowice4.webp',
      '/images/leszek/katowice5.webp',
    ],
    featured: false,
    visibility: 'primary',
  },

  // ─── PRIMARY ─────────────────────────────────────────────────────────────────

  {
    title: 'Krynica-Zdrój, Willa Złocień',
    titleEn: 'Willa Złocień, Krynica-Zdrój',
    slug: 'krynica-zdroj-willa-zlocien',
    year: '2022',
    location: 'Krynica-Zdrój',
    role: 'Projekt rewitalizacji (CHD + Idea Development)',
    roleEn: 'Heritage renovation (CHD + Idea Development)',
    category: 'architektura',
    tags: ['rewitalizacja', 'zabytek', 'wspolpraca', 'architektura'],
    shortDescription:
      'Rewitalizacja Willi Złocień z naciskiem na energooszczędność. Nowoczesne technologie i specjalne techniki budowlane przy zachowaniu zabytkowego charakteru obiektu.',
    shortDescriptionEn:
      'Renovation of a historic timber villa in Poland\'s premier spa town. Modern energy-efficiency standards achieved while fully preserving the building\'s historic character.',
    collaborators: IDEA_DEVELOPMENT,
    externalLinks: [
      { label: 'Zobacz na Facebooku', url: 'https://www.facebook.com/CHDarchitekci/posts/pfbid0UavU9hS6F7W5nYirJJX9kCDA6ktcehT69MK3UrBg7qYbXGeJsyw1mXGuBQNadeMil' },
    ],
    images: [
      '/images/leszek/krynica1.webp',
      '/images/leszek/krynica2.webp',
      '/images/leszek/krynica3.webp',
      '/images/leszek/krynica4.webp',
      '/images/leszek/krynica5.webp',
      '/images/leszek/krynica6.webp',
    ],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'BTON — Brighton, UK',
    slug: 'bton-brighton',
    year: '2021–2024',
    location: 'Brighton, UK',
    role: 'Współpraca B2B (MA Architecture)',
    roleEn: 'B2B collaboration (MA Architecture)',
    category: 'b2b-3d',
    tags: ['wspolpraca', 'B2B', 'seria', 'dokumentacja', 'CGI', 'wnetrza'],
    collaborators: MA_ARCHITECTURE,
    shortDescription:
      'Seria projektów wnętrzarskich i wizualizacyjnych realizowanych we współpracy z biurem MA Architecture w Brighton — CGI wnętrz, łazienki i spa, dokumentacja wykonawcza.',
    shortDescriptionEn:
      'A series of interior CGI and documentation projects in collaboration with MA Architecture, Brighton — bathroom and spa visualisations, construction documentation.',
    images: [
      '/images/btn2/image-05.webp',
      '/images/btn2/image-09.webp',
      '/images/btn2/master-ensuite-1.webp',
      '/images/btn2/master-ensuite-2.webp',
      '/images/btn2/ensuite-1-1.webp',
      '/images/btn2/ensuite-1-2.webp',
      '/images/btn2/ensuite-2-1.webp',
      '/images/btn2/ensuite-3-1.webp',
      '/images/btn2/ensuite-4-1.webp',
      '/images/btn2/gym-shower-1.webp',
      '/images/btn2/powder-room-1.webp',
      '/images/btn2/powder-room-b-1.webp',
      '/images/btn2/wc-1.webp',
      '/images/asia/a1.webp',
      '/images/asia/a2.webp',
      '/images/asia/b1.webp',
      '/images/asia/b2.webp',
      '/images/asia/c1.webp',
      '/images/asia/c2.webp',
      '/images/asia/d1.webp',
      '/images/asia/d2.webp',
      '/images/asia/e1.webp',
      '/images/asia/e2.webp',
      '/images/asia/f1.webp',
      '/images/asia/f2.webp',
      '/images/asia/g1.webp',
    ],
    featured: true,
    visibility: 'primary',
  },

  {
    title: 'East Grafton — renowacja, UK',
    titleEn: 'East Grafton — Renovation, UK',
    slug: 'east-grafton-renovation',
    year: '2023',
    location: 'East Grafton, Wiltshire, UK',
    role: 'Projekt koncepcyjny rewitalizacji (MA Architecture Brighton)',
    roleEn: 'Conceptual renovation design (MA Architecture Brighton)',
    category: 'architektura',
    tags: ['wspolpraca', 'architektura', 'rewitalizacja'],
    collaborators: MA_ARCHITECTURE,
    shortDescription:
      'Dwa warianty koncepcji rewitalizacji jednorodzinnego domu w Wiltshire — Option A i Option B. Projekt realizowany we współpracy z MA Architecture Brighton.',
    shortDescriptionEn:
      'Two conceptual options for renovating a single-family house in Wiltshire — Option A and Option B. Project in collaboration with MA Architecture Brighton.',
    fullDescription:
      'Projekt rewitalizacji domu jednorodzinnego w East Grafton, Wiltshire. Opracowano dwa warianty koncepcyjne: Option A zakłada zachowanie i modernizację istniejącej bryły, Option B przewiduje bardziej radykalne przekształcenie przestrzenne. Projekt realizowany we współpracy z biurem MA Architecture w Brighton.',
    fullDescriptionEn:
      'Renovation project for a single-family house in East Grafton, Wiltshire. Two conceptual options were developed: Option A retains and modernises the existing structure; Option B proposes a more radical spatial transformation. Project realised in collaboration with MA Architecture, Brighton.',
    images: [
      '/images/grafton/A19.webp',
      '/images/grafton/A18.webp',
      '/images/grafton/A15.webp',
      '/images/grafton/B20.webp',
      '/images/grafton/B22.webp',
    ],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'Wykehurst Place — wnętrza, UK',
    titleEn: 'Wykehurst Place — Interiors, UK',
    slug: 'wykehurst-place',
    year: '2022–2023',
    location: 'Wykehurst Place, West Sussex, UK',
    role: 'CGI wnętrz (MA Architecture Brighton)',
    roleEn: 'Interior CGI (MA Architecture Brighton)',
    category: 'wnetrza',
    tags: ['wspolpraca', 'wnetrza', 'CGI', 'B2B', 'premium'],
    collaborators: MA_ARCHITECTURE,
    shortDescription:
      'Wizualizacje CGI wnętrz dla historycznej posiadłości Wykehurst Place w West Sussex. Projekt realizowany we współpracy z biurem MA Architecture w Brighton.',
    shortDescriptionEn:
      'Photorealistic interior CGI for Wykehurst Place, a listed historic mansion in West Sussex. Project in collaboration with MA Architecture Brighton.',
    fullDescription:
      'Wykehurst Place to historyczna rezydencja w West Sussex, wpisana na listę zabytków. Projekt obejmował opracowanie fotorealistycznych wizualizacji CGI wnętrz dla planowanej rewitalizacji obiektu. Projekt realizowany we współpracy z biurem MA Architecture w Brighton — arch. mgr inż. Asia Jędrzejec.',
    fullDescriptionEn:
      'Wykehurst Place is a listed historic mansion in West Sussex. The project involved producing photorealistic interior CGI visualisations for the planned renovation. Delivered in collaboration with MA Architecture Brighton — Arch. Asia Jędrzejec.',
    images: [
      '/images/wykehurst/1.webp',
      '/images/wykehurst/2.webp',
      '/images/wykehurst/3.webp',
      '/images/wykehurst/5.webp',
      '/images/wykehurst/6.webp',
      '/images/wykehurst/7.webp',
      '/images/wykehurst/8.webp',
      '/images/wykehurst/his1.webp',
    ],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'Withdean Road — wnętrza, UK',
    titleEn: 'Withdean Road — Interiors, UK',
    slug: 'withdean-road',
    year: '2023',
    location: 'Brighton, UK',
    role: 'CGI wnętrz (MA Architecture Brighton)',
    roleEn: 'Interior CGI (MA Architecture Brighton)',
    category: 'wnetrza',
    tags: ['wspolpraca', 'wnetrza', 'CGI', 'B2B'],
    collaborators: MA_ARCHITECTURE,
    shortDescription:
      'Wizualizacje CGI wnętrz dla rezydencji przy Withdean Road w Brighton. Projekt realizowany we współpracy z MA Architecture Brighton.',
    shortDescriptionEn:
      'Interior CGI for a residential property on Withdean Road, Brighton. Project in collaboration with MA Architecture Brighton.',
    images: [
      '/images/withdean/view1.webp',
      '/images/withdean/view4.webp',
      '/images/withdean/view11.webp',
      '/images/withdean/view12.webp',
    ],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'Millwork — Millerblaker NYC',
    slug: 'millwork-millerblaker-nyc',
    year: '2023',
    location: 'Manhattan, New York, USA',
    role: 'Wizualizacje CGI',
    roleEn: 'CGI visualisations',
    category: 'b2b-3d',
    tags: ['B2B', 'CGI', 'wspolpraca'],
    collaborators: CDS_TECH,
    shortDescription:
      'Wizualizacje stolarki architektonicznej (millwork) dla nowojorskiego klienta Millerblaker. Fotorealistyczne CGI elementów wykończenia wnętrz.',
    shortDescriptionEn:
      'Photorealistic CGI of custom architectural millwork for New York client Millerblaker. High-end interior finish visualisations.',
    images: ['/images/millerblaker1.webp', '/images/millerblaker2.webp'],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'MadejPak — stoisko Taropak 2025',
    titleEn: 'MadejPak — Taropak 2025 Exhibition Stand',
    slug: 'madejpak-taropak-2025',
    year: '2025',
    location: 'Targi MTP, Poznań',
    role: 'Projekt stoiska targowego',
    roleEn: 'Exhibition stand design',
    category: 'architektura',
    tags: ['wspolpraca', 'realizacja', 'architektura'],
    shortDescription:
      'Projekt stoiska targowego dla firmy MadejPak na targach Taropak 2025 w Poznaniu. Projekt wyróżniony nagrodą Acanthus Aureus — prestiżową nagrodą Targów Poznańskich za najlepsze stoisko.',
    shortDescriptionEn:
      'Exhibition stand design for MadejPak at Taropak 2025 trade fair in Poznań. Awarded the Acanthus Aureus — the prestigious Poznań International Fair award for the best stand.',
    fullDescription:
      'Projekt stoiska targowego dla firmy MadejPak na targach Taropak 2025 (Targi MTP Poznań, wrzesień 2025). Stoisko zostało wyróżnione nagrodą Acanthus Aureus — najważniejszą nagrodą Międzynarodowych Targów Poznańskich przyznawaną za wyróżniające się projekty stoisk. Projekt łączy funkcjonalność przestrzeni wystawienniczej z wyrazistą identyfikacją wizualną marki.',
    fullDescriptionEn:
      'Exhibition stand design for MadejPak at the Taropak 2025 trade fair (Poznań International Fair, September 2025). The stand was awarded the Acanthus Aureus — the most prestigious award of the Poznań International Fair, given for outstanding stand design. The project combines functional exhibition space with strong brand identity.',
    images: [
      '/images/madejpak/madejpak-1.webp',
      '/images/madejpak/madejpak-2.webp',
      '/images/madejpak/madejpak-3.webp',
      '/images/madejpak/madejpak-4.webp',
      '/images/madejpak/madejpak-5.webp',
      '/images/madejpak/madejpak-6.webp',
    ],
    videoUrl: 'https://www.youtube.com/embed/LRM9lGIeGS4',
    externalLinks: [
      { label: 'MadejPak — Taropak 2025', url: 'https://www.madejpak.pl/targi-i-wydarzenia#taropak-2025' },
      { label: 'PrintNews — relacja z targów', url: 'https://printnews.pl/innowacje-i-automatyzacja-w-branzy-opakowan-taropak-2025-juz-za-nami/' },
      { label: 'Taropak — nagroda Acanthus Aureus', url: 'https://taropak.pl/pl/aktualnosci/madejpak-swietuje-25-lecie-na-targach-taropak/' },
      { label: 'Facebook — MadejPak na Taropak', url: 'https://www.facebook.com/MadejPak/posts/704255732653986/' },
    ],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'Mieszkanie WWA',
    titleEn: 'Apartment Warsaw',
    slug: 'mieszkanie-wwa',
    year: '2022',
    location: 'Warszawa',
    role: 'Projekt, nadzór i generalne wykonawstwo',
    roleEn: 'Design, supervision and general contracting',
    category: 'wnetrza',
    tags: ['autorski', 'realizacja', 'wnetrza', 'mieszkanie'],
    shortDescription:
      'Kompleksowa realizacja mieszkania w Warszawie — projekt, nadzór autorski i generalne wykonawstwo. Około 70 m².',
    shortDescriptionEn:
      'Full-service apartment delivery in Warsaw — interior design, construction supervision and general contracting. Approx. 70 m².',
    images: [
      '/images/Daniel1.webp',
      '/images/Daniel2.webp',
      '/images/Daniel3.webp',
      '/images/Daniel4.webp',
      '/images/Daniel5.webp',
      '/images/Daniel6.webp',
      '/images/Daniel7.webp',
      '/images/Daniel8.webp',
      '/images/Daniel9.webp',
    ],
    videoUrl: 'https://www.youtube.com/embed/Ypa6SOFRFVw',
    externalLinks: [
      { label: 'Zobacz na Facebooku', url: 'https://www.facebook.com/CHDarchitekci/posts/pfbid02Beo57tChz4faWjp4bkwkcjo5j8Z847KrQBMkoAUQxQeqoCWoerVu4D1vkwcKaKeGl' },
    ],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'Willa Wieliczka',
    titleEn: 'Villa Wieliczka',
    slug: 'willa-wieliczka',
    year: '2018',
    location: 'Wieliczka',
    role: 'Kompleksowy projekt architektoniczno-wnętrzarski',
    roleEn: 'Comprehensive architectural and interior design',
    category: 'wnetrza',
    tags: ['autorski', 'realizacja', 'wnetrza', 'architektura'],
    shortDescription:
      'Kompleksowy projekt willi — architektura, wnętrza i zagospodarowanie terenu w jednym. Wielorodzinny projekt autorski CHD.',
    shortDescriptionEn:
      'Comprehensive villa project — architecture, interiors and landscape design delivered as a single integrated commission.',
    images: [
      '/images/willa1.webp',
      '/images/willa2.webp',
      '/images/willa2a.webp',
      '/images/willa2b.webp',
      '/images/willa3A.webp',
      '/images/willa3B.webp',
    ],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'Mieszkanie 15A',
    slug: 'mieszkanie-15a',
    year: '2014',
    location: 'Rakowicka 15A, Kraków',
    role: 'Generalne wykonawstwo',
    category: 'wnetrza',
    tags: ['realizacja', 'wnetrza', 'mieszkanie'],
    shortDescription:
      'Generalne wykonawstwo mieszkania przy Rakowickiej 15A w Krakowie. Kompleksowa realizacja — projekt, koordynacja wykonawców, odbiór.',
    images: ['/images/apartament11.webp', '/images/apartament13.webp'],
    externalLinks: [
      { label: 'Zobacz na Facebooku', url: 'https://www.facebook.com/CHDarchitekci/posts/pfbid0yvJnJJ679wrxVbqvingYSRFTHJxNzj29cbViLJwTzQcsfVZkDuaVmhnWHSN2Xdh3l' },
    ],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'Mieszkanie 15B',
    slug: 'mieszkanie-15b',
    year: '2014',
    location: 'Rakowicka 15A, Kraków',
    role: 'Generalne wykonawstwo',
    category: 'wnetrza',
    tags: ['realizacja', 'wnetrza', 'mieszkanie'],
    shortDescription:
      'Generalne wykonawstwo mieszkania przy Rakowickiej 15A w Krakowie. Kompleksowa realizacja — projekt, koordynacja wykonawców, odbiór.',
    images: ['/images/apartament21.webp', '/images/apartament22.webp'],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'Mieszkanie 15C',
    slug: 'mieszkanie-15c',
    year: '2014',
    location: 'Rakowicka 15A, Kraków',
    role: 'Generalne wykonawstwo',
    category: 'wnetrza',
    tags: ['realizacja', 'wnetrza', 'mieszkanie'],
    shortDescription:
      'Generalne wykonawstwo mieszkania przy Rakowickiej 15A w Krakowie. Kompleksowa realizacja — projekt, koordynacja wykonawców, odbiór.',
    images: ['/images/apartament32.webp', '/images/apartament33.webp'],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'Mieszkanie 43A',
    slug: 'mieszkanie-43a',
    year: '2012',
    location: 'Rynek Główny 43, Kraków',
    role: 'Generalne wykonawstwo',
    category: 'wnetrza',
    tags: ['realizacja', 'wnetrza', 'mieszkanie'],
    shortDescription:
      'Generalne wykonawstwo mieszkania przy Rynku Głównym 43 w Krakowie. Realizacja w prestiżowej kamienicy w sercu Starego Miasta.',
    images: ['/images/apartament 1a.webp', '/images/apartament 1g.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Mieszkanie 43B',
    slug: 'mieszkanie-43b',
    year: '2012',
    location: 'Rynek Główny 43, Kraków',
    role: 'Generalne wykonawstwo',
    category: 'wnetrza',
    tags: ['realizacja', 'wnetrza', 'mieszkanie'],
    shortDescription:
      'Generalne wykonawstwo mieszkania przy Rynku Głównym 43 w Krakowie. Realizacja w prestiżowej kamienicy w sercu Starego Miasta.',
    images: ['/images/apartament 2a.webp', '/images/apartament 2b.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Mieszkanie 43C',
    slug: 'mieszkanie-43c',
    year: '2012',
    location: 'Rynek Główny 43, Kraków',
    role: 'Generalne wykonawstwo',
    category: 'wnetrza',
    tags: ['realizacja', 'wnetrza', 'mieszkanie'],
    shortDescription:
      'Generalne wykonawstwo mieszkania przy Rynku Głównym 43 w Krakowie. Realizacja w prestiżowej kamienicy w sercu Starego Miasta.',
    images: ['/images/apartament 3a.webp', '/images/apartament 3f.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Mieszkanie 43D',
    slug: 'mieszkanie-43d',
    year: '2012',
    location: 'Rynek Główny 43, Kraków',
    role: 'Generalne wykonawstwo',
    category: 'wnetrza',
    tags: ['realizacja', 'wnetrza', 'mieszkanie'],
    shortDescription:
      'Generalne wykonawstwo mieszkania przy Rynku Głównym 43 w Krakowie. Realizacja w prestiżowej kamienicy w sercu Starego Miasta.',
    images: ['/images/apartament 4d.webp', '/images/apartament 4g.webp'],
    externalLinks: [
      { label: 'Zobacz na Facebooku', url: 'https://www.facebook.com/CHDarchitekci/posts/pfbid031jNBeoc2yQDHcYVASrYuz8W3BVtzg1BhkxjAYLWbhddjWKCjWD3s6sBJYZ4mmphJl' },
    ],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Mieszkanie 43E',
    slug: 'mieszkanie-43e',
    year: '2012',
    location: 'Rynek Główny 43, Kraków',
    role: 'Generalne wykonawstwo',
    category: 'wnetrza',
    tags: ['realizacja', 'wnetrza', 'mieszkanie'],
    shortDescription:
      'Generalne wykonawstwo mieszkania przy Rynku Głównym 43 w Krakowie. Realizacja w prestiżowej kamienicy w sercu Starego Miasta.',
    images: ['/images/apartament 5c.webp', '/images/apartament 5f.webp'],
    externalLinks: [
      { label: 'Zobacz na Facebooku', url: 'https://www.facebook.com/CHDarchitekci/posts/pfbid03tXHHWL5kKVykrrM5ZrpZJdhxFukxCRtSbjg2PhiDiVfYd57KMKVN5YveKCVeDpwl' },
      { label: 'Booking.com', url: 'https://www.booking.com/hotel/pl/pod-sloncem-rynek-glowny.pl.html' },
      { label: 'Airbnb', url: 'https://www.airbnb.pl/rooms/710509476889449302' },
    ],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Uzdrowisko Bistro',
    titleEn: 'Uzdrowisko Bistro, Warsaw',
    slug: 'uzdrowisko-bistro',
    year: '2023',
    location: 'Warszawa',
    role: 'Projekt wnętrz',
    roleEn: 'Interior design',
    category: 'wnetrza',
    tags: ['autorski', 'realizacja', 'wnetrza', 'gastronomia'],
    shortDescription:
      'Projekt wnętrz restauracyjnych w szpitalach w Warszawie — Szpital Onkologiczny i Szpital Uniwersytecki. Koncepcja łącząca funkcjonalność z przyjazną atmosferą bistro.',
    shortDescriptionEn:
      'Interior design for dining spaces in two Warsaw hospitals. A concept combining functional efficiency with a warm bistro atmosphere in a challenging institutional context.',
    images: [
      '/images/uzdrowiskoBistro.webp',
      '/images/uzdrowiskoBistro2.webp',
      '/images/uzdrowsko3.webp',
      '/images/uzdrowisko2.webp',
      '/images/uzdrowisko3.webp',
      '/images/uzdrowisko bistro wizualizacja2.webp',
    ],
    featured: true,
    visibility: 'primary',
  },

  {
    title: 'Elewacja 142 NYC Manhattan',
    titleEn: 'Façade Survey, 142nd St, Manhattan',
    slug: 'elewacja-nyc-manhattan',
    year: '2023',
    location: 'Manhattan, New York, USA',
    role: 'Inwentaryzacja elewacji',
    roleEn: 'Façade survey and documentation',
    category: 'b2b-3d',
    tags: ['B2B', 'dokumentacja'],
    collaborators: CDS_TECH,
    shortDescription:
      'Szczegółowa inwentaryzacja i dokumentacja elewacji budynku przy 142. ulicy na Manhattanie. Projekt realizowany dla klienta z rynku nowojorskiego.',
    shortDescriptionEn:
      'Detailed façade survey and documentation for a building on 142nd Street, Manhattan. Project delivered for a New York-based client.',
    images: [
      '/images/ben/nycelewacja1.webp',
      '/images/ben/nycelewacja2.webp',
      '/images/elewacjamanhattan1.webp',
      '/images/elewacjamanhattan2.webp',
    ],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'Projekt hotelu, Włochy',
    titleEn: 'Hotel Concept, Italy',
    slug: 'projekt-hotelu-wlochy',
    year: '2024',
    location: 'Włochy',
    role: 'Projekt koncepcyjny',
    roleEn: 'Conceptual design',
    category: 'wnetrza',
    tags: ['autorski', 'wnetrza'],
    shortDescription:
      'Projekt koncepcyjny hotelu we Włoszech. Projekt łączy lokalną architekturę z nowoczesnym podejściem do wnętrz hotelowych.',
    shortDescriptionEn:
      'Conceptual hotel design in Italy. The project combines local architectural vernacular with a contemporary approach to hotel interiors.',
    images: ['/images/italia1.webp', '/images/italia2.webp'],
    featured: false,
    visibility: 'primary',
  },

  {
    title: 'Antoniak — serwis Peugeot & Citroën, Wieliczka',
    titleEn: 'Antoniak — Peugeot & Citroën Dealership, Wieliczka',
    slug: 'antoniak-wieliczka',
    year: '2025',
    location: 'Wieliczka',
    role: 'Projekt koncepcyjny rozbudowy',
    roleEn: 'Conceptual expansion design',
    category: 'architektura',
    tags: ['autorski', 'architektura', 'dokumentacja'],
    shortDescription:
      'Projekt koncepcyjny rozbudowy salonu i serwisu autoryzowanego dealera Peugeot i Citroën w Wieliczce. Nowa elewacja w kolorystyce RAL 7021, rozbudowa zaplecza serwisowego.',
    shortDescriptionEn:
      'Conceptual expansion design for an authorised Peugeot and Citroën dealership in Wieliczka. New RAL 7021 façade, extended service facilities.',
    images: [
      '/images/antoniak/antoniak-2.jpg',
      '/images/antoniak/antoniak-3.jpg',
      '/images/antoniak/antoniak-3a.jpg',
      '/images/antoniak/antoniak-4.jpg',
      '/images/antoniak/antoniak-5.jpg',
      '/images/antoniak/antoniak-6.jpg',
      '/images/antoniak/antoniak-7.jpg',
      '/images/antoniak/antoniak-8.jpg',
      '/images/antoniak/antoniak-9.jpg',
      '/images/antoniak/antoniak-stan-1.png',
      '/images/antoniak/antoniak-stan-7.png',
      '/images/antoniak/antoniak-stan-8.png',
    ],
    featured: false,
    visibility: 'primary',
  },

  // ─── SECONDARY ───────────────────────────────────────────────────────────────

  {
    title: 'Dom prefabrykowany 1',
    slug: 'dom-prefabrykowany-1',
    year: '2021',
    location: 'Polska',
    role: 'Projekt architektoniczny',
    category: 'architektura',
    tags: ['autorski', 'architektura'],
    shortDescription:
      'Dom jednorodzinny w technologii prefabrykowanej szkieletowej, posadowiony na palach.',
    images: ['/images/plaski1.webp', '/images/plaski2.webp', '/images/prefab1.webp'],
    externalLinks: [
      { label: 'Zobacz na Facebooku', url: 'https://www.facebook.com/CHDarchitekci/posts/pfbid02MyhkRKAmAZbTk9Eh3zVkA6rovL77pLD95qEW5Bu953qAvyXVjf7T7MHrR26Y9nwTl' },
    ],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Dom prefabrykowany 2',
    slug: 'dom-prefabrykowany-2',
    year: '2021',
    location: 'Polska',
    role: 'Projekt architektoniczny',
    category: 'architektura',
    tags: ['autorski', 'architektura'],
    shortDescription:
      'Dom jednorodzinny w technologii prefabrykowanej szkieletowej, posadowiony na palach.',
    images: ['/images/houseq1.webp', '/images/houseq2.webp'],
    externalLinks: [
      { label: 'Zobacz na Facebooku', url: 'https://www.facebook.com/CHDarchitekci/posts/pfbid0qAv6vEJzGdHXDLVCFTXWtBHNV3jQL6oaTneKN3WCpYj1jaufunry1QXyzDuvzqU9l' },
    ],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Dom prefabrykowany 3',
    slug: 'dom-prefabrykowany-3',
    year: '2021',
    location: 'Polska',
    role: 'Projekt architektoniczny',
    category: 'architektura',
    tags: ['autorski', 'architektura'],
    shortDescription:
      'Dom jednorodzinny w technologii prefabrykowanej szkieletowej, posadowiony na palach.',
    images: ['/images/3.webp', '/images/8.webp'],
    externalLinks: [
      { label: 'Zobacz na Facebooku', url: 'https://www.facebook.com/CHDarchitekci/posts/pfbid06ZPA6tYWBDQaAyYVkmJFoLW3bfHMsfCkjbH6Fn4yQdht2Zh8TpFFMpMtDMgrQxqEl' },
    ],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Analizy i koncepcje deweloperskie',
    slug: 'analizy-koncepcje',
    year: '',
    location: 'Polska',
    role: 'Analizy chłonności, koncepcje, feasibility study',
    category: 'architektura',
    tags: ['architektura', 'dokumentacja'],
    shortDescription:
      'Zanim powstaje projekt, często konieczna jest analiza. CHD realizuje analizy chłonności działek, studia wykonalności (feasibility study) oraz koncepcje programowo-przestrzenne dla inwestorów i deweloperów. Sprawdzamy co i ile można wybudować, zanim inwestor podejmie decyzję zakupową lub projektową.',
    fullDescription:
      'Analiza poprzedzająca projekt to usługa szczególnie wartościowa przy zakupie działki, planowaniu inwestycji deweloperskiej lub ocenie potencjału nieruchomości. CHD przygotowuje:\n\n— Analizę chłonności działki: sprawdzamy co dopuszcza MPZP lub WZ, ile metrów kwadratowych PUM można wybudować, jaki jest realny potencjał zabudowy przy danych warunkach.\n\n— Feasibility study: oceniamy wykonalność projektu pod kątem technicznym, prawnym i ekonomicznym. Efekt: dokument, który pomaga podjąć decyzję inwestycyjną z pełną świadomością ryzyk.\n\n— Koncepcja programowo-przestrzenna: propozycja zagospodarowania działki lub przebudowy istniejącego obiektu — rzuty, bryła, bilans powierzchni. Bez zbędnych szczegółów, ale z wystarczającą precyzją żeby ocenić potencjał.\n\nTe usługi kierujemy zarówno do prywatnych inwestorów rozważających zakup działki, jak i do deweloperów potrzebujących szybkiej oceny nabytego terenu.',
    images: [],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Domy szeregowe',
    slug: 'domy-szeregowe',
    year: '2018',
    location: 'Polska',
    role: 'Projekt architektoniczny',
    category: 'architektura',
    tags: ['autorski', 'architektura'],
    shortDescription: 'Projekt zabudowy szeregowej — serie domów jednorodzinnych w zabudowie bliźniaczej.',
    images: ['/images/szeregowa1.webp', '/images/szeregowa2.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Południe Polski — rewitalizacja',
    slug: 'poludnie-polski-rewitalizacja',
    year: '2019',
    location: 'Południe Polski',
    role: 'Projekt rewitalizacji',
    category: 'architektura',
    tags: ['rewitalizacja', 'architektura'],
    shortDescription:
      'Rewitalizacja domu w opłakanym stanie — ściany z bloczków żużlobetonowych, brak instalacji, lokatorzy spali na sianie. Projekt obejmował pełną przebudowę i zagospodarowanie terenu.',
    images: ['/images/rudera.webp', '/images/rudera2.webp'],
    externalLinks: [
      { label: 'Zobacz na Facebooku', url: 'https://www.facebook.com/CHDarchitekci/posts/pfbid02c4GTefKeaoTKgM6bbJ9wpTyM1c98Whfk5EqzTHYBfN1sVLuMN3cU93VfKzNY4Ps6l' },
    ],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Szkoła, Krosno',
    slug: 'szkola-krosno',
    year: '2022',
    location: 'Krosno',
    role: 'Projekt architektoniczny',
    category: 'architektura',
    tags: ['architektura'],
    shortDescription: 'Projekt architektoniczny szkoły w Krośnie.',
    images: ['/images/krosno.webp', '/images/krosno2.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Elewacja Grand Hotel',
    slug: 'elewacja-grand-hotel',
    year: '2018',
    location: 'Kraków',
    role: 'Projekt oświetlenia elewacji',
    category: 'architektura',
    tags: ['architektura', 'dokumentacja'],
    shortDescription: 'Projekt oświetlenia elewacji Grand Hotelu w Krakowie.',
    images: ['/images/grand1.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Dzień Dobry Cafe',
    slug: 'dzien-dobry-cafe',
    year: '2019',
    location: 'Szpital Uniwersytecki, Kraków',
    role: 'Projekt wnętrz',
    category: 'wnetrza',
    tags: ['realizacja', 'wnetrza', 'gastronomia'],
    shortDescription: 'Projekt wnętrz kawiarni w Szpitalu Uniwersyteckim w Krakowie.',
    images: ['/images/dzienDobryCafe.webp', '/images/dzienDobryCafe2.webp', '/images/dzienDobryCafe3.webp', '/images/dzienDobryCafe4.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Restauracja Pod Słońcem',
    slug: 'restauracja-pod-sloncem',
    year: '2000',
    location: 'Rynek Główny 43, Kraków',
    role: 'Projekt wnętrz',
    category: 'wnetrza',
    tags: ['realizacja', 'wnetrza', 'gastronomia'],
    shortDescription: 'Projekt wnętrz restauracji przy Rynku Głównym w Krakowie.',
    images: ['/images/podsloncem1.webp', '/images/podsloncem2.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Ingo Hostel',
    slug: 'ingo-hostel',
    year: '2007',
    location: 'ul. Kopernika, Kraków',
    role: 'Projekt wnętrz',
    category: 'wnetrza',
    tags: ['realizacja', 'wnetrza'],
    shortDescription: 'Projekt wnętrz hostelu na ulicy Kopernika w Krakowie.',
    images: ['/images/ingo1.webp', '/images/ingo2.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Restauracja Szoberowska',
    slug: 'restauracja-szoberowska',
    year: '2008',
    location: 'Mały Rynek, Kraków',
    role: 'Projekt wnętrz',
    category: 'wnetrza',
    tags: ['realizacja', 'wnetrza', 'gastronomia'],
    shortDescription: 'Projekt wnętrz restauracji na Małym Rynku w Krakowie.',
    images: ['/images/szoberowska1.webp', '/images/szoberowska2.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Szkoła Muzyczna',
    slug: 'szkola-muzyczna',
    year: '2023',
    location: 'Polska',
    role: 'Projekt koncepcyjny wnętrz',
    category: 'wnetrza',
    tags: ['autorski', 'wnetrza'],
    shortDescription: 'Projekt koncepcyjny wnętrz szkoły muzycznej.',
    images: ['/images/muzyczna.webp', '/images/muzyczna2.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Obiekty Sakralne',
    slug: 'obiekty-sakralne',
    year: '2019',
    location: 'Polska',
    role: 'Projekt architektoniczny',
    category: 'architektura',
    tags: ['autorski', 'architektura'],
    shortDescription: 'Projekty obiektów sakralnych — architektura i wnętrza.',
    images: ['/images/sakralne3.webp', '/images/sakralne2.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Newhaven — Place of Disappearance',
    slug: 'newhaven-place-of-disappearance',
    year: '',
    location: 'Newhaven, UK',
    role: 'Koncepcja architektoniczna',
    category: 'architektura',
    tags: ['autorski', 'architektura'],
    shortDescription: 'Koncepcja architektoniczna w Newhaven, Anglia.',
    images: ['/images/brighton.webp', '/images/brighton2.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'East London — Organic Development',
    slug: 'east-london-organic-development',
    year: '',
    location: 'East London, UK',
    role: 'Koncepcja architektoniczna',
    category: 'architektura',
    tags: ['autorski', 'architektura'],
    shortDescription: 'Koncepcja organicznego rozwoju urbanistycznego we wschodnim Londynie.',
    images: ['/images/oxford.webp', '/images/oxford2.webp'],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Szkoła Podstawowa, Modliniczka',
    slug: 'szkola-podstawowa-modliniczka',
    year: '2023',
    location: 'Modliniczka k. Krakowa',
    role: 'Projekt konkursowy',
    category: 'architektura',
    tags: ['autorski', 'architektura'],
    shortDescription:
      'Projekt konkursowy szkoły podstawowej w Modliniczce. Kompletna koncepcja architektoniczna z planszami konkursowymi — bryła, układ funkcjonalny, zagospodarowanie terenu.',
    fullDescription:
      'Projekt konkursowy budynku szkoły podstawowej w Modliniczce k. Krakowa. Koncepcja obejmowała pełen zakres opracowania konkursowego: bryłę i układ funkcjonalny budynku, zagospodarowanie działki, bilans terenu oraz wizualizacje zewnętrzne i widok z lotu ptaka. Projekt prezentowany na 6 planszach konkursowych.',
    images: [
      '/images/modliniczka/wizualizacja-2.webp',
      '/images/modliniczka/wizualizacja-1.webp',
      '/images/modliniczka/wizualizacja-4.webp',
      '/images/modliniczka/wizualizacja-3.webp',
      '/images/modliniczka/plansza-1.webp',
      '/images/modliniczka/plansza-2.webp',
      '/images/modliniczka/plansza-3.webp',
      '/images/modliniczka/plansza-4.webp',
      '/images/modliniczka/plansza-5.webp',
      '/images/modliniczka/plansza-6.webp',
    ],
    featured: false,
    visibility: 'secondary',
  },

  {
    title: 'Muzeum Samochodowe, Brzozów',
    slug: 'muzeum-samochodowe-brzozow',
    year: '2021',
    location: 'Brzozów',
    role: 'Projekt koncepcyjny',
    category: 'architektura',
    tags: ['architektura', 'autorski'],
    shortDescription: 'Projekt koncepcyjny muzeum samochodowego w Brzozowie. Nowoczesna bryła zaprojektowana przy Ośrodku Opieki nad Dziećmi.',
    fullDescription:
      'Projekt koncepcyjny muzeum samochodowego w Brzozowie. Obiekt zaprojektowany przy Ośrodku Opieki nad Dziećmi łączy funkcję wystawienniczą z edukacyjną. Nowoczesna bryła z ekspozycją zewnętrzną i wewnętrzną umożliwia prezentację zabytkowych pojazdów w atrakcyjnej architektonicznej oprawie.',
    images: [
      '/images/muzeum/muzeum-samochodowe-1.webp',
      '/images/muzeum/muzeum-samochodowe-2.webp',
      '/images/muzeum/muzeum-samochodowe-3.webp',
      '/images/muzeum/muzeum-samochodowe-4.webp',
      '/images/muzeum/muzeum-samochodowe-5.webp',
      '/images/muzeum/muzeum-samochodowe-6.webp',
      '/images/muzeum/muzeum-samochodowe-7.webp',
      '/images/muzeum/muzeum-samochodowe-8.webp',
      '/images/muzeum/muzeum-samochodowe-pianka-1.webp',
      '/images/muzeum/muzeum-samochodowe-pianka-2.webp',
      '/images/muzeum/muzeum-samochodowe-pianka-3.webp',
      '/images/muzeum/muzeum-samochodowe-pianka-4.webp',
      '/images/muzeum/muzeum-samochodowe-pianka-5.webp',
    ],
    featured: false,
    visibility: 'secondary',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getPrimaryProjects(): Project[] {
  return projects.filter((p) => p.visibility === 'primary')
}
