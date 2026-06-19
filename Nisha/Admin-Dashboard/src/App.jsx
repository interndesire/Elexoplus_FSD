import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Visits from "./pages/Visits";
import Reports from "./pages/Reports";
import Leave from "./pages/Leave";
import Profile from "./pages/Profile";

export default function App() {
return ( <BrowserRouter> <Routes>
<Route
  path="/profile"
  element={<Profile />}
/>
<Route
  path="/leave"
  element={<Leave />}
/>
<Route
  path="/reports"
  element={<Reports />}
/>
<Route
  path="/"
  element={<Dashboard />}
/>
<Route
  path="/visits"
  element={<Visits />}
/>
  <Route
      path="/attendance"
      element={<Attendance />}
    />
  </Routes>
</BrowserRouter>

);
}
