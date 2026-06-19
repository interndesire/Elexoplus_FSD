import { useTheme } from "../../context/ThemeContext";

export default function StatCard({
  title,
  value,
  color,
}) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        rounded-3xl
        p-6
        border
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        ${
          darkMode
            ? "bg-slate-800 border-slate-700 text-white"
            : "bg-white border-slate-100 text-slate-900"
        }
      `}
    >
      <div className="flex justify-between items-center">
        <div
          className={`w-3 h-3 rounded-full ${color}`}
        />

        <span className="text-xs text-slate-400">
          Today
        </span>
      </div>

      <p className="text-slate-500 mt-4">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}