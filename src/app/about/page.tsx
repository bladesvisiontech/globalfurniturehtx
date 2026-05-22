import { Phone, MapPin, Clock, Truck, CreditCard, Users } from 'lucide-react'
import Link from 'next/link'
import siteData from '@/data/site.json'

export const metadata = { title: 'About Us' }

const VALUES = [
  { icon: Users, title: 'Family-Owned', desc: 'We are a Houston family business dedicated to serving our community with quality and care.' },
  { icon: Truck, title: 'Same-Day Delivery', desc: 'Need furniture today? We offer same-day and next-day delivery throughout the Houston area.' },
  { icon: CreditCard, title: 'Flexible Financing', desc: 'No credit? No problem. We work with Koalafi, Snap Finance, and Acima to get everyone approved.' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1E3A8A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Global Furniture HTX</h1>
          <p className="text-blue-100 text-xl max-w-2xl">
            Serving Houston families with quality furniture and exceptional service since day one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Global Furniture HTX was founded with one mission: to make quality furniture accessible to every Houston family, regardless of budget or credit history.
            </p>
            <p>
              Located in the heart of southwest Houston, our showroom offers a wide selection of living room sets, bedroom furniture, dining sets, mattresses, and accent pieces — all at competitive prices.
            </p>
            <p>
              We believe that your home should reflect who you are. That&apos;s why we carry a diverse catalog of styles, from modern and contemporary to classic and traditional, ensuring every customer finds exactly what they&apos;re looking for.
            </p>
            <p>
              With same-day delivery available and flexible financing through our trusted partners, we make it easy to get the furniture you love into your home fast.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-[#1E3A8A]" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Showroom</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#16A34A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">{siteData.address}</p>
                  <p>{siteData.city}, {siteData.state} {siteData.zip}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#16A34A] shrink-0" />
                <a href={siteData.phoneUrl} className="font-semibold text-[#1E3A8A] hover:underline">
                  {siteData.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-[#16A34A] shrink-0 mt-0.5" />
                <p>{siteData.hours}</p>
              </li>
            </ul>
            <div className="flex gap-3 mt-8">
              <a
                href={siteData.phoneUrl}
                className="bg-[#16A34A] text-white font-bold px-6 py-3 rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Phone size={16} /> Call Us
              </a>
              <a
                href={siteData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#1E3A8A] text-[#1E3A8A] font-bold px-6 py-3 rounded-xl hover:bg-[#1E3A8A] hover:text-white transition-colors flex items-center gap-2"
              >
                <MapPin size={16} /> Directions
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-72">
            <iframe
              src={`https://maps.google.com/maps?q=6951+McHard+Rd+STE+D1+Houston+TX+77053&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Global Furniture HTX location"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A8A] text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Furnish Your Home?</h2>
        <p className="text-blue-100 mb-6">Browse our full catalog or visit us in person.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/shop" className="bg-[#16A34A] text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 transition-colors">
            Shop Now
          </Link>
          <Link href="/contact" className="bg-white/10 border border-white/30 text-white font-bold px-8 py-3 rounded-xl hover:bg-white/20 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
