import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <footer
      id="support"
      className="bg-slate-900 text-white pt-14 pb-6 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

     

          <div>
           <img
             src={logo}
             alt="ElexoPlus Logo"
             className="h-12 w-auto"
           />
           

            <p className="mt-4 text-slate-400 leading-7">
              A centralized Employee Management System
              for attendance, payroll, leave management,
              employee records and workforce operations.
            </p>
          </div>

       

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#support" className="hover:text-blue-400">
                  Support
                </a>
              </li>

            </ul>
          </div>

        

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Modules
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Employee Management</li>
              <li>Attendance Tracking</li>
              <li>Leave Management</li>
              <li>Payroll Processing</li>
            </ul>
          </div>

         

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Support
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-2">
                <Mail size={18} />
                support@elexoplus.com
              </div>

              <div className="flex items-center gap-2">
                <Phone size={18} />
                +91 9876543210
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                India
              </div>

            </div>

        

          </div>

        </div>

       

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between text-slate-500 text-sm">

          <p>
            © 2026 ElexoPlus EMS. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;