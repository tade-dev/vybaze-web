
import { Button } from "@/components/ui/button";
import { Check, Zap, History, Layers, Rocket } from "lucide-react";

const features = [
  {
    text: "Unlimited AI feedback",
    icon: Check
  },
  {
    text: "Faster feedback processing",
    icon: Zap
  },
  {
    text: "Full feedback history",
    icon: History
  },
  {
    text: "Advanced insight breakdown",
    icon: Layers
  },
  {
    text: "Early access to new features",
    icon: Rocket
  }
];

const PremiumUpsell = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col w-full max-w-full items-start animate-fade-in">
    <div className="text-xl font-bold text-gray-900 mb-2">Upgrade Your Music Career</div>
    <div className="text-base text-gray-600 mb-4">
      Join <span className="text-pink-500 font-bold">Premium</span> and unlock powerful tools to grow your audience and revenue.
    </div>
    
    <ul className="space-y-2 my-4 w-full">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <li key={index} className="flex items-center">
            <Icon size={18} className="text-pink-500 mr-2 flex-shrink-0" />
            <span className="text-gray-700">{feature.text}</span>
          </li>
        );
      })}
    </ul>
    
    <div className="flex items-center justify-between w-full mt-2">
      <div>
        <span className="text-3xl font-bold text-gray-900">$7.99</span>
        <span className="text-gray-500 ml-1">/month</span>
      </div>
      <Button className="bg-gray-300 hover:bg-gray-400 cursor-not-allowed" disabled>
        Coming Soon
      </Button>
    </div>
  </div>
);

export default PremiumUpsell;
