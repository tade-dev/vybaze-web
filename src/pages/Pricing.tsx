
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, History, Mic, Rocket, Star, Sparkles } from "lucide-react";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-satoshi overflow-x-hidden">
      <TopNavbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500/20 rounded-full filter blur-[100px] animate-pulse" 
               style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[120px] animate-pulse"
               style={{animationDuration: '6s'}}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 animate-fade-in">
            <Sparkles size={16} className="text-pink-400" />
            <span>Choose Your Path to Musical Success</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Transparent</span> Pricing
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Unlock your musical potential with AI-powered feedback and professional tools
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Free Plan */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in" 
                style={{animationDelay: "0.6s"}}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Free</h3>
                <span className="bg-gray-600/50 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">Get Started</span>
              </div>
              <p className="text-gray-400 mt-2">Perfect for beginners exploring AI feedback</p>
            </CardHeader>
            
            <CardContent>
              <div className="text-4xl font-bold mb-6 text-white">$0</div>
              <ul className="space-y-4">
                {[
                  "3 AI feedback sessions per month",
                  "Basic analytics dashboard",
                  "Community forum access",
                  "Limited storage (100MB)"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white border-0 h-12 font-semibold transition-all duration-300">
                Start Free
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan */}
          <Card className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-sm border-2 border-pink-500/50 hover:border-pink-400 transition-all duration-500 hover:transform hover:scale-105 relative animate-fade-in" 
                style={{animationDelay: "0.8s"}}>
            
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Star size={14} className="fill-white" />
                Most Popular
              </div>
            </div>
            
            <CardHeader className="pb-4 pt-8">
              <h3 className="text-2xl font-bold text-white">Premium</h3>
              <p className="text-gray-300 mt-2">Accelerate your music career</p>
            </CardHeader>
            
            <CardContent>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <div className="text-4xl font-bold text-white">$4.99</div>
                  <span className="text-gray-400">/ month</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">or $49.99 / year (save 17%)</div>
                <div className="text-sm text-pink-400 font-medium mt-2 flex items-center gap-1">
                  <Sparkles size={14} />
                  7-day free trial
                </div>
              </div>
              
              <ul className="space-y-4">
                {[
                  { icon: Check, title: "Unlimited AI Feedback", desc: "Get detailed analysis for unlimited tracks with no monthly cap" },
                  { icon: Zap, title: "Priority Processing", desc: "Skip the queue and get results faster than free users" },
                  { icon: History, title: "Complete Feedback History", desc: "Access all past feedback and track your improvement" },
                  { icon: Mic, title: "Voice-Note Feedback", desc: "AI coaching for vocals, lyrics, and performance" },
                  { icon: Rocket, title: "Early Access", desc: "First to try new AI models and experimental features" }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <li key={index} className="flex items-start group">
                      <Icon size={18} className="text-pink-400 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors" />
                      <div>
                        <span className="font-semibold text-white group-hover:text-pink-100 transition-colors">{feature.title}</span>
                        <p className="text-sm text-gray-400 mt-0.5">{feature.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <p className="text-center text-sm text-gray-400">Premium features launching soon!</p>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white border-0 h-12 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25" disabled>
                Coming Soon
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Feature Showcase */}
        <div className="mt-20 bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 animate-fade-in" style={{animationDelay: "1s"}}>
          <h3 className="text-3xl font-bold mb-8 text-center text-white">Why Musicians Choose Premium</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Check, title: "Unlimited AI Analysis", desc: "Professional-quality feedback on melody, harmony, rhythm, production and emotional impact" },
              { icon: Mic, title: "Vocal Coaching", desc: "Record demos and get instant AI guidance on lyrics, delivery, and vocal performance" },
              { icon: Zap, title: "Lightning Fast", desc: "Priority processing ensures you get feedback instantly, even during peak hours" },
              { icon: Rocket, title: "Cutting Edge", desc: "Beta access to experimental AI models and features before public release" }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group hover:bg-white/5 p-4 rounded-2xl transition-all duration-300">
                  <h4 className="font-semibold text-lg mb-3 flex items-center text-white group-hover:text-pink-300 transition-colors">
                    <Icon size={20} className="text-pink-400 mr-3 flex-shrink-0 group-hover:text-pink-300 transition-colors" />
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 text-center bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-3xl border border-pink-500/20 animate-fade-in" style={{animationDelay: "1.2s"}}>
          <div className="flex justify-center mb-4">
            <Sparkles size={32} className="text-pink-400 animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Launch Alert</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Premium features are coming soon! Be the first to experience the future of AI-powered music creation and feedback.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
