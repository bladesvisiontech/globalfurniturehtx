'use client'

import { Star } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  location: string
  text: string
  rating: number
}

interface Props {
  testimonials: Testimonial[]
}

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="flex-shrink-0 w-72 p-6 mx-3 flex flex-col"
      style={{
        background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={12} className="text-[#7DA68B] fill-[#7DA68B]" />
        ))}
      </div>
      <p className="text-white/70 text-xs font-light leading-relaxed mb-4 line-clamp-3 flex-1">
        &ldquo;{t.text}&rdquo;
      </p>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 12 }}>
        <p className="text-white text-xs font-medium">{t.name}</p>
        <p className="text-white/35 text-[11px] mt-0.5">{t.location}</p>
      </div>
    </div>
  )
}

export default function TestimonialsMarquee({ testimonials }: Props) {
  const half = Math.ceil(testimonials.length / 2)
  const row1 = testimonials.slice(0, half)
  const row2 = testimonials.slice(half)

  return (
    <div className="marquee-pause overflow-hidden space-y-3">
      {/* Row 1 — scrolls left */}
      <div className="flex marquee-left" style={{ width: 'max-content' }}>
        {[...row1, ...row1].map((t, i) => (
          <ReviewCard key={`r1-${i}`} t={t} />
        ))}
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex marquee-right" style={{ width: 'max-content' }}>
        {[...row2, ...row2].map((t, i) => (
          <ReviewCard key={`r2-${i}`} t={t} />
        ))}
      </div>
    </div>
  )
}
