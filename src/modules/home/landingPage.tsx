import React from "react";
import SEO from "../../components/seo";
import CaseStudySection from "./components/caseStudySection";
import HeroSection from "./components/heroSection";
import InsightsSection from "./components/insightsSection";
import ServicesSection from "./components/servicesSection";
import StatsSection from "./components/statsSection";
import WhyWolvioSection from "./components/whyWolvioSection";
import CTASection from "../../components/ctaSection";
import { CTA_CONTENT } from "../../constants/constants";

const LandingPage = () => {
  return (
    <React.Fragment>
      <SEO
        title="Wolvio | Veeva Consulting & Managed Services for Life Sciences"
        description="Wolvio offers specialist Veeva Consulting Services for life sciences implementation & managed services with deep GxP knowledge & regulatory precision."
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <CaseStudySection />
      <WhyWolvioSection />
      <InsightsSection />
      <CTASection {...CTA_CONTENT.home} />
    </React.Fragment>
  );
}

export default React.memo(LandingPage);