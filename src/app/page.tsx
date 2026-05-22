import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, ChevronRight, Star } from 'lucide-react'
import CTABar from '@/components/layout/CTABar'
import ProductCard from '@/components/ui/ProductCard'
import siteData from '@/data/site.json'
import productsData from '@/data/products.json'
import categoriesData from '@/data/categories.json'
import bannersData from '@/data/banners.json'
import testimonialsData from '@/data/testimonials.json'
import { type Product } from '@/types'

const FINANCING_PARTNERS = [
  { name: 'Koalafi', href: 'https://koalafi.com', description: 'Lease-to-own financing' },
  { name: 'Snap Finance', href: 'https://snapfinance.com', description: 'No credit needed' },
  { name: 'Acima', href: 'https://acima.com', description: 'Rent-to-own options' },
]

const CATEGORY_ICONS: Record<string, string> = {
  'living-room': '🛋️',
  'bedroom': '🛏️',
  'dining-room': '🍽️',
  'mattresses': '😴',
  'accent-decor': '🪴',
  'office': '💼',
}

export default function HomePage() {
  const hero = bannersData.banners.filter((b) => b.active).sort((a, b) => a.order - b.order)[0]
  const featured = (productsData.products as Product[]).filter((p) => p.featured).slice(0, 4)
  const categories = categoriesData.categories.sort((a, b) => a.order - b.order)
  const testimonials = testimonialsData.testimonials.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1E3A8A] text-white min-h-[480px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/95 to-[#1E3A8A]/60 z-10" />
        {hero?.imageUrl && (
          <Image src={hero.imageUrl} alt={hero.title} fill className="object-cover" priority />
        )}
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl mb-4">
            {hero?.title ?? 'Furnish Your Dream Home'}
          </h1>
          <p className="text-xl text-blue-100 max-w-xl mb-8">
            {hero?.subtitle ?? 'Quality furniture for every room. Financing available — no credit needed.'}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={hero?.ctaLink ?? '/shop'}
              className="bg-[#16A34A] hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              {hero?.ctaText ?? 'Shop Now'}
            </Link>
            <a
              href={siteData.phoneUrl}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Perks bar */}
      <CTABar />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Room</h2>
          <Link href="/shop" className="text-[#1E3A8A] font-semibold flex items-center gap-1 hover:underline text-sm">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.slug}`}
              className="group flex flex-col items-center bg-white rounded-2xl border border-gray-100 hover:border-[#1E3A8A] hover:shadow-md transition-all p-4 text-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#1E3A8A] transition-colors">
                <span className="text-2xl">{CATEGORY_ICONS[cat.slug] ?? '🪑'}</span>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1E3A8A]">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
            <Link href="/shop" className="text-[#1E3A8A] font-semibold flex items-center gap-1 hover:underline text-sm">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section id="financing" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Financing Options</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            No credit? No problem. We work with three leading financing partners to get you approved fast.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {FINANCING_PARTNERS.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-100 hover:border-[#1E3A8A] rounded-2xl p-8 text-center transition-all hover:shadow-md group"
            >
              <div className="text-2xl font-bold text-[#1E3A8A] mb-2 group-hover:text-blue-900">
                {partner.name}
              </div>
              <p className="text-gray-500 text-sm">{partner.description}</p>
            </a>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/services#financing"
            className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold hover:underline"
          >
            Learn more about financing <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#1E3A8A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white/10 rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-blue-300 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials" className="text-blue-200 hover:text-white underline text-sm">
              Read all reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Showroom CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Visit Our Houston Showroom</h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-6">
          See our full collection in person. Our team is ready to help you find the perfect furniture for your home and budget.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1E3A8A] text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors flex items-center gap-2"
          >
            <MapPin size={18} />
            Get Directions
          </a>
          <a
            href={siteData.phoneUrl}
            className="bg-[#16A34A] text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Phone size={18} />
            {siteData.phone}
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-4">{siteData.hours}</p>
      </section>
    </>
  )
}
