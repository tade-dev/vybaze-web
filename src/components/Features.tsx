
import { 
  Headphones, 
  DollarSign, 
  Users, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "AI Music Feedback",
    description: "Get detailed AI analysis on vocals, beat quality, lyrics, and structure with a personalized rating.",
    comingSoon: false
  },
  {
    icon: DollarSign,
    title: "Direct Monetization",
    description: "Sell your music directly to fans without middlemen. Set your price and keep more of your earnings.",
    comingSoon: true
  },
  {
    icon: Users,
    title: "Creator Community",
    description: "Connect with other artists, collaborate on projects, and grow your audience organically.",
    comingSoon: true
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Manage your music career from anywhere with our sleek, intuitive mobile interface.",
    comingSoon: false
  }
];

const Features = () => {
  return (
    <section className="w-full py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Vybaze</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start animate-fade-in relative">
            <div className="bg-pink-100 p-3 rounded-xl mb-4">
              <feature.icon size={24} className="text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
            
            {feature.comingSoon && (
              <div className="absolute top-4 right-4 bg-vivid-purple text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                Coming Soon
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
