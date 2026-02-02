import {
  BackgroundEffects,
  Navbar,
  HeroSection,
  StatsSection,
  FeaturesSection,
  CalculatorSection,
  PricingSection,
  Footer,
} from "@/app/components/landing";

export default function Home() {
  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <BackgroundEffects />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CalculatorSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
