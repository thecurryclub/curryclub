export default function WhyUsGrid(){
  const items = [
    { title: "Chef-less kitchen", body: "Consistent service with minimal training." },
    { title: "Portion-based", body: "Fixed yields, clear allergens, less waste." },
    { title: "Ambient-stable", body: "Shelf life up to ~18 months; simple storage." },
    { title: "Fast service", body: "From pack to plate in under 5 minutes; scales for peaks." },
    { title: "Flexible ownership", body: "Buy, lease or integrate with your setup." },
    { title: "High margins", body: "Reduce labour, prep and wastage." },
    { title: "Dietary-friendly", body: "Vegan and gluten-free SKUs available." },
    { title: "Training & support", body: "Onboarding, SOPs and menu ideas included." },
  ] as const;

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6">
        <p className="text-sm uppercase tracking-wide text-gray-500 text-center">Why choose The Curry Club</p>
        <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-center">Operational wins venues care about</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-base font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-gray-700">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
