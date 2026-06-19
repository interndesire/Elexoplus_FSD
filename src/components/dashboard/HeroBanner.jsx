import { TrendingUp, Users, BadgeIndianRupee } from "lucide-react";

export default function HeroBanner() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        p-8
        mt-6
        text-white
        bg-gradient-to-r
        from-blue-600
        via-blue-500
        to-violet-600
        shadow-2xl
      "
    >
      {/* Glow Effect */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold">
          Today's Performance 🚀
        </h2>

        <p className="text-blue-100 mt-3 text-lg">
          You completed 8 customer visits today and achieved
          excellent productivity.
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div>
            <div className="flex items-center gap-2">
              <Users size={18} />
              <span className="text-blue-100">
                Visits
              </span>
            </div>

            <h3 className="text-4xl font-bold mt-2">
              8
            </h3>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <BadgeIndianRupee size={18} />
              <span className="text-blue-100">
                Sales
              </span>
            </div>

            <h3 className="text-4xl font-bold mt-2">
              ₹48,500
            </h3>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <TrendingUp size={18} />
              <span className="text-blue-100">
                Productivity
              </span>
            </div>

            <h3 className="text-4xl font-bold mt-2">
              85%
            </h3>
          </div>
        </div>

        {/* Status Badges */}
        <div className="flex flex-wrap gap-3 mt-8">
          <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">
            ✅ Attendance Marked
          </span>

          <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">
            📍 8 Visits Completed
          </span>

          <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">
            📝 Report Pending
          </span>
        </div>
      </div>
    </div>
  );
}