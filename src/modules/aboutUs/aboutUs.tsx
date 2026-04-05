import React from "react";
import CTASection from "../../components/ctaSection";
import SEO from "../../components/seo";
import { CTA_CONTENT } from "../../constants/constants";
import AboutHeroSection from "./components/aboutHeroSection";
import LeadershipSection from "./components/leadershipSection";
import OurApproachSection from "./components/ourApproachSection";
import OurPracticeSection from "./components/ourPracticeSection";
import WhoWeAreSection from "./components/whoWeAreSection";


const AboutPage = () => {
    return (
        <React.Fragment>
            <SEO
                title="About Wolvio Solutions | Specialist Veeva Consulting for Life Sciences"
                description="Wolvio Solutions is a specialist Veeva consulting firm dedicated to digital transformation within pharmaceutical, biotech, and medical technology industries."
            />
            <AboutHeroSection />
            <WhoWeAreSection />
            <OurPracticeSection />
            <OurApproachSection />
            <LeadershipSection />
            <CTASection {...CTA_CONTENT.about} />
        </React.Fragment>
    );
};

export default React.memo(AboutPage);