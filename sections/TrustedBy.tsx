import PartnerMarquee from "@/components/PartnerMarquee";

const LOGOS = [
  { src: "https://thecurry.club/images/partners/partner-01.png", alt: "The Wiltshire" },
  { src: "https://thecurry.club/images/partners/partner-02.png", alt: "Talwar Express" },
  { src: "https://thecurry.club/images/partners/partner-03.png", alt: "Banana Leaf" },
  { src: "https://thecurry.club/images/partners/partner-04.png", alt: "Lemon Pepper" },
  { src: "https://thecurry.club/images/partners/partner-05.png", alt: "The Biryani Club" },
  { src: "https://thecurry.club/images/partners/partner-06.png", alt: "Millennium Hotels and Resorts" },
  { src: "https://thecurry.club/images/partners/partner-07.png", alt: "Biryani Bhai" },
  { src: "https://thecurry.club/images/partners/partner-08.png", alt: "NHS" },
  { src: "https://thecurry.club/images/partners/partner-09.png", alt: "t·h" },
  { src: "https://thecurry.club/images/partners/partner-10.png", alt: "The Cinnamon Lounge" },
] as const;

export default function TrustedBy() {
  return (
    <section aria-labelledby="trusted" className="py-16 md:py-20 bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-6">
          <p className="text-sm uppercase tracking-wide text-gray-500">Trusted by operators and workplaces</p>
        </div>
        <PartnerMarquee logos={LOGOS as any} />
      </div>
    </section>
  );
}