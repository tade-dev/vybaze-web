
import { Skeleton } from "@/components/ui/skeleton";

const AiFeedback = () => {
  return (
    <section className="w-full py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">AI-Powered Music Feedback</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our advanced AI analyzes your tracks and provides detailed, actionable feedback to help you improve your music
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex-1">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Vocal Performance</h3>
              <div className="bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-pink-500 h-full rounded-full" style={{ width: "78%" }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">78% - Strong vocal presence with occasional pitch issues</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Beat Quality</h3>
              <div className="bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-pink-500 h-full rounded-full" style={{ width: "92%" }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">92% - Excellent production with great rhythm</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Lyrics & Structure</h3>
              <div className="bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-pink-500 h-full rounded-full" style={{ width: "85%" }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">85% - Strong storytelling with cohesive structure</p>
            </div>

            <div className="bg-pink-100 rounded-xl p-4 border-l-4 border-pink-500 mt-6">
              <h4 className="font-semibold mb-2">Improvement Suggestions:</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Consider adding more dynamic range to the chorus</li>
                <li>• Work on vocal control during the bridge section</li>
                <li>• Add more bass presence in the mix</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Overall Rating</h3>
                <p className="text-sm text-gray-500">Analysis completed in 42 seconds</p>
              </div>
              <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                8.5
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Waveform Analysis</span>
                  <span className="text-gray-500">Completed</span>
                </div>
                <Skeleton className="h-20 w-full bg-gray-200" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Genre Classification</span>
                  <span className="text-pink-500 font-medium">Pop/R&B (94% confidence)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiFeedback;
