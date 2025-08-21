import type { Metadata } from 'next'
import CaseStudiesClient from './case-studies-client'

export const metadata: Metadata = { title: 'Case Studies – The Curry Club', description: 'Real deployments across venues.' }

export default function CaseStudies(){ 
  return (
    <div>
      <nav className="container text-sm text-gray-600 mt-6"><a href="/">Home</a> &raquo; <span>Case Studies</span></nav>
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Case Studies</h1>
        <CaseStudiesClient />
      </section>
    </div>
  )
}
