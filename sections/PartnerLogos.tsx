
export default function PartnerLogos(){
  const items = Array.from({length:6}).map((_,i)=>`/partners/partner-${i+1}.svg`);
  return (
    <section className="py-10 bg-white border-y">
      <div className="container">
        <p className="text-sm text-gray-600 mb-4">Trusted by operators and workplaces</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {items.map((src, i) => (
            <div key={i} className="rounded-xl border bg-white flex items-center justify-center h-16">
              <img src={src} alt={`Partner ${i+1}`} className="opacity-80 max-h-8" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
