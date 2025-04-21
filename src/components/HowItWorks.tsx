
import { Upload, FileText, Headphones } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Track",
    description: "Upload MP3 or WAV files in seconds. Add title, genre, and artist info. Choose to make it public or private.",
    color: "bg-pink-500"
  },
  {
    icon: Headphones,
    title: "Get AI Feedback",
    description: "Our AI analyzes your track for vocal performance, beat quality, lyrics, and structure - all in under 60 seconds.",
    color: "bg-purple-500"
  },
  {
    icon: FileText,
    title: "Track Analytics",
    description: "Monitor performance, sales, and audience engagement with detailed analytics dashboard.",
    color: "bg-blue-500"
  }
];

const HowItWorks = () => {
  return (
    <section className="w-full py-12 bg-gray-50 rounded-3xl my-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How Vybaze Works</h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          A simple three-step process designed to help artists improve and monetize their music
        </p>
        
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -ml-0.5 hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-6">
                <div className={`flex items-center justify-center rounded-full w-16 h-16 text-white ${step.color} shrink-0 z-10`}>
                  <step.icon size={30} />
                </div>
                <div className="md:w-1/2 bg-white rounded-2xl shadow-md p-6 md:ml-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
