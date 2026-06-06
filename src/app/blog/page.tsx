import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import blogData from '@/data/blog.json'
import { type BlogPost } from '@/types'

export const metadata = { title: 'Journal' }

export default function BlogPage() {
  const posts = blogData.posts as BlogPost[]
  return (
    <div>
      <section className="bg-[#0e2b62] text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#7DA68B] mb-3 font-medium">Resources</p>
          <h1 className="text-5xl font-light mb-4">Furniture Journal</h1>
          <p className="text-white/50 text-base font-light">Tips and guides for furnishing your Houston home.</p>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <article>
                <div className="aspect-[4/3] bg-[#F5F2EC] mb-5 overflow-hidden relative">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
                <div className="flex items-center gap-2 text-[#1E3331]/40 text-xs mb-3 font-light">
                  <Calendar size={11} />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <h2 className="text-sm font-medium text-[#1E3331] mb-2 group-hover:text-[#0e2b62] transition-colors leading-snug">{post.title}</h2>
                <p className="text-[#1E3331]/50 text-xs font-light leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                <span className="text-[10px] tracking-widests uppercase text-[#7DA68B] flex items-center gap-1.5 font-medium">
                  Read More <ArrowRight size={11} />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
