export default function CTA(){
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Bring authentic, consistent curries to your menu</h2>
        <p className="text-gray-600 mt-2">Speak to our team about pilots, pricing and onboarding. UK & EU supply available.</p>
        <p className="text-sm text-amber-800 mt-3">Serve hundreds — with zero extra staff.</p>
        <div className="mt-4 flex gap-3 justify-center">
          <a href="/contact" className="btn btn-primary rounded-2xl">Book a tasting</a>
          <a href="/products" className="btn btn-outline rounded-2xl">Explore products</a>
        </div>
      </div>
    </section>
  )
}
