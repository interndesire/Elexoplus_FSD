import {
  Users,
  CalendarDays,
  ClipboardList,
  TrendingUp,
  IndianRupee,
} from "lucide-react";

function Modules() {

  const modules = [
    {
      title: "Employee Management",
      icon: <Users />
    },
    {
      title: "Attendance Tracking",
      icon: <CalendarDays />
    },
    {
      title: "Leave Management",
      icon: <ClipboardList />
    },
    {
      title: "Sales Activity",
      icon: <TrendingUp />
    },
    {
      title: "Payroll Processing",
      icon: <IndianRupee />
    }
  ];

  return (
  <section className="py-14 bg-white">

  <div className="text-center mb-14">

    <p className="text-blue-600 font-semibold uppercase tracking-wider">
      System Modules
    </p>

    <h2 className="text-4xl font-bold text-slate-900 mt-2">
      Five modules. One system.
    </h2>

    <p className="max-w-3xl mx-auto mt-3 text-slate-600 leading-7">
   The Employee Management System consists of five core modules that help organizations manage employee information, attendance, leave requests, payroll processing, and sales activities efficiently.
    </p>

  </div>


  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-6">

    {modules.map((module, index) => (
      <div
        key={index}
        className="border rounded-2xl px-5 py-3 text-center hover:shadow-lg transition"
      >
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
          {module.icon}
        </div>

        <h3 className="font-bold mt-6">
          {module.title}
        </h3>

        <p className="text-slate-500 text-sm mt-3">
          {module.description}
        </p>
      </div>
    ))}

  </div>

</section>
  );
}

export default Modules;