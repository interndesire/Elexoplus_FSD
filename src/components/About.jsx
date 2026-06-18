import aboutImage from "../assets/designer_about.svg";
function About() {

  return (
    <section className="bg-slate-50 py-14 " id="about">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl p-5 grid lg:grid-cols-2 gap-10">

          <img
            src={aboutImage}
            alt=""
            height={20}
            width={400}

          />

          <div>

            <h2 className="text-4xl font-bold">
              About ElexoPlus EMS
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
           ElexoPlus EMS is a web-based application developed to simplify employee management processes within an organization. The system enables administrators to manage employee records, monitor attendance, process payroll, and handle leave requests from a single platform. Employees can access their information, apply for leaves, and track attendance through their dedicated portal. The system improves operational efficiency by reducing manual work and maintaining accurate employee data.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;