import { Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import testimonialsData from '@/data/testimonials.json'
import siteData from '@/data/site.json'

export const metadata = { title: 'Customer Reviews' }

export default function TestimonialsPage() {
  const testimonials = testimonialsData.testimonials
  return (
    <div>
      <section className="bg-[#0e2b62] text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Reviews</p>
          <h1 className="text-5xl font-light mb-6">Customer Reviews</h1>

          {/* Google rating badge */}
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-[#7DA68B] fill-[#7DA68B]" />
              ))}
            </div>
            <span className="text-white font-semibold">{siteData.googleRating}</span>
            <span className="text-white/40 text-sm font-light">· {siteData.googleReviewCount} Google Reviews</span>
            <a
              href={siteData.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-widest uppercase text-[#7DA68B] hover:text-white transition-colors font-medium flex items-center gap-1 ml-2"
            >
              View on Google <ArrowRight size={11} />
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="p-8 bg-white" style={{ border: '1px solid #ECEAE4' }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className={i < t.rating ? 'text-[#7DA68B] fill-[#7DA68B]' : 'text-[#ECEAE4] fill-[#ECEAE4]'} />
                ))}
              </div>
              <p className="text-[#0e2b62]/60 text-sm font-light leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div style={{ borderTop: '1px solid #ECEAE4', paddingTop: 16 }}>
                <p className="text-sm font-medium text-[#0e2b62]">{t.name}</p>
                <p className="text-xs text-[#0e2b62]/40 mt-0.5 font-light">{t.location} · Google Review</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={siteData.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widests uppercase text-[#7DA68B] hover:text-[#0e2b62] transition-colors font-medium flex items-center gap-2 justify-center"
          >
            Read all {siteData.googleReviewCount} reviews on Google <ArrowRight size={12} />
          </a>
        </div>
      </section>

      <section className="bg-[#F5F2EC] py-16 text-center" style={{ borderTop: '1px solid #ECEAE4' }}>
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Next Step</p>
        <h2 className="text-2xl font-light text-[#0e2b62] mb-4">Experience it yourself</h2>
        <p className="text-[#0e2b62]/50 text-sm font-light mb-8">Visit our showroom or browse online and see why Houston families choose us.</p>
        <Link href="/shop" className="text-sm font-medium text-white bg-[#0e2b62] px-8 py-3.5 hover:opacity-90 transition-opacity" style={{ borderRadius: 25 }}>
          Shop Now
        </Link>
      </section>
    </div>
  )
}
