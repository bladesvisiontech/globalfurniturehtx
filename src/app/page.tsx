import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Star, ArrowRight } from 'lucide-react'
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

export default function HomePage() {
  const hero = bannersData.banners.filter((b) => b.active).sort((a, b) => a.order - b.order)[0]
  const featured = (productsData.products as Product[]).filter((p) => p.featured).slice(0, 4)
  const categories = categoriesData.categories.sort((a, b) => a.order - b.order).slice(0, 6)
  const testimonials = testimonialsData.testimonials.slice(0, 3)

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative bg-[#1B4332] text-white overflow-hidden" style={{ minHeight: 'calc(100vh - 88px)', maxHeight: 700 }}>
        {hero?.imageUrl && (
          <Image
            src={hero.imageUrl}
            alt={hero.title}
            fill
            className="object-cover"
            priority
          />
        )}
        {/* gradient overlay — left-heavy so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b1e]/90 via-[#0d2b1e]/60 to-transparent" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col justify-center h-full" style={{ minHeight: 'inherit' }}>
          <div className="max-w-xl py-24">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#74B49B] mb-5 font-medium">
              Houston, TX · Financing Available
            </p>
            <h1 className="text-5xl md:text-[64px] font-light leading-[1.08] mb-6 text-white">
              {hero?.title ?? 'Furnish Your Dream Home'}
            </h1>
            <p className="text-base font-light text-white/70 leading-relaxed mb-10 max-w-sm">
              {hero?.subtitle ?? 'Quality furniture for every room — delivered the same day in Houston.'}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={hero?.ctaLink ?? '/shop'}
                className="text-sm font-medium text-[#1B4332] bg-white px-7 py-3.5 hover:bg-[#F0F7F4] transition-colors flex items-center gap-2"
                style={{ borderRadius: 25 }}
              >
                {hero?.ctaText ?? 'Shop Collection'}
                <ArrowRight size={14} />
              </Link>
              <a
                href={siteData.phoneUrl}
                className="text-sm font-medium text-white border border-white/40 px-7 py-3.5 hover:bg-white/10 transition-colors flex items-center gap-2"
                style={{ borderRadius: 25 }}
              >
                <Phone size={13} />
                {siteData.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Perks strip ──────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid #F0F0F0' }}>
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-xs tracking-widest uppercase text-gray-500 font-medium">
          {['Same-Day Delivery in Houston', 'Financing — No Credit Needed', 'Professional Assembly Included'].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#74B49B] inline-block" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Shop by Room ─────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#74B49B] mb-2 font-medium">Explore</p>
            <h2 className="text-3xl font-light text-gray-900">Shop by Room</h2>
          </div>
          <Link href="/shop" className="text-xs tracking-widest uppercase text-[#1B4332] hover:opacity-70 transition-opacity flex items-center gap-2 font-medium">
            View All <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.slug}`}
              className="group block"
            >
              <div className="aspect-square bg-[#F8F8F6] overflow-hidden mb-3 relative">
                {cat.image && (
                  <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                )}
                <div className="absolute inset-0 bg-[#1B4332]/0 group-hover:bg-[#1B4332]/10 transition-colors" />
              </div>
              <p className="text-xs font-medium text-gray-700 group-hover:text-[#1B4332] transition-colors">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Best Sellers ─────────────────────────────────── */}
      <section style={{ borderTop: '1px solid #F0F0F0', borderBottom: '1px solid #F0F0F0' }}>
        <div className="max-w-screen-xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#74B49B] mb-2 font-medium">Featured</p>
              <h2 className="text-3xl font-light text-gray-900">Best Sellers</h2>
            </div>
            <Link href="/shop" className="text-xs tracking-widest uppercase text-[#1B4332] hover:opacity-70 transition-opacity flex items-center gap-2 font-medium">
              Full Catalog <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Financing ────────────────────────────────────── */}
      <section className="bg-[#F0F7F4]">
        <div className="max-w-screen-xl mx-auto px-6 py-24">
          <div className="max-w-lg mb-14">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#74B49B] mb-2 font-medium">Flexible Options</p>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Financing Available</h2>
            <p className="text-sm font-light text-gray-500 leading-relaxed">
              No credit? No problem. We partner with three leading financing companies so you can take your furniture home today and pay over time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {FINANCING_PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 group hover:shadow-sm transition-shadow"
                style={{ border: '1px solid #E8F0EC' }}
              >
                <p className="text-lg font-semibold text-[#1B4332] mb-1.5 group-hover:text-[#2D6A4F]">
                  {partner.name}
                </p>
                <p className="text-xs font-light text-gray-500 mb-4">{partner.description}</p>
                <span className="text-xs tracking-widest uppercase text-[#1B4332] flex items-center gap-1.5 font-medium">
                  Apply Now <ArrowRight size={11} />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/services#financing"
              className="text-xs tracking-widest uppercase text-[#1B4332] hover:opacity-70 transition-opacity flex items-center gap-2 font-medium"
            >
              Learn more about financing <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="bg-[#1B4332] text-white">
        <div className="max-w-screen-xl mx-auto px-6 py-24">
          <div className="mb-14 text-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#74B49B] mb-2 font-medium">Reviews</p>
            <h2 className="text-3xl font-light text-white">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="p-8" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} className="text-[#74B49B] fill-[#74B49B]" />
                  ))}
                </div>
                <p className="text-sm font-light text-white/75 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 16 }}>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/40 mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/testimonials" className="text-xs tracking-widest uppercase text-[#74B49B] hover:text-white transition-colors font-medium flex items-center gap-2 justify-center">
              Read All Reviews <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Showroom CTA ─────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#74B49B] mb-3 font-medium">Houston Showroom</p>
            <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
              Come See It<br />In Person
            </h2>
            <p className="text-sm font-light text-gray-500 leading-relaxed mb-8 max-w-sm">
              Our showroom is stocked with the full collection. Our team is ready to help you find the perfect pieces for your space and budget.
            </p>
            <ul className="space-y-3 mb-10 text-sm font-light text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#1B4332] shrink-0 mt-0.5" />
                <a href={siteData.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#1B4332] transition-colors">
                  {siteData.address}, {siteData.city} {siteData.state} {siteData.zip}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#1B4332] shrink-0" />
                <a href={siteData.phoneUrl} className="hover:text-[#1B4332] transition-colors">{siteData.phone}</a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white bg-[#1B4332] px-7 py-3.5 hover:bg-[#2D6A4F] transition-colors flex items-center gap-2"
                style={{ borderRadius: 25 }}
              >
                <MapPin size={14} />
                Get Directions
              </a>
              <a
                href={siteData.phoneUrl}
                className="text-sm font-medium text-[#1B4332] border border-[#1B4332] px-7 py-3.5 hover:bg-[#1B4332] hover:text-white transition-colors flex items-center gap-2"
                style={{ borderRadius: 25 }}
              >
                <Phone size={14} />
                Call Us
              </a>
            </div>
          </div>
          <div className="text-sm font-light text-gray-400 space-y-2 md:pl-8" style={{ borderLeft: '1px solid #F0F0F0' }}>
            <p className="text-[10px] tracking-widest uppercase mb-4 text-gray-400">Store Hours</p>
            <p className="text-gray-600">{siteData.hours}</p>
            <p className="text-xs mt-4 text-gray-400">{siteData.deliveryNote}</p>
          </div>
        </div>
      </section>
    </>
  )
}
