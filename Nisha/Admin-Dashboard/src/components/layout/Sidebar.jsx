import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

import {
LayoutDashboard,
CalendarCheck,
Users,
FileText,
Plane,
User,
X,
} from "lucide-react";

const menu = [
{
name: "Dashboard",
icon: LayoutDashboard,
path: "/",
},
{
name: "Attendance",
icon: CalendarCheck,
path: "/attendance",
},
{
name: "Visits",
icon: Users,
path: "/visits",
},
{
name: "Reports",
icon: FileText,
path: "/reports",
},
{
name: "Leave",
icon: Plane,
path: "/leave",
},
{
name: "Profile",
icon: User,
path: "/profile",
},
];

export default function Sidebar({
isOpen,
setIsOpen,
}) {
const { darkMode } = useTheme();
const [showMenu, setShowMenu] = useState(false);

return (
<aside
className={`
fixed lg:sticky
top-0
z-50

    w-72
    h-screen

    ${isOpen ? "left-0" : "-left-full"}
    lg:left-0

    flex
    flex-col
    transition-all
    duration-300

    ${
      darkMode
        ? "bg-slate-950 text-white"
        : "bg-white text-slate-900 border-r border-slate-200"
    }
  `}
>
  {/* Mobile Close Button */}

  <div className="lg:hidden flex justify-end p-4">
    <button
      onClick={() => setIsOpen(false)}
    >
      <X size={24} />
    </button>
  </div>

  {/* Logo */}

  <div
    className={`
      p-6
      border-b
      ${
        darkMode
          ? "border-slate-800"
          : "border-slate-200"
      }
    `}
  >
    <h1 className="text-3xl font-bold">
      EMS
    </h1>

    <p
      className={
        darkMode
          ? "text-slate-400 text-sm mt-1"
          : "text-slate-500 text-sm mt-1"
      }
    >
      Sales Executive Portal
    </p>
  </div>

  {/* Menu */}

  <div className="flex-1 overflow-y-auto p-4">
    <div className="space-y-2">
      {menu.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            `
              flex items-center gap-3
              px-4 py-3
              rounded-xl
              transition-all
              duration-300

              ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/20 border border-blue-400/20"
                  : darkMode
                  ? "text-slate-300 hover:bg-slate-800"
                  : "text-slate-700 hover:bg-slate-100"
              }
            `
          }
        >
          <item.icon size={20} />
          <span>{item.name}</span>
        </NavLink>
      ))}
    </div>
  </div>

  {/* Bottom User Card */}

  <div
    className={`
      p-4
      border-t
      relative

      ${
        darkMode
          ? "bg-slate-950 border-slate-800"
          : "bg-white border-slate-200"
      }
    `}
  >
    {/* Dropdown */}

    {showMenu && (
      <div
        className={`
          absolute
          bottom-24
          left-4
          w-64
          rounded-2xl
          overflow-hidden
          shadow-2xl
          border

          ${
            darkMode
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-slate-200"
          }
        `}
      >
        <div
          className={`
            p-4
            border-b
            ${
              darkMode
                ? "border-slate-700"
                : "border-slate-200"
            }
          `}
        >
          <p className="font-semibold">
            Rahul Sharma
          </p>

          <p className="text-sm text-slate-500">
            Sales Executive
          </p>
        </div>

        <button
          className={`
            w-full
            text-left
            px-4
            py-3

            ${
              darkMode
                ? "hover:bg-slate-800"
                : "hover:bg-slate-100"
            }
          `}
        >
          👤 My Account
        </button>

        <button
          className={`
            w-full
            text-left
            px-4
            py-3

            ${
              darkMode
                ? "hover:bg-slate-800"
                : "hover:bg-slate-100"
            }
          `}
        >
          🔔 Notifications
        </button>

        <button
          className={`
            w-full
            text-left
            px-4
            py-3

            ${
              darkMode
                ? "hover:bg-slate-800"
                : "hover:bg-slate-100"
            }
          `}
        >
          📞 Support
        </button>

        <div
          className={
            darkMode
              ? "border-t border-slate-700"
              : "border-t border-slate-200"
          }
        />

        <button
          className="
            w-full
            text-left
            px-4
            py-3
            text-red-500
            hover:bg-red-50
          "
        >
          🚪 Logout
        </button>
      </div>
    )}

    {/* User Card */}

    <div
      onClick={() => setShowMenu(!showMenu)}
      className={`
        rounded-xl
        p-3
        flex
        items-center
        gap-3
        cursor-pointer

        transition-all
        duration-300
        hover:scale-[1.02]

        ${
          darkMode
            ? "bg-slate-900"
            : "bg-slate-100"
        }
      `}
    >
      <div
        className="
          w-11
          h-11
          rounded-full
          bg-blue-600
          flex
          items-center
          justify-center
          font-bold
          text-white
        "
      >
        R
      </div>

      <div>
        <p className="font-medium">
          Rahul Sharma
        </p>

        <p
          className={
            darkMode
              ? "text-slate-400 text-sm"
              : "text-slate-500 text-sm"
          }
        >
          Sales Executive
        </p>
      </div>
    </div>
  </div>
</aside>

);
}
