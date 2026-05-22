'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard'
import productsData from '@/data/products.json'
import categoriesData from '@/data/categories.json'
import { type Product } from '@/types'
import { cn } from '@/lib/utils'

const ALL_LABEL = 'All Furniture'

export default function ShopClient() {
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get('category') ?? ''

  const allProducts = productsData.products as Product[]
  const categories = categoriesData.categories.sort((a, b) => a.order - b.order)

  const filtered = activeCategory
    ? allProducts.filter((p) => p.category === activeCategory)
    : allProducts

  const activeName = activeCategory
    ? (categories.find((c) => c.slug === activeCategory)?.name ?? activeCategory)
    : ALL_LABEL

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {activeName}
        </h1>
        <p className="text-gray-500 mt-1">{filtered.length} products</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-56 shrink-0">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Category</h2>
          <ul className="space-y-1">
            <li>
              <Link
                href="/shop"
                className={cn(
                  'block px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  !activeCategory
                    ? 'bg-[#00253D] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                {ALL_LABEL}
              </Link>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/shop?category=${cat.slug}`}
                  className={cn(
                    'block px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    activeCategory === cat.slug
                      ? 'bg-[#00253D] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">No products found in this category.</p>
              <Link href="/shop" className="mt-4 inline-block text-[#00253D] underline text-sm">
                View all furniture
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
