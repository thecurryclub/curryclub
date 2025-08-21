'use client'
import Link from "next/link";
import dynamic from "next/dynamic";

const ROIWidget = dynamic(() => import("@/components/ROIWidget"), { ssr: false });

function StepIconAdd() {
  return (
    <svg viewBox="0 0 48 48" className="mx-auto h-10 w-10" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="none" stroke="#F59E0B" strokeWidth="2" />
      <path d="M12 28c4-4 12-4 16 0c4-4 8-4 12 0" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="18" cy="18" r="2" fill="#F59E0B"/>
      <circle cx="24" cy="16" r="2" fill="#F59E0B"/>
      <circle cx="30" cy="18" r="2" fill="#F59E0B"/>
    </svg>
  );
}
function StepIconSimmer() {
  return (
    <svg viewBox="0 0 48 48" className="mx-auto h-10 w-10" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="none" stroke="#F59E0B" strokeWidth="2" />
      <path d="M14 30h20" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 18c2 2 2 4 0 6M24 18c2 2 2 4 0 6M30 18c2 2 2 4 0 6" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function StepIconServe() {
  return (
    <svg viewBox="0 0 48 48" className="mx-auto h-10 w-10" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="none" stroke="#F59E0B" strokeWidth="2" />
      <path d="M12 30h24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 28c2-6 14-6 16 0" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="20" r="2" fill="#F59E0B"/>
    </svg>
  );
}

export default function HowItWorksPage() {
  const steps = [
    { t: "Add ingredients", c: "Sauce + protein/veg into the pan." },
    { t: "Simmer",          c: "About 3 minutes until piping hot." },
    { t: "Serve & enjoy",   c: "Plate, garnish, done." }
  ] as const;

  return (
    <main className="space-y-0">
      {/* HERO */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-wide text-gray-500">How it works</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Chef-less curries in under 5 minutes</h1>
            <p className="mt-3 text-gray-700">Three simple steps, no kitchen drama.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="/#contact" className="btn btn-primary">Book a demo</Link>
              <a href="/datasheet.pdf" className="btn btn-secondary">Download product sheet</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 STEPS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-sm uppercase tracking-wide text-gray-500">Steps</p>
          <h2 className="text-2xl md:text-3xl font-semibold">From pack to plate in 3 easy steps</h2>
          <p className="mt-2 text-gray-700">A fast, repeatable workflow.</p>
        </div>
        <div className="container mx-auto max-w-7xl px-6">
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <li key={i} className="relative rounded-2xl border bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full border bg-white flex items-center justify-center text-sm font-semibold">
                  {i + 1}
                </div>
                {i===0 && <StepIconAdd />} {i===1 && <StepIconSimmer />} {i===2 && <StepIconServe />}
                <div className="mt-3 text-lg font-semibold">{s.t}</div>
                <p className="mt-2 text-gray-700">{s.c}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-center text-sm text-gray-600">All in under 5 minutes—no chef required.</p>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-sm uppercase tracking-wide text-gray-500">Outcomes</p>
          <h2 className="text-2xl md:text-3xl font-semibold">What you can expect</h2>
        </div>
        <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["~9–11 min", "Average ticket time (single ring)"],
            ["2–3× faster", "Batching during rush"],
            ["No chef", "Any trained team member can operate"]
          ].map(([n,l],i)=>(
            <div key={i} className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <div className="text-2xl font-bold">{n}</div>
              <p className="text-gray-700 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI */}
      <section id="roi" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">See your ROI</h2>
          <p className="text-gray-700 mt-2 max-w-2xl text-center mx-auto md:mx-0">
            Curious about returns? Try the quick calculator — see payback and margins based on your menu.
          </p>
          <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
            <ROIWidget />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Ready to future-proof your food service?</h2>
          <p className="text-gray-700 mt-2">See the station live and run the numbers together.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/#contact" className="btn btn-primary">Book a demo</Link>
            <a href="/datasheet.pdf" className="btn btn-secondary">Download product sheet</a>
          </div>
        </div>
      </section>
    </main>
  );
}
