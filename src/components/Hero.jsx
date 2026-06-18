import dashboardImg from "../assets/dashboardImg.jpg";
import employeeImg from "../assets/employeeImg.jpg";
import attendanceImg from "../assets/attendance.png";
import leaveImg from "../assets/leaveImg.jpg";
import payrollImg from "../assets/payroll.png";
import salesImg from "../assets/salesImg.png";
import shieldImg from "../assets/shieldImg.jpg";
import teamImg from "../assets/teamImg.jpg";

export default function Hero() {
  return (
    <main className="font-sans bg-[#0D0D0D] text-white overflow-x-hidden">

      <section className="relative min-h-screen flex items-center bg-[#0D0D0D] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 rounded-full bg-[#F5C518]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full bg-[#F5C518]/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-[#F5C518] font-semibold border border-[#F5C518]/30 px-4 py-1.5 rounded-full">
              For Authorized Employees Only
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Welcome to the<br />
              <span className="text-[#F5C518]">ElexoPlus</span><br />
              Employee Portal
            </h1>

            <p className="text-[#999] text-lg max-w-md leading-relaxed">
              Access attendance records, leave requests, payroll information,
              employee services, and sales activities through a centralized
              internal portal.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-[#F5C518] text-[#0D0D0D] font-bold px-8 py-3.5 rounded-lg hover:bg-[#FDE96B] active:scale-95 transition-all duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                Login to Portal
              </button>
            </div>

            <p className="flex items-center gap-2 text-sm text-[#555]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F5C518]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Internal Use Only • Secure Access • Authorized Employees
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-[#F5C518]/10 blur-2xl scale-105" />
              <img
                src={dashboardImg}
                alt="EMS Dashboard"
                className="relative z-10 w-full drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]"
              />
              <div className="absolute top-4 -left-8 z-20 bg-[#1A1A1A] border border-[#F5C518]/20 rounded-xl px-4 py-2.5 text-sm shadow-lg animate-[float_3s_ease-in-out_infinite_0.5s] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F5C518] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                </svg>
                <span className="text-[#ccc] font-medium">Attendance Dashboard</span>
              </div>
              <div className="absolute top-1/2 -left-10 z-20 bg-[#1A1A1A] border border-[#F5C518]/20 rounded-xl px-4 py-2.5 text-sm shadow-lg animate-[float_4s_ease-in-out_infinite_0.8s] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F5C518] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                </svg>
                <span className="text-[#ccc] font-medium">Leave Requests</span>
              </div>
              <div className="absolute bottom-16 -right-6 z-20 bg-[#1A1A1A] border border-[#F5C518]/20 rounded-xl px-4 py-2.5 text-sm shadow-lg animate-[float_3.5s_ease-in-out_infinite_1s] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F5C518] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
                </svg>
                <span className="text-[#ccc] font-medium">Payroll Summary</span>
              </div>
              <div className="absolute bottom-2 -left-6 z-20 bg-[#1A1A1A] border border-[#F5C518]/20 rounded-xl px-4 py-2.5 text-sm shadow-lg animate-[float_4.5s_ease-in-out_infinite_1.5s] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F5C518] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span className="text-[#ccc] font-medium">Employee Records</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs tracking-[0.3em] uppercase text-[#F5C518] font-semibold">Features</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold">
              Powerful Modules for<br />
              <span className="text-[#F5C518]">Efficient Management</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { img: employeeImg, title: "Employee Management", desc: "Manage employee profiles, departments, roles and documents in one place.", accent: "#F5C518" },
              { img: attendanceImg, title: "Attendance Management", desc: "Track daily attendance, check-in/check-out and generate reports seamlessly.", accent: "#FDE96B" },
              { img: leaveImg, title: "Leave Management", desc: "Apply for leave, get approvals and view leave history with ease.", accent: "#F5C518" },
              { img: payrollImg, title: "Payroll Management", desc: "Process salaries, manage deductions and generate payslips securely.", accent: "#FDE96B" },
              { img: salesImg, title: "Sales Activity Management", desc: "Track sales activities, visits and performance effectively.", accent: "#F5C518" },
            ].map(({ img, title, desc, accent }) => (
              <div
                key={title}
                className="group bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center gap-5
                           hover:border-[#F5C518]/40 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(245,197,24,0.12)]
                           transition-all duration-300 cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F5C518]/10 flex items-center justify-center group-hover:bg-[#F5C518]/20 transition-colors duration-300">
                  <img src={img} alt={title} className="w-9 h-9 object-contain" />
                </div>
                <h3 className="font-bold text-white text-base leading-snug">{title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{desc}</p>
                <div className="w-8 h-0.5 mt-auto rounded-full" style={{ background: accent }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D0D] py-28 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 rounded-full bg-[#F5C518]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-[#F5C518]/10 blur-2xl" />
              <img src={shieldImg} alt="Secure EMS" className="relative z-10 w-full h-full object-contain drop-shadow-xl animate-[float_5s_ease-in-out_infinite]" />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-3">
              <span className="text-xs tracking-[0.3em] uppercase text-[#F5C518] font-semibold">Why EMS?</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Built to Simplify.<br />
                <span className="text-[#F5C518]">Designed to Empower.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  ),
                  title: "Streamlined Operations",
                  desc: "Automate HR tasks and reduce manual work to save time and improve productivity.",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  ),
                  title: "Centralized & Secure",
                  desc: "All employee data in one secure system with role-based access and data protection.",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  ),
                  title: "Better Transparency",
                  desc: "Improve visibility across teams with real-time data and accurate reporting.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="group bg-[#1A1A1A] border border-white/5 rounded-xl p-5 hover:border-[#F5C518]/30 hover:shadow-[0_8px_24px_rgba(245,197,24,0.08)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#F5C518]/10 flex items-center justify-center mb-4 group-hover:bg-[#F5C518]/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#F5C518]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {icon}
                    </svg>
                  </div>
                  <h4 className="font-bold text-white mb-2 text-sm">{title}</h4>
                  <p className="text-[#666] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#F5C518]/10 blur-2xl scale-110" />
              <img src={teamImg} alt="ElexoPlus Team" className="relative z-10 w-full max-w-md object-contain drop-shadow-xl" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs tracking-[0.3em] uppercase text-[#F5C518] font-semibold">About EMS</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                About <span className="text-[#F5C518]">ElexoPlus EMS</span>
              </h2>
            </div>
            <p className="text-[#888] leading-relaxed text-base">
              ElexoPlus EMS is designed to help organizations manage their workforce more
              efficiently. It brings all essential employee operations such as attendance,
              leave, payroll and sales activities under one unified system.
            </p>
            <p className="text-[#888] leading-relaxed text-base">
              Our goal is to improve productivity, ensure transparency and empower employees
              with a seamless digital experience.
            </p>
            <button className="flex items-center gap-2 bg-[#F5C518] text-[#0D0D0D] font-bold px-7 py-3.5 rounded-lg hover:bg-[#FDE96B] active:scale-95 transition-all duration-150 mt-2">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F5C518] py-14 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#0D0D0D]/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#0D0D0D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[#0D0D0D] font-extrabold text-xl">Ready to access your employee portal?</p>
              <p className="text-[#0D0D0D]/70 text-sm">Login to your account or create a new account to get started.</p>
            </div>
          </div>
          <div className="flex gap-3 shrink-0">
            <button className="flex items-center gap-2 bg-[#0D0D0D] text-[#F5C518] font-bold px-7 py-3 rounded-lg hover:bg-[#1A1A1A] active:scale-95 transition-all duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
              Login
            </button>
            <button className="flex items-center gap-2 border-2 border-[#0D0D0D] text-[#0D0D0D] font-bold px-7 py-3 rounded-lg hover:bg-[#0D0D0D]/10 active:scale-95 transition-all duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
              Create Account
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
      `}</style>
    </main>
  );
}