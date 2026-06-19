import { useTheme } from "../../context/ThemeContext";

const visits = [
  {
    customer: "ABC Distributor",
    purpose: "Order Collection",
    status: "Completed",
  },
  {
    customer: "XYZ Retailer",
    purpose: "Follow Up",
    status: "Pending",
  },
  {
    customer: "MNO Store",
    purpose: "Payment Collection",
    status: "Completed",
  },
];

export default function RecentVisits() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        rounded-3xl
        p-6
        border
        shadow-sm
        ${
          darkMode
            ? "bg-slate-800 border-slate-700 text-white"
            : "bg-white border-slate-200 text-slate-900"
        }
      `}
    >
      <h2 className="text-2xl font-bold mb-6">
        Recent Customer Visits
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr
              className={`border-b ${
                darkMode
                  ? "border-slate-700"
                  : "border-slate-200"
              }`}
            >
              <th className="text-left pb-4">
                Customer
              </th>

              <th className="text-left pb-4">
                Purpose
              </th>

              <th className="text-left pb-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {visits.map((visit, index) => (
              <tr
                key={index}
                className={`
                  border-b
                  transition
                  ${
                    darkMode
                      ? "border-slate-700 hover:bg-slate-700/30"
                      : "border-slate-200 hover:bg-slate-50"
                  }
                `}
              >
                <td className="py-5 font-medium">
                  {visit.customer}
                </td>

                <td
                  className={
                    darkMode
                      ? "text-slate-300"
                      : "text-slate-600"
                  }
                >
                  {visit.purpose}
                </td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      visit.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
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
  );
}