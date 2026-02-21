import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import SpeedToLead from "@/components/SpeedToLead";
import HowItWorks from "@/components/HowItWorks";
import ConversationDemo from "@/components/ConversationDemo";
import VoiceAgent from "@/components/VoiceAgent";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import ROICalculator from "@/components/ROICalculator";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

function SectionDivider() {
  return <div className="section-divider-gradient" />;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoBar />
      <SpeedToLead />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <ConversationDemo />
      <VoiceAgent />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <DashboardPreview />
      <SectionDivider />
      <Testimonials />
      <ROICalculator />
      <SectionDivider />
      <Pricing />
      <SectionDivider />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
