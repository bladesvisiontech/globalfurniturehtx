import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'
import siteData from '@/data/site.json'

const SHOP_LINKS = [
  { href: '/shop?category=living-room', label: 'Living Room' },
  { href: '/shop?category=bedroom', label: 'Bedroom' },
  { href: '/shop?category=dining-room', label: 'Dining Room' },
  { href: '/shop?category=mattresses', label: 'Mattresses' },
  { href: '/shop?category=accent-decor', label: 'Accent & Decor' },
  { href: '/shop?category=office', label: 'Office' },
]

const INFO_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Delivery & Services' },
  { href: '/services#financing', label: 'Financing Options' },
  { href: '/blog', label: 'Journal' },
  { href: '/testimonials', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <>
    <footer className="bg-[#1E3331] text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="mb-6">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white">Global Furniture</p>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#7DA68B] mt-1">Houston, TX</p>
          </div>
          <p className="text-xs font-light text-white/50 leading-relaxed mb-6">
            Quality furniture for every Houston home. Financing available — no credit needed.
          </p>
          <a
            href={siteData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-widest uppercase text-[#7DA68B] hover:text-white transition-colors font-medium"
          >
            {siteData.instagramHandle}
          </a>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">Shop</h3>
          <ul className="space-y-3">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-xs font-light text-white/60 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">Company</h3>
          <ul className="space-y-3">
            {INFO_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-xs font-light text-white/60 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">Visit</h3>
          <ul className="space-y-4 text-xs font-light text-white/60">
            <li className="flex items-start gap-2.5">
              <MapPin size={13} className="shrink-0 mt-0.5 text-[#7DA68B]" />
              <a href={siteData.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors leading-relaxed">
                {siteData.address}<br />{siteData.city}, {siteData.state} {siteData.zip}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={13} className="shrink-0 text-[#7DA68B]" />
              <a href={siteData.phoneUrl} className="hover:text-white transition-colors">{siteData.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={13} className="shrink-0 mt-0.5 text-[#7DA68B]" />
              <span className="leading-relaxed">{siteData.hours}</span>
            </li>
          </ul>
          <a
            href={siteData.phoneUrl}
            className="mt-8 inline-block text-xs font-medium text-[#1E3331] bg-white px-6 py-2.5 hover:bg-[#F5F2EC] transition-colors"
            style={{ borderRadius: 25 }}
          >
            Call Now
          </a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-screen-xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] tracking-wide text-white/30 font-light">
          <p>© {new Date().getFullYear()} Global Furniture HTX. All rights reserved.</p>
          <p>Houston, TX · Same-day delivery available</p>
        </div>
      </div>
    </footer>

    {/* Agency credit */}
    <div className="bg-[#0e1c2f] py-3">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-center gap-2 text-[11px] text-white/40 font-light">
        <span>Made with</span>
        <span className="text-white/60">♥</span>
        <span>by</span>
        <a
          href="https://www.inmotionteam.com/es"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        >
          <img src="/images/inmotion.svg" alt="Inmotion" className="h-4 w-auto" />
        </a>
      </div>
    </div>
    </>
  )
}
