import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";

const ROIWidget = dynamic(() => import("../../components/ROIWidget"), { ssr: false });

export const metadata: Metadata = {
  title: "How it works – The Curry Club",
  description: "Chef-less curries in less than 5 minutes — three simple steps, minimal kit, instant ROI for venues."
};

type Step = {
  k: string;
  title: string;
  copy: string;
};

const STEPS: Step[] = [
  {
    k: "add",
    title: "Add ingredients",
    copy: "Turn on the station, add Curry Club sauce, proteins, and water."
  },
  {
    k: "simmer",
    title: "Simmer",
    copy: "Close the lid, let it cook for ~3 minutes."
  },
  {
    k: "serve",
    title: "Serve & enjoy",
    copy: "Open, garnish, and serve authentic curry."
  }
];

function PlaceholderIcon({ label }: { label: string }) {
  // Simple inline SVG placeholder so you can swap later with real illustrations
  return (
    <svg viewBox="0 0 120 80" aria-label={label} className="w-full h-24">
      <rect x="2" y="2" width="116" height="76" rx="10" className="fill-gray-50 stroke-gray-300" />
      <path d="M15 55 L45 25 L75 55 L105 35" className="stroke-gray-300 fill-none" strokeWidth="4" />
      <text x="60" y="70" textAnchor="middle" className="fill-gray-400" fontSize="10">{label}</text>
    </svg>
  );
}

export default function HowItWorksPage() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How The Curry Club works",
    "description": "Three simple steps for venues to serve gourmet curries fast.",
    "totalTime": "PT5M",
    "supply": [
      { "@type": "HowToSupply", "name": "Curry Club sauce pack" },
      { "@type": "HowToSupply", "name": "Protein or vegetables (optional)" },
      { "@type": "HowToSupply", "name": "Water" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Induction hob or hotplate" },
      { "@type": "HowToTool", "name": "Pan with lid" }
    ],
    "step": STEPS.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.title,
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": s.copy
      }]
    }))
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

      {/* 3-STEP VISUAL JOURNEY */}
      <section aria-labelledby="steps" className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white"></div>
        <h2 id="steps" className="text-2xl font-semibold text-center">1–2–3: From pack to plate</h2>

        {/* Desktop: horizontal with arrows; Mobile: stacked */}
        <div className="mt-8 flex flex-col md:flex-row md:items-stretch md:justify-center gap-6">
          {STEPS.map((s, idx) => (
            <div key={s.k} className="flex-1">
              <div className="h-full rounded-2xl border bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs uppercase tracking-wide text-gray-500">Step {idx + 1}</div>
                <div className="mt-1 text-lg font-semibold">{s.title}</div>
                <div className="mt-4"><PlaceholderIcon label={s.title} /></div>
                <p className="mt-3 text-gray-700">{s.copy}</p>
              </div>
              {/* Arrow connector for desktop */}
              {idx < STEPS.length - 1 && (
                <div className="hidden md:block md:-mt-10 md:translate-y-1/2">
                  <div className="mx-auto h-10 w-10 rotate-0">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 opacity-70">
                      <path d="M5 12h12M13 6l6 6-6 6" className="stroke-gray-400" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Callout */}
        <p className="mt-6 text-center text-sm text-gray-600">
          All in under 5 minutes, with zero chef dependency.
        </p>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta" className="text-center border rounded-2xl bg-white/60 p-8 shadow-sm">
        <h2 id="cta" className="text-2xl md:text-3xl font-semibold">Ready to future‑proof your food service?</h2>
        <p className="text-gray-700 mt-2">See the station live and run the numbers together.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/#contact" className="btn btn-primary">Book a Demo</Link>
          <a href="/datasheet.pdf" className="btn btn-secondary">Download Product Sheet</a>
        </div>
      </section>

{/* ROI */}
      <section id="roi" aria-labelledby="roi-title">
        <h2 id="roi-title" className="text-2xl font-semibold text-center md:text-left">See how fast it pays back</h2>
        <p className="text-gray-700 mt-2 max-w-2xl text-center md:text-left mx-auto md:mx-0">
          Curious about returns? Try the quick calculator — see payback and margins based on your menu.
        </p>
        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <ROIWidget />
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta" className="text-center border rounded-2xl bg-white/60 p-8 shadow-sm">
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