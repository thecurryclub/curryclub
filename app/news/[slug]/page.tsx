import Link from 'next/link'
import type { Metadata } from 'next'
import { posts } from '@/lib/news'

export function generateStaticParams(){ return posts.map(p=>({slug:p.slug})) }
export function generateMetadata({ params }:{ params:{ slug:string } }): Metadata {
  const p = posts.find(x=>x.slug===params.slug)
  if(!p) return { title: 'News not found' }
  return { title: `${p.title} – News`, description: p.summary, alternates:{ canonical: `/news/${p.slug}` } }
}

export default function NewsDetail({ params }:{ params:{ slug:string } }){
  const p = posts.find(x=>x.slug===params.slug); if(!p) return null;
  const jsonLd = { "@context":"https://schema.org","@type":"NewsArticle","headline":p.title,"datePublished":p.date,"author":{"@type":"Person","name":p.author} }
  return (
    <div className="container py-12 space-y-6">
      <nav className="text-sm text-gray-600"><Link href="/">Home</Link> &raquo; <Link href="/news">News</Link> &raquo; <span>{p.title}</span></nav>
      <h1 className="text-3xl font-bold">{p.title}</h1>
      <p className="text-gray-500 text-sm">{new Date(p.date).toLocaleDateString()} — {p.author}</p>
      <div className="prose max-w-none">
        <p>{p.summary}</p>
        <p>We’ll share more details soon. Meanwhile, explore our <Link href="/case-studies" className="text-amber-700 underline">case studies</Link> or <Link href="/products" className="text-amber-700 underline">products</Link>.</p>
              {(p as any).url && (
          <p className="mt-4"><a href={(p as any).url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-amber-700 underline">Read the original source →</a></p>
        )}
      </div>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
