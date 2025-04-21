
import { useEffect, useState } from "react";

const pinkGradient = "bg-gradient-to-tr from-pink-400 to-pink-500";

const FeedbackDemoCard = () => {
  const [progress, setProgress] = useState(0);

  // Animate the progress circle on load
  useEffect(() => {
    setTimeout(() => setProgress(30), 300);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 sm:gap-8 w-full max-w-full animate-fade-in">
      <div className="relative flex-shrink-0">
        <svg width={80} height={80} viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            stroke="#f8d6f8"
            strokeWidth="10"
          />
          <circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            stroke="#ec4fe3"
            strokeWidth="10"
            strokeDasharray={2 * Math.PI * 34}
            strokeDashoffset={2 * Math.PI * 34 * (1 - progress / 100)}
            style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(.6,.2,0,1)" }}
            strokeLinecap="round"
          />
          <text
            x="50%"
            y="54%"
            textAnchor="middle"
            fontSize="1.6rem"
            fontWeight={700}
            fill="#1a1a1a"
            className="font-bold"
            style={{ fontFamily: "inherit" }}
          >
            {progress}%
          </text>
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-lg font-semibold text-gray-900">Latest Feedback</div>
        <div className="text-sm mt-2 text-gray-800">
          <div>Clarity: <b>High</b></div>
          <div>Energy: <b>Good</b></div>
        </div>
        <button
          className="mt-5 w-full rounded-xl py-2 font-bold text-white text-lg transition hover:opacity-90 shadow-md"
          style={{
            background: "linear-gradient(90deg, #e255c0 0%, #fa00ca 100%)"
          }}
        >
          Generate New Feedback
        </button>
      </div>
    </div>
  );
};

export default FeedbackDemoCard;
