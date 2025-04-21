
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AiFeedback from "@/components/AiFeedback";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import TopNavbar from "@/components/TopNavbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f7f6fa] flex flex-col items-center justify-start font-inter relative">
      <TopNavbar />
      <div className="w-full max-w-4xl mx-auto px-4 pt-24 pb-24">
        <Hero />
        <Features />
        <HowItWorks />
        <AiFeedback />
        <CallToAction />
        <FAQ />
      </div>
      <Footer />
      <MobileNavbar />
    </div>
  );
};

export default Index;
