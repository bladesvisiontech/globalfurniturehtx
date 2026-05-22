'use client'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard'
import productsData from '@/data/products.json'
import categoriesData from '@/data/categories.json'
import { type Product } from '@/types'
import { cn } from '@/lib/utils'

export default function ShopClient() {
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get('category') ?? ''

  const allProducts = productsData.products as Product[]
  const categories = categoriesData.categories.sort((a, b) => a.order - b.order)
  const filtered = activeCategory ? allProducts.filter((p) => p.category === activeCategory) : allProducts
  const activeName = activeCategory ? (categories.find((c) => c.slug === activeCategory)?.name ?? activeCategory) : 'All Furniture'

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-2 font-medium">Catalog</p>
        <h1 className="text-3xl font-light text-[#1E3331]">{activeName}</h1>
        <p className="text-[#1E3331]/40 text-xs mt-1 font-light">{filtered.length} products</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:w-48 shrink-0">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#1E3331]/40 mb-4">Category</p>
          <ul className="space-y-1">
            <li>
              <Link href="/shop" className={cn('block px-3 py-2 text-xs font-medium transition-colors', !activeCategory ? 'text-[#1E3331] bg-[#E7E0CE]' : 'text-[#1E3331]/50 hover:text-[#1E3331]')}>
                All Furniture
              </Link>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link href={`/shop?category=${cat.slug}`} className={cn('block px-3 py-2 text-xs font-medium transition-colors', activeCategory === cat.slug ? 'text-[#1E3331] bg-[#E7E0CE]' : 'text-[#1E3331]/50 hover:text-[#1E3331]')}>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#1E3331]/40">
              <p className="text-sm font-light">No products found in this category.</p>
              <Link href="/shop" className="mt-4 inline-block text-xs tracking-widest uppercase text-[#7DA68B] font-medium hover:text-[#1E3331]">View all furniture</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
