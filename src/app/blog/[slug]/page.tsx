import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, ChevronLeft } from 'lucide-react'
import blogData from '@/data/blog.json'
import { type BlogPost } from '@/types'

interface Props {
  params: Promise<{ slug: string }>
}

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
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#1E3A8A] mb-6 transition-colors">
        <ChevronLeft size={14} /> Back to Blog
      </Link>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs bg-blue-50 text-[#1E3A8A] px-2 py-1 rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>

      <div className="flex items-center gap-4 text-gray-400 text-sm mb-8 pb-6 border-b">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <span>By {post.author}</span>
      </div>

      <div className="prose prose-gray max-w-none">
        {paragraphs.map((para, idx) => {
          if (para.startsWith('**') && para.endsWith('**')) {
            return <h3 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-2">{para.replace(/\*\*/g, '')}</h3>
          }
          return <p key={idx} className="text-gray-600 leading-relaxed mb-4">{para}</p>
        })}
      </div>

      <div className="mt-12 bg-[#1E3A8A] text-white rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Ready to shop?</h3>
        <p className="text-blue-100 text-sm mb-4">Browse our full catalog and find the perfect furniture for your home.</p>
        <Link href="/shop" className="inline-block bg-[#16A34A] text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 transition-colors">
          View Catalog
        </Link>
      </div>
    </div>
  )
}
