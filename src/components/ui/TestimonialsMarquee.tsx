'use client'

import { useRef, useState } from 'react'
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
      style={{
        flexShrink: 0,
        width: 288,
        padding: '24px',
        margin: '0 10px',
        background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={12} style={{ color: '#7DA68B', fill: '#7DA68B' }} />
        ))}
      </div>
      <p style={{
        color: 'rgba(255,255,255,0.68)',
        fontSize: 12,
        fontWeight: 300,
        lineHeight: 1.7,
        marginBottom: 16,
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        &ldquo;{t.text}&rdquo;
      </p>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 12 }}>
        <p style={{ color: 'white', fontSize: 12, fontWeight: 500 }}>{t.name}</p>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, marginTop: 2 }}>{t.location}</p>
      </div>
    </div>
  )
}

function MarqueeRow({ items, duration, reverse }: {
  items: Testimonial[]
  duration: number
  reverse?: boolean
}) {
  const [paused, setPaused] = useState(false)
  // Duplicate 3x for a seamless loop with no gaps
  const track = [...items, ...items, ...items]

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `${reverse ? 'marquee-right' : 'marquee-left'} ${duration}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {track.map((t, i) => (
          <ReviewCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  )
}

export default function TestimonialsMarquee({ testimonials }: Props) {
  const half = Math.ceil(testimonials.length / 2)
  const row1 = testimonials.slice(0, half)
  const row2 = testimonials.slice(half)

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes marquee-right {
          from { transform: translateX(calc(-100% / 3)); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <MarqueeRow items={row1} duration={35} />
        <MarqueeRow items={row2} duration={42} reverse />
      </div>
    </>
  )
}
