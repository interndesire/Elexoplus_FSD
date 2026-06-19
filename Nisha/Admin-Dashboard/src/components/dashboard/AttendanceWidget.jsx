import { useTheme } from "../../context/ThemeContext";

export default function AttendanceWidget() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        rounded-3xl
        p-6
        border
        shadow-sm
        h-[380px]
        ${
          darkMode
            ? "bg-slate-800 border-slate-700 text-white"
            : "bg-white border-slate-200 text-slate-900"
        }
      `}
    >
      <h2 className="text-2xl font-bold">
        Today's Attendance
      </h2>

      <div className="mt-8 space-y-6">
        <div>
          <p
            className={
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }
          >
            Check In
          </p>

          <h3 className="text-3xl font-bold mt-1">
            09:12 AM
          </h3>
        </div>

        <div>
          <p
            className={
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }
          >
            Working Status
          </p>

          <span
            className="
              inline-block
              mt-2
              bg-green-100
              text-green-700
              px-4
              py-1
              rounded-full
              text-sm
              font-medium
            "
          >
            Active
          </span>
        </div>

        <div>
          <p
            className={
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }
          >
            Working Hours
          </p>

          <h3 className="text-xl font-semibold mt-1">
            6h 15m
          </h3>
        </div>

        <button
          className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-xl
            font-medium
            transition
          "
        >
          Check Out
        </button>
      </div>
    </div>
  );
}