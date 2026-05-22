'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import siteData from '@/data/site.json'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1E3A8A] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span>{siteData.deliveryNote}</span>
          <a
            href={siteData.phoneUrl}
            className="flex items-center gap-1 font-semibold hover:text-green-300 transition-colors"
          >
            <Phone size={14} />
            {siteData.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-[#1E3A8A]">Global Furniture</span>
          <span className="text-sm font-semibold text-[#16A34A] tracking-widest uppercase">HTX</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#1E3A8A] font-medium transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteData.phoneUrl}
            className="bg-[#16A34A] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Phone size={15} />
            Call Now
          </a>
          <Link
            href="/contact#quote"
            className="border-2 border-[#1E3A8A] text-[#1E3A8A] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1E3A8A] hover:text-white transition-colors"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#1E3A8A] font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <a
              href={siteData.phoneUrl}
              className="bg-[#16A34A] text-white px-4 py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              Call {siteData.phone}
            </a>
            <Link
              href="/contact#quote"
              onClick={() => setOpen(false)}
              className="border-2 border-[#1E3A8A] text-[#1E3A8A] px-4 py-3 rounded-lg font-semibold text-center"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
