import { Truck, CreditCard, Phone } from 'lucide-react'
import siteData from '@/data/site.json'

const PERKS = [
  { icon: Truck, text: 'Same-Day Delivery in Houston' },
  { icon: CreditCard, text: 'Financing Available — No Credit Needed' },
  { icon: Phone, text: `Call ${siteData.phone}` },
]

export default function CTABar() {
  return (
    <div className="bg-[#1E3331] text-white py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-medium">
          {PERKS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={16} className="shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
