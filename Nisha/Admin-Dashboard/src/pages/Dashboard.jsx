import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import HeroBanner from "../components/dashboard/HeroBanner";
import GoalProgress from "../components/dashboard/GoalProgress";
import TaskWidget from "../components/dashboard/TaskWidget";

import StatCard from "../components/dashboard/StatCard";
import SalesChart from "../components/dashboard/SalesChart";
import AttendanceWidget from "../components/dashboard/AttendanceWidget";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";
import RecentVisits from "../components/dashboard/RecentVisits";

import { useState } from "react";
import { Menu } from "lucide-react";
import MiniStats from "../components/dashboard/MiniStats";

import { useTheme } from "../context/ThemeContext";

import {
  stats,
  productivityData,
} from "../data/dashboardData";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] =
  useState(false);
  const { darkMode } = useTheme();

  return (
    <div className="flex">
      <Sidebar
      isOpen={isSidebarOpen}
      setIsOpen={setIsSidebarOpen}
      />

      <main
        className={`
          flex-1
          min-h-screen
          p-8
          transition-all
          duration-300
          ${
            darkMode
              ? "bg-slate-950 text-white"
              : "bg-slate-50 text-slate-900"
          }
        `}
      >
        <div className="lg:hidden mb-4">
  <button
    onClick={() =>
      setIsSidebarOpen(true)
    }
    className="
      bg-blue-600
      text-white
      p-3
      rounded-xl
    "
  >
    <Menu size={22} />
  </button>
</div>
        {/* Header */}
        <Header />

        {/* Hero Banner */}
        <HeroBanner />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {stats.map((item) => (
            <StatCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

        {/* Goal Progress + Tasks */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <GoalProgress />
            <MiniStats />
            </div>
            <TaskWidget />
            </div>

        {/* Analytics Header */}
        <div className="flex justify-between items-center mt-10 mb-4">
          <h2 className="text-2xl font-bold">
            Performance Analytics
          </h2>

          <button
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-5
              py-2.5
              rounded-xl
              shadow-lg
              transition
            "
          >
            Export Report
          </button>
        </div>

        {/* Chart + Attendance */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalesChart data={productivityData} />
          </div>

          <AttendanceWidget />
        </div>

        {/* Activities + Customer Visits */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <ActivityTimeline />
          <RecentVisits />
        </div>
      </main>
    </div>
  );
}