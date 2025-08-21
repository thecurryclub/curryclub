import { catalog } from '@/lib/products'
export default function ProductHighlightStrip(){
  const picks = catalog.slice(0, 6)
  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="container py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Popular picks</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">Quick‑serve favourites from our range.</p>
          </div>
          <a href="/products" className="btn btn-outline rounded-2xl">View all</a>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
          {picks.map(p => (
            <a key={p.slug} href={`/products/${p.slug}`} className="rounded-2xl border bg-white overflow-hidden group">
              {p.image ? <img src={p.image} alt={p.name} className="h-40 w-full object-cover group-hover:scale-[1.02] transition-transform" /> : <div className="h-40 bg-gray-100" />}
              <div className="p-4">
                <div className="text-xs text-gray-500">{p.category}</div>
                <div className="mt-1 font-semibold">{p.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
