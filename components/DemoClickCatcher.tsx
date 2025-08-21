'use client';
import { useEffect } from 'react';
import { useCalModal } from './CalModalProvider';

/** Intercepts clicks on any element that looks like a "Book a Demo" button or has data-book-demo */
export default function DemoClickCatcher(){
  const { open } = useCalModal();

  useEffect(()=>{
    function handler(e: MouseEvent){
      const target = e.target as HTMLElement | null;
      if(!target) return;
      // Find nearest clickable ancestor
      const el = target.closest('a,button') as HTMLElement | null;
      if(!el) return;
      const text = (el.textContent || '').trim().toLowerCase();
      const matchText = text === 'book a demo' || text.startsWith('book a demo');
      const matchAttr = el.hasAttribute('data-book-demo') || el.getAttribute('href') === '/book-a-demo';
      if(matchText || matchAttr){
        // Don't hijack if user is opening in new tab
        if((e as any).metaKey || (e as any).ctrlKey || el.getAttribute('target') === '_blank') return;
        e.preventDefault();
        open();
      }
    }
    document.addEventListener('click', handler);
    return ()=> document.removeEventListener('click', handler);
  }, [open]);

  return null;
}
