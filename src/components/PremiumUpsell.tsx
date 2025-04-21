
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Unlimited AI feedback",
  "Priority processing",
  "Advanced analytics",
  "Custom sales page",
  "Zero commission on sales"
];

const PremiumUpsell = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col w-full max-w-full items-start animate-fade-in">
    <div className="text-xl font-bold text-gray-900 mb-2">Upgrade Your Music Career</div>
    <div className="text-base text-gray-600 mb-4">
      Join <span className="text-pink-500 font-bold">Premium</span> and unlock powerful tools to grow your audience and revenue.
    </div>
    
    <ul className="space-y-2 my-4 w-full">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    
    <div className="flex items-center justify-between w-full mt-2">
      <div>
        <span className="text-3xl font-bold text-gray-900">$19</span>
        <span className="text-gray-500 ml-1">/month</span>
      </div>
      <Button className="bg-pink-500 hover:bg-pink-600">
        Go Premium
      </Button>
    </div>
  </div>
);

export default PremiumUpsell;
