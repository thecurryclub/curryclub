import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { catalog } from '@/lib/products'

export const revalidate = 3600;

export function generateStaticParams(){ return catalog.map(p => ({ slug: p.slug })); }

export function generateMetadata({ params }:{ params: { slug: string } }): Metadata {
  const p = catalog.find(x => x.slug === params.slug)
  if(!p){ return { title: 'Product not found' } }
  return {
    title: `${p.name} – The Curry Club`,
    description: p.description || `${p.name} from The Curry Club.`,
    openGraph: {
      title: `${p.name} – The Curry Club`,
      description: p.description || '',
      images: [{ url: `/api/og?title=${encodeURIComponent(p.name)}&img=${encodeURIComponent(p.image||'')}`, width: 1200, height: 630 }]
    },
    alternates: { canonical: `/products/${p.slug}` }
  }
}

export default function ProductDetail({ params }: { params: { slug: string } }){
  const p = catalog.find(x => x.slug === params.slug); if(!p) return notFound();

  const breadcrumb = {
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item":"https://thecurry.club/"},
      {"@type":"ListItem","position":2,"name":"Products","item":"https://thecurry.club/products"},
      {"@type":"ListItem","position":3,"name":p.name,"item":`https://thecurry.club/products/${p.slug}`}
    ]
  }
  const productJson = {
    "@context":"https://schema.org",
    "@type":"Product",
    "name": p.name,
    "image": p.image ? [p.image] : undefined,
    "description": p.description || undefined,
    "category": p.category
  }

  return (
    <div className="container py-12">
      <nav className="text-sm text-gray-600"><Link href="/">Home</Link> &raquo; <Link href="/products">Products</Link> &raquo; <span>{p.name}</span></nav>
      <h1 className="text-3xl font-bold mt-4">{p.name}</h1>
      <div className="mt-4 flex flex-col md:flex-row gap-6">
        {p.image && <div className="md:w-1/2"><Image src={p.image} alt={p.alt || p.name} width={800} height={600} className="rounded-2xl object-cover w-full h-auto" /></div>}
        <div className="md:flex-1 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold rounded-full px-3 py-1 bg-amber-100">{p.category}</span>
            {p.ready && <span className="badge badge-soft">Ready in {p.ready}</span>}
            {p.diet && <span className="badge badge-soft">{p.diet}</span>}
          </div>
          {p.description && <p className="text-gray-700">{p.description}</p>}
          <div>
            <h2 className="text-xl font-semibold mt-6">Preparation</h2>
            <ol className="list-decimal list-inside mt-2 text-gray-800 space-y-1">
              <li>Open the pack and pour contents into a pan.</li>
              <li>Add an equal quantity of water and chosen protein/veg.</li>
              <li>Simmer gently for {p.ready} and serve hot.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-6">Serving suggestions</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Pair with steamed rice, naan, or roti.</li>
              <li>Top with fresh coriander and a wedge of lemon.</li>
              <li>Ideal for pubs, cafes, and quick‑serve menus.</li>
            </ul>
          </div>
          <a href={`/contact?ref=product-${p.slug}`} className="btn btn-primary rounded-xl">Request a demo</a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t">
        <h2 className="text-xl font-semibold">Frequently bought together</h2>
        {/* Rendered in earlier implementation; keeping container for spacing */}
      </div>

      <div className="sticky bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t py-3 mt-10">
        <div className="container flex flex-wrap items-center justify-between gap-3">
          <span className="font-medium">Like what you see? Book a tasting or request a demo.</span>
          <a href={`/contact?ref=product-${p.slug}`} className="btn btn-primary rounded-xl">Request a demo</a>
        </div>
      </div>

      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(productJson) }} />
    </div>
  )
}
