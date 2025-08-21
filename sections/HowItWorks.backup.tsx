
export default function HowItWorks(){
  const steps = [
    {
      n: 1,
      title: "Open Contents",
      body: "Open contents, empty in a pan and add equal amounts of water.",
      icon: "/icons/step1.png",
      alt: "Add contents to pan"
    },
    {
      n: 2,
      title: "Heat, add Proteins",
      body: "Bring the pan to heat and add either veggies or proteins and cook.",
      icon: "/icons/step2.png",
      alt: "Heat and add proteins"
    },
    {
      n: 3,
      title: "Ready, Serve",
      body: "Heat until oil separates — the dish is ready to be served.",
      icon: "/icons/step3.png",
      alt: "Ready to serve"
    },
  ];
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">Gourmet curries. Simplified.</h2>
          <p className="text-gray-700 mt-2">Serve in 3 easy steps — no chefs, no stress.</p>
          <p className="text-gray-600 mt-2 max-w-2xl">From authentic flavors to effortless prep, our packs free up staff and cut kitchen time without compromising quality.</p>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mt-3">
          Our recipes drive the delicious flavors of authentic Indian cuisine and help save precious kitchen time for chefs.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border bg-white p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-semibold">{s.n}</div>
                <img src={s.icon} alt={s.alt} className="w-14 h-14" loading="lazy" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-sm mr-3">AI-powered kitchens for the modern venue.</span>
          <a href="/contact" className="btn btn-primary">Book a Demo</a>
        </div>
      </div>
    </section>
  )
}
