export default function StatsStrip(){
  const stats = [
    { label: 'Kits ready', value: '5 mins' },
    { label: 'Daal ready', value: '3 mins' },
    { label: 'Shelf life', value: 'Ambient, long' },
    { label: 'Waste', value: 'Near‑zero' },
  ]
  return (
    <section className="border-y bg-white">
      <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map(s => (
          <div key={s.label}>
            <div className="text-2xl font-extrabold">{s.value}</div>
            <div className="text-sm text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
