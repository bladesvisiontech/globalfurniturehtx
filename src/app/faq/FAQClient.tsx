'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FAQItem { id: string; question: string; answer: string; category: string }

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ border: '1px solid #ECEAE4' }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#F5F2EC] transition-colors">
        <span className="text-sm font-medium text-[#0e2b62] pr-4">{item.question}</span>
        <ChevronDown size={16} className={cn('text-[#7DA68B] shrink-0 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-[#0e2b62]/60 text-sm font-light leading-relaxed" style={{ borderTop: '1px solid #ECEAE4', paddingTop: 16 }}>
          {item.answer}
        </div>
      )}
    </div>
  )
}

export default function FAQClient({ grouped }: { grouped: Record<string, FAQItem[]> }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-5 font-medium">{category}</p>
          <div className="space-y-2">
            {items.map((item) => <FAQAccordion key={item.id} item={item} />)}
          </div>
        </div>
      ))}
      <div className="bg-[#0e2b62] text-white p-10 text-center mt-4">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Support</p>
        <h3 className="text-2xl font-light mb-3">Still have questions?</h3>
        <p className="text-white/50 text-sm font-light mb-6">Our team is happy to help. Call us or stop by the showroom.</p>
        <Link href="/contact" className="text-sm font-medium text-[#0e2b62] bg-white px-8 py-3 hover:bg-[#E7E0CE] transition-colors" style={{ borderRadius: 25 }}>Contact Us</Link>
      </div>
    </div>
  )
}
