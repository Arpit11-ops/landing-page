import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        <ServicesSection />
        <ProcessTimeline />
        <PricingSection />
        <TestimonialsMarquee />
      </main>
      <Footer />
    </>
  );
}
