
import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const ROIWidget = dynamic(() => import("../../components/ROIWidget"), { ssr: false });

export const metadata: Metadata = {
  title: "How it works – The Curry Club",
  description: "Serve gourmet curries in 5 minutes with AI-powered stations — no chefs, no kitchen build, no stress."
};

export default function HowItWorks() {
  const benefits = [
    { h: "↓ Up to 70% staffing costs", p: "Operate with minimal staff; zero specialist training required." },
    { h: "200 meals/hour", p: "Scale service for peaks and events without extra hires." },
    { h: "No kitchen build", p: "Deploy without hoods or specialist equipment in existing spaces." },
    { h: "Consistent quality", p: "Automated timing ensures repeatable results across shifts." },
    { h: "Compact footprint", p: "Countertop or cart‑mounted; small BOH areas work great." },
    { h: "Menu variety", p: "Multiple regional curry bases; veggie & protein options." },
  ];

  const steps = [
    { n: 1, title: "Open Contents", desc: "Open contents, empty in a pan and add equal amounts of water.", icon: "/icons/step1.png", alt: "Open & add contents" },
    { n: 2, title: "Heat, add Proteins", desc: "Bring the pan to heat and add either veggies or proteins and cook.", icon: "/icons/step2.png", alt: "Heat and add proteins" },
    { n: 3, title: "Ready, Serve", desc: "Heat until oil separates — the dish is ready to be served.", icon: "/icons/step3.png", alt: "Ready to serve" },
  ];

  const reqs = [
    { h: "Power", p: "Standard 13A outlet (UK) or equivalent. Low energy draw per station." },
    { h: "Space", p: "Approx. 0.6–0.8m² per station; countertop or cart‑mounted." },
    { h: "Compliance", p: "Food‑safe packs; HACCP‑friendly handling and traceability." },
  ];

  const models = [
    { h: "Self‑serve kiosk", p: "Front‑of‑house station for staff cafés and offices with minimal supervision." },
    { h: "Counter service", p: "Bar or café counter; staff trigger cooks and serve at POS." },
    { h: "Back‑of‑house", p: "Centralized prep; plate & pass — ideal for hotels and events." },
  ];

  return (
    <main className="container mx-auto px-4 py-12 space-y-16">
      {/* HERO */}
      <section id="hero" className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Serve gourmet curries in 5 minutes.</h1>
        <p className="text-lg text-gray-700 mt-3">No chefs. No kitchen build. No stress.</p>
        <p className="text-gray-600 mt-3">AI‑powered cooking stations built for venues at scale.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/#contact" className="btn btn-primary">Book a Demo</Link>
          <a href="#roi" className="btn btn-secondary">Estimate ROI</a>
        </div>
      </section>

      {/* BENEFITS (moved up) */}
      <section id="benefits">
        <div className="text-center mb-6">
          <div className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-sm">Why venues choose us</div>
          <h2 className="text-3xl font-bold mt-3">Key benefits</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6">
              <div className="text-lg font-semibold">{b.h}</div>
              <p className="text-gray-700 mt-2">{b.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI (moved up) */}
      <section id="roi">
        <div className="text-center mb-6">
          <div className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-sm">ROI snapshot</div>
          <h2 className="text-3xl font-bold mt-3">See how fast it pays back</h2>
          <p className="text-gray-700 mt-2">Use the slider to estimate monthly revenue and gross profit for your venue.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ROIWidget />
        </div>
      </section>

      {/* STEPS */}
      <section id="steps">
        <div className="text-center mb-6">
          <div className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-sm">How it works</div>
          <h2 className="text-3xl font-bold mt-3">Three simple steps</h2>
          <p className="text-gray-600 mt-2">From authentic flavors to effortless prep — no chefs, no stress.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border bg-white p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-semibold">{s.n}</div>
                <img src={s.icon} alt={s.alt} className="w-14 h-14" loading="lazy" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-700 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-sm">Your chef, reinvented by AI.</span>
          <Link href="/#contact" className="btn btn-primary">Talk to Sales</Link>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Operational requirements</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reqs.map((r, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6">
              <div className="text-lg font-semibold">{r.h}</div>
              <p className="text-gray-700 mt-2">{r.p}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-3 text-center">Ventilation needs depend on local regs and station placement; we’ll advise during site survey.</p>
      </section>

      {/* MODELS */}
      <section id="models">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Fits any venue setup</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6">
              <div className="text-lg font-semibold">{m.h}</div>
              <p className="text-gray-700 mt-2">{m.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      {/* FINAL CTA */}
      <section id="final-cta" className="text-center">
        <div className="rounded-2xl border bg-white p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Ready to future‑proof your food service?</h2>
          <p className="text-gray-700 mt-2">See the station live and run the numbers together.</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link href="/#contact" className="btn btn-primary">Book a Demo</Link>
            <a href="/datasheet.pdf" className="btn btn-secondary">Download Product Sheet</a>
          </div>
        </div>
      </section>
    </main>
  );
}
