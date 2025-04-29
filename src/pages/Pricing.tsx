
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Ticket } from "lucide-react";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f6fa] flex flex-col items-center justify-start font-satoshi">
      <TopNavbar />
      <div className="w-full max-w-4xl mx-auto px-4 pt-24 pb-24">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to elevate your music career with professional AI feedback and powerful tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free Plan */}
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Free</h3>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Limited</span>
              </div>
              <p className="text-gray-500 mt-2">Get started with basic features</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-6">$0</div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>3 AI feedback sessions per month</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Community forum access</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Limited storage (100MB)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gray-800 hover:bg-gray-900">
                Get Started Free
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan */}
          <Card className="border-2 border-pink-500 shadow-lg relative animate-fade-in" style={{animationDelay: "0.4s"}}>
            <div className="absolute -top-3 right-5 bg-gradient-to-r from-pink-500 to-pink-400 text-white px-4 py-1 rounded-full text-sm font-medium">Popular</div>
            <CardHeader className="pb-3">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="text-gray-500 mt-2">Unlock your full potential</p>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="text-3xl font-bold">$7.99</div>
                  <span className="text-gray-500 ml-2">/ month</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">or $69.99 / year (save 27%)</div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Unlimited</strong> AI feedback sessions</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Advanced analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Priority processing</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span>1GB storage for your tracks</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Custom artist profile</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Direct fan monetization (0% commission)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-pink-500 hover:bg-pink-600" size="lg">
                <CreditCard className="mr-2" size={18} />
                Go Premium Monthly
              </Button>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500" size="lg">
                <Ticket className="mr-2" size={18} />
                Go Premium Yearly
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in" style={{animationDelay: "0.6s"}}>
          <h3 className="text-2xl font-bold mb-4">Why Go Premium?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Unlimited AI Feedback</h4>
              <p className="text-gray-600">Get professional-quality feedback on as many tracks as you want. Our AI analyzes melody, harmony, rhythm, production and more.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Advanced Analytics</h4>
              <p className="text-gray-600">Track listener engagement, understand what works, and optimize your music with detailed performance metrics.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Priority Processing</h4>
              <p className="text-gray-600">Skip the queue and get your feedback instantly, even during peak times when our system is busy.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Direct Monetization</h4>
              <p className="text-gray-600">Sell your music directly to fans with zero commission fees, keeping 100% of your earnings.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-gray-50 p-8 rounded-2xl border border-gray-100 animate-fade-in" style={{animationDelay: "0.8s"}}>
          <h3 className="text-xl font-bold mb-3">30-Day Money Back Guarantee</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Try Premium risk-free. If you're not completely satisfied within your first 30 days, we'll refund your payment in full.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
