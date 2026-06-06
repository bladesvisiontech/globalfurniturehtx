import { Suspense } from 'react'
import ShopClient from './ShopClient'

export const metadata = { title: 'Shop', description: 'Browse the full Global Furniture HTX catalog — living room sets, bedroom furniture, dining sets, mattresses, accent pieces, and more. Affordable prices, same-day delivery in Houston.' }

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[#1E3331]/40">Loading...</div>}>
      <ShopClient />
    </Suspense>
  )
}
