import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  imageSrc?: string
  imageAlt?: string
  size?: 'full' | 'medium'
  dark?: boolean
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaHref = '/kontakt',
  secondaryCtaLabel,
  secondaryCtaHref,
  imageSrc,
  imageAlt = '',
  size = 'full',
  dark = false,
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative flex items-center',
        size === 'full' ? 'min-h-[85vh]' : 'min-h-[50vh]',
        dark ? 'bg-stone-900' : 'bg-stone-50'
      )}
    >
      {imageSrc && (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className={cn('absolute inset-0', dark ? 'bg-navy/70' : 'bg-white/50')} />
        </div>
      )}

      <div className="container-site relative z-10 pt-28 pb-24">
        {subtitle && (
          <p className={cn('section-subtitle', dark ? 'text-gold' : 'text-gold')}>
            {subtitle}
          </p>
        )}
        <h1
          className={cn(
            'font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 max-w-4xl',
            dark ? 'text-white' : 'text-navy'
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              'text-lg max-w-xl leading-relaxed mb-10',
              dark ? 'text-gray-300' : 'text-gray-600'
            )}
          >
            {description}
          </p>
        )}
        {(ctaLabel || secondaryCtaLabel) && (
          <div className="flex flex-wrap gap-4">
            {ctaLabel && (
              <Link href={ctaHref} className="btn-primary">
                {ctaLabel}
              </Link>
            )}
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className={cn('btn-outline', dark ? 'border-white text-white hover:bg-white hover:text-navy' : '')}
              >
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
