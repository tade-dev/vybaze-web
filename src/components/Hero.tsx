
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => (
  <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
    <div className="flex-1">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 text-left leading-tight">
        Elevate Your Music Career
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5 text-left">
        AI-powered song feedback & instant music monetization for creators.
      </h2>
      <p className="text-base sm:text-lg text-gray-600 text-left max-w-lg mb-8">
        Get actionable AI feedback on your tracks in seconds.
        Sell your best work directly to fans with zero hassle.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
          Get Started Free
        </Button>
        <Button size="lg" variant="outline" className="gap-2">
          <ArrowDown size={18} />
          Learn More
        </Button>
      </div>
    </div>
    <div className="flex-1 mt-8 md:mt-0">
      <div className="relative max-w-sm mx-auto md:ml-auto md:mr-0">
        <div className="bg-pink-100 rounded-3xl p-3 shadow-xl transform rotate-3">
          <img 
            src="/mockup.png" 
            alt="Vybaze App Interface" 
            className="rounded-2xl shadow-sm border border-gray-100"
          />
        </div>
        <div className="absolute -bottom-4 -left-4 bg-white text-pink-500 font-bold py-2 px-4 rounded-xl shadow-lg">
          4.9★ Rating
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
