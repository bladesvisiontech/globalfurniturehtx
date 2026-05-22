import Link from 'next/link'
import { Truck, CreditCard, Phone, CheckCircle } from 'lucide-react'
import siteData from '@/data/site.json'

export const metadata = { title: 'Services & Financing' }

const DELIVERY_FEATURES = [
  'Same-day delivery available in Houston',
  'Next-day delivery for surrounding areas',
  'Professional assembly included on most orders',
  'Delivery available 7 days a week',
  'Large item handling by trained delivery team',
]

const FINANCING_PARTNERS = [
  {
    name: 'Koalafi',
    href: 'https://koalafi.com',
    description: 'Lease-to-own financing with flexible payment options. Apply online in minutes and get a quick decision.',
    features: ['No credit required', 'Flexible payment plans', 'Apply in minutes'],
  },
  {
    name: 'Snap Finance',
    href: 'https://snapfinance.com',
    description: 'Specializes in customers with limited or poor credit. Simple application with fast approvals.',
    features: ['Bad credit OK', 'Quick approvals', 'Weekly or bi-weekly payments'],
  },
  {
    name: 'Acima',
    href: 'https://acima.com',
    description: 'Rent-to-own with early purchase options. Own your furniture outright by paying off early.',
    features: ['Rent-to-own model', 'Early purchase option', 'No credit needed'],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#00253D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services & Financing</h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Same-day delivery in Houston. Flexible financing for every budget — no credit needed.
          </p>
        </div>
      </section>

      {/* Delivery */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Truck className="text-[#1E3331]" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Delivery Service</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              We deliver throughout the Greater Houston area, including Sugar Land, Pearland, Missouri City, Stafford, Rosenberg, Richmond, and nearby communities. Our professional delivery team handles everything — from pickup to assembly.
            </p>
            <ul className="space-y-3">
              {DELIVERY_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-[#1E3331] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={siteData.phoneUrl}
              className="mt-8 inline-flex items-center gap-2 bg-[#1E3331] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#2a4745] transition-colors"
            >
              <Phone size={18} />
              Call to Schedule Delivery
            </a>
          </div>
          <div className="bg-[#E7E0CE] rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Same-Day Available</h3>
            <p className="text-gray-500 text-sm mb-4">
              Order before noon and we&apos;ll deliver the same day in most Houston-area locations.
            </p>
            <p className="text-xs text-gray-400">Call us to confirm availability for your area.</p>
            <p className="mt-4 text-[#00253D] font-bold text-lg">{siteData.phone}</p>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section id="financing" className="bg-[#F5F2EC] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <CreditCard className="text-[#00253D]" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Financing Options</h2>
            </div>
            <p className="text-gray-500 max-w-xl mx-auto">
              We partner with three leading no-credit-needed financing companies to help you get the furniture you need today, and pay over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FINANCING_PARTNERS.map((partner) => (
              <div key={partner.name} className="bg-white rounded-2xl border-2 border-gray-100 hover:border-[#00253D] p-8 transition-all">
                <h3 className="text-2xl font-bold text-[#00253D] mb-3">{partner.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{partner.description}</p>
                <ul className="space-y-2 mb-6">
                  {partner.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={15} className="text-[#1E3331] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border-2 border-[#00253D] text-[#00253D] font-semibold py-3 rounded-xl hover:bg-[#00253D] hover:text-white transition-colors text-sm"
                >
                  Apply with {partner.name}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#00253D] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Not sure which option is right for you?</h3>
            <p className="text-white/70 mb-6">Our team can walk you through all financing options in-store or over the phone.</p>
            <a
              href={siteData.phoneUrl}
              className="inline-flex items-center gap-2 bg-[#1E3331] hover:bg-[#2a4745] text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              <Phone size={18} />
              {siteData.phone}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Shop?</h2>
        <p className="text-gray-500 mb-6">Browse our catalog and find your perfect furniture today.</p>
        <Link href="/shop" className="bg-[#00253D] text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-colors">
          View Catalog
        </Link>
      </section>
    </div>
  )
}
