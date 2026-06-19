import Sidebar from "../components/layout/Sidebar";

export default function Profile() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            My Profile
          </h1>

          <p className="text-slate-500 mt-2">
            View and manage your profile information.
          </p>
        </div>

        {/* Profile Card */}

        <div className="bg-white rounded-3xl shadow-sm p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Avatar */}

            <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center text-white text-5xl font-bold">
              R
            </div>

            {/* Details */}

            <div className="flex-1">

              <h2 className="text-3xl font-bold">
                Rahul Sharma
              </h2>

              <p className="text-slate-500 mt-2">
                Sales Executive
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div>
                  <p className="text-slate-500">
                    Employee ID
                  </p>

                  <h3 className="font-semibold">
                    EMP001
                  </h3>
                </div>

                <div>
                  <p className="text-slate-500">
                    Department
                  </p>

                  <h3 className="font-semibold">
                    Sales
                  </h3>
                </div>

                <div>
                  <p className="text-slate-500">
                    Email
                  </p>

                  <h3 className="font-semibold">
                    rahul@company.com
                  </h3>
                </div>

                <div>
                  <p className="text-slate-500">
                    Phone
                  </p>

                  <h3 className="font-semibold">
                    +91 9876543210
                  </h3>
                </div>

                <div>
                  <p className="text-slate-500">
                    Reporting Manager
                  </p>

                  <h3 className="font-semibold">
                    ASM Rajesh Kumar
                  </h3>
                </div>

                <div>
                  <p className="text-slate-500">
                    Location
                  </p>

                  <h3 className="font-semibold">
                    Jaipur, Rajasthan
                  </h3>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Performance Summary */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">
              Total Visits
            </p>

            <h2 className="text-3xl font-bold mt-2">
              248
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">
              Sales Achieved
            </p>

            <h2 className="text-3xl font-bold mt-2">
              ₹12.5L
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">
              Attendance
            </p>

            <h2 className="text-3xl font-bold mt-2">
              96%
            </h2>
          </div>

        </div>

      </div>
    </div>
  );
}