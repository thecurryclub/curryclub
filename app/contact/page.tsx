'use client'
import { useState } from 'react'

export default function ContactPage(){
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle')
  const [error, setError] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setStatus('sending'); setError('')
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries()) as any
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if(!res.ok) throw new Error('Failed to send')
      setStatus('ok')
      e.currentTarget.reset()
    } catch(err:any){
      setStatus('error')
      setError(err?.message || 'Something went wrong')
    }
  }

  return (
    <main className="py-16 md:py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-gray-500">Contact</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Talk to The Curry Club</h1>
          <p className="mt-3 text-gray-700">Tell us about your venue and we’ll get back within one business day.</p>
        </div>
        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border bg-white p-6 shadow-sm">
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium">Name</label><input required name="name" className="mt-1 w-full rounded-lg border px-3 py-2" /></div>
            <div><label className="block text-sm font-medium">Email</label><input required name="email" type="email" className="mt-1 w-full rounded-lg border px-3 py-2" /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium">Phone</label><input name="phone" className="mt-1 w-full rounded-lg border px-3 py-2" /></div>
            <div><label className="block text-sm font-medium">Venue type</label><select name="venue" className="mt-1 w-full rounded-lg border px-3 py-2"><option>Office</option><option>Hotel</option><option>Pub</option><option>Event</option><option>Other</option></select></div>
          </div>
          <div><label className="block text-sm font-medium">Message</label><textarea required name="message" rows={5} className="mt-1 w-full rounded-lg border px-3 py-2" /></div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">We’ll only use your details to contact you about your enquiry.</p>
            <button disabled={status==='sending'} className="btn btn-primary">{status==='sending' ? 'Sending…' : 'Send message'}</button>
          </div>
          {status==='ok' && <div className="rounded-lg bg-green-50 text-green-700 px-4 py-2">Thanks! We’ll be in touch shortly.</div>}
          {status==='error' && <div className="rounded-lg bg-red-50 text-red-700 px-4 py-2">Couldn’t send: {error}</div>}
        </form>
      </div>
    </main>
  )
}
