import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'
import Watermark from '@/components/ui/Watermark'

const categoryLabel: Record<string, string> = {
  architektura: 'Architektura',
  wnetrza: 'Wnętrza',
  'b2b-3d': 'B2B / 3D',
}

interface ProjectCardProps {
  project: Project
  size?: 'default' | 'large'
}

export default function ProjectCard({ project, size = 'default' }: ProjectCardProps) {
  const cover = project.images[0]

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn(
        'group block relative overflow-hidden bg-stone-100',
        size === 'large' ? 'aspect-[4/3]' : 'aspect-square'
      )}
    >
      {cover && (
        <Image
          src={cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={size === 'large' ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 50vw, 33vw'}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-xs uppercase tracking-widest text-gold mb-1">
          {categoryLabel[project.category]}
        </p>
        <h3 className="font-display text-lg text-white leading-tight">{project.title}</h3>
        {project.year && <p className="text-xs text-gray-300 mt-1">{project.year}</p>}
      </div>

      <Watermark />

      {/* Collaborator badge */}
      {project.collaborators?.[0] && (
        <div className="absolute top-3 right-3 bg-navy text-white text-[10px] px-2 py-1 tracking-wide z-10">
          {project.collaborators[0].name}
        </div>
      )}

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 bg-gold text-white text-xs px-2 py-1 tracking-wide">
          Wyróżniony
        </div>
      )}
    </Link>
  )
}
