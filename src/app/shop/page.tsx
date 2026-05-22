import { Suspense } from 'react'
import ShopClient from './ShopClient'

export const metadata = { title: 'Shop' }

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>}>
      <ShopClient />
    </Suspense>
  )
}
