import { Truck, CreditCard, Phone } from 'lucide-react'
import siteData from '@/data/site.json'

const PERKS = [
  { icon: Truck, text: 'Same-Day Delivery in Houston' },
  { icon: CreditCard, text: 'Financing Available — No Credit Needed' },
  { icon: Phone, text: siteData.phone },
]

export default function CTABar() {
  return (
    <div className="bg-[#E7E0CE]" style={{ borderBottom: '1px solid #ECEAE4' }}>
      <div className="max-w-screen-xl mx-auto px-6 py-3.5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-[10px] tracking-widest uppercase text-[#7DA68B]/60 font-medium">
          {PERKS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={13} className="text-[#0e2b62] shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
