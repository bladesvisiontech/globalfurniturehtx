import Link from 'next/link'
import { Calendar, ChevronRight } from 'lucide-react'
import blogData from '@/data/blog.json'
import { type BlogPost } from '@/types'

export const metadata = { title: 'Blog' }

export default function BlogPage() {
  const posts = blogData.posts as BlogPost[]

  return (
    <div>
      <section className="bg-[#00253D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Furniture Tips & Guides</h1>
          <p className="text-white/70 text-xl">Helpful advice for furnishing your Houston home.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <article className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow overflow-hidden">
                <div className="h-48 bg-[#E7E0CE]/30 flex items-center justify-center text-6xl">
                  🛋️
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <Calendar size={12} />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00253D] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-[#00253D] text-sm font-semibold">
                    Read More <ChevronRight size={14} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
