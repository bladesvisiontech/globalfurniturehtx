'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

interface Banner {
  id: string
  title: string
  subtitle: string
  imageUrl: string
  ctaText: string
  ctaLink: string
}

interface Props {
  banners: Banner[]
  phone: string
  phoneUrl: string
}

const INTERVAL = 5500

export default function HeroCarousel({ banners, phone, phoneUrl }: Props) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setPrev(current)
    setCurrent((c) => (c + 1) % banners.length)
  }, [current, banners.length])

  useEffect(() => {
    if (paused) return
    const id = setTimeout(next, INTERVAL)
    return () => clearTimeout(id)
  }, [current, paused, next])

  const goTo = (i: number) => {
    if (i === current) return
    setPrev(current)
    setCurrent(i)
  }

  return (
    <section
      className="relative bg-[#7DA68B] text-white overflow-hidden"
      style={{ minHeight: 'calc(100vh - 88px)', maxHeight: 700 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {banners.map((banner, i) => {
        const isActive = i === current
        const isPrev = i === prev
        return (
          <div
            key={banner.id}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : 0,
              transition: isActive ? 'opacity 1.2s ease' : isPrev ? 'opacity 0.8s ease' : 'none',
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
            }}
          >
            <Image
              src={banner.imageUrl}
              alt={banner.title}
              fill
              className="object-cover"
              priority={i === 0}
              style={{
                transform: isActive ? 'scale(1.05)' : 'scale(1)',
                transition: isActive ? 'transform 6s ease' : 'none',
              }}
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071529]/90 via-[#071529]/55 to-transparent" />
          </div>
        )
      })}

      {/* Text content */}
      <div
        className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col justify-center h-full"
        style={{ minHeight: 'inherit' }}
      >
        <div className="max-w-xl py-24">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#0e2b62] mb-5 font-medium"
            style={{ animation: 'fadeSlideUp 0.7s ease both', animationDelay: '0.1s' }}
          >
            Houston, TX · Financing Available
          </p>
          <h1
            key={`title-${current}`}
            className="text-5xl md:text-[64px] font-light leading-[1.08] mb-6 text-white"
            style={{ animation: 'fadeSlideUp 0.7s ease both', animationDelay: '0.2s' }}
          >
            {banners[current].title}
          </h1>
          <p
            key={`sub-${current}`}
            className="text-base font-light text-white/70 leading-relaxed mb-10 max-w-sm"
            style={{ animation: 'fadeSlideUp 0.7s ease both', animationDelay: '0.35s' }}
          >
            {banners[current].subtitle}
          </p>
          <div
            className="flex flex-wrap gap-3"
            style={{ animation: 'fadeSlideUp 0.7s ease both', animationDelay: '0.5s' }}
          >
            <Link
              href={banners[current].ctaLink}
              className="text-sm font-medium text-[#7DA68B] bg-white px-7 py-3.5 hover:bg-[#F5F2EC] transition-colors flex items-center gap-2"
              style={{ borderRadius: 25 }}
            >
              {banners[current].ctaText}
              <ArrowRight size={14} />
            </Link>
            <a
              href={phoneUrl}
              className="text-sm font-medium text-white border border-white/40 px-7 py-3.5 hover:bg-white/10 transition-colors flex items-center gap-2"
              style={{ borderRadius: 25 }}
            >
              <Phone size={13} />
              {phone}
            </a>
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-500"
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              borderRadius: 4,
              background: i === current ? 'white' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      {!paused && (
        <div
          key={`progress-${current}`}
          className="absolute bottom-0 left-0 h-[2px] bg-white/40 z-10"
          style={{
            animation: `progressBar ${INTERVAL}ms linear`,
            width: '100%',
            transformOrigin: 'left',
          }}
        />
      )}

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes progressBar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}
