'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Project, ProjectCategory } from '@/data/projects'
import { cn } from '@/lib/utils'

const FILTERS: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Architecture', value: 'architektura' },
  { label: 'Interiors', value: 'wnetrza' },
  { label: 'B2B / 3D', value: 'b2b-3d' },
]

const categoryLabelEn: Record<string, string> = {
  architektura: 'Architecture',
  wnetrza: 'Interiors',
  'b2b-3d': 'B2B / 3D',
}

interface Props {
  primary: Project[]
  secondary: Project[]
}

export default function EnPortfolioGrid({ primary, secondary }: Props) {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')

  const filterFn = (list: Project[]) =>
    filter === 'all' ? list : list.filter((p) => p.category === filter)

  const visiblePrimary = filterFn(primary)
  const visibleSecondary = filterFn(secondary)
  const featured = visiblePrimary.filter((p) => p.featured)
  const rest = visiblePrimary.filter((p) => !p.featured)

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              'px-4 py-2 text-sm border tracking-wide transition-colors',
              filter === f.value
                ? 'bg-gold text-white border-gold'
                : 'border-gray-300 text-gray-600 hover:border-gold hover:text-gold'
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Featured row */}
      {featured.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-1">
          {featured.slice(0, 2).map((p) => (
            <Link
              key={p.slug}
              href={`/en/portfolio/${p.slug}`}
              className="group block relative overflow-hidden bg-stone-100 aspect-[4/3]"
            >
              {p.images[0] && (
                <Image
                  src={p.images[0]}
                  alt={p.titleEn ?? p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs uppercase tracking-widest text-gold mb-1">
                  {categoryLabelEn[p.category]}
                </p>
                <h3 className="font-display text-lg text-white leading-tight">{p.titleEn ?? p.title}</h3>
                {p.year && <p className="text-xs text-gray-300 mt-1">{p.year}</p>}
              </div>
              <div className="absolute top-3 left-3 bg-gold text-white text-xs px-2 py-1 tracking-wide">
                Featured
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Rest grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {rest.map((p) => (
            <Link
              key={p.slug}
              href={`/en/portfolio/${p.slug}`}
              className="group block relative overflow-hidden bg-stone-100 aspect-square"
            >
              {p.images[0] && (
                <Image
                  src={p.images[0]}
                  alt={p.titleEn ?? p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs uppercase tracking-widest text-gold mb-1">
                  {categoryLabelEn[p.category]}
                </p>
                <h3 className="font-display text-lg text-white leading-tight">{p.titleEn ?? p.title}</h3>
                {p.year && <p className="text-xs text-gray-300 mt-1">{p.year}</p>}
              </div>
            </Link>
          ))}
        </div>
      )}

      {visiblePrimary.length === 0 && (
        <p className="text-center text-gray-400 py-16">No projects in this category.</p>
      )}

      {/* Secondary projects */}
      {visibleSecondary.length > 0 && (
        <div className="mt-20 pt-12 border-t border-gray-100">
          <p className="section-subtitle">More projects</p>
          <p className="text-sm text-gray-500 mb-8">
            Additional work — concept studies and earlier projects.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {visibleSecondary.map((p) => (
              <Link
                key={p.slug}
                href={`/en/portfolio/${p.slug}`}
                className="group block relative overflow-hidden bg-stone-100 aspect-square"
              >
                {p.images[0] && (
                  <Image
                    src={p.images[0]}
                    alt={p.titleEn ?? p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs uppercase tracking-widest text-gold mb-1">
                    {categoryLabelEn[p.category]}
                  </p>
                  <h3 className="font-display text-lg text-white leading-tight">{p.titleEn ?? p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
