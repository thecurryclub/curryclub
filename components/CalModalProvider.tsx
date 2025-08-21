'use client';
import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import CalModal from './CalModal';

type Ctx = { open: () => void; close: () => void; isOpen: boolean; url: string; };
const CalCtx = createContext<Ctx | null>(null);

export function useCalModal(){
  const v = useContext(CalCtx);
  if(!v) throw new Error('useCalModal must be used within CalModalProvider');
  return v;
}

export default function CalModalProvider({ children, calUrl }: { children: ReactNode; calUrl: string; }){
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(()=> ({
    isOpen,
    open: ()=> setIsOpen(true),
    close: ()=> setIsOpen(false),
    url: calUrl
  }), [isOpen, calUrl]);

  return (
    <CalCtx.Provider value={value}>
      {children}
      <CalModal />
    </CalCtx.Provider>
  );
}
