import { Suspense } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'
import siteData from '@/data/site.json'
import ContactForm from './ContactForm'

export const metadata = { title: 'Contact Us' }

export default function ContactPage() {
  return (
    <div>
      <section className="bg-[#1E3A8A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-blue-100 text-xl">We&apos;d love to help you find the perfect furniture.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-[#1E3A8A]" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <a href={siteData.phoneUrl} className="text-[#1E3A8A] font-bold text-lg hover:underline">
                    {siteData.phone}
                  </a>
                  <p className="text-gray-400 text-xs mt-1">Call or text anytime during business hours</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[#1E3A8A]" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Showroom</p>
                  <a
                    href={siteData.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#1E3A8A] transition-colors"
                  >
                    {siteData.address}<br />
                    {siteData.city}, {siteData.state} {siteData.zip}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-[#1E3A8A]" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Hours</p>
                  <p className="text-gray-600">{siteData.hours}</p>
                </div>
              </li>
            </ul>

            <a
              href={siteData.phoneUrl}
              className="inline-flex items-center gap-2 bg-[#16A34A] text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition-colors"
            >
              <Phone size={18} />
              Call {siteData.phone}
            </a>
          </div>

          {/* Form */}
          <div id="quote">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h2>
            <p className="text-gray-500 text-sm mb-6">Fill out the form and we&apos;ll get back to you shortly.</p>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}
