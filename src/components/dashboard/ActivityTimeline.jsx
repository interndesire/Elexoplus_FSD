import { useTheme } from "../../context/ThemeContext";

const activities = [
  {
    time: "09:12 AM",
    activity: "Attendance Marked",
  },
  {
    time: "10:05 AM",
    activity: "Visited ABC Distributor",
  },
  {
    time: "11:30 AM",
    activity: "Order Collected",
  },
  {
    time: "03:15 PM",
    activity: "New Lead Added",
  },
  {
    time: "05:00 PM",
    activity: "Daily Report Submitted",
  },
];

export default function ActivityTimeline() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        rounded-3xl
        p-6
        border
        shadow-sm
        ${
          darkMode
            ? "bg-slate-800 border-slate-700 text-white"
            : "bg-white border-slate-200 text-slate-900"
        }
      `}
    >
      <h2 className="text-2xl font-bold mb-8">
        Recent Activities
      </h2>

      <div className="space-y-6">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex gap-4"
          >
            {/* Timeline Dot */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full" />

              {index !== activities.length - 1 && (
                <div
                  className={`
                    w-[2px]
                    h-12
                    mt-1
                    ${
                      darkMode
                        ? "bg-slate-600"
                        : "bg-slate-200"
                    }
                  `}
                />
              )}
            </div>

            {/* Content */}
            <div>
              <p className="font-semibold text-lg">
                {item.activity}
              </p>

              <p
                className={`text-sm mt-1 ${
                  darkMode
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}
              >
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}