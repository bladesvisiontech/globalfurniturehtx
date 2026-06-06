import Link from 'next/link'
import { Truck, CreditCard, Phone, CheckCircle } from 'lucide-react'
import siteData from '@/data/site.json'

export const metadata = { title: 'Services & Financing', description: 'Global Furniture HTX offers same-day delivery, professional assembly, and flexible financing with no credit needed through Koalafi, Snap Finance, and Acima. Serving Houston, TX.' }

const DELIVERY_FEATURES = [
  'Same-day delivery available in Houston',
  'Next-day delivery for surrounding areas',
  'Professional assembly included on most orders',
  'Delivery available 7 days a week',
  'Large item handling by trained delivery team',
]

const FINANCING_PARTNERS = [
  { name: 'Koalafi', href: 'https://koalafi.com', logo: '/images/financing/koalafi.webp', description: 'Lease-to-own financing with flexible payment options. Apply online in minutes and get a quick decision.', features: ['No credit required', 'Flexible payment plans', 'Apply in minutes'] },
  { name: 'Snap Finance', href: 'https://snapfinance.com', logo: '/images/financing/snapfinance.png', description: 'Specializes in customers with limited or poor credit. Simple application with fast approvals.', features: ['Bad credit OK', 'Quick approvals', 'Weekly or bi-weekly payments'] },
  { name: 'Acima', href: 'https://acima.com', logo: '/images/financing/acima.png', description: 'Rent-to-own with early purchase options. Own your furniture outright by paying off early.', features: ['Rent-to-own model', 'Early purchase option', 'No credit needed'] },
]

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-[#0e2b62] text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">How We Help</p>
          <h1 className="text-5xl font-light mb-4">Services & Financing</h1>
          <p className="text-white/60 text-base font-light max-w-xl">Same-day delivery in Houston. Flexible financing for every budget — no credit needed.</p>
        </div>
      </section>

      {/* Delivery */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E7E0CE] flex items-center justify-center">
                <Truck className="text-[#1E3331]" size={18} />
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] font-medium">Logistics</p>
            </div>
            <h2 className="text-3xl font-light text-[#0e2b62] mb-5">Delivery Service</h2>
            <p className="text-[#1E3331]/60 font-light text-sm leading-relaxed mb-8">
              We deliver throughout the Greater Houston area, including Sugar Land, Pearland, Missouri City, Stafford, Rosenberg, and Richmond. Our professional delivery team handles everything — from pickup to assembly.
            </p>
            <ul className="space-y-3 mb-10">
              {DELIVERY_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-[#1E3331]/70 font-light">
                  <CheckCircle size={15} className="text-[#7DA68B] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a href={siteData.phoneUrl} className="text-sm font-medium text-white bg-[#0e2b62] px-7 py-3.5 hover:opacity-90 transition-opacity flex items-center gap-2 w-fit" style={{ borderRadius: 25 }}>
              <Phone size={14} /> Schedule Delivery
            </a>
          </div>
          <div className="bg-[#F5F2EC] p-12 text-center" style={{ border: '1px solid #ECEAE4' }}>
            <p className="text-5xl mb-5">🚚</p>
            <h3 className="text-xl font-light text-[#0e2b62] mb-2">Same-Day Available</h3>
            <p className="text-[#1E3331]/50 text-xs font-light mb-6 leading-relaxed">Order before noon and we&apos;ll deliver the same day in most Houston-area locations.</p>
            <p className="text-xs text-[#1E3331]/30 mb-4">Call to confirm availability for your area</p>
            <p className="text-[#1E3331] font-semibold">{siteData.phone}</p>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section id="financing" className="bg-[#F5F2EC]" style={{ borderTop: '1px solid #ECEAE4', borderBottom: '1px solid #ECEAE4' }}>
        <div className="max-w-screen-xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#E7E0CE] flex items-center justify-center">
              <CreditCard className="text-[#1E3331]" size={18} />
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] font-medium">Financing</p>
          </div>
          <h2 className="text-3xl font-light text-[#0e2b62] mb-4">Financing Options</h2>
          <p className="text-[#1E3331]/50 font-light text-sm mb-12 max-w-lg">We partner with three leading no-credit-needed financing companies to help you get the furniture you need today, and pay over time.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FINANCING_PARTNERS.map((partner) => (
              <div key={partner.name} className="bg-white p-8" style={{ border: '1px solid #ECEAE4' }}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{ height: 32, width: 'auto', maxWidth: 140, objectFit: 'contain', objectPosition: 'left', marginBottom: 20 }}
                />
                <p className="text-[#1E3331]/50 text-xs font-light leading-relaxed mb-6">{partner.description}</p>
                <ul className="space-y-2 mb-8">
                  {partner.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#1E3331]/70 font-light">
                      <CheckCircle size={13} className="text-[#7DA68B] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={partner.href} target="_blank" rel="noopener noreferrer" className="block text-center text-xs font-medium text-[#0e2b62] border border-[#0e2b62] py-2.5 hover:bg-[#0e2b62] hover:text-white transition-colors" style={{ borderRadius: 25 }}>
                  Apply with {partner.name}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#1E3331] text-white p-10 text-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Need Help?</p>
            <h3 className="text-2xl font-light mb-3">Not sure which option is right for you?</h3>
            <p className="text-white/50 text-sm font-light mb-8">Our team can walk you through all options in-store or over the phone.</p>
            <a href={siteData.phoneUrl} className="text-sm font-medium text-[#1E3331] bg-white px-8 py-3 hover:bg-[#E7E0CE] transition-colors flex items-center gap-2 w-fit mx-auto" style={{ borderRadius: 25 }}>
              <Phone size={14} /> {siteData.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-light text-[#0e2b62] mb-4">Ready to Shop?</h2>
        <p className="text-[#1E3331]/50 text-sm font-light mb-8">Browse our catalog and find your perfect furniture today.</p>
        <Link href="/shop" className="text-sm font-medium text-white bg-[#0e2b62] px-8 py-3.5 hover:opacity-90 transition-opacity" style={{ borderRadius: 25 }}>View Catalog</Link>
      </section>
    </div>
  )
}
