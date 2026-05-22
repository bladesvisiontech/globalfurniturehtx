import faqData from '@/data/faq.json'
import FAQClient from './FAQClient'

export const metadata = { title: 'FAQ' }

export default function FAQPage() {
  const grouped = faqData.faqs.reduce<Record<string, typeof faqData.faqs>>((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = []
    acc[faq.category].push(faq)
    return acc
  }, {})
  return (
    <div>
      <section className="bg-[#00253D] text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Help Center</p>
          <h1 className="text-5xl font-light mb-4">Frequently Asked Questions</h1>
          <p className="text-white/50 text-base font-light">Everything you need to know about Global Furniture HTX.</p>
        </div>
      </section>
      <FAQClient grouped={grouped} />
    </div>
  )
}
