import { Users, CalendarDays, ClipboardCheck, CircleDollarSign } from "lucide-react";
import teamworkImage from "../assets/team_work.png";
function Hero() {
  return (
    <section className="bg-slate-50 py-12" id="home">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

       
        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            ElexoPlus Internal Portal
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-8 leading-tight">
            Employee
            <br />
            Management
            <br />
            System
          </h1>

          <p className="text-slate-600 text-lg mt-8 leading-8">
           ElexoPlus EMS provides a centralized platform for managing
  employee records, attendance, leave requests, payroll,
  and workforce operations. Separate portals are available
  for administrators and employees to ensure secure and
  role-based access.
          </p>

         <div className="flex flex-wrap gap-4 mt-10">

  <button className="bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition cursor-pointer">
    Admin Login
  </button>

  <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition cursor-pointer">
    Employee Login
  </button>

</div>

        
          <div className="grid grid-cols-2 gap-6 mt-12 text-sm text-slate-700">

            <div className="flex items-center gap-2">
              <ClipboardCheck size={20} className="text-blue-600" />
              Attendance Management
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={20} className="text-blue-600" />
              Leave Management
            </div>

            <div className="flex items-center gap-2">
              <Users size={20} className="text-blue-600" />
              Employee Records
            </div>

            <div className="flex items-center gap-2">
              <CircleDollarSign size={20} className="text-blue-600" />
              Payroll Processing
            </div>

          </div>

        </div>

      
        <div className="flex justify-center">

          <img
            src={teamworkImage}
            alt="EMS Illustration"
            className="w-full max-w-lg"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;