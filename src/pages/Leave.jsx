import Sidebar from "../components/layout/Sidebar";

export default function Leave() {
  const leaveHistory = [
    {
      type: "Casual Leave",
      from: "20 Jun 2026",
      to: "21 Jun 2026",
      status: "Approved",
    },
    {
      type: "Sick Leave",
      from: "10 Jun 2026",
      to: "10 Jun 2026",
      status: "Approved",
    },
    {
      type: "Emergency Leave",
      from: "25 Jun 2026",
      to: "26 Jun 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Leave Management
          </h1>

          <p className="text-slate-500 mt-2">
            Apply and track your leave requests.
          </p>
        </div>

        {/* Leave Form */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-2xl font-bold mb-6">
            Apply Leave
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <select className="border p-3 rounded-xl">
              <option>Casual Leave</option>
              <option>Sick Leave</option>
              <option>Emergency Leave</option>
            </select>

            <input
              type="text"
              placeholder="Number of Days"
              className="border p-3 rounded-xl"
            />

            <input
              type="date"
              className="border p-3 rounded-xl"
            />

            <input
              type="date"
              className="border p-3 rounded-xl"
            />

          </div>

          <textarea
            rows="5"
            placeholder="Reason for Leave"
            className="w-full border p-3 rounded-xl mt-6"
          />

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
            Submit Leave Request
          </button>

        </div>

        {/* Leave History */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Leave History
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">
                  Leave Type
                </th>

                <th className="text-left py-3">
                  From
                </th>

                <th className="text-left py-3">
                  To
                </th>

                <th className="text-left py-3">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>

              {leaveHistory.map((leave, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="py-4">
                    {leave.type}
                  </td>

                  <td>
                    {leave.from}
                  </td>

                  <td>
                    {leave.to}
                  </td>

                  <td>

                    <span
                      className={
                        leave.status === "Approved"
                          ? "bg-green-100 text-green-600 px-3 py-1 rounded-full"
                          : "bg-orange-100 text-orange-600 px-3 py-1 rounded-full"
                      }
                    >
                      {leave.status}
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