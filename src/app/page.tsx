import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Star, ArrowRight } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import HeroCarousel from '@/components/ui/HeroCarousel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import TestimonialsMarquee from '@/components/ui/TestimonialsMarquee'
import siteData from '@/data/site.json'
import productsData from '@/data/products.json'
import categoriesData from '@/data/categories.json'
import bannersData from '@/data/banners.json'
import testimonialsData from '@/data/testimonials.json'
import { type Product } from '@/types'

const FINANCING_PARTNERS = [
  {
    name: 'Koalafi',
    href: 'https://koalafi.com',
    description: 'Lease-to-own financing',
    badge: 'Most Popular',
    logo: '/images/financing/koalafi.svg',
    perks: ['Flexible payment terms', 'Quick online approval', 'No credit required'],
  },
  {
    name: 'Snap Finance',
    href: 'https://snapfinance.com',
    description: 'No credit needed',
    badge: 'Fast Approval',
    logo: '/images/financing/snapfinance.svg',
    perks: ['Limited credit history OK', 'Simple application', 'Fast decisions'],
  },
  {
    name: 'Acima',
    href: 'https://acima.com',
    description: 'Rent-to-own options',
    badge: 'Own It Early',
    logo: '/images/financing/acima.svg',
    perks: ['Early purchase option', 'Weekly or monthly payments', 'Take furniture home today'],
  },
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
          <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-xs tracking-widest uppercase text-[#1E3331]/50 font-medium">
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
            <Link href="/shop" className="text-xs tracking-widest uppercase text-[#1E3331] hover:opacity-70 transition-opacity flex items-center gap-2 font-medium">
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
                  <div className="absolute inset-0 bg-[#1E3331]/0 group-hover:bg-[#1E3331]/10 transition-colors" />
                </div>
                <p className="text-xs font-medium text-[#1E3331]/70 group-hover:text-[#1E3331] transition-colors">
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
              <Link href="/shop" className="text-xs tracking-widest uppercase text-[#1E3331] hover:opacity-70 transition-opacity flex items-center gap-2 font-medium">
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

          {/* Header */}
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Flexible Options</p>
              <h2 className="text-3xl font-light text-[#0e2b62] mb-4">Financing Available</h2>
              <p className="text-sm font-light text-[#1E3331]/50 leading-relaxed">
                No credit? No problem. We partner with three leading financing companies so you can take your furniture home today and pay over time.
              </p>
            </div>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {FINANCING_PARTNERS.map((partner, i) => (
              <ScrollReveal key={partner.name} direction="up" delay={i * 100} duration={500}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white group hover:shadow-md transition-all duration-300 block h-full overflow-hidden"
                  style={{ border: '1px solid #ECEAE4' }}
                >
                  {/* Top accent bar */}
                  <div className="h-1 bg-[#0e2b62] group-hover:bg-[#7DA68B] transition-colors duration-300" />

                  <div className="p-8">
                    {/* Logo + badge row */}
                    <div className="flex items-start justify-between mb-6">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        style={{ height: 32, width: 'auto', maxWidth: 130, objectFit: 'contain', objectPosition: 'left' }}
                      />
                      <span className="text-[9px] tracking-widest uppercase font-semibold text-[#7DA68B] bg-[#7DA68B]/10 px-2.5 py-1 shrink-0 ml-3">
                        {partner.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs font-light text-[#1E3331]/45 mb-6">{partner.description}</p>

                    {/* Perks list */}
                    <ul className="space-y-2 mb-8">
                      {partner.perks.map((perk) => (
                        <li key={perk} className="flex items-center gap-2.5 text-xs text-[#1E3331]/60 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7DA68B] shrink-0" />
                          {perk}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#0e2b62] group-hover:gap-3 transition-all">
                      Apply Now <ArrowRight size={13} />
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={200} duration={500}>
            <div className="mt-10 text-center">
              <Link href="/services#financing" className="text-xs tracking-widest uppercase text-[#1E3331]/50 hover:text-[#1E3331] transition-colors flex items-center gap-2 font-medium justify-center">
                Learn more about financing <ArrowRight size={12} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="bg-[#1E3331] text-white py-24 overflow-hidden">
        <ScrollReveal direction="up" duration={600}>
          <div className="max-w-screen-xl mx-auto px-6 mb-14 text-center">
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

        <TestimonialsMarquee testimonials={testimonials} />

        <div className="text-center mt-12">
          <Link href="/testimonials" className="text-xs tracking-widest uppercase text-[#7DA68B] hover:text-white transition-colors font-medium flex items-center gap-2 justify-center">
            Read All Reviews <ArrowRight size={12} />
          </Link>
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
              <p className="text-sm font-light text-[#1E3331]/50 leading-relaxed mb-8 max-w-sm">
                Our showroom is stocked with the full collection. Our team is ready to help you find the perfect pieces for your space and budget.
              </p>
              <ul className="space-y-3 mb-10 text-sm font-light text-[#1E3331]/50">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="text-[#1E3331] shrink-0 mt-0.5" />
                  <a href={siteData.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#1E3331] transition-colors">
                    {siteData.address}, {siteData.city} {siteData.state} {siteData.zip}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} className="text-[#1E3331] shrink-0" />
                  <a href={siteData.phoneUrl} className="hover:text-[#1E3331] transition-colors">{siteData.phone}</a>
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
            <div className="text-sm font-light text-[#1E3331]/40 space-y-2 md:pl-8" style={{ borderLeft: '1px solid #F0F0F0' }}>
              <p className="text-[10px] tracking-widest uppercase mb-4 text-[#1E3331]/40">Store Hours</p>
              <p className="text-[#1E3331]/60">{siteData.hours}</p>
              <p className="text-xs mt-4 text-[#1E3331]/40">{siteData.deliveryNote}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
