import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Star, ArrowRight } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import HeroCarousel from '@/components/ui/HeroCarousel'
import ScrollReveal from '@/components/ui/ScrollReveal'
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
  const activeBanners = bannersData.banners.filter((b) => b.active).sort((a, b) => a.order - b.order)
  const featured = (productsData.products as Product[]).filter((p) => p.featured).slice(0, 4)
  const categories = categoriesData.categories.sort((a, b) => a.order - b.order).slice(0, 6)
  const testimonials = testimonialsData.testimonials.slice(0, 3)

  return (
    <>
      {/* ── Hero Carousel ────────────────────────────────── */}
      <HeroCarousel
        banners={activeBanners}
        phone={siteData.phone}
        phoneUrl={siteData.phoneUrl}
      />

      {/* ── Perks strip ──────────────────────────────────── */}
      <ScrollReveal direction="none" duration={500}>
        <div style={{ borderBottom: '1px solid #F0F0F0' }}>
          <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-xs tracking-widest uppercase text-[#0e2b62]/50 font-medium">
            {['Same-Day Delivery in Houston', 'Financing — No Credit Needed', 'Professional Assembly Included'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#7DA68B] inline-block" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ── Shop by Room ─────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 py-24">
        <ScrollReveal direction="up" duration={600}>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-2 font-medium">Explore</p>
              <h2 className="text-3xl font-light text-[#0e2b62]">Shop by Room</h2>
            </div>
            <Link href="/shop" className="text-xs tracking-widest uppercase text-[#0e2b62] hover:opacity-70 transition-opacity flex items-center gap-2 font-medium">
              View All <ArrowRight size={13} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.id} direction="up" delay={i * 60} duration={500}>
              <Link href={`/shop?category=${cat.slug}`} className="group block">
                <div className="aspect-square bg-[#F8F8F6] overflow-hidden mb-3 relative">
                  {cat.image && (
                    <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                  <div className="absolute inset-0 bg-[#0e2b62]/0 group-hover:bg-[#0e2b62]/10 transition-colors" />
                </div>
                <p className="text-xs font-medium text-[#0e2b62]/70 group-hover:text-[#0e2b62] transition-colors">
                  {cat.name}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Best Sellers ─────────────────────────────────── */}
      <section style={{ borderTop: '1px solid #F0F0F0', borderBottom: '1px solid #F0F0F0' }}>
        <div className="max-w-screen-xl mx-auto px-6 py-24">
          <ScrollReveal direction="up" duration={600}>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-2 font-medium">Featured</p>
                <h2 className="text-3xl font-light text-[#0e2b62]">Best Sellers</h2>
              </div>
              <Link href="/shop" className="text-xs tracking-widest uppercase text-[#0e2b62] hover:opacity-70 transition-opacity flex items-center gap-2 font-medium">
                Full Catalog <ArrowRight size={13} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {featured.map((product, i) => (
              <ScrollReveal key={product.id} direction="up" delay={i * 80} duration={550}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Financing ────────────────────────────────────── */}
      <section className="bg-[#F5F2EC]">
        <div className="max-w-screen-xl mx-auto px-6 py-24">
          <ScrollReveal direction="up" duration={600}>
            <div className="max-w-lg mb-14">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-2 font-medium">Flexible Options</p>
              <h2 className="text-3xl font-light text-[#0e2b62] mb-4">Financing Available</h2>
              <p className="text-sm font-light text-[#0e2b62]/50 leading-relaxed">
                No credit? No problem. We partner with three leading financing companies so you can take your furniture home today and pay over time.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {FINANCING_PARTNERS.map((partner, i) => (
              <ScrollReveal key={partner.name} direction="up" delay={i * 100} duration={500}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-8 group hover:shadow-sm transition-shadow block h-full"
                  style={{ border: '1px solid #ECEAE4' }}
                >
                  <p className="text-lg font-semibold text-[#0e2b62] mb-1.5">{partner.name}</p>
                  <p className="text-xs font-light text-[#0e2b62]/50 mb-4">{partner.description}</p>
                  <span className="text-xs tracking-widest uppercase text-[#0e2b62] flex items-center gap-1.5 font-medium">
                    Apply Now <ArrowRight size={11} />
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={150} duration={500}>
            <div className="mt-8">
              <Link href="/services#financing" className="text-xs tracking-widest uppercase text-[#0e2b62] hover:opacity-70 transition-opacity flex items-center gap-2 font-medium">
                Learn more about financing <ArrowRight size={12} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="bg-[#0e2b62] text-white">
        <div className="max-w-screen-xl mx-auto px-6 py-24">
          <ScrollReveal direction="up" duration={600}>
            <div className="mb-14 text-center">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Reviews</p>
              <h2 className="text-3xl font-light text-white mb-5">What Our Customers Say</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#7DA68B] fill-[#7DA68B]" />
                  ))}
                </div>
                <span className="text-white font-semibold text-sm">{siteData.googleRating}</span>
                <span className="text-white/40 text-xs font-light">· {siteData.googleReviewCount} Google Reviews</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} direction="up" delay={i * 100} duration={550}>
                <div className="p-8 h-full" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} className="text-[#7DA68B] fill-[#7DA68B]" />
                    ))}
                  </div>
                  <p className="text-sm font-light text-white/75 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 16 }}>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-white/40 mt-0.5">{t.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={200} duration={500}>
            <div className="text-center mt-10">
              <Link href="/testimonials" className="text-xs tracking-widest uppercase text-[#7DA68B] hover:text-white transition-colors font-medium flex items-center gap-2 justify-center">
                Read All Reviews <ArrowRight size={12} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Showroom CTA ─────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" duration={700}>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Houston Showroom</p>
              <h2 className="text-4xl font-light text-[#0e2b62] mb-6 leading-tight">
                Come See It<br />In Person
              </h2>
              <p className="text-sm font-light text-[#0e2b62]/50 leading-relaxed mb-8 max-w-sm">
                Our showroom is stocked with the full collection. Our team is ready to help you find the perfect pieces for your space and budget.
              </p>
              <ul className="space-y-3 mb-10 text-sm font-light text-[#0e2b62]/50">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="text-[#0e2b62] shrink-0 mt-0.5" />
                  <a href={siteData.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#0e2b62] transition-colors">
                    {siteData.address}, {siteData.city} {siteData.state} {siteData.zip}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} className="text-[#0e2b62] shrink-0" />
                  <a href={siteData.phoneUrl} className="hover:text-[#0e2b62] transition-colors">{siteData.phone}</a>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white bg-[#0e2b62] px-7 py-3.5 hover:bg-[#0e2b62]/90 transition-colors flex items-center gap-2"
                  style={{ borderRadius: 25 }}
                >
                  <MapPin size={14} />
                  Get Directions
                </a>
                <a
                  href={siteData.phoneUrl}
                  className="text-sm font-medium text-[#0e2b62] border border-[#0e2b62] px-7 py-3.5 hover:bg-[#0e2b62] hover:text-white transition-colors flex items-center gap-2"
                  style={{ borderRadius: 25 }}
                >
                  <Phone size={14} />
                  Call Us
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={700} delay={100}>
            <div className="text-sm font-light text-[#0e2b62]/40 space-y-2 md:pl-8" style={{ borderLeft: '1px solid #F0F0F0' }}>
              <p className="text-[10px] tracking-widest uppercase mb-4 text-[#0e2b62]/40">Store Hours</p>
              <p className="text-[#0e2b62]/60">{siteData.hours}</p>
              <p className="text-xs mt-4 text-[#0e2b62]/40">{siteData.deliveryNote}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
