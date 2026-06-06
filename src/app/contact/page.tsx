import { Suspense } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'
import siteData from '@/data/site.json'
import ContactForm from './ContactForm'

export const metadata = { title: 'Contact Us' }

export default function ContactPage() {
  return (
    <div>
      <section className="bg-[#0e2b62] text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Get in Touch</p>
          <h1 className="text-5xl font-light mb-4">Contact Us</h1>
          <p className="text-white/50 text-base font-light">We&apos;d love to help you find the perfect furniture.</p>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Reach Us</p>
            <h2 className="text-3xl font-light text-[#0e2b62] mb-10">Get in Touch</h2>
            <ul className="space-y-8 mb-10">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-[#E7E0CE] flex items-center justify-center shrink-0">
                  <Phone className="text-[#1E3331]" size={15} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-[#1E3331]/40 mb-1 font-medium">Phone</p>
                  <a href={siteData.phoneUrl} className="text-lg font-light text-[#1E3331] hover:text-[#0e2b62] transition-colors">{siteData.phone}</a>
                  <p className="text-xs text-[#1E3331]/40 font-light mt-0.5">Call or text during business hours</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-[#E7E0CE] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#1E3331]" size={15} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-[#1E3331]/40 mb-1 font-medium">Showroom</p>
                  <a href={siteData.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-light text-[#1E3331]/70 hover:text-[#1E3331] transition-colors leading-relaxed block">
                    {siteData.address}<br />{siteData.city}, {siteData.state} {siteData.zip}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-[#E7E0CE] flex items-center justify-center shrink-0">
                  <Clock className="text-[#1E3331]" size={15} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-[#1E3331]/40 mb-1 font-medium">Hours</p>
                  <p className="text-sm font-light text-[#1E3331]/60">{siteData.hours}</p>
                </div>
              </li>
            </ul>
            <a href={siteData.phoneUrl} className="text-sm font-medium text-white bg-[#0e2b62] px-7 py-3 hover:opacity-90 transition-opacity flex items-center gap-2 w-fit" style={{ borderRadius: 25 }}>
              <Phone size={14} /> Call {siteData.phone}
            </a>
          </div>

          <div id="quote">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Quote Request</p>
            <h2 className="text-3xl font-light text-[#0e2b62] mb-2">Request a Quote</h2>
            <p className="text-[#1E3331]/40 text-sm font-light mb-8">Fill out the form and we&apos;ll get back to you shortly.</p>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}
