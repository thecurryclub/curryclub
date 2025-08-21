import Link from 'next/link'
import type { Metadata } from 'next'
import { posts } from '@/lib/news'

export const metadata: Metadata = { title: 'News – The Curry Club', description: 'Updates, how‑tos, and announcements.' }

export default function NewsIndex(){
  return (
    <div className="container py-12 space-y-6">
      <nav className="text-sm text-gray-600"><Link href="/">Home</Link> &raquo; <span>News</span></nav>
      <h1 className="text-3xl font-bold">News</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {posts.map(p => (
          <Link key={p.slug} href={`/news/${p.slug}`} className="block border rounded-xl p-5 hover:shadow-soft transition">
            <p className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</p>
            <h2 className="font-semibold mt-1">{p.title}</h2>
            <p className="text-gray-700 mt-1">{p.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
