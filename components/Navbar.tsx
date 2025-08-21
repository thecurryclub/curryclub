'use client';
import Link from 'next/link';
import { useState } from 'react';
import { League_Spartan } from 'next/font/google';

const logoFont = League_Spartan({ subsets: ['latin'], weight: ['700','800'], display: 'swap' });

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-amber-50/80 backdrop-blur border-b border-amber-100">
      <div className="container py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link prefetch href="/" aria-label="The Curry Club home" className="flex items-center gap-2">
          <img src="/logo-cc.png" alt="The Curry Club" className="h-7 w-auto md:h-10" loading="eager" decoding="async" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link prefetch href="/how-it-works">How it works</Link>
          <Link prefetch href="/products">Products</Link>
          <Link prefetch href="/insights">Insights</Link>
          <Link prefetch href="/faqs">FAQs</Link>
          <Link prefetch href="/contact">Contact</Link>
        </nav>

        {/* Right: CTA + burger */}
        <div className="flex items-center gap-3">
          <Link prefetch href="/contact" className="hidden md:inline-flex   btn btn-primary rounded-full" data-book-demo="true">Book a Demo</Link>
          <button aria-label="Toggle menu" onClick={()=>setOpen(v=>!v)} className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2">
            <span className="sr-only">Open menu</span>☰
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div id="mobile-nav" className={`${open ? 'block' : 'hidden'} md:hidden border-t border-amber-100 bg-amber-50`}>
        <div className="container py-3 flex flex-col gap-3 text-sm">
          <Link prefetch href="/how-it-works" onClick={()=>setOpen(false)}>How it works</Link>
          <Link prefetch href="/products" onClick={()=>setOpen(false)}>Products</Link>
          <Link prefetch href="/insights" onClick={()=>setOpen(false)}>Insights</Link>
          <Link prefetch href="/faqs" onClick={()=>setOpen(false)}>FAQs</Link>
          <Link prefetch href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
          <Link prefetch href="/contact" onClick={()=>setOpen(false)} className="hidden md:inline-flex btn btn-primary mt-2 rounded-full w-max" data-book-demo="true">Book a Demo</Link>
        </div>
      </div>
    </header>
  );
}
