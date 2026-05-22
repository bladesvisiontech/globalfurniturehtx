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
  { href: '/services', label: 'Services & Delivery' },
  { href: '/services#financing', label: 'Financing Options' },
  { href: '/blog', label: 'Blog' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <p className="text-2xl font-bold">Global Furniture</p>
            <p className="text-[#22C55E] font-bold tracking-widest text-sm uppercase">HTX</p>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed">
            Quality furniture for every Houston home. Financing available — no credit needed.
          </p>
          <a
            href={siteData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-4 text-blue-200 hover:text-white transition-colors text-sm"
          >
            📷 {siteData.instagramHandle}
          </a>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold text-white mb-4 uppercase tracking-wide text-sm">Shop</h3>
          <ul className="space-y-2">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-blue-200 hover:text-white transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-semibold text-white mb-4 uppercase tracking-wide text-sm">Company</h3>
          <ul className="space-y-2">
            {INFO_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-blue-200 hover:text-white transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4 uppercase tracking-wide text-sm">Visit Us</h3>
          <ul className="space-y-3 text-sm text-blue-200">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#22C55E]" />
              <a
                href={siteData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {siteData.address}<br />
                {siteData.city}, {siteData.state} {siteData.zip}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-[#22C55E]" />
              <a href={siteData.phoneUrl} className="hover:text-white transition-colors">
                {siteData.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 shrink-0 text-[#22C55E]" />
              <span>{siteData.hours}</span>
            </li>
          </ul>

          <a
            href={siteData.phoneUrl}
            className="mt-6 inline-block bg-[#16A34A] hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors"
          >
            Call Us Now
          </a>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-blue-300 text-xs">
          <p>© {new Date().getFullYear()} Global Furniture HTX. All rights reserved.</p>
          <p>Houston, TX · Delivery available in the Houston area</p>
        </div>
      </div>
    </footer>
  )
}
