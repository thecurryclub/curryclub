
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";

const ROIWidget = dynamic(() => import("../../components/ROIWidget"), { ssr: false });

export const metadata: Metadata = {
  title: "How it works – The Curry Club",
  description: "Serve gourmet curries in under 5 minutes with AI-assisted prep. Three simple steps, minimal kit, and instant ROI for venues."
};

export default function HowItWorksPage() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How The Curry Club works",
    "description": "Three simple steps for venues to serve gourmet curries fast.",
    "totalTime": "PT5M",
    "supply": [
      { "@type": "HowToSupply", "name": "Curry Club sauce pack" },
      { "@type": "HowToSupply", "name": "Protein or vegetables (optional)" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Induction hob or hotplate" },
      { "@type": "HowToTool", "name": "Pan and ladle" },
      { "@type": "HowToTool", "name": "Microwave (optional)" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Add ingredients",
        "itemListElement": [{ "@type": "HowToDirection", "text": "Turn on the station, add Curry Club sauce, proteins, and water." }]
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Simmer",
        "itemListElement": [{ "@type": "HowToDirection", "text": "Close the lid, let it cook for ~3 minutes." }]
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Serve & Enjoy",
        "itemListElement": [{ "@type": "HowToDirection", "text": "Open, garnish, and serve authentic curry." }]
      }
    ]
  };

  return (
    <main className="container mx-auto px-6 py-12 space-y-20">
      {/* HERO */}
      <section aria-labelledby="how-hero" className="text-center">
        <p className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-sm">How it works</p>
        <h1 id="how-hero" className="mt-3 text-4xl font-bold tracking-tight">Chef-less curries in less than 5 minutes</h1>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          Great tasting authentic curries — ready in minutes, no chef required.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/#contact" className="btn btn-primary">Book a Demo</Link>
          <a href="/datasheet.pdf" className="btn btn-secondary">Download Product Sheet</a>
        </div>
      </section>

      {/* 3-STEP JOURNEY */}
      <section aria-labelledby="steps">
        <h2 id="steps" className="text-2xl font-semibold text-center">3 steps to serve gourmet curries</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center">
          <div className="relative flex flex-col items-center">
            <div className="h-20 w-20 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              {/* Placeholder for icon/illustration */}
              <span className="text-xl font-bold">1</span>
            </div>
            <div className="text-lg font-semibold">Add ingredients</div>
            <p className="text-gray-700 mt-2">Turn on the station, add Curry Club sauce, proteins, and water.</p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="h-20 w-20 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <div className="text-lg font-semibold">Simmer</div>
            <p className="text-gray-700 mt-2">Close the lid, let it cook for ~3 minutes.</p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="h-20 w-20 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <div className="text-lg font-semibold">Serve & Enjoy</div>
            <p className="text-gray-700 mt-2">Open, garnish, and serve authentic curry.</p>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-700">All in under 5 minutes, with zero chef dependency.</p>
      </section>

      {/* ROI */}
      <section id="roi" aria-labelledby="roi-title">
        <h2 id="roi-title" className="text-2xl font-semibold">See how fast it pays back</h2>
        <p className="text-gray-700 mt-2 max-w-2xl">Plug in your average portions and price points — the quick model shows payback and margin at your venue.</p>
        <div className="mt-6 rounded-2xl border bg-white p-4">
          <ROIWidget />
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta" className="text-center">
        <h2 id="cta" className="text-2xl md:text-3xl font-semibold">Ready to future‑proof your food service?</h2>
        <p className="text-gray-700 mt-2">See the station live and run the numbers together.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/#contact" className="btn btn-primary">Book a Demo</Link>
          <a href="/datasheet.pdf" className="btn btn-secondary">Download Product Sheet</a>
        </div>
      </section>

      <Script
        id="howto-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
    </main>
  );
}
