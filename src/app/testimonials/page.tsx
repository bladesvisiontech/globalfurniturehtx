import { Star } from 'lucide-react'
import Link from 'next/link'
import testimonialsData from '@/data/testimonials.json'

export const metadata = { title: 'Customer Reviews' }

export default function TestimonialsPage() {
  const testimonials = testimonialsData.testimonials
  return (
    <div>
      <section className="bg-[#1E3331] text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Reviews</p>
          <h1 className="text-5xl font-light mb-4">Customer Reviews</h1>
          <p className="text-white/50 text-base font-light">See what Houston families are saying about us.</p>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="p-8 bg-white" style={{ border: '1px solid #ECEAE4' }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className={i < t.rating ? 'text-[#7DA68B] fill-[#7DA68B]' : 'text-[#ECEAE4] fill-[#ECEAE4]'} />
                ))}
              </div>
              <p className="text-[#1E3331]/60 text-sm font-light leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div style={{ borderTop: '1px solid #ECEAE4', paddingTop: 16 }}>
                <p className="text-sm font-medium text-[#1E3331]">{t.name}</p>
                <p className="text-xs text-[#1E3331]/40 mt-0.5">{t.location}</p>
                <p className="text-xs text-[#1E3331]/25 mt-1">
                  {new Date(t.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F2EC] py-16 text-center" style={{ borderTop: '1px solid #ECEAE4' }}>
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Next Step</p>
        <h2 className="text-2xl font-light text-[#1E3331] mb-4">Experience it yourself</h2>
        <p className="text-[#1E3331]/50 text-sm font-light mb-8">Visit our showroom or browse online and see why Houston families choose us.</p>
        <Link href="/shop" className="text-sm font-medium text-white bg-[#1E3331] px-8 py-3.5 hover:opacity-90 transition-opacity" style={{ borderRadius: 25 }}>Shop Now</Link>
      </section>
    </div>
  )
}
