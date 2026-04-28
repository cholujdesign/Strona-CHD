'use client'

import { useState } from 'react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 py-5 text-left group"
            aria-expanded={open === i}
          >
            <span className="font-display text-base text-navy group-hover:text-gold transition-colors">
              {item.question}
            </span>
            <span
              className="text-gold text-lg shrink-0 transition-transform duration-200"
              style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          {open === i && (
            <p className="pb-5 text-sm text-gray-500 leading-relaxed max-w-2xl">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
