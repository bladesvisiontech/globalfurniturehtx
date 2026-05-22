'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

interface Props {
  grouped: Record<string, FAQItem[]>
}

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">{item.question}</span>
        <ChevronDown
          size={18}
          className={cn('text-gray-400 shrink-0 transition-transform', open && 'rotate-180')}
        />
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t bg-gray-50 pt-4">
          {item.answer}
        </div>
      )}
    </div>
  )
}

export default function FAQClient({ grouped }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h2 className="text-lg font-bold text-[#1E3A8A] mb-4 uppercase tracking-wide text-sm">{category}</h2>
          <div className="space-y-2">
            {items.map((item) => (
              <FAQAccordion key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}

      <div className="bg-[#1E3A8A] text-white rounded-2xl p-8 text-center mt-8">
        <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
        <p className="text-blue-100 text-sm mb-4">Our team is happy to help. Call us or stop by the showroom.</p>
        <Link href="/contact" className="inline-block bg-[#16A34A] text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 transition-colors">
          Contact Us
        </Link>
      </div>
    </div>
  )
}
