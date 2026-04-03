import SEO from "../../components/seo";
import CaseStudySection from "./components/caseStudySection";
import CTASection from "./components/ctaSection";
import HeroSection from "./components/heroSection";
import InsightsSection from "./components/insightsSection";
import ServicesSection from "./components/servicesSection";
import StatsSection from "./components/statsSection";
import WhyWolvioSection from "./components/whyWolvioSection";

export default function LandingPage() {
  return (
    <>
      <SEO
        title="Wolvio | Veeva Consulting & Managed Services for Life Sciences"
        description="Wolvio offers specialist Veeva Consulting Services for life sciences implementation & managed services with deep GxP knowledge & regulatory precision."
        keywords="Veeva consulting, life sciences, pharma, biotech, med tech, managed services, GxP compliance"
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />

      <CaseStudySection />
      <WhyWolvioSection />
      <InsightsSection />
      <CTASection />
    </>
  );
}
