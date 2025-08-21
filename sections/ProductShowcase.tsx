export default function ProductShowcase(){
  const cards = [
    {
      title: "Daal",
      href: "/products#Daal",
      img: "https://thecurry.club/images/Dal-Tadka.jpg",
      blurb: "Ready-to-eat classics in ~3 mins."
    },
    {
      title: "Curry Kits",
      href: "/products#Curry%20Kits",
      img: "https://thecurry.club/images/butter-curry.jpg",
      blurb: "Portion-based sauces. Ready in ~5 mins."
    },
    {
      title: "Biryanis",
      href: "/products#Biryanis",
      img: "https://thecurry.club/images/hyd-biryani.jpg",
      blurb: "Fragrant layered rice, ready fast."
    },
  ]
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Our products</h2>
          <a className="text-amber-700 underline" href="/products">Browse all</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cards.map(c => (
            <a key={c.title} href={c.href} className="group rounded-2xl overflow-hidden border bg-white hover:shadow-sm transition">
              <div className="relative aspect-[16/10]">
                <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{c.title}</h3>
                  <span className="text-amber-700 group-hover:translate-x-1 transition">Explore →</span>
                </div>
                <p className="text-gray-600 mt-1">{c.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
