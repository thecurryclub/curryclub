import Link from 'next/link'
import type { Metadata } from 'next'
import { cases } from '@/lib/cases'

export const revalidate = 3600

export function generateStaticParams(){ return cases.map(c=>({slug:c.slug})) }

export function generateMetadata({ params }:{ params:{slug:string} }): Metadata {
  const c = cases.find(x=>x.slug===params.slug)
  if(!c) return { title: 'Case study not found' }
  return {
    title: `${c.title} – Case Study | The Curry Club`,
    description: c.summary || c.title,
    alternates: { canonical: `/case-studies/${c.slug}` },
    openGraph: {
      title: `${c.title} – The Curry Club`,
      description: c.summary || '',
      images: [{ url: `/api/og?title=${encodeURIComponent(c.title)}&img=${encodeURIComponent(c.hero||'')}`, width:1200, height:630 }]
    }
  }
}

export default function CaseStudy({ params }:{ params:{slug:string} }){
  const c = cases.find(x=>x.slug===params.slug); if(!c) return null
  const others = cases.filter(x=>x.slug!==c.slug).slice(0,2)

  const breadcrumb = {
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item":"https://thecurry.club/"},
      {"@type":"ListItem","position":2,"name":"Case Studies","item":"https://thecurry.club/case-studies"},
      {"@type":"ListItem","position":3,"name":c.title,"item":`https://thecurry.club/case-studies/${c.slug}`}
    ]
  }

  const jsonLd = {
    "@context":"https://schema.org",
    "@type":"CaseStudy",
    "name": c.title,
    "description": c.summary
  }

  return (
    <div className="container py-12 space-y-8">
      <nav className="text-sm text-gray-600"><Link href="/">Home</Link> &raquo; <Link href="/case-studies">Case Studies</Link> &raquo; <span>{c.title}</span></nav>
      <h1 className="text-3xl font-bold">{c.title}</h1>
      <p className="text-gray-700 max-w-2xl">{c.summary}</p>

      <section className="grid md:grid-cols-3 gap-8 mt-6">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">The challenge</h2>
            <p className="text-gray-700">Staffing volatility and inconsistent prep led to variable quality and long ticket times.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Our solution</h2>
            <p className="text-gray-700">We implemented portion‑based sauces and a 3‑step prep flow enabling chef‑less service within minutes.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">The outcome</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Ticket times down by 35–50%</li>
              <li>Training time reduced significantly</li>
              <li>Consistent flavour across venues</li>
            </ul>
          </div>
        </div>
        <aside className="space-y-3">
          <div className="border rounded-xl p-4">
            <p className="font-semibold">Key metrics</p>
            <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
              <li>Prep &lt; 10 mins</li>
              <li>Wastage down</li>
              <li>Staff hours saved</li>
            </ul>
          </div>
          <a href="/contact?ref=case-study" className="btn btn-primary rounded-xl w-full text-center">Talk to us</a>
        </aside>
      </section>

      <div className="mt-12 pt-8 border-t">
        <h2 className="text-xl font-semibold">Related case studies</h2>
        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          {others.map(o => (
            <Link key={o.slug} href={`/case-studies/${o.slug}`} className="block border rounded-xl p-4 hover:shadow-soft transition">
              <p className="font-semibold">{o.title}</p>
              <p className="text-sm text-gray-600 mt-1">{o.summary}</p>
            </Link>
          ))}
        </div>
      </div>

      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
