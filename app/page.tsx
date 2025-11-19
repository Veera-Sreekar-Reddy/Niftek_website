import AnimatedHero from '@/components/AnimatedHero'
import ScrollRevealSection from '@/components/ScrollRevealSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectShowcaseSection from '@/components/ProjectShowcaseSection'
import AIServicesSection from '@/components/AIServicesSection'

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
      
      {/* AI Services Section */}
      <AIServicesSection />
    </div>
  )
}

