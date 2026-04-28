'use client'

import { useState } from 'react'
import type { Project, ProjectCategory } from '@/data/projects'
import ProjectCard from './ProjectCard'
import { cn } from '@/lib/utils'

const FILTERS: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: 'Wszystkie', value: 'all' },
  { label: 'Architektura', value: 'architektura' },
  { label: 'Wnętrza', value: 'wnetrza' },
  { label: 'B2B / 3D', value: 'b2b-3d' },
]

interface ProjectGridProps {
  projects: Project[]
  showFilters?: boolean
  showSecondary?: boolean
}

export default function ProjectGrid({
  projects,
  showFilters = false,
  showSecondary = false,
}: ProjectGridProps) {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')

  const visible = projects.filter((p) => {
    if (!showSecondary && p.visibility === 'secondary') return false
    if (filter === 'all') return true
    return p.category === filter
  })

  const featured = visible.filter((p) => p.featured)
  const rest = visible.filter((p) => !p.featured)

  return (
    <div>
      {showFilters && (
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
      )}

      {/* Featured row */}
      {featured.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-1">
          {featured.slice(0, 2).map((p) => (
            <ProjectCard key={p.slug} project={p} size="large" />
          ))}
        </div>
      )}

      {/* Rest grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}

      {visible.length === 0 && (
        <p className="text-center text-gray-400 py-16">Brak projektów w tej kategorii.</p>
      )}
    </div>
  )
}
