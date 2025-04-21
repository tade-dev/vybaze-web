
import { Music } from "lucide-react";

const feedbacks = [
  { title: "Indigo feat. breezy", ago: "4 min", score: 83 },
  { title: "Indigo feat. breezy", ago: "4 min", score: 83 },
  { title: "Indigo feat. breezy", ago: "4 min", score: 83 },
];

const RecentFeedbacks = () => (
  <section className="w-full bg-transparent">
    <h3 className="font-bold text-2xl text-gray-900 mb-4 text-left tracking-tight">Recent Feedbacks</h3>
    <div className="space-y-3">
      {feedbacks.map((f, i) => (
        <div key={i} className="flex items-center justify-between bg-white rounded-2xl shadow px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gray-100 flex items-center justify-center w-10 h-10">
              <Music size={24} className="text-gray-400" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{f.title}</div>
              <div className="text-xs text-gray-500">{f.ago}</div>
            </div>
          </div>
          <div className="bg-pink-100 text-pink-500 w-10 h-10 flex items-center justify-center rounded-xl font-bold text-lg shadow-inner">
            {f.score}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RecentFeedbacks;
