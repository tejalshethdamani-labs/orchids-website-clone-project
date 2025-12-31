import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import SponsorTicker from "@/components/sections/sponsor-ticker";
import FeaturesSticky from "@/components/sections/features-sticky";
import SolutionProcess from "@/components/sections/solution-process";
import MetricsVenn from "@/components/sections/metrics-venn";
import ClarityControlSection from "@/components/sections/clarity-control";
import MobileAppShowcase from "@/components/sections/mobile-app-showcase";
import IntegrationsDark from "@/components/sections/integrations-dark";
import FAQAccordion from "@/components/sections/faq";
import CtaFooter from "@/components/sections/cta-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <SponsorTicker />
        <MobileAppShowcase />
        <FeaturesSticky />
        <SolutionProcess />
        <MetricsVenn />
        <ClarityControlSection />
        <IntegrationsDark />
        <FAQAccordion />
      </main>
      <CtaFooter />
    </div>
  );
}
