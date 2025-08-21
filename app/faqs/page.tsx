
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs – The Curry Club",
  description: "Answers about operations, products, setup, and ROI for venues."
};

// Single source of truth: categories array
// Injected types & data from v6.5.2
type QAItem = { q: string; a: string }
type Section = { id: string; title: string; items: QAItem[] }
const SECTIONS: Section[] = [
  { id: 'service', title: 'Service & Setup', items: [
    { q: 'Do I need a chef?', a: 'No. Our system is designed to be chef‑less. A trained team member can prep, simmer and serve consistent portions using portion‑based packs.' },
    { q: 'What equipment is required?', a: 'Standard hobs/induction, pans and basic utensils are sufficient. For volume, hot‑holding is supported.' },
    { q: 'How fast is service?', a: 'Most dishes are ready in 8–10 minutes. Batch prep reduces ticket times during peaks.' },
    { q: 'Can you support pop‑ups or events?', a: 'Yes. We provide pilot menus, yield guidance and operational playbooks.' },
  ]},
  { id: 'products', title: 'Products & Nutrition', items: [{ q: 'Are there vegetarian or vegan options?', a: 'Yes. Many lines are vegetarian and several are vegan. Check dietary tags on product pages and confirm with technical datasheets.' },
    { q: 'How spicy are the dishes?', a: 'Each product is labelled Mild, Medium or Hot. You can adjust heat by adding chilli or balancing with cream/coconut.' },
    { q: 'What menu options do you offer? Are they allergen-friendly?', a: 'We offer a range of regional curry bases (e.g., tikka, korma, madras) which can be paired with proteins or vegetables. All packs include clear allergen labelling and we provide vegetarian and gluten‑free options. Portion‑controlled packs reduce waste and simplify inventory.' }
]},
  { id: 'allergens', title: 'Allergens & Compliance', items: [
    { q: 'How are allergens handled?', a: 'Allergens are listed on pack labels and datasheets. Operators must follow venue procedures for storage, segregation and signage.' },
    { q: 'Do you provide nutritional info?', a: 'Yes—upon request via our technical sheets. Always verify before publishing menus.' },
  ]},
  { id: 'storage', title: 'Storage & Shelf Life', items: [
    { q: 'Do packs require refrigeration?', a: 'No. Packs are ambient‑stable unless otherwise stated. Store in a cool, dry place.' },
    { q: 'What is the shelf life?', a: 'Up to ~18 months from manufacture. Use by the date on each pack.' },
  ]},
  { id: 'ordering', title: 'Ordering & Delivery', items: [
    { q: 'What are the lead times?', a: 'Standard processing is 1–3 business days after order confirmation and cleared funds. Bulk orders may vary.' },
    { q: 'Is there a minimum order quantity (MOQ)?', a: 'MOQs may apply by product and packaging format. We’ll confirm during quoting.' },
    { q: 'Do you ship internationally?', a: 'UK & EU supply is available. International shipments are assessed case‑by‑case with appropriate documentation.' },
    { q: 'How do I start a pilot?', a: 'Contact us via the form—our team will arrange samples, onboarding and training materials.' },
  ]},
];
const categories = SECTIONS;

export default function FAQsPage(){
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold">FAQs</h1>
      <p className="text-gray-700 mt-2 mb-8">Everything venues ask us about operations, setup, and products.</p>

      <div className="space-y-10">
        {categories.map(cat => (
          <section key={cat.id} aria-labelledby={`faq-${cat.id}`}>
            <h2 id={`faq-${cat.id}`} className="text-2xl font-semibold">{cat.title}</h2>
            <div className="mt-4 divide-y divide-gray-200 rounded-xl border bg-white text-black">
              {cat.items.map((it, idx) => (
                <details key={idx} className="group p-5">
                  <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                    <span>{it.q}</span>
                    <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="mt-3 text-gray-700">{it.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
