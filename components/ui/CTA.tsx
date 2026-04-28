import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CTAProps {
  title?: string
  description?: string
  label?: string
  href?: string
  dark?: boolean
  centered?: boolean
}

export default function CTA({
  title = 'Rozpocznij projekt',
  description = 'Opowiedz nam o swoim projekcie — chętnie porozmawiamy.',
  label = 'Skontaktuj się',
  href = '/kontakt',
  dark = true,
  centered = true,
}: CTAProps) {
  return (
    <section className={cn('py-24', dark ? 'bg-stone-900' : 'bg-stone-50')}>
      <div className={cn('container-site', centered && 'text-center')}>
        <h2
          className={cn(
            'font-display text-3xl md:text-4xl mb-4',
            dark ? 'text-white' : 'text-navy'
          )}
        >
          {title}
        </h2>
        <p className={cn('text-lg mb-8 max-w-lg', centered && 'mx-auto', dark ? 'text-gray-300' : 'text-gray-600')}>
          {description}
        </p>
        <Link
          href={href}
          className={cn(
            dark
              ? 'inline-block border border-gold text-gold px-8 py-4 text-sm tracking-wide hover:bg-gold hover:text-white transition-colors'
              : 'btn-primary'
          )}
        >
          {label}
        </Link>
      </div>
    </section>
  )
}
