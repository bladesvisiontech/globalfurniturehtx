import { Star } from 'lucide-react'
import Link from 'next/link'
import testimonialsData from '@/data/testimonials.json'

export const metadata = { title: 'Customer Reviews' }

export default function TestimonialsPage() {
  const testimonials = testimonialsData.testimonials

  return (
    <div>
      <section className="bg-[#1E3A8A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Customer Reviews</h1>
          <p className="text-blue-100 text-xl">See what Houston families are saying about Global Furniture HTX.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
                <p className="text-gray-300 text-xs mt-1">
                  {new Date(t.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Experience it yourself</h2>
        <p className="text-gray-500 mb-6">Visit our showroom or browse online and see why Houston families choose us.</p>
        <Link href="/shop" className="bg-[#1E3A8A] text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors">
          Shop Now
        </Link>
      </section>
    </div>
  )
}
