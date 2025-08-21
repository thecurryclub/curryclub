'use client';
import { useState, useEffect } from 'react';
const testimonials = [
  { quote: 'Set-up was fast and quality is consistent across shifts. Serve in under 5 minutes.', author: 'Ops Manager, UK Pub Group' },
  { quote: 'Chef-less model reduced training time and cut wastage.', author: 'Catering Lead, University Venue' },
  { quote: 'Authentic sauces that scale perfectly for events.', author: 'Concessions Manager, Stadium' },
];
export default function Testimonials(){
  const [i,setI] = useState(0);
  useEffect(()=>{ const id = setInterval(()=> setI(v => (v+1)%testimonials.length), 5000); return ()=> clearInterval(id); },[]);
  const t = testimonials[i];
  return (
    <section className="py-16 bg-amber-50">
      <div className="container max-w-3xl text-center">
        <div className="text-amber-700 text-xl">★★★★★</div>
        <p className="text-xl md:text-2xl font-semibold mt-2">"{t.quote}"</p>
        <p className="text-sm text-gray-600 mt-2">— {t.author}</p>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
          {testimonials.slice(0,3).map((_,idx)=>(
            <button key={idx} onClick={()=>setI(idx)} aria-label={`Go to ${idx+1}`} className={`h-2 w-2 rounded-full ${idx===i ? 'bg-amber-700' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
