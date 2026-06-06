import { Phone, MapPin, Clock, Truck, CreditCard, Users } from 'lucide-react'
import Link from 'next/link'
import siteData from '@/data/site.json'

export const metadata = { title: 'About Us' }

const VALUES = [
  { icon: Users, title: 'Family-Owned', desc: 'A Houston family business dedicated to serving our community with quality and care.' },
  { icon: Truck, title: 'Same-Day Delivery', desc: 'Need furniture today? We offer same-day and next-day delivery throughout the Houston area.' },
  { icon: CreditCard, title: 'Flexible Financing', desc: 'No credit? No problem. We work with Koalafi, Snap Finance, and Acima to get everyone approved.' },
]

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[#0e2b62] text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Our Story</p>
          <h1 className="text-5xl font-light mb-4">About Global Furniture HTX</h1>
          <p className="text-white/60 text-base font-light max-w-xl">Serving Houston families with quality furniture and exceptional service.</p>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Who We Are</p>
          <h2 className="text-3xl font-light text-[#0e2b62] mb-8">Our Story</h2>
          <div className="space-y-5 text-[#1E3331]/60 font-light leading-relaxed text-sm">
            <p>Global Furniture HTX was founded with one mission: to make quality furniture accessible to every Houston family, regardless of budget or credit history.</p>
            <p>Located in the heart of southwest Houston, our showroom offers a wide selection of living room sets, bedroom furniture, dining sets, mattresses, and accent pieces — all at competitive prices.</p>
            <p>We believe that your home should reflect who you are. That&apos;s why we carry a diverse catalog of styles, from modern and contemporary to classic and traditional.</p>
            <p>With same-day delivery and flexible financing through our trusted partners, we make it easy to get the furniture you love into your home fast.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2EC]" style={{ borderTop: '1px solid #ECEAE4', borderBottom: '1px solid #ECEAE4' }}>
        <div className="max-w-screen-xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Why Us</p>
            <h2 className="text-3xl font-light text-[#0e2b62]">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-10 text-center" style={{ border: '1px solid #ECEAE4' }}>
                <div className="w-12 h-12 bg-[#E7E0CE] flex items-center justify-center mx-auto mb-5">
                  <Icon className="text-[#1E3331]" size={20} />
                </div>
                <h3 className="text-sm font-semibold text-[#1E3331] mb-3">{title}</h3>
                <p className="text-[#1E3331]/50 text-xs font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Find Us</p>
            <h2 className="text-3xl font-light text-[#0e2b62] mb-8">Visit Our Showroom</h2>
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#7DA68B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#1E3331]">{siteData.address}</p>
                  <p className="text-sm font-light text-[#1E3331]/50">{siteData.city}, {siteData.state} {siteData.zip}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#7DA68B] shrink-0" />
                <a href={siteData.phoneUrl} className="text-sm font-medium text-[#1E3331] hover:text-[#0e2b62] transition-colors">{siteData.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#7DA68B] shrink-0 mt-0.5" />
                <p className="text-sm font-light text-[#1E3331]/60">{siteData.hours}</p>
              </li>
            </ul>
            <div className="flex gap-3 flex-wrap">
              <a href={siteData.phoneUrl} className="text-sm font-medium text-white bg-[#1E3331] px-7 py-3 hover:opacity-90 transition-opacity flex items-center gap-2" style={{ borderRadius: 25 }}>
                <Phone size={14} /> Call Us
              </a>
              <a href={siteData.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#1E3331] border border-[#1E3331] px-7 py-3 hover:bg-[#1E3331] hover:text-white transition-colors flex items-center gap-2" style={{ borderRadius: 25 }}>
                <MapPin size={14} /> Directions
              </a>
            </div>
          </div>
          <div className="overflow-hidden" style={{ height: 320, border: '1px solid #ECEAE4' }}>
            <iframe src="https://maps.google.com/maps?q=6951+McHard+Rd+STE+D1+Houston+TX+77053&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Showroom location" />
          </div>
        </div>
      </section>

      <section className="bg-[#1E3331] text-white py-16 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Ready?</p>
        <h2 className="text-3xl font-light mb-4">Furnish Your Home Today</h2>
        <p className="text-white/50 text-sm font-light mb-8">Browse our full catalog or visit us in person.</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Link href="/shop" className="text-sm font-medium text-[#1E3331] bg-white px-8 py-3 hover:bg-[#E7E0CE] transition-colors" style={{ borderRadius: 25 }}>Shop Now</Link>
          <Link href="/contact" className="text-sm font-medium text-white border border-white/30 px-8 py-3 hover:bg-white/10 transition-colors" style={{ borderRadius: 25 }}>Contact Us</Link>
        </div>
      </section>
    </div>
  )
}
