import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ChevronLeft, MapPin, CreditCard } from 'lucide-react'
import productsData from '@/data/products.json'
import siteData from '@/data/site.json'
import { type Product } from '@/types'
import { formatPrice } from '@/lib/utils'

interface Props { params: Promise<{ slug: string }> }

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
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#7DA68B]/40 mb-10 font-medium">
        <Link href="/shop" className="flex items-center gap-1.5 hover:text-[#7DA68B] transition-colors">
          <ChevronLeft size={12} /> Shop
        </Link>
        <span>/</span>
        <Link href={`/shop?category=${product.category}`} className="hover:text-[#7DA68B] transition-colors capitalize">
          {product.category.replace(/-/g, ' ')}
        </Link>
        <span>/</span>
        <span className="text-[#7DA68B]/60 truncate max-w-[200px]">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-[#F5F2EC] overflow-hidden sticky top-24 self-start">
          <Image src={displayImage} alt={product.name} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
          {hasDiscount && (
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-semibold tracking-widest uppercase bg-[#7DA68B] text-white px-3 py-1.5">Sale</span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="py-2">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#0e2b62] mb-3 font-medium">
            {product.category.replace(/-/g, ' ')}
          </p>
          <h1 className="text-3xl font-light text-[#7DA68B] mb-4 leading-snug">{product.name}</h1>

          {/* Price */}
          <div className="flex items-center gap-3 mb-5">
            {hasDiscount ? (
              <>
                <span className="text-2xl font-semibold text-[#7DA68B]">{formatPrice(product.salePrice!)}</span>
                <span className="text-base text-[#7DA68B]/25 line-through">{formatPrice(product.price)}</span>
              </>
            ) : (
              <span className="text-2xl font-semibold text-[#7DA68B]">{formatPrice(product.price)}</span>
            )}
          </div>

          {product.inStock ? (
            <span className="inline-flex items-center gap-1.5 text-[#0e2b62] text-xs font-medium tracking-widest uppercase bg-[#0e2b62]/10 px-3 py-1.5 mb-6">
              ✓ In Stock — Available for Delivery
            </span>
          ) : (
            <span className="inline-flex items-center text-[#7DA68B]/40 text-xs font-medium tracking-widest uppercase bg-[#F5F2EC] px-3 py-1.5 mb-6">
              Out of Stock
            </span>
          )}

          <p className="text-[#7DA68B]/60 text-sm font-light leading-relaxed mb-8">{product.description}</p>

          {/* Specs */}
          {(product.dimensions || product.material || product.colors?.length) && (
            <div className="bg-[#F5F2EC] p-6 mb-8 space-y-3 text-sm" style={{ border: '1px solid #ECEAE4' }}>
              {product.dimensions && (
                <div className="flex gap-4">
                  <span className="text-[10px] tracking-widest uppercase text-[#7DA68B]/40 font-medium w-24 shrink-0 mt-0.5">Dimensions</span>
                  <span className="text-[#7DA68B]/60 text-xs font-light">{product.dimensions}</span>
                </div>
              )}
              {product.material && (
                <div className="flex gap-4">
                  <span className="text-[10px] tracking-widest uppercase text-[#7DA68B]/40 font-medium w-24 shrink-0 mt-0.5">Material</span>
                  <span className="text-[#7DA68B]/60 text-xs font-light">{product.material}</span>
                </div>
              )}
              {product.colors && product.colors.length > 0 && (
                <div className="flex gap-4">
                  <span className="text-[10px] tracking-widest uppercase text-[#7DA68B]/40 font-medium w-24 shrink-0 mt-0.5">Colors</span>
                  <span className="text-[#7DA68B]/60 text-xs font-light">{product.colors.join(' · ')}</span>
                </div>
              )}
            </div>
          )}

          {/* CTAs */}
          <div className="space-y-3 mb-8">
            <a href={siteData.phoneUrl} className="flex items-center justify-center gap-2 w-full text-sm font-medium text-white bg-[#7DA68B] py-4 hover:opacity-90 transition-opacity" style={{ borderRadius: 25 }}>
              <Phone size={16} /> Call to Order — {siteData.phone}
            </a>
            <Link href={`/contact?product=${encodeURIComponent(product.name)}#quote`} className="flex items-center justify-center gap-2 w-full text-sm font-medium text-[#7DA68B] border border-[#7DA68B] py-4 hover:bg-[#7DA68B] hover:text-white transition-colors" style={{ borderRadius: 25 }}>
              Request a Quote
            </Link>
          </div>

          {/* Financing */}
          <div className="p-5" style={{ border: '1px solid #ECEAE4' }}>
            <div className="flex items-center gap-2 mb-3">
              <CreditCard size={15} className="text-[#0e2b62]" />
              <span className="text-[10px] tracking-widests uppercase text-[#7DA68B] font-medium">Financing Available — No Credit Needed</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {FINANCING_PARTNERS.map((p) => (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="text-[10px] font-medium tracking-widest uppercase text-[#7DA68B] border border-[#ECEAE4] px-3 py-1.5 hover:border-[#7DA68B] transition-colors">
                  {p.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2 text-xs text-[#7DA68B]/40 font-light">
            <MapPin size={13} className="shrink-0 mt-0.5 text-[#0e2b62]" />
            <span>Visit us at <a href={siteData.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#7DA68B]">{siteData.address}, {siteData.city}, {siteData.state}</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}
