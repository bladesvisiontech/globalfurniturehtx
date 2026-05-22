import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ChevronLeft, MapPin, CreditCard } from 'lucide-react'
import productsData from '@/data/products.json'
import siteData from '@/data/site.json'
import { type Product } from '@/types'
import { formatPrice } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return (productsData.products as Product[]).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const product = (productsData.products as Product[]).find((p) => p.slug === slug)
  if (!product) return {}
  return { title: product.name, description: product.description }
}

const FINANCING_PARTNERS = [
  { name: 'Koalafi', href: 'https://koalafi.com' },
  { name: 'Snap Finance', href: 'https://snapfinance.com' },
  { name: 'Acima', href: 'https://acima.com' },
]

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = (productsData.products as Product[]).find((p) => p.slug === slug)
  if (!product) notFound()

  const hasDiscount = product.salePrice && product.salePrice < product.price
  const displayImage = product.images[0] ?? '/images/placeholder.jpg'

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/shop" className="flex items-center gap-1 hover:text-[#1E3A8A] transition-colors">
          <ChevronLeft size={14} /> Shop
        </Link>
        <span>/</span>
        <Link href={`/shop?category=${product.category}`} className="hover:text-[#1E3A8A] capitalize">
          {product.category.replace('-', ' ')}
        </Link>
        <span>/</span>
        <span className="text-gray-600 truncate max-w-[200px]">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden">
          <Image
            src={displayImage}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            {hasDiscount ? (
              <>
                <span className="text-3xl font-bold text-[#16A34A]">{formatPrice(product.salePrice!)}</span>
                <span className="text-xl text-gray-400 line-through">{formatPrice(product.price)}</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">SALE</span>
              </>
            ) : (
              <span className="text-3xl font-bold text-[#1E3A8A]">{formatPrice(product.price)}</span>
            )}
          </div>

          {product.inStock ? (
            <span className="inline-flex items-center gap-1 text-[#16A34A] text-sm font-semibold bg-green-50 px-3 py-1 rounded-full mb-4">
              ✓ In Stock — Available for Delivery
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-gray-500 text-sm font-semibold bg-gray-100 px-3 py-1 rounded-full mb-4">
              Out of Stock
            </span>
          )}

          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

          {/* Specs */}
          {(product.dimensions || product.material || (product.colors && product.colors.length > 0)) && (
            <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2 text-sm">
              {product.dimensions && (
                <div className="flex gap-2">
                  <span className="font-semibold text-gray-700 w-24 shrink-0">Dimensions</span>
                  <span className="text-gray-600">{product.dimensions}</span>
                </div>
              )}
              {product.material && (
                <div className="flex gap-2">
                  <span className="font-semibold text-gray-700 w-24 shrink-0">Material</span>
                  <span className="text-gray-600">{product.material}</span>
                </div>
              )}
              {product.colors && product.colors.length > 0 && (
                <div className="flex gap-2">
                  <span className="font-semibold text-gray-700 w-24 shrink-0">Colors</span>
                  <span className="text-gray-600">{product.colors.join(', ')}</span>
                </div>
              )}
            </div>
          )}

          {/* CTAs */}
          <div className="space-y-3 mb-8">
            <a
              href={siteData.phoneUrl}
              className="flex items-center justify-center gap-2 w-full bg-[#16A34A] hover:bg-green-700 text-white font-bold py-4 rounded-xl text-lg transition-colors"
            >
              <Phone size={20} />
              Call to Order — {siteData.phone}
            </a>
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}#quote`}
              className="flex items-center justify-center gap-2 w-full border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white font-bold py-4 rounded-xl text-lg transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          {/* Financing */}
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard size={18} className="text-[#1E3A8A]" />
              <span className="font-semibold text-gray-800 text-sm">Financing Available — No Credit Needed</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {FINANCING_PARTNERS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#1E3A8A] border border-[#1E3A8A] px-3 py-1 rounded-full hover:bg-[#1E3A8A] hover:text-white transition-colors"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>

          {/* Showroom */}
          <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
            <MapPin size={16} className="shrink-0 mt-0.5 text-[#16A34A]" />
            <span>
              Visit us at{' '}
              <a href={siteData.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1E3A8A]">
                {siteData.address}, {siteData.city}, {siteData.state}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
