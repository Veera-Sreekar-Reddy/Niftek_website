import AnimatedHero from '@/components/AnimatedHero'
import WhatWeBuildSection from '@/components/WhatWeBuildSection'
import ScrollRevealSection from '@/components/ScrollRevealSection'
import DeliveryProcessSection from '@/components/DeliveryProcessSection'
import LandingServicesOverviewSection from '@/components/LandingServicesOverviewSection'

export default function Home() {
  return (
    <div className="bg-niftek-offwhite">
      {/* Animated Hero Section */}
      <AnimatedHero />
      
      {/* Scroll Reveal Section */}
      <ScrollRevealSection />


       {/* What we build */}
       <WhatWeBuildSection />

      {/* Delivery process */}
      <DeliveryProcessSection />

    </div>
  )
}

