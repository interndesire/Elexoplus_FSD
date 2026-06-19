import { useTheme } from "../../context/ThemeContext";

export default function GoalProgress() {
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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          Monthly Target Progress
        </h2>

        <span className="text-green-500 font-semibold text-lg">
          81%
        </span>
      </div>

      <p
        className={`mb-5 ${
          darkMode
            ? "text-slate-400"
            : "text-slate-500"
        }`}
      >
        ₹48,500 achieved out of ₹60,000 target
      </p>

      <div
        className={`
          w-full
          h-3
          rounded-full
          ${
            darkMode
              ? "bg-slate-700"
              : "bg-slate-200"
          }
        `}
      >
        <div
          className="
            bg-blue-600
            h-3
            rounded-full
            w-[81%]
          "
        />
      </div>

      <div
        className={`flex justify-between mt-4 text-sm ${
          darkMode
            ? "text-slate-400"
            : "text-slate-500"
        }`}
      >
        <span>₹48,500</span>
        <span>₹60,000</span>
      </div>
    </div>
  );
}