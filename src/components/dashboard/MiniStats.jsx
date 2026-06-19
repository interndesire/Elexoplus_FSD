import { useTheme } from "../../context/ThemeContext";

export default function MiniStats() {
  const { darkMode } = useTheme();

  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4">

      <div
        className={`
          rounded-3xl p-5 shadow-sm
          ${
            darkMode
              ? "bg-slate-800 border border-slate-700"
              : "bg-white"
          }
        `}
      >
        <p className="text-slate-500 text-sm">
          Today's Sales
        </p>

        <h3 className="text-2xl font-bold mt-2">
          ₹48,500
        </h3>

        <span className="text-green-500 text-sm">
          +12% from yesterday
        </span>
      </div>

      <div
        className={`
          rounded-3xl p-5 shadow-sm
          ${
            darkMode
              ? "bg-slate-800 border border-slate-700"
              : "bg-white"
          }
        `}
      >
        <p className="text-slate-500 text-sm">
          Remaining Target
        </p>

        <h3 className="text-2xl font-bold mt-2">
          ₹11,500
        </h3>

        <span className="text-orange-500 text-sm">
          19% remaining
        </span>
      </div>

    </div>
  );
}