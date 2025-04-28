
import { Upload, FileMusic, Headphones, DollarSign, Users } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const mockupSrc = "/lovable-uploads/2a900c8b-500b-47ac-8ab8-e5cb16a4fb2b.png";

const steps = [
  {
    icon: Upload,
    title: "1. Song Upload",
    description:
      "Easily upload MP3 or WAV files. Add title, genre, and artist name. Make your track public or private.",
    color: "bg-pink-500",
  },
  {
    icon: Headphones,
    title: "2. Instant AI Feedback",
    description:
      "Get a detailed analysis with Vocal, Beat, Lyrics and Structure review. Suggestions & scores delivered in < 60s.",
    color: "bg-purple-500",
  },
  {
    icon: DollarSign,
    title: "3. Monetize Songs",
    description:
      "Sell your best tracks directly to listeners. Manage sales & payouts from your dashboard.",
    color: "bg-blue-500",
  },
  {
    icon: Users,
    title: "4. Join the Community",
    description:
      "Connect with fellow music creators, share tracks, and receive or give feedback to others.",
    color: "bg-green-500",
  },
];

const HowItWorks = () => {
  const titleAnimation = useScrollAnimation();
  const mockupAnimation = useScrollAnimation();
  
  return (
    <section className="w-full py-14 rounded-3xl my-12 bg-white/90 shadow-sm relative">
      <div className="max-w-4xl mx-auto px-4">
        <div
          ref={titleAnimation.ref}
          className={`transition-all duration-1000 ${
            titleAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 id="how-it-works" className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Vybaze Works
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Build, improve, and monetize your music—no friction, just focus. Our 4-step workflow is designed for creators who want results, not distractions.
          </p>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Steps (column on mobile, row on desktop) */}
          <div className="flex flex-col gap-8 md:gap-10 md:w-1/2">
            {steps.slice(0, 2).map((step, i) => {
              const stepAnimation = useScrollAnimation({ 
                rootMargin: "0px 0px -50px 0px",
                threshold: 0.2 
              });
              
              return (
                <div 
                  key={step.title} 
                  ref={stepAnimation.ref}
                  className={`flex items-center gap-5 transition-all duration-700 ${
                    stepAnimation.isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <div
                    className={`rounded-full w-14 h-14 flex items-center justify-center text-white shadow-lg ${step.color}`}
                  >
                    <step.icon size={28} />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{step.title}</div>
                    <div className="text-gray-600 text-sm">{step.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Mockup in the middle on desktop, centered on mobile */}
          <div 
            ref={mockupAnimation.ref}
            className={`flex-shrink-0 transition-all duration-1000 ${
              mockupAnimation.isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
            <div className="relative w-[220px] h-[470px] mx-auto drop-shadow-xl rounded-2xl border border-gray-100 bg-gray-100 overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={mockupSrc}
                alt="Vybaze mobile app mockup"
                className="object-cover w-full h-full"
                draggable={false}
              />
              {/* Optional shadow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "0 16px 56px 0 #fa00ca1a" }}></div>
            </div>
          </div>
          
          {/* Steps (column on mobile, row on desktop) */}
          <div className="flex flex-col gap-8 md:gap-10 md:w-1/2">
            {steps.slice(2, 4).map((step, i) => {
              const stepAnimation = useScrollAnimation({ 
                rootMargin: "0px 0px -50px 0px",
                threshold: 0.2 
              });
              
              return (
                <div 
                  key={step.title} 
                  ref={stepAnimation.ref}
                  className={`flex items-center gap-5 transition-all duration-700 ${
                    stepAnimation.isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <div
                    className={`rounded-full w-14 h-14 flex items-center justify-center text-white shadow-lg ${step.color}`}
                  >
                    <step.icon size={28} />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{step.title}</div>
                    <div className="text-gray-600 text-sm">{step.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400">
          *App interface shown is a demo. Real product may look different.
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
