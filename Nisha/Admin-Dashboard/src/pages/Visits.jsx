import Sidebar from "../components/layout/Sidebar";

export default function Visits() {
  const visits = [
    {
      customer: "ABC Distributor",
      purpose: "Order Collection",
      location: "Jaipur",
      status: "Completed",
    },
    {
      customer: "XYZ Retailer",
      purpose: "Follow Up",
      location: "Delhi",
      status: "Pending",
    },
    {
      customer: "MNO Store",
      purpose: "Payment Collection",
      location: "Ajmer",
      status: "Completed",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen p-8">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Customer Visits
          </h1>

          <p className="text-slate-500 mt-2">
            Manage and track customer visits.
          </p>
        </div>

        {/* Add Visit Form */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-2xl font-bold mb-6">
            Add New Visit
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Customer Name"
              className="border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Visit Purpose"
              className="border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Location"
              className="border p-3 rounded-xl"
            />

            <select className="border p-3 rounded-xl">
              <option>Completed</option>
              <option>Pending</option>
            </select>

          </div>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl">
            Save Visit
          </button>

        </div>

        {/* Visit Table */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Recent Visits
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Customer</th>
                <th className="text-left py-3">Purpose</th>
                <th className="text-left py-3">Location</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>

            <tbody>

              {visits.map((visit, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="py-4">
                    {visit.customer}
                  </td>

                  <td>
                    {visit.purpose}
                  </td>

                  <td>
                    {visit.location}
                  </td>

                  <td>
                    <span
                      className={
                        visit.status === "Completed"
                          ? "bg-green-100 text-green-600 px-3 py-1 rounded-full"
                          : "bg-orange-100 text-orange-600 px-3 py-1 rounded-full"
                      }
                    >
                      {visit.status}
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