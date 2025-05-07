
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-3xl text-white my-12">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Music Career?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-pink-100">
          Join thousands of artists who are improving their music and growing their fan base with Vybaze
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-pink-500 hover:bg-pink-100 px-8">
            Get Started Free
          </Button>
          <Link to="/pricing">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-transparent px-8 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">View Pricing</span>
            </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm text-pink-100">
          No credit card required. Start with our free tier today.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
