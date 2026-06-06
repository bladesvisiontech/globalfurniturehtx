import { Suspense } from 'react'
import ShopClient from './ShopClient'

export const metadata = { title: 'Shop' }

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[#0e2b62]/40">Loading...</div>}>
      <ShopClient />
    </Suspense>
  )
}
