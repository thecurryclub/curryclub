import Link from 'next/link';

type Sector = { label: string; href: string; hasCase?: boolean };

const sectors: Sector[] = [
  { label: 'Theaters', href: '/case-studies' },
  { label: 'Cinemas', href: '/case-studies' },
  { label: 'Padel & Tennis Clubs', href: '/case-studies' },
  { label: 'Golf Clubs', href: '/case-studies/golf-club-pro-shop', hasCase: true },
  { label: 'Night Club/Bar', href: '/case-studies' },
  { label: 'Stadiums', href: '/case-studies/stadium-concessions', hasCase: true },
  { label: 'Catering Companies', href: '/case-studies' },
  { label: 'Cafes', href: '/case-studies' },
  { label: 'Restaurants', href: '/case-studies' },
  { label: 'Hotels', href: '/case-studies/business-hotel', hasCase: true },
];

export default function SectorsStrip(){
  return (
    <section className="py-16 md:py-20 bg-gray-50 bg-amber-900 text-white">
      <div className="container py-12">
        <p className="text-xs uppercase tracking-wider text-amber-200">Now Supporting</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold">Explore success stories from venues using The Curry Club</h2>
        <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {sectors.map(s => (
            <Link
              key={s.label}
              href={s.href}
              className="group rounded-2xl border border-white/50 hover:border-white bg-transparent hover:bg-white/10 px-4 py-3 flex flex-col items-start gap-1 transition"
              aria-label={`${s.label}${s.hasCase ? ' case study' : ''}`}
            >
              <span className="font-semibold tracking-wide">{s.label}</span>
              <span className="text-xs inline-flex items-center gap-1 rounded-full border border-white/40 px-2 py-0.5">
                Case Study{!s.hasCase ? 's' : ''}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
