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
      className="flex-shrink-0 w-72 p-6 mx-3"
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
      <p className="text-white/70 text-xs font-light leading-relaxed mb-4 line-clamp-3">
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

  // Duplicate for seamless loop
  const track1 = [...row1, ...row1]
  const track2 = [...row2, ...row2]

  return (
    <div className="overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          animation: marquee-left 40s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          animation: marquee-right 45s linear infinite;
        }
        .marquee-wrap:hover .marquee-track-left,
        .marquee-wrap:hover .marquee-track-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-wrap space-y-3">
        {/* Row 1 — scrolls left */}
        <div className="marquee-track-left">
          {track1.map((t, i) => (
            <ReviewCard key={`r1-${t.id}-${i}`} t={t} />
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-track-right">
          {track2.map((t, i) => (
            <ReviewCard key={`r2-${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </div>
  )
}
