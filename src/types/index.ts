// ── Site Info ──────────────────────────────────────────────
export interface SiteInfo {
  name: string
  tagline: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  phoneUrl: string
  email: string
  googleMapsUrl: string
  hours: string
  instagram: string
  instagramHandle: string
  deliveryNote: string
}

// ── Products ───────────────────────────────────────────────
export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  salePrice?: number
  category: string          // matches Category.slug
  images: string[]          // paths under /public or absolute URLs
  featured: boolean
  inStock: boolean
  dimensions?: string
  material?: string
  colors?: string[]
  tags?: string[]
}

// ── Categories ─────────────────────────────────────────────
export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  order: number
}

// ── Banners ────────────────────────────────────────────────
export interface Banner {
  id: string
  title: string
  subtitle: string
  imageUrl: string
  ctaText: string
  ctaLink: string
  order: number
  active: boolean
}

// ── Testimonials ───────────────────────────────────────────
export interface Testimonial {
  id: string
  name: string
  location: string
  text: string
  rating: number
  date: string
}

// ── Blog ───────────────────────────────────────────────────
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  author: string
  publishedAt: string
  tags: string[]
}

// ── FAQ ────────────────────────────────────────────────────
export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

// ── Form payloads ──────────────────────────────────────────
export interface QuoteFormData {
  name: string
  phone: string
  email: string
  message: string
  productInterest?: string
}

export interface ContactFormData {
  name: string
  phone: string
  email: string
  message: string
}
