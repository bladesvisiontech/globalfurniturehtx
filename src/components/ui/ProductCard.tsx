import Link from 'next/link'
import Image from 'next/image'
import { type Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const displayImage = product.images[0] ?? '/images/placeholder.jpg'

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-[#F8F8F6] overflow-hidden mb-4">
        <Image
          src={displayImage}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="text-xs font-medium tracking-widest uppercase text-[#1E3331]/50">Sold Out</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-0.5">
        <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7DA68B] mb-1.5">
          {product.category.replace(/-/g, ' ')}
        </p>
        <h3 className="text-sm font-medium text-[#1E3331] leading-snug mb-2 group-hover:text-[#1E3331] transition-colors">
          {product.name}
        </h3>
        {product.colors && product.colors.length > 0 && (
          <p className="text-[11px] text-[#1E3331]/40 font-light">
            {product.colors.join(' · ')}
          </p>
        )}
      </div>
    </Link>
  )
}
