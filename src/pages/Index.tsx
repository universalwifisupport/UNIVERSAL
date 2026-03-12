import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ProblemCards from "@/components/ProblemCards";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesOverview from "@/components/ServicesOverview";
import StatsSection from "@/components/StatsSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ComplianceSection from "@/components/ComplianceSection";
import FinalCTA from "@/components/FinalCTA";
import CallPopup from "@/components/CallPopup";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemCards />
      <BenefitsSection />
      <HowItWorks />
      <ServicesOverview />
      <StatsSection />
      <TrustSection />
      <TestimonialsSection />
      <FAQSection />
      <ComplianceSection />
      <FinalCTA />
      <CallPopup />
    </Layout>
  );
};

export default Index;
