import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ServicesSection } from '@/components/sections/services';
import { WhyUsSection } from '@/components/sections/why-us';
import { BenefitsSection } from '@/components/sections/benefits';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ContactSection />
    </div>
  );
}