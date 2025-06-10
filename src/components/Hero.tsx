
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Play, Mic, Sparkles, Music, Waveform } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const APP_STORE_URL = "https://apps.apple.com/app";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref: animationRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
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
  
  // Enhanced audio visualization with more dynamic elements
  const waveforms = Array.from({ length: 20 }, (_, i) => i);
  const floatingNotes = Array.from({ length: 8 }, (_, i) => i);

  return (
    <section className="w-full py-16" ref={animationRef}>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 md:p-20 min-h-[600px]">
        
        {/* Dynamic background effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-pink-500/30 rounded-full filter blur-[100px] animate-pulse" 
               style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-600/25 rounded-full filter blur-[120px] animate-pulse"
               style={{animationDuration: '12s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full filter blur-[80px] animate-pulse"
               style={{animationDuration: '10s'}}></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }}></div>
          </div>
        </div>

        {/* Floating musical notes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingNotes.map((note, index) => (
            <div 
              key={index}
              className="absolute text-pink-400/30 text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              {['♪', '♫', '♬', '♩'][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>

        {/* Waveform visualization */}
        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden opacity-20">
          <div className="flex items-end justify-center gap-1 h-full px-4">
            {waveforms.map((_, index) => (
              <div 
                key={index}
                className="bg-gradient-to-t from-pink-500 to-purple-500 rounded-t-full min-w-[3px]"
                style={{
                  height: `${20 + Math.random() * 80}%`,
                  animation: `waveform ${0.5 + Math.random() * 1.5}s ease-in-out infinite alternate`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          
          {/* Badge */}
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm mb-8 hover:bg-white/15 transition-all duration-300">
              <Sparkles size={16} className="text-pink-400 animate-pulse" />
              <span>AI-Powered Music Revolution</span>
              <Play size={14} className="text-pink-400" />
            </div>
          </div>
          
          {/* Main headline */}
          <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight transition-all duration-1200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{transitionDelay: '300ms'}}>
            Transform Your
            <br/>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 animate-gradient" 
                    style={{backgroundSize: '200% 200%'}}>
                Music Journey
              </span>
              <div className="absolute -top-6 -right-12 flex items-center gap-2">
                <Mic size={28} className="text-pink-400 animate-pulse" />
                <Waveform size={24} className="text-purple-400 animate-bounce" style={{animationDelay: '0.5s'}} />
              </div>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-200 max-w-3xl mb-10 leading-relaxed transition-all duration-1200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
             style={{transitionDelay: '500ms'}}>
            Get instant AI feedback, vocal coaching, and professional insights.
            <br className="hidden md:block" />
            <span className="text-pink-300 font-semibold">Elevate your sound, accelerate your career.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-wrap gap-6 transition-all duration-1200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
               style={{transitionDelay: '700ms'}}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold px-8 py-6 h-auto rounded-2xl transition-all duration-300 hover:scale-105 transform shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50"
              onClick={() => window.open(APP_STORE_URL, '_blank')}
            >
              <Download size={20} className="mr-3" />
              Get Vybaze Now
              <Sparkles size={16} className="ml-2 animate-pulse" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 h-auto py-6 px-8 rounded-2xl transition-all duration-300 hover:scale-105 transform"
              onClick={scrollToHowItWorks}
            >
              <Play size={18} className="mr-2" />
              See How It Works
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className={`mt-12 flex flex-wrap justify-center gap-8 transition-all duration-1200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
               style={{transitionDelay: '900ms'}}>
            {[
              { icon: Mic, text: "AI Vocal Coaching" },
              { icon: Waveform, text: "Smart Audio Analysis" },
              { icon: Music, text: "Instant Feedback" }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-full hover:bg-white/10 transition-all duration-300 group">
                  <Icon size={18} className="text-pink-400 group-hover:text-pink-300 transition-colors" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes waveform {
            0% { height: 20%; }
            100% { height: 80%; }
          }
          
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
