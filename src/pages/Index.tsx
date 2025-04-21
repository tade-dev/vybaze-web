
import Hero from "@/components/Hero";
import FeedbackDemoCard from "@/components/FeedbackDemoCard";
import RecentFeedbacks from "@/components/RecentFeedbacks";
import PremiumUpsell from "@/components/PremiumUpsell";
import MobileNavbar from "@/components/MobileNavbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f7f6fa] flex flex-col items-center justify-start font-inter relative">
      <div className="w-full max-w-xl mx-auto px-2 pt-8 pb-24">
        <Hero />
        <div className="mt-8">
          <FeedbackDemoCard />
        </div>
        <div className="mt-8">
          <RecentFeedbacks />
        </div>
        <div className="mt-8">
          <PremiumUpsell />
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Index;
