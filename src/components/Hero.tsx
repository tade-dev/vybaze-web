
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Star, Sparkles, Music } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const APP_STORE_URL = "https://apps.apple.com/app"; // Replace with actual App Store link

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref: animationRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToHowItWorks = () => {
    const howItWorksSection = document.querySelector('h2[id="how-it-works"]');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Audio visualization particles
  const particles = Array.from({ length: 40 }, (_, i) => i);

  return (
    <section className="w-full py-12" ref={animationRef}>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-16">
        {/* Abstract animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-[100px] animate-pulse" 
               style={{animationDuration: '7s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-purple-600 rounded-full filter blur-[120px] animate-pulse"
               style={{animationDuration: '10s'}}></div>
          <div className="absolute top-2/3 right-1/2 w-56 h-56 bg-blue-600 rounded-full filter blur-[90px] animate-pulse"
               style={{animationDuration: '8s'}}></div>
        </div>

        {/* Music particles visualization */}
        <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden opacity-40">
          <div className="relative w-full h-full">
            {particles.map((particle, index) => (
              <div 
                key={index}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  bottom: '0',
                  opacity: Math.random() * 0.6 + 0.4,
                  animation: `float-up ${Math.random() * 4 + 3}s ease-in-out infinite ${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm mb-6">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span>Rated 4.9 on the App Store</span>
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{transitionDelay: '200ms'}}>
            Elevate Your <br/>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient">Music Career</span>
              <Sparkles size={24} className="absolute -top-5 -right-8 text-yellow-300 animate-pulse" />
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
             style={{transitionDelay: '400ms'}}>
            AI-powered feedback & instant music monetization for creators.
            Get actionable insights and grow your audience today.
          </p>
          
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
               style={{transitionDelay: '600ms'}}>
            <Button 
              size="lg" 
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-6 h-auto rounded-xl transition-all duration-300 hover:scale-105 transform shadow-lg shadow-pink-500/30"
              onClick={() => window.open(APP_STORE_URL, '_blank')}
            >
              <Download size={18} className="mr-2" />
              Download Now
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-pink-400 text-white hover:bg-white/10 hover:text-white gap-2 h-auto py-6 rounded-xl transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
              onClick={scrollToHowItWorks}
            >
              Learn More
              <ArrowRight size={16} />
            </Button>
          </div>
          
          <div className={`mt-10 flex items-center justify-center gap-4 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
               style={{transitionDelay: '800ms'}}>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`w-10 h-10 rounded-full ring-2 ring-gray-800 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-xs font-semibold text-white transform transition-transform hover:scale-110 hover:z-10`}
                  style={{transition: `transform 0.3s ease ${i * 0.05}s`}}
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-300">
              <span className="font-semibold">5K+</span> musicians already using Vybaze
            </p>
          </div>

          {/* Musical notes and symbols animation */}
          <div className={`mt-16 mb-6 flex justify-center gap-2 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
               style={{transitionDelay: '1000ms'}}>
            <Music size={24} className="text-pink-400" />
            <div className="flex items-center space-x-3 h-6">
              {['♪', '♫', '♬', '♩', '♪', '♫'].map((note, i) => (
                <div 
                  key={i} 
                  className="text-lg md:text-xl text-gradient-to-r from-pink-400 to-purple-400" 
                  style={{
                    animation: 'music-bounce 2s ease-in-out infinite alternate',
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float-up {
            0% { transform: translateY(0); opacity: 0.4; }
            50% { opacity: 0.8; }
            100% { transform: translateY(-100px); opacity: 0; }
          }
          
          @keyframes music-bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
