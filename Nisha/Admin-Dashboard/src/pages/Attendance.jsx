import Sidebar from "../components/layout/Sidebar";

export default function Attendance() {
const attendanceHistory = [
{
date: "18 Jun 2026",
checkIn: "09:12 AM",
checkOut: "--",
status: "Active",
},
{
date: "17 Jun 2026",
checkIn: "09:05 AM",
checkOut: "06:15 PM",
status: "Present",
},
{
date: "16 Jun 2026",
checkIn: "09:18 AM",
checkOut: "06:00 PM",
status: "Present",
},
];

return ( <div className="flex"> <Sidebar />

  <div className="flex-1 bg-slate-100 min-h-screen p-8">

    {/* Page Header */}
    <div className="mb-8">
      <h1 className="text-4xl font-bold">
        Attendance Management
      </h1>

      <p className="text-slate-500 mt-2">
        Track your daily attendance and working hours.
      </p>
    </div>

    {/* Top Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-white p-5 rounded-2xl shadow-sm">
        <p className="text-slate-500">
          Status
        </p>

        <h2 className="text-3xl font-bold text-green-600 mt-2">
          Present
        </h2>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm">
        <p className="text-slate-500">
          Check In
        </p>

        <h2 className="text-3xl font-bold mt-2">
          09:12 AM
        </h2>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm">
        <p className="text-slate-500">
          Working Hours
        </p>

        <h2 className="text-3xl font-bold mt-2">
          6h 15m
        </h2>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm">
        <p className="text-slate-500">
          This Month
        </p>

        <h2 className="text-3xl font-bold mt-2">
          18 Days
        </h2>
      </div>

    </div>

    {/* Today's Attendance */}
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Today's Attendance
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div>
          <p className="text-slate-500">
            Check In
          </p>

          <h3 className="text-2xl font-bold">
            09:12 AM
          </h3>
        </div>

        <div>
          <p className="text-slate-500">
            Check Out
          </p>

          <h3 className="text-2xl font-bold">
            --
          </h3>
        </div>

        <div>
          <p className="text-slate-500">
            Status
          </p>

          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
            Active
          </span>
        </div>

      </div>

      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
        Check Out
      </button>

    </div>

    {/* Attendance History */}
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Attendance History
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="text-left py-3">
              Date
            </th>

            <th className="text-left py-3">
              Check In
            </th>

            <th className="text-left py-3">
              Check Out
            </th>

            <th className="text-left py-3">
              Status
            </th>
          </tr>
        </thead>

        <tbody>

          {attendanceHistory.map((item, index) => (
            <tr
              key={index}
              className="border-b hover:bg-slate-50"
            >
              <td className="py-4">
                {item.date}
              </td>

              <td>
                {item.checkIn}
              </td>

              <td>
                {item.checkOut}
              </td>

              <td>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  {item.status}
                </span>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  </div>
</div>

);
}
