import { Suspense } from 'react'
import ShopClient from './ShopClient'

export const metadata = { title: 'Shop' }

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[#1E3331]/40">Loading...</div>}>
      <ShopClient />
    </Suspense>
  )
}
