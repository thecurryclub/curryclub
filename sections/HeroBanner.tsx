export default function HeroBanner(){
  const IMGS = [
    "https://thecurry.club/images/home/Curry-01.jpg",
    "https://thecurry.club/images/home/Curry-02.jpg",
    "https://thecurry.club/images/home/Curry-03.jpg",
    "https://thecurry.club/images/home/Curry-04.jpg",
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="container py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-wide text-amber-700">Kitchen-as-a-Service</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">
            Authentic curries. <span className="text-amber-700">Chef‑less.</span> Ready in minutes.
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl">
            Hot gourmet meals in 5 minutes. No kitchen required.
          </p>
          <p className="mt-6 text-sm text-amber-800">Your chef, reinvented by AI.</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a href="/products" className="btn btn-primary rounded-2xl">Explore products</a>
            <a href="/how-it-works" className="btn btn-outline rounded-2xl">See how it works</a>
          </div>
        </div>

        {/* Right: 2×2 hero mosaic */}
        <div className="grid grid-cols-2 gap-4">
          {IMGS.map((u, i) => (
            <img
              key={i}
              src={u}
              alt={`Curry dish ${i+1}`}
              className="w-full h-48 md:h-60 lg:h-72 object-cover rounded-2xl border shadow-soft"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
