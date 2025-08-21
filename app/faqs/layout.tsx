export default function Layout({ children }:{ children: React.ReactNode }){
  return <>{children}<script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context":"https://schema.org","@type":"FAQPage"
  }) }} /></>
}