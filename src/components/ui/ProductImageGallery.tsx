'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Props {
  images: string[]
  productName: string
}

export default function ProductImageGallery({ images, productName }: Props) {
  const [active, setActive] = useState(0)

  if (images.length === 0) return null

  return (
    <div className="sticky top-24 self-start">
      {/* Main image */}
      <div className="relative aspect-[4/3] bg-[#F5F2EC] overflow-hidden">
        <Image
          key={active}
          src={images[active]}
          alt={`${productName} — view ${active + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority={active === 0}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Image counter pill */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/40 text-white text-[10px] font-medium tracking-widest px-2.5 py-1">
            {active + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails — only render if more than 1 image */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className="relative aspect-square flex-1 bg-[#F5F2EC] overflow-hidden transition-all duration-200"
              style={{
                outline: i === active ? '2px solid #0e2b62' : '2px solid transparent',
                outlineOffset: 2,
                opacity: i === active ? 1 : 0.55,
              }}
            >
              <Image
                src={src}
                alt={`${productName} thumbnail ${i + 1}`}
                fill
                className="object-cover hover:opacity-100 transition-opacity"
                sizes="10vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
