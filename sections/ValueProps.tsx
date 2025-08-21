export default function ValueProps(){
  const items = [
    {
      title: "Authentic flavour",
      body: "Regionally-inspired spice blends developed for repeatable, restaurant-level taste.",
    },
    {
      title: "Clean label",
      body: "100% natural ingredients with no added preservatives or artificial additives.",
    },
    {
      title: "Ambient shelf life",
      body: "Pantry-friendly formats to simplify storage and reduce waste across sites.",
    },
    {
      title: "Consistency & control",
      body: "Portion-based packs to standardise yield, speed up service and control food cost.",
    },
  ]
  return (
    <section className="py-14 bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Why operators choose The Curry Club</h2>
        <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border p-5 bg-white hover:shadow-sm transition">
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="text-gray-600 mt-2">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
