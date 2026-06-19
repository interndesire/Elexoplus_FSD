import {
Bell,
Search,
CalendarDays,
Moon,
Sun,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function Header() {
const { darkMode, toggleTheme } = useTheme();

const today = new Date().toLocaleDateString("en-IN", {
day: "numeric",
month: "long",
year: "numeric",
});

return ( <div className="flex items-center justify-between mb-8">

  {/* Left */}
  <div>
    <h1
      className={`text-4xl font-bold ${
        darkMode
          ? "text-white"
          : "text-slate-900"
      }`}
    >
      Good Morning, Rahul 👋
    </h1>

    <p
      className={`mt-2 ${
        darkMode
          ? "text-slate-400"
          : "text-slate-500"
      }`}
    >
      Welcome back! Here's what's happening today.
    </p>
  </div>

  {/* Right */}
  <div className="flex items-center gap-4">

    {/* Search */}
    <div
      className={`
        hidden md:flex items-center gap-2
        px-4 py-3 rounded-xl shadow-sm
        ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-white"
        }
      `}
    >
      <Search size={18} />

      <input
        type="text"
        placeholder="Search..."
        className="outline-none bg-transparent text-sm"
      />
    </div>

    {/* Date */}
    <div
      className={`
        hidden lg:flex items-center gap-2
        px-4 py-3 rounded-xl shadow-sm
        ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-white"
        }
      `}
    >
      <CalendarDays size={18} />
      <span className="text-sm">
        {today}
      </span>
    </div>

    {/* Theme Toggle */}
    <button
      onClick={toggleTheme}
      className={`
        p-3 rounded-xl shadow-sm transition
        ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-white"
        }
      `}
    >
      {darkMode ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>

    {/* Notification */}
    <button
      className={`
        p-3 rounded-xl shadow-sm transition
        ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-white"
        }
      `}
    >
      <Bell size={20} />
    </button>

    {/* Profile */}
    <div
      className={`
        flex items-center gap-3
        px-4 py-2 rounded-xl shadow-sm
        ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-white"
        }
      `}
    >
      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
        R
      </div>

      <div className="hidden md:block">
        <p className="font-semibold text-sm">
          Rahul Sharma
        </p>

        <p
          className={`text-xs ${
            darkMode
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          Sales Executive
        </p>
      </div>
    </div>

  </div>
</div>

);
}
