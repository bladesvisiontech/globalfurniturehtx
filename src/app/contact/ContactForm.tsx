'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Send, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormState {
  name: string
  phone: string
  email: string
  productInterest: string
  message: string
}

const INITIAL: FormState = { name: '', phone: '', email: '', productInterest: '', message: '' }

export default function ContactForm() {
  const searchParams = useSearchParams()
  const productFromURL = searchParams.get('product') ?? ''

  const [form, setForm] = useState<FormState>({ ...INITIAL, productInterest: productFromURL })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#E7E0CE] border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="text-[#1E3331] mx-auto mb-3" size={40} />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 text-sm">
          We&apos;ll get back to you shortly. You can also call us directly at{' '}
          <a href="tel:+18328515250" className="text-[#00253D] font-semibold">832-851-5250</a>.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-[#00253D] underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your full name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00253D] focus:ring-1 focus:ring-[#00253D]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="(832) 000-0000"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00253D] focus:ring-1 focus:ring-[#00253D]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          placeholder="you@example.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00253D] focus:ring-1 focus:ring-[#00253D]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Interested in</label>
        <input
          type="text"
          value={form.productInterest}
          onChange={(e) => update('productInterest', e.target.value)}
          placeholder="e.g. King bedroom set, sectional sofa..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00253D] focus:ring-1 focus:ring-[#00253D]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Questions about delivery, pricing, availability..."
          rows={4}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00253D] focus:ring-1 focus:ring-[#00253D] resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again or call us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          'w-full flex items-center justify-center gap-2 bg-[#00253D] text-white font-bold py-4 rounded-xl transition-colors text-sm',
          status === 'loading' ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-90'
        )}
      >
        <Send size={16} />
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
