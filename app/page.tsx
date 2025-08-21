import HowItWorks from '@/sections/HowItWorks'
import ValueProps from '@/sections/ValueProps'
import HeroBanner from '@/sections/HeroBanner'
import WhyUsGrid from '@/sections/WhyUsGrid'
import ProductHighlightStrip from '@/sections/ProductHighlightStrip'
import Testimonials from '@/sections/Testimonials'
import CTA from '@/sections/CTA'
import SectorsStrip from '@/sections/SectorsStrip'
import TrustedBy from "@/sections/TrustedBy";
import StickyCTA from "@/components/StickyCTA";

export default function Page(){
  return (<> 
      <StickyCTA />
<HeroBanner />
  <TrustedBy />
  <WhyUsGrid />
  <Testimonials />
  <HowItWorks />
  <ProductHighlightStrip />
  <SectorsStrip />
  <ValueProps />
  <CTA />
</>
)

}