import Link from 'next/link'
import Image from 'next/image'
import { Tag } from 'lucide-react'
import { type Product } from '@/types'
import { formatPrice } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.salePrice && product.salePrice < product.price
  const displayImage = product.images[0] ?? '/images/placeholder.jpg'

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
          <Image
            src={displayImage}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {hasDiscount && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                SALE
              </span>
            )}
            {product.featured && (
              <span className="bg-[#1E3A8A] text-white text-xs font-bold px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="bg-white text-gray-700 font-semibold px-3 py-1 rounded-full text-sm">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-[#1E3A8A] transition-colors line-clamp-2">
            {product.name}
          </h3>

          {product.category && (
            <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
              <Tag size={11} />
              {product.category.replace('-', ' ')}
            </p>
          )}

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex gap-1 mb-3">
              {product.colors.slice(0, 4).map((color) => (
                <span
                  key={color}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                >
                  {color}
                </span>
              ))}
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2">
            {hasDiscount ? (
              <>
                <span className="text-lg font-bold text-[#16A34A]">
                  {formatPrice(product.salePrice!)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-[#1E3A8A]">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          <div className="mt-3 w-full bg-[#1E3A8A] text-white text-sm font-semibold py-2 rounded-lg text-center group-hover:bg-blue-900 transition-colors">
            View Details
          </div>
        </div>
      </div>
    </Link>
  )
}
