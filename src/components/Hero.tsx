
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Star } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/app"; // Replace with actual App Store link

const Hero = () => {
  const scrollToHowItWorks = () => {
    const howItWorksSection = document.querySelector('h2[id="how-it-works"]');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-16 pt-8">
      <div className="flex-1 text-left">
        <div className="inline-block bg-pink-100 text-pink-600 font-medium px-3 py-1 rounded-full text-sm mb-4">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span>Rated 4.9 on the App Store</span>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Music Career</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">
          AI-powered feedback & instant music monetization for creators
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 max-w-lg mb-8">
          Get actionable AI feedback on your tracks in seconds.
          Sell your best work directly to fans with zero hassle.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button 
            size="lg" 
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-6 h-auto rounded-xl"
            onClick={() => window.open(APP_STORE_URL, '_blank')}
          >
            <Download size={18} className="mr-2" />
            Download Now
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-300 hover:border-pink-500 hover:text-pink-500 gap-2 h-auto py-6 rounded-xl"
            onClick={scrollToHowItWorks}
          >
            Learn More
            <ArrowRight size={16} />
          </Button>
        </div>
        
        <div className="mt-6 flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-${i*100} flex items-center justify-center text-xs font-semibold text-white`}>
                {i}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">5K+</span> musicians already using Vybaze
          </p>
        </div>
      </div>
      
      <div className="flex-1 md:pl-10">
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full filter blur-3xl opacity-70"></div>
          <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-pink-100 rounded-full filter blur-3xl opacity-70"></div>
          
          <div className="relative z-10 bg-gradient-to-br from-white to-pink-50 rounded-3xl p-4 shadow-lg border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/mockup.png" 
              alt="Vybaze App Interface" 
              className="rounded-2xl shadow-sm border border-gray-100"
            />
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white text-pink-500 font-bold py-3 px-5 rounded-xl shadow-lg flex items-center gap-2 transform -rotate-3">
            <Star size={18} className="text-yellow-500 fill-yellow-500" />
            <span>4.9★ Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
