import Image from "next/image";
export default function Footer(){
  return (
    <footer className="border-t border-amber-100 bg-amber-50 mt-16">
      <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div className="md:col-span-1 space-y-4">
          <Image alt="The Curry Club" loading="lazy" width={120} height={30} src="/logo-footer.png" />
          <p className="text-gray-600 max-w-xs">Chef‑less curries for venues. Consistent, fast, and delicious.</p>
        </div>

        <div>
          <p className="font-semibold text-gray-800 mb-2">Explore</p>
          <ul className="space-y-1 text-gray-700">
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/faqs" className="hover:underline">FAQs</a></li>
            <li><a href="/case-studies" className="hover:underline">Case Studies</a></li>
            <li><a href="/news" className="hover:underline">News</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-gray-800 mb-2">Legal</p>
          <ul className="space-y-1 text-gray-700">
            <li><a href="/legal/terms-of-service" className="hover:underline">Terms of Service</a></li>
            <li><a href="/legal/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</a></li>
            <li><a href="/legal/shipping" className="hover:underline">Shipping Policy</a></li>
            <li><a href="/legal/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-gray-800 mb-2">Contact</p>
          <ul className="space-y-1 text-gray-700">
            <li><a href="mailto:hello@thecurry.club" className="hover:underline">hello@thecurry.club</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-amber-100">
        <div className="container py-4 text-xs text-gray-600 text-center">&copy; {new Date().getFullYear()} The Curry Club. All rights reserved.</div>
      </div>
    </footer>
  );
}
