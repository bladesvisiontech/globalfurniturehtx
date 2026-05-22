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
      <section className="bg-[#1E3A8A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Frequently Asked Questions</h1>
          <p className="text-blue-100 text-xl">Everything you need to know about Global Furniture HTX.</p>
        </div>
      </section>
      <FAQClient grouped={grouped} />
    </div>
  )
}
