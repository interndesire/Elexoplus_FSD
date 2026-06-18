import logo from "../assets/logo.png";

export default function Header() {
  const navLinks = ["Home", "Features", "About", "Support"];

  return (
    <header style={{ background: "#111", borderBottom: "2px solid #F5C518", padding: "0 24px", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src={logo} alt="ElexoPlus Logo" width={88} height={78} style={{ borderRadius: 8 }} />
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontSize: 10, color: "#888"}}>Employee Management System</div>
          </div>
        </a>

        <nav style={{ display: "flex", gap: 28 }}>
          {navLinks.map((link) => (
            <a key={link} href="#" style={{ color: "#ccc", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
              {link}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 10 }}>
          <button style={{ background: "transparent", border: "1.5px solid #F5C518", color: "#F5C518", padding: "7px 18px", borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Login
          </button>
          <button style={{ background: "#F5C518", border: "none", color: "#111", padding: "7px 18px", borderRadius: 6, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}