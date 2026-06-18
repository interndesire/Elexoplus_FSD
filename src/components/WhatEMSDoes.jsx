import {
  Users,
  MapPin,
  IndianRupee,
  CalendarDays,
  Clock3,
  BarChart3,
} from "lucide-react";

function WhatEMSDoes() {
  const features = [
    {
      title: "ASM Management",
      desc: "Track Area Sales Managers, their zones, targets, and performance metrics from a single view.",
      icon: <Users size={28} />,
    },
    {
      title: "Sales Executive Tracking",
      desc: "Real-time location logs, daily visit reports, and target-vs-achievement summaries.",
      icon: <MapPin size={28} />,
    },
    {
      title: "Payroll Processing",
      desc: "Automated salary calculation with PF, ESI, TDS deductions and payslip generation.",
      icon: <IndianRupee size={28} />,
    },
    {
      title: "Leave Management",
      desc: "Employees can apply for leave whilemanagers can review and approve requests.",
      icon: <CalendarDays size={28} />,
    },
    {
      title: "Attendance",
      desc: "Monitor daily attendance, working hoursand employee presence records.",
      icon: <Clock3 size={28} />,
    },
    {
      title: "Reports",
      desc: "View and export reports related to attendance,payroll, and employee information.",
      icon: <BarChart3 size={28} />,
    },
  ];

  return (
    <section className="py-5 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-8">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            What EMS Does
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
          Core HR Functions in One Platform
          </h2>

          <p className="max-w-3xl mx-auto text-slate-600 mt-5 leading-8">
           Our EMS helps HR teams and managers perform daily employee management tasks through a centralized and user-friendly platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhatEMSDoes;