import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, ChevronLeft } from 'lucide-react'
import blogData from '@/data/blog.json'
import { type BlogPost } from '@/types'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return (blogData.posts as BlogPost[]).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = (blogData.posts as BlogPost[]).find((p) => p.slug === slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = (blogData.posts as BlogPost[]).find((p) => p.slug === slug)
  if (!post) notFound()

  const paragraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="flex items-center gap-1.5 text-xs text-[#1E3331]/40 hover:text-[#1E3331] mb-10 transition-colors font-medium tracking-wide">
        <ChevronLeft size={13} /> Back to Journal
      </Link>

      <div className="flex flex-wrap gap-2 mb-5">
        {post.tags.map((tag) => (
          <span key={tag} className="text-[10px] tracking-widest uppercase bg-[#E7E0CE] text-[#1E3331] px-3 py-1 font-medium">{tag}</span>
        ))}
      </div>

      <h1 className="text-3xl md:text-4xl font-light text-[#0e2b62] mb-5 leading-tight">{post.title}</h1>

      <div className="flex items-center gap-4 text-[#1E3331]/40 text-xs font-light mb-10 pb-8" style={{ borderBottom: '1px solid #ECEAE4' }}>
        <span className="flex items-center gap-1.5">
          <Calendar size={12} />
          {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <span>By {post.author}</span>
      </div>

      <div className="space-y-5">
        {paragraphs.map((para, idx) =>
          para.startsWith('**') && para.endsWith('**')
            ? <h3 key={idx} className="text-lg font-medium text-[#1E3331] mt-8">{para.replace(/\*\*/g, '')}</h3>
            : <p key={idx} className="text-[#1E3331]/60 font-light leading-relaxed text-sm">{para}</p>
        )}
      </div>

      <div className="mt-14 bg-[#1E3331] text-white p-10 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Ready?</p>
        <h3 className="text-2xl font-light mb-3">Browse Our Collection</h3>
        <p className="text-white/50 text-sm font-light mb-6">Find the perfect furniture for your home.</p>
        <Link href="/shop" className="text-sm font-medium text-[#1E3331] bg-white px-8 py-3 hover:bg-[#E7E0CE] transition-colors" style={{ borderRadius: 25 }}>View Catalog</Link>
      </div>
    </div>
  )
}
