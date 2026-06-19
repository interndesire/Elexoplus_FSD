import { useTheme } from "../../context/ThemeContext";

export default function TaskWidget() {
  const { darkMode } = useTheme();

  const tasks = [
    "Visit ABC Distributor",
    "Collect Payment",
    "Follow-up XYZ Retailer",
    "Submit Daily Report",
  ];

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
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">
          Today's Tasks
        </h2>

        <span className="text-blue-600 font-semibold">
          4 Tasks
        </span>
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <label
            key={index}
            className={`
              flex items-center gap-3
              p-3 rounded-xl cursor-pointer transition
              ${
                darkMode
                  ? "hover:bg-slate-700"
                  : "hover:bg-slate-50"
              }
            `}
          >
            <input
              type="checkbox"
              className="w-4 h-4"
            />

            <span
              className={
                darkMode
                  ? "text-slate-200"
                  : "text-slate-700"
              }
            >
              {task}
            </span>
          </label>
        ))}
      </div>

      <div
        className={`
          mt-5 pt-4 border-t
          ${
            darkMode
              ? "border-slate-700"
              : "border-slate-200"
          }
        `}
      >
        <p
          className={
            darkMode
              ? "text-slate-400 text-sm"
              : "text-slate-500 text-sm"
          }
        >
          Complete today's activities before submitting the daily report.
        </p>
      </div>
    </div>
  );
}