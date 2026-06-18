import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer style={{ background: "#111", borderTop: "2px solid #F5C518", padding: "40px 24px 20px", color: "#ccc", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>

          <div style={{ maxWidth: 220 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <img src={logo} alt="logo" style={{ width: 56, height: 56, objectFit: "contain" }} />
              <div style={{ fontSize: 10, color: "#888" }}>Employee Management System</div>
            </div>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
              A secure and centralized platform for managing employees, attendance, leave, payroll and sales activities.
            </p>

            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              {["in", "𝕏", "f", "ig"].map((s) => (
                <a key={s} href="#" style={{ width: 30, height: 30, border: "1px solid #333", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "#888", fontSize: 12, textDecoration: "none" }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: "#F5C518", fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Quick Links</h4>
            {["Home", "Features", "About", "Support"].map((l) => (
              <a key={l} href="#" style={{ display: "block", color: "#888", fontSize: 13, textDecoration: "none", marginBottom: 8 }}>{l}</a>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#F5C518", fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Modules</h4>
            {["Employee Management", "Attendance Management", "Leave Management", "Payroll Management", "Sales Activity Management"].map((l) => (
              <a key={l} href="#" style={{ display: "block", color: "#888", fontSize: 13, textDecoration: "none", marginBottom: 8 }}>{l}</a>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#F5C518", fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Support</h4>
            {["Help Center", "Contact Us", "Privacy Policy", "Terms & Conditions"].map((l) => (
              <a key={l} href="#" style={{ display: "block", color: "#888", fontSize: 13, textDecoration: "none", marginBottom: 8 }}>{l}</a>
            ))}
          </div>

        </div>

        <div style={{ borderTop: "1px solid #222", paddingTop: 16, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <span style={{ fontSize: 12, color: "#555" }}>© 2025 ElexoPlus India Pvt. Ltd. All rights reserved.</span>
          <span style={{ fontSize: 12, color: "#555" }}>Internal Employee Portal</span>
        </div>

      </div>
    </footer>
  );
}