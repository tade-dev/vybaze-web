
import { Skeleton } from "@/components/ui/skeleton";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Music, VolumeX, Star } from "lucide-react";

const AiFeedback = () => {
  const titleAnimation = useScrollAnimation();
  const leftCardAnimation = useScrollAnimation({ threshold: 0.1 });
  const rightCardAnimation = useScrollAnimation({ threshold: 0.1, rootMargin: "0px 0px -100px 0px" });

  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-pink-100 blur-[120px] opacity-30" />
        <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] rounded-full bg-purple-100 blur-[100px] opacity-30" />
      </div>

      <div 
        ref={titleAnimation.ref}
        className={`text-center mb-16 transition-all duration-1000 ${
          titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Music Feedback</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our advanced AI analyzes your tracks and provides detailed, actionable feedback to help you improve your music
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Left Card - Scores and Analysis */}
          <div 
            ref={leftCardAnimation.ref}
            className={`flex-1 transition-all duration-1000 ${
              leftCardAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <Card className="h-full shadow-lg border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Score Items */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Music size={18} className="text-pink-500" /> 
                          Vocal Performance
                        </h3>
                        <span className="text-pink-500 font-bold">78%</span>
                      </div>
                      <div className="bg-gray-100 h-3 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-pink-400 to-pink-500 h-full rounded-full" style={{ width: "78%" }}></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Strong vocal presence with occasional pitch issues</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <VolumeX size={18} className="text-pink-500" /> 
                          Beat Quality
                        </h3>
                        <span className="text-pink-500 font-bold">92%</span>
                      </div>
                      <div className="bg-gray-100 h-3 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-pink-400 to-pink-500 h-full rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Excellent production with great rhythm</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Star size={18} className="text-pink-500" /> 
                          Lyrics & Structure
                        </h3>
                        <span className="text-pink-500 font-bold">85%</span>
                      </div>
                      <div className="bg-gray-100 h-3 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-pink-400 to-pink-500 h-full rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Strong storytelling with cohesive structure</p>
                    </div>
                  </div>

                  {/* Improvement Suggestions */}
                  <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-6 border-l-4 border-pink-500 mt-6">
                    <h4 className="font-semibold mb-3 text-gray-800">Improvement Suggestions:</h4>
                    <ul className="text-sm text-gray-700 space-y-2.5">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Consider adding more dynamic range to the chorus</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Work on vocal control during the bridge section</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Add more bass presence in the mix</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Card - Summary and Waveform */}
          <div 
            ref={rightCardAnimation.ref}
            className={`flex-1 transition-all duration-1000 ${
              rightCardAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <Card className="h-full shadow-lg border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-xl font-bold">Overall Rating</h3>
                    <p className="text-sm text-gray-500">Analysis completed in 42 seconds</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-400 to-pink-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                    8.5
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Waveform Analysis</span>
                      <span className="text-gray-500">Completed</span>
                    </div>
                    <div className="relative">
                      <Skeleton className="h-24 w-full bg-gray-200 rounded-xl" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="h-full w-full bg-contain bg-no-repeat bg-center"
                             style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCwxMDBTMjUsNzAgNTAsNzBzMjUsNjAgNTAsNjBzMjUsLTYwIDUwLC02MHMyNSw2MCA1MCw2MHMyNSwtNjAgNTAsLTYwczI1LDYwIDUwLDYwczI1LC02MCA1MCwtNjBzMjUsNjAgNTAsNjBzMjUsLTYwIDUwLC02MHMyNSw2MCA1MCw2MHMyNSwtNjAgNTAsLTYwczI1LDYwIDUwLDYwczI1LC02MCA1MCwtNjBzMjUsNjAgNTAsNjBzMjUsLTYwIDUwLC02MHY5MEgweiIgZmlsbD0iI2ZhMDBjYSIvPjwvc3ZnPg==')"}} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl">
                    <div className="flex justify-between text-sm mb-3">
                      <span className="font-medium">Genre Classification</span>
                      <span className="text-pink-500 font-medium">Pop/R&B (94% confidence)</span>
                    </div>

                    <div className="space-y-3 mt-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Pop/R&B</span>
                          <span>94%</span>
                        </div>
                        <div className="bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-pink-500 h-full rounded-full" style={{ width: "94%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Hip-Hop</span>
                          <span>42%</span>
                        </div>
                        <div className="bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-pink-500 h-full rounded-full" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Electronic</span>
                          <span>27%</span>
                        </div>
                        <div className="bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-pink-500 h-full rounded-full" style={{ width: "27%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-xs text-gray-400 mt-4">
                    <span>Track analyzed using Vybaze AI Model v2.4</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiFeedback;
