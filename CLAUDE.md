# CHD Architekci — kontekst projektu

Strona pracowni architektonicznej cholujdesign.com. Migracja z CRA React na Next.js 14.

## Stack

- **Next.js 14** (App Router, TypeScript, SSG)
- **Tailwind CSS** — własne klasy w `globals.css` (`.btn-primary`, `.section-title`, `.container-site`)
- **EmailJS browser** — formularz kontaktowy po stronie klienta
- **Node.js 24** — wymagane >=18.17.0

## Uruchomienie

```bash
npm run dev       # http://localhost:3000
npm run build
npm run start
```

## Struktura katalogów

```
app/                        # Next.js App Router
  layout.tsx                # root layout — Navbar + Footer
  globals.css               # Tailwind + custom klasy
  page.tsx                  # /
  zakres/page.tsx            # /zakres
  architektura/page.tsx      # /architektura
  wnetrza/page.tsx           # /wnetrza
  b2b-3d/page.tsx            # /b2b-3d
  portfolio/
    page.tsx                 # /portfolio (z filtrami)
    [slug]/page.tsx          # /portfolio/[slug] (SSG, 27 projektów)
  proces-wspolpracy/page.tsx # /proces-wspolpracy
  kontakt/page.tsx           # /kontakt
  architekt-krakow/page.tsx  # /architekt-krakow (landing SEO)
  blog/
    page.tsx                 # /blog
    [slug]/page.tsx          # /blog/[slug]
  polityka-prywatnosci/page.tsx
  not-found.tsx              # 404
  sitemap.ts                 # /sitemap.xml (generowany)
  robots.ts                  # /robots.txt (generowany)

components/
  layout/
    Navbar.tsx               # fixed, mobile hamburger
    Footer.tsx
  ui/
    Hero.tsx                 # props: title, subtitle, description, cta*, imageSrc, size, dark
    ProjectCard.tsx          # Link → /portfolio/[slug], hover overlay
    ProjectGrid.tsx          # 'use client', filtrowanie po kategorii
    CTA.tsx                  # sekcja CTA, dark/light
  contact/
    ContactForm.tsx          # 'use client', emailjs
  seo/
    JsonLd.tsx               # LocalBusinessJsonLd, OrganizationJsonLd, BreadcrumbJsonLd, ProjectJsonLd

data/
  projects.ts                # JEDYNE źródło danych projektów — 27 projektów, typy TS
  legacy/
    architectureProjects.ts  # stare dane z CRA (tylko referencja)
    interiorsProjects.ts     # stare dane z CRA (tylko referencja)

lib/
  utils.ts                   # cn(), slugify(), SITE_URL, SITE_NAME, SITE_EMAIL, SITE_PHONE, SITE_ADDRESS

legacy/
  src/                       # stary kod CRA — zachowany bez zmian
    App.js                   # stary routing
    src/                     # stare komponenty JSX
```

## Model danych projektów

Plik: `data/projects.ts`

```typescript
interface Project {
  title: string
  slug: string
  year?: string
  location?: string
  role: string
  category: 'architektura' | 'wnetrza' | 'b2b-3d'
  tags: ProjectTag[]
  shortDescription: string
  fullDescription?: string
  images: string[]        // ścieżki z /public/images/
  featured: boolean       // true = top 5 projektów, wyświetlane jako pierwsze
  visibility: 'primary' | 'secondary'  // secondary = niżej w portfolio
}
```

Helpery: `getProjectBySlug()`, `getFeaturedProjects()`, `getProjectsByCategory()`, `getPrimaryProjects()`

## Projekty wyróżnione (featured: true)

1. **sycamore** — B2B case, Chicago (b2b-3d)
2. **kurka-wodna** — autorskie wnętrza, Kraków 2014 (wnetrza)
3. **eliptical-duplex-stair-nyc** — premium B2B, Central Park Tower (b2b-3d)
4. **pi-i-sigma-rakowicka** — architektura, Kraków 2016 (architektura)
5. **pawla-12-katowice** — rewitalizacja zabytkowa (architektura)

## Kolory i typografia

```css
--gold:  #A97900   /* primary, akcenty, CTA */
--navy:  #1b222e   /* tła ciemne, tekst nagłówków */
```

Font nagłówków: `Luxurious Roman` (Google Fonts, ładowany w `app/layout.tsx`)

## Zmienne środowiskowe

Plik: `.env.local` (skopiować z `.env.local.example`)

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_a1wwmva
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_jnm4g0d
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_x9kPpW1JmhYVbwVWmxAVD
NEXT_PUBLIC_GA_ID=G-7BSET98ST8
```

## Obrazy

Wszystkie obrazy są w `public/images/` (oryginalne z CRA, niezmienione).
Używać `next/image` z `fill` + `object-cover` dla pełnorozmiarowych, `sizes` dla grid.
Uwaga: niektóre nazwy plików zawierają spacje (np. `"secondstair 2.webp"`, `"bead 47.webp"`).

## SEO — co jest gotowe

- `metadata` per page (title, description, canonical, OG)
- `app/sitemap.ts` — generuje `/sitemap.xml` z wszystkimi trasami i projektami
- `app/robots.ts` — generuje `/robots.txt`
- JSON-LD: `LocalBusiness`, `Organization`, `BreadcrumbList`, `CreativeWork` (na stronach projektów)
- H1 na każdej stronie, `alt` na obrazach (do uzupełnienia treściami)

## Layout stron usługowych — wzór `b2b-3d`

`app/b2b-3d/page.tsx` jest **kanonicznym wzorem** layoutu dla stron usługowych.
`/architektura` i `/wnetrza` powinny być przebudowane według tego samego schematu — NIE używać generycznego komponentu `<Hero>` bez `imageSrc`.

### Kolejność sekcji (wzór b2b-3d)

| # | Sekcja | Klasy tła | Kluczowy element |
|---|--------|-----------|-----------------|
| 1 | **Hero** | `bg-[#1b222e]`, obraz z `opacity-30` | h1 + subtitle gold + opis + 2 CTA (primary + outline) |
| 2 | **Social proof bar** | `bg-[#A97900]` | jedno zdanie z pogrubionymi liczbami/faktami |
| 3 | **Dwa tryby / Specjalizacje** | `bg-stone-50` | 2 karty w siatce 1×2: biała + granatowa; listy z `—` |
| 4 | **Kontekst / Rynek** | `bg-white` | 3-kolumnowy grid kart `bg-stone-50` z bullet listami |
| 5 | **Proces współpracy** | `bg-[#1b222e]` | siatka 2×2 + rząd ze statystykami (`font-display text-4xl text-[#A97900]`) |
| 6 | **Realizacje** | `bg-stone-50` | inline grid projektów (NIE `<ProjectCard>`) z hover-scale |
| 7 | **Co możemy / Czego potrzebujemy / Wycena** | `bg-white` | 3-kolumnowa siatka tekstowa |
| 8 | **CTA** | `<CTA dark>` | standardowy komponent |

### Reguły stylu obowiązujące na wszystkich stronach usługowych

- Hero zawsze: `min-h-[60vh]`, obraz tła `fill + opacity-30`, `pt-32 pb-24`
- Subtitle nad h1: `text-xs uppercase tracking-[0.2em] text-[#A97900]`
- Listy cech: `<span className="text-[#A97900] shrink-0 mt-0.5">—</span>`
- Karty ciemne: `bg-[#1b222e] p-10`, karty jasne: `bg-white p-10 border border-stone-200`
- Wszystkie sekcje wrapują zawartość w `<FadeIn>` lub `<FadeIn delay={n * 80}>`
- Statystyki: `font-display text-4xl text-[#A97900]` nad opisem `text-xs text-white/40`

### Stan `/architektura` i `/wnetrza` — co wymaga przebudowy

**`/architektura`** (`app/architektura/page.tsx`) — aktualny stan:
- Używa `<Hero>` bez `imageSrc` → szare tło, brak efektu
- Sekcja specjalizacji: zwykły grid kart z lewą krawędzią gold — brak karty ciemnej
- Brak social proof bar
- Brak sekcji procesu współpracy / kontekstu rynkowego
- Brak statystyk

**`/wnetrza`** (`app/wnetrza/page.tsx`) — aktualny stan:
- Używa `<Hero>` bez `imageSrc` → szare tło, brak efektu
- Sekcja Kurka Wodna jako case-study highlight — zachować (dobry element)
- Brak social proof bar
- Brak sekcji procesu

**Do zrobienia** (w kolejności):
1. Przebudować hero obu stron na niestandardowy `<section>` z obrazem tła (wzór b2b-3d)
2. Dodać gold social proof bar po hero
3. Rozbudować sekcje specjalizacji do formatu 2 kart (jasna + ciemna)
4. Dodać sekcję procesu/metody pracy na `bg-[#1b222e]`
5. Inline grid projektów zamiast lub obok `<ProjectCard>`

Obrazy kandydujące do hero:
- `/architektura` → `public/images/` — wybrać zdjęcie fasady lub wnętrza historycznego
- `/wnetrza` → `public/images/` — wybrać zdjęcie wnętrza (np. Kurka Wodna)

## Sekcja "Typy projektów" na `/zakres`

Accordion z 8 typologiami, wstawiony między sekcję "Co dostaje klient" a "Wybrane projekty".
Implementacja: natywny `<details>/<summary>` + Tailwind `group-open:` — zero JS, SEO-friendly.
Dane: stała `SPECS` w `app/zakres/page.tsx`.

Kolejność typologii:
1. Mieszkania / budynki mieszkalne
2. Gastronomia / lokale usługowe
3. Hotele / apartamenty na wynajem
4. Rewitalizacja i obiekty zabytkowe
5. B2B / CGI / modele 3D
6. www i marketing dla deweloperów
7. Obsługa inwestora zagranicznego
8. Projektowanie ekologiczne i certyfikaty energetyczne (na szarym końcu)

## Blog — wpisy

Wpisy zdefiniowane jako obiekty `Record<string, Post>` w `app/blog/[slug]/page.tsx`.
Lista slugów (z datą) w `app/blog/page.tsx`.
Aby dodać wpis: dodać obiekt do obu plików jednocześnie.

Istniejące kategorie: Architektura koncepcyjna, Architektura, Wnętrza, B2B / 3D, Proces, Prawo / Regulacje.

Wpis o uchwale krajobrazowej (`uchwala-krajobrazowa-krakow-stare-miasto`) — SEO target: firmy na Starym Mieście Krakowa szukające pomocy z legalnymi materiałami marketingowymi i szyldami.

## Co wymaga uzupełnienia

- **`/architektura` i `/wnetrza`** — przebudowa layoutu wg wzoru b2b-3d (szczegóły powyżej)
- **Zdjęcia hero** — wybrać konkretne pliki z `public/images/` dla architektura i wnetrza
- **Blog** — wpisy zdefiniowane w kodzie; warto docelowo wdrożyć MDX lub CMS
- **Google Analytics** — `NEXT_PUBLIC_GA_ID` zdefiniowany, ale skrypt GA nie jest jeszcze dodany do `layout.tsx`
- **`fullDescription`** projektów — większość ma tylko `shortDescription`; warto uzupełnić przed wdrożeniem
- **Wdrożenie** — projekt gotowy na Vercel (zero-config) lub inny hosting wspierający Next.js

## Zasady portfolio (ważne)

- Nie pokazywać wszystkich projektów na równym poziomie — `featured` i `visibility` kontrolują hierarchię
- Sycamore = jeden projekt premium B2B (nie kilka osobnych wpisów jak w starym CRA)
- Bton Brighton = jedna seria / współpraca UK
- Mieszkania (Rakowicka + Rynek Główny) = jeden case-study
- Willa Wieliczka = jeden projekt (nie trzy osobne wpisy)
