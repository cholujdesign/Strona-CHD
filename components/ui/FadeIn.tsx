'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay) el.style.transitionDelay = `${delay}ms`

    // Fallback: always reveal after 800 ms in case IO doesn't fire
    const fallback = setTimeout(() => el.classList.add('is-visible'), 800)

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback)
          el.classList.add('is-visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      clearTimeout(fallback)
    }
  }, [delay])

  return (
    <div ref={ref} className={`fade-el${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}
