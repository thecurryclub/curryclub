'use client';
import * as React from 'react';

type ModalProps = { open: boolean; onClose: () => void; children: React.ReactNode; title?: string; };

export default function Modal({open,onClose,children,title}:ModalProps){
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(()=>{
    if(!open) return;
    const onKey = (e: KeyboardEvent) => { if(e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  React.useEffect(()=>{
    if (open) {
      const el = ref.current?.querySelector<HTMLElement>('[data-autofocus]');
      el?.focus();
    }
  }, [open]);

  if(!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="fixed inset-0 z-50">
      <button className="absolute inset-0 bg-black/40" aria-label="Close" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div ref={ref} className="w-full max-w-2xl rounded-2xl bg-white shadow-lg outline-none">
          <div className="flex items-center justify-between px-5 py-3 border-b">
            <h3 id="dialog-title" className="font-semibold">{title}</h3>
            <button onClick={onClose} className="p-1" aria-label="Close">✕</button>
          </div>
          <div className="p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
