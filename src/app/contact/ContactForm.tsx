'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormState { name: string; phone: string; email: string; productInterest: string; message: string }
const INITIAL: FormState = { name: '', phone: '', email: '', productInterest: '', message: '' }

const inputClass = "w-full px-4 py-3 text-sm text-[#1E3331] font-light bg-white focus:outline-none transition-colors"
const inputStyle = { border: '1px solid #ECEAE4', borderRadius: 0 }
const focusStyle = "focus:border-[#1E3331]"

export default function ContactForm() {
  const searchParams = useSearchParams()
  const [form, setForm] = useState<FormState>({ ...INITIAL, productInterest: searchParams.get('product') ?? '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const update = (field: keyof FormState, value: string) => setForm((p) => ({ ...p, [field]: value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm(INITIAL)
    } catch { setStatus('error') }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#F5F2EC] p-10 text-center" style={{ border: '1px solid #ECEAE4' }}>
        <CheckCircle className="text-[#7DA68B] mx-auto mb-4" size={36} />
        <h3 className="text-xl font-light text-[#1E3331] mb-2">Message Sent</h3>
        <p className="text-[#1E3331]/50 text-sm font-light">We&apos;ll be in touch shortly. Or call us at <a href="tel:+18328515250" className="text-[#1E3331] font-medium">832-851-5250</a>.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-xs tracking-widest uppercase text-[#7DA68B] font-medium hover:text-[#1E3331] transition-colors">Send another →</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[10px] tracking-widest uppercase text-[#1E3331]/40 mb-1.5 font-medium">Name *</label>
          <input required type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your full name" className={cn(inputClass, focusStyle)} style={inputStyle} />
        </div>
        <div>
          <label className="block text-[10px] tracking-widest uppercase text-[#1E3331]/40 mb-1.5 font-medium">Phone *</label>
          <input required type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="(832) 000-0000" className={cn(inputClass, focusStyle)} style={inputStyle} />
        </div>
      </div>
      <div>
        <label className="block text-[10px] tracking-widest uppercase text-[#1E3331]/40 mb-1.5 font-medium">Email</label>
        <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" className={cn(inputClass, focusStyle)} style={inputStyle} />
      </div>
      <div>
        <label className="block text-[10px] tracking-widest uppercase text-[#1E3331]/40 mb-1.5 font-medium">Interested In</label>
        <input type="text" value={form.productInterest} onChange={(e) => update('productInterest', e.target.value)} placeholder="e.g. King bedroom set, sectional sofa..." className={cn(inputClass, focusStyle)} style={inputStyle} />
      </div>
      <div>
        <label className="block text-[10px] tracking-widests uppercase text-[#1E3331]/40 mb-1.5 font-medium">Message</label>
        <textarea value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Questions about delivery, pricing, availability..." rows={4} className={cn(inputClass, focusStyle, 'resize-none')} style={inputStyle} />
      </div>
      {status === 'error' && <p className="text-red-400 text-xs font-light">Something went wrong. Please try again or call us directly.</p>}
      <button type="submit" disabled={status === 'loading'} className={cn('w-full flex items-center justify-center gap-2 text-sm font-medium text-white bg-[#1E3331] py-4 transition-opacity', status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90')}>
        {status === 'loading' ? 'Sending...' : <><span>Send Message</span><ArrowRight size={14} /></>}
      </button>
    </form>
  )
}
