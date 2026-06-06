'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import siteData from '@/data/site.json'

const NAV_LINKS = [
  { href: '/shop', label: 'Shop', hasDropdown: true },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Journal' },
  { href: '/testimonials', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

const SHOP_CATEGORIES = [
  { href: '/shop?category=living-room', label: 'Living Room' },
  { href: '/shop?category=bedroom', label: 'Bedroom' },
  { href: '/shop?category=dining-room', label: 'Dining Room' },
  { href: '/shop?category=mattresses', label: 'Mattresses' },
  { href: '/shop?category=accent-decor', label: 'Accent & Decor' },
  { href: '/shop?category=office', label: 'Office' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50" style={{ borderBottom: '1px solid #F0F0F0' }}>
      {/* Top announcement bar */}
      <div className="bg-[#7DA68B] text-white text-xs tracking-wide py-2">
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
          <span className="text-green-200 font-light">{siteData.deliveryNote}</span>
          <a
            href={siteData.phoneUrl}
            className="flex items-center gap-1.5 font-medium text-white hover:text-green-200 transition-colors"
          >
            <Phone size={12} />
            {siteData.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-[0.18em] uppercase text-[#7DA68B]">
            Global Furniture
          </span>
          <span className="text-[11px] font-light tracking-[0.35em] uppercase text-[#7DA68B] mt-0.5">
            Houston, TX
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-[#7DA68B]/80 hover:text-[#7DA68B] transition-colors font-medium"
                >
                  {link.label}
                  <ChevronDown size={13} className={`transition-transform ${shopOpen ? 'rotate-180' : ''}`} />
                </Link>

                {shopOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                  >
                    <div
                      className="bg-white py-4 px-2 min-w-[180px]"
                      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #F0F0F0' }}
                    >
                      {SHOP_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          className="block px-4 py-2.5 text-sm text-[#7DA68B]/70 hover:text-[#7DA68B] hover:bg-[#F5F2EC] transition-colors"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#7DA68B]/80 hover:text-[#7DA68B] transition-colors font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact#quote"
            className="text-sm font-medium text-[#7DA68B] border border-[#7DA68B] px-5 py-2 hover:bg-[#7DA68B] hover:text-white transition-colors"
            style={{ borderRadius: 25 }}
          >
            Request a Quote
          </Link>
          <a
            href={siteData.phoneUrl}
            className="text-sm font-medium text-white bg-[#7DA68B] px-5 py-2 hover:bg-[#7DA68B]/90 transition-colors flex items-center gap-2"
            style={{ borderRadius: 25 }}
          >
            <Phone size={13} />
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-[#7DA68B]/60"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[#F0F0F0] bg-white">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-[#7DA68B]/80 hover:text-[#7DA68B] border-b border-[#F0F0F0] last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-5 flex flex-col gap-2">
            <a
              href={siteData.phoneUrl}
              className="text-sm font-medium text-white bg-[#7DA68B] px-5 py-3 text-center flex items-center justify-center gap-2"
              style={{ borderRadius: 25 }}
            >
              <Phone size={14} />
              Call {siteData.phone}
            </a>
            <Link
              href="/contact#quote"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#7DA68B] border border-[#7DA68B] px-5 py-3 text-center"
              style={{ borderRadius: 25 }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
