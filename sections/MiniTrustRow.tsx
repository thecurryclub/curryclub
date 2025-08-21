export default function MiniTrustRow(){
  const LOGOS = [
    { src: "https://www.thecurry.club/images/partners/partner-01.png", alt: "" },
    { src: "https://www.thecurry.club/images/partners/partner-02.png", alt: "" },
    { src: "https://www.thecurry.club/images/partners/partner-03.png", alt: "" },
    { src: "https://www.thecurry.club/images/partners/partner-04.png", alt: "" },
    { src: "https://www.thecurry.club/images/partners/partner-05.png", alt: "" },
  ];
  return (
    <div className="mt-6 flex items-center justify-center gap-8 opacity-80" aria-label="Trusted by operators and workplaces">
      {LOGOS.slice(0,5).map((l,i)=>(
        <img key={i} src={l.src} alt={l.alt} aria-hidden="true" className="h-8 md:h-10 w-auto" loading="lazy" decoding="async" />
      ))}
    </div>
  );
}