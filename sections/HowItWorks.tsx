export default function HowItWorks() {
  const steps = [
    { title: "Add ingredients", copy: "Sauce + protein/veg into the pan." },
    { title: "Simmer",         copy: "About 3 minutes until piping hot." },
    { title: "Serve & enjoy",  copy: "Plate, garnish, done." }
  ];

  return (
    <section aria-labelledby="how-title" className="py-16 md:py-20">
      <div className="container-max">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-gray-500">How it works</p>
          <h2 id="how-title" className="mt-2 text-2xl md:text-3xl font-semibold">
            Chef-less curries in under 5 minutes
          </h2>
          <p className="mt-2 text-gray-700">
            Three simple steps, no kitchen drama.
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <li
              key={i}
              className="relative rounded-2xl border bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full border bg-white flex items-center justify-center text-sm font-semibold">
                {i + 1}
              </div>
              <div className="mt-4 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-gray-700">{s.copy}</p>
            </li>
          ))}
        </ol>

        {/* Callout */}
        <p className="mt-6 text-center text-sm text-gray-600">
          All in under 5 minutes—no chef required.
        </p>
      </div>
    </section>
  );
}