import { HeroSection } from '../components/HeroSection';
import { BrandsTicker } from '../components/BrandsTicker';
import { ServicesSection } from '../components/ServicesSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { ProcessSection } from '../components/ProcessSection';
import { StatsSection } from '../components/StatsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { AboutSection } from '../components/AboutSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <BrandsTicker />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
