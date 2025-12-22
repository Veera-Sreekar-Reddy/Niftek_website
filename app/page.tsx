import AnimatedHero from '@/components/AnimatedHero'
import ScrollRevealSection from '@/components/ScrollRevealSection'
import ServicesSection from '@/components/ServicesSection'
import LandingServicesOverviewSection from '@/components/LandingServicesOverviewSection'
import ProjectShowcaseSection from '@/components/ProjectShowcaseSection'

export default function Home() {
  return (
    <div className="bg-niftek-offwhite">
      {/* Animated Hero Section */}
      <AnimatedHero />
      
      {/* Scroll Reveal Section */}
      <ScrollRevealSection />
      
      {/* Services Section */}
      <ServicesSection />

      
      {/* Project Showcase Section */}
      <ProjectShowcaseSection />

      {/* All Services Overview (from Services page) */}
      <LandingServicesOverviewSection />
    </div>
  )
}

