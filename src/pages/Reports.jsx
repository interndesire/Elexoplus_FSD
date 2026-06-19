import Sidebar from "../components/layout/Sidebar";

export default function Reports() {
  const reports = [
    {
      date: "18 Jun 2026",
      visits: 8,
      sales: "₹48,500",
      status: "Approved",
    },
    {
      date: "17 Jun 2026",
      visits: 6,
      sales: "₹32,000",
      status: "Approved",
    },
    {
      date: "16 Jun 2026",
      visits: 5,
      sales: "₹21,000",
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
            Daily Reports
          </h1>

          <p className="text-slate-500 mt-2">
            Submit and track your daily sales reports.
          </p>
        </div>

        {/* Report Form */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-2xl font-bold mb-6">
            Submit Daily Report
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="number"
              placeholder="Total Visits"
              className="border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Total Sales"
              className="border p-3 rounded-xl"
            />

          </div>

          <textarea
            rows="5"
            placeholder="Work Summary..."
            className="w-full border p-3 rounded-xl mt-6"
          />

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
            Submit Report
          </button>

        </div>

        {/* Report History */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Report History
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">
                  Date
                </th>

                <th className="text-left py-3">
                  Visits
                </th>

                <th className="text-left py-3">
                  Sales
                </th>

                <th className="text-left py-3">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>

              {reports.map((report, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="py-4">
                    {report.date}
                  </td>

                  <td>
                    {report.visits}
                  </td>

                  <td>
                    {report.sales}
                  </td>

                  <td>
                    <span
                      className={
                        report.status === "Approved"
                          ? "bg-green-100 text-green-600 px-3 py-1 rounded-full"
                          : "bg-orange-100 text-orange-600 px-3 py-1 rounded-full"
                      }
                    >
                      {report.status}
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