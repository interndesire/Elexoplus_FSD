import { useState } from "react";
import { Menu, X, Bolt } from "lucide-react";
import logo from "../assets/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">


        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="ElexoPlus Logo"
            className="h-12 w-auto"
          />

        </div>


        <ul className="hidden md:flex gap-10 font-medium">
          <li
            onClick={() => scrollToSection("home")}
            className="cursor-pointer hover:text-blue-600"
          >
            Home
          </li>

          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-blue-600"
          >
            About
          </li>

          <li
            onClick={() => scrollToSection("support")}
            className="cursor-pointer hover:text-blue-600"
          >
            Support
          </li>
        </ul>


        <div className="hidden md:flex gap-3">
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg cursor-pointer">
            Admin Login
          </button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
            Employee Login
          </button>
        </div>


        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">

          <div className="flex flex-col p-6 gap-5">

            <button
              onClick={() => scrollToSection("home")}
              className="text-left"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-left"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("support")}
              className="text-left"
            >
              Support
            </button>

            <hr />

            <button className="border border-blue-600 text-blue-600 py-3 rounded-lg">
              Admin Login
            </button>

            <button className="bg-blue-600 text-white py-3 rounded-lg">
              Employee Login
            </button>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;