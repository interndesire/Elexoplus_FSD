import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { useTheme } from "../../context/ThemeContext";

export default function SalesChart({ data }) {
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
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-200"
        }
      `}
    >
      <h2
        className={`text-2xl font-bold mb-6 ${
          darkMode
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        Weekly Productivity
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={
              darkMode
                ? "#334155"
                : "#E2E8F0"
            }
          />

          <XAxis
            dataKey="day"
            stroke={
              darkMode
                ? "#94A3B8"
                : "#64748B"
            }
          />

          <YAxis
            stroke={
              darkMode
                ? "#94A3B8"
                : "#64748B"
            }
          />

          <Tooltip
            contentStyle={{
              backgroundColor: darkMode
                ? "#1E293B"
                : "#FFFFFF",
              border: darkMode
                ? "1px solid #475569"
                : "1px solid #E2E8F0",
              borderRadius: "12px",
              color: darkMode
                ? "#FFFFFF"
                : "#0F172A",
            }}
          />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#2563EB"
            strokeWidth={4}
            dot={{
              fill: "#2563EB",
              r: 5,
            }}
            activeDot={{
              r: 7,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}