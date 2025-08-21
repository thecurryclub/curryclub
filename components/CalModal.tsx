'use client';
import { useEffect, useMemo } from 'react';
import { useCalModal } from './CalModalProvider';

export default function CalModal(){
  const { isOpen, close, url } = useCalModal();

  const embedUrl = useMemo(()=>{
    if (typeof window === 'undefined') return url;
    const u = new URL(url);
    u.searchParams.set('utm_source','website');
    u.searchParams.set('utm_medium','modal');
    u.searchParams.set('utm_campaign','book-demo');
    u.searchParams.set('utm_content', window.location.pathname || '/');
    return u.toString();
  }, [url]);

  useEffect(()=>{
    if (isOpen && typeof window !== 'undefined' && (window as any).gtag){
      (window as any).gtag('event','book_demo_open', { page_path: window.location.pathname, page_title: document?.title });
    }
  }, [isOpen]);

  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <button aria-label="Close" onClick={close} className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-x-0 top-10 mx-auto w-[92%] max-w-3xl rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between p-4 md:p-6 border-b">
          <h3 className="text-lg font-semibold">Book a demo</h3>
          <button onClick={close} className="rounded-full border px-3 py-1 text-sm">×</button>
        </div>
        <div className="p-4 md:p-6">
          <iframe title="Cal.com Scheduler" src={embedUrl} className="w-full h-[680px] rounded-xl border" />
          <p className="mt-3 text-xs text-gray-500 text-center">
            Prefer email? <a href="/contact" className="underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
}
