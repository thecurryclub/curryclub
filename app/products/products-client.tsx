'use client';

import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type SpiceLevel = 'Mild' | 'Medium' | 'Hot';

type InitialState = { q: string; heat: string; cat: string };
type Props = { initial: InitialState; catalog: any[] };

function SpiceIndicator({ level }: { level: SpiceLevel }) {
  const cls = level === 'Hot' ? 'bg-red-100 text-red-800' : level === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800';
  return <span className={`text-xs px-2 py-0.5 rounded-full border ${cls}`}>{level}</span>;
}

export default function ProductsClient({ initial, catalog }: Props): JSX.Element {
  const sp = useSearchParams();
  const [query, setQuery] = useState<string>(initial?.q ?? '');
  const [heatFilter, setHeatFilter] = useState<string>(initial?.heat ?? 'All');
  const [catFilter, setCatFilter] = useState<string>(initial?.cat ?? 'All Categories');
  const [selected, setSelected] = useState<any | null>(null);

  useEffect(() => {
    if (!sp) return;
    const q = sp.get('q') ?? '';
    const heat = sp.get('heat') ?? 'All';
    const cat = sp.get('cat') ?? 'All Categories';
    setQuery(q);
    setHeatFilter(heat);
    setCatFilter(cat);
  }, [sp]);

  const products = useMemo(() => {
    return (Array.isArray(catalog) ? catalog : []).map((p: any) => ({
      slug: p?.slug ?? '',
      name: p?.name ?? '',
      description: p?.description ?? '',
      image: p?.image ?? '',
      heat: (p?.heat ?? 'Mild') as SpiceLevel,
      tags: Array.isArray(p?.tags) ? p.tags : p?.tags ? [p.tags] : [],
      diet: Array.isArray(p?.diet) ? p.diet : p?.diet ? [p.diet] : [],
      allergens: Array.isArray(p?.allergens) ? p.allergens : p?.allergens ? [p.allergens] : [],
      category: p?.category ?? '',
    }));
  }, [catalog]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.category && set.add(p.category));
    return ['All Categories', ...Array.from(set).sort()];
  }, [products]);

  const filtered = useMemo(() => {
    const q = (query || '').trim().toLowerCase();
    return products.filter((p) => {
      const matchesQuery =
        !q ||
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.tags.join(' ').toLowerCase().includes(q)) ||
        (p.diet.join(' ').toLowerCase().includes(q));
      const matchesHeat = heatFilter === 'All' || (p.heat && p.heat.toLowerCase() === heatFilter.toLowerCase());
      const matchesCat = catFilter === 'All Categories' || (p.category && p.category.toLowerCase() === catFilter.toLowerCase());
      return matchesQuery && matchesHeat && matchesCat;
    });
  }, [products, query, heatFilter, catFilter]);

  return (
    <div className="container mx-auto max-w-7xl px-6 py-10">
      <header className="mb-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold">Products</h1>
        <p className="text-gray-700 mt-2">A selection of our most popular curries. Filter and click a card for details.</p>
      </header>
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-6">
        <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full md:w-72 rounded-lg border px-3 py-2" placeholder="Search products…" aria-label="Search products" />
        <div className="inline-flex rounded-full border bg-white overflow-hidden">
          {['All', 'Mild', 'Medium', 'Hot'].map((opt) => (
            <button key={opt} onClick={() => setHeatFilter(opt)} className={'px-4 py-2 text-sm ' + (heatFilter === opt ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-50')} aria-pressed={heatFilter === opt}>{opt}</button>
          ))}
        </div>
        <div className="inline-flex rounded-full border bg-white overflow-hidden">
          <select value={catFilter} onChange={(e) => setCatFilter(e.target.value)} className="px-4 py-2 text-sm bg-white" aria-label="Filter by category">
            {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p, idx) => (
            <button key={p.slug || idx} className="text-left block border rounded-xl p-4 hover:shadow-soft transition bg-white" onClick={() => setSelected(p)} aria-label={`View ${p.name || 'product'} details`}>
              {p.image ? (<div className="mb-3"><Image src={p.image} alt={p.name || 'Product image'} width={640} height={420} className="w-full h-40 object-cover rounded-lg" unoptimized /></div>) : null}
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold">{p.name || 'Untitled'}</h3>
                <SpiceIndicator level={(p.heat as SpiceLevel) || 'Mild'} />
              </div>
              <p className="text-sm text-gray-600 mt-1 min-h-10">{p.description || ''}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 min-h-8">
                {[...(p.tags || []), ...(p.diet || [])].map((t: string, i: number) => (<span key={i} className="text-xs rounded-full border px-2 py-0.5 bg-white">{t}</span>))}
              </div>
              {p.slug && (<div className="mt-3"><Link href={`/products/${p.slug}`} className="text-sm text-amber-700 hover:underline" onClick={(e) => e.stopPropagation()}>View full details →</Link></div>)}
            </button>
          ))}
          {filtered.length === 0 && (<p className="text-gray-500">No products match your filters.</p>)}
        </div>
        <aside className="lg:col-span-1">
          <div className="sticky top-20 rounded-2xl border bg-white p-5 shadow-sm">
            {!selected ? (<div className="text-gray-600 text-sm">Select a product to see details here.</div>) : (
              <div>
                {selected.image ? (<Image src={selected.image} alt={selected.name || 'Product image'} width={800} height={600} className="w-full h-48 object-cover rounded-lg" unoptimized />) : null}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <h3 className="font-semibold">{selected.name || 'Untitled'}</h3>
                  <SpiceIndicator level={selected.heat || 'Mild'} />
                </div>
                <p className="text-gray-700 mt-2">{selected.description || ''}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {[...(selected.tags || []), ...(selected.diet || [])].map((t: string, i: number) => (<span key={i} className="text-xs rounded-full border px-2 py-0.5 bg-white">{t}</span>))}
                </div>
                {selected.slug && (<div className="mt-4"><Link href={`/products/${selected.slug}`} className="inline-flex items-center rounded-lg bg-amber-600 text-white px-3 py-2 hover:bg-amber-700">View full details</Link></div>)}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
