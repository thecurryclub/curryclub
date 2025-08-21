'use client'
import Image from 'next/image'
import { useState } from 'react'
import { cases, type CaseItem } from '@/lib/cases'
import Modal from '@/components/ui/modal'

function Card({c, onOpen}:{c:CaseItem; onOpen:()=>void}){
  return (
    <button onClick={onOpen} className="text-left rounded-2xl overflow-hidden border bg-white group focus:outline-none focus:ring-2 focus:ring-amber-500">
      <Image src={c.hero} alt={c.title} width={800} height={500} className="w-full h-40 object-cover group-hover:scale-[1.02] transition-transform" />
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-amber-700">{c.sector}</p>
        <h3 className="mt-1 font-semibold">{c.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{c.summary}</p>
      </div>
    </button>
  )
}

export default function CaseStudiesClient(){
  const [open, setOpen] = useState<CaseItem | null>(null)
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {cases.map(c => (
          <Card key={c.slug} c={c} onOpen={()=>setOpen(c)} />
        ))}
      </div>
      <Modal open={!!open} onClose={()=>setOpen(null)} title={open?.title}>
        {open && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-soft">{open.sector}</span>
            </div>
            <Image src={open.hero} alt={open.title} width={1200} height={700} className="w-full h-56 object-cover rounded-xl" />
            <p className="text-gray-700">{open.summary}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">Objectives</h4>
                <ul className="list-disc list-inside text-gray-800 mt-2 space-y-1">
                  {open.objectives.map((o,i)=>(<li key={i}>{o}</li>))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Results</h4>
                <ul className="list-disc list-inside text-gray-800 mt-2 space-y-1">
                  {open.results.map((r,i)=>(<li key={i}>{r}</li>))}
                </ul>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="btn btn-primary rounded-2xl" onClick={()=>setOpen(null)}>Close</button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
