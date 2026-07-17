import { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineBuildingOffice2,
  HiOutlineCloudArrowUp,
} from "react-icons/hi2";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    agree: false,
    file: null,
  });

  const services = [
    "Website Development",
    "React.js Development",
    "Next.js Development",
    "React Native App",
    "UI/UX Design",
    "API Development",
    "SEO",
    "Maintenance",
  ];

  const budgets = [
    "$500 - $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000+",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact-form" className="bg-[#F5F7FA] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side */}

            <div className="bg-[#191A23] p-8 sm:p-10 lg:p-14">
              <span className="rounded-full bg-[#B9FF66] px-4 py-2 text-sm font-semibold text-black">
                Let's Talk
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white">
                Ready to build your next digital product?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Fill out the form and our Full Stack Development team will
                contact you within 24 hours.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#B9FF66]">
                    Why choose us?
                  </h3>

                  <ul className="mt-5 space-y-4 text-gray-300">
                    <li>✔ Modern Web Applications</li>

                    <li>✔ Responsive UI/UX</li>

                    <li>✔ Fast Delivery</li>

                    <li>✔ Scalable Architecture</li>

                    <li>✔ 24/7 Technical Support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="p-8 sm:p-10 lg:p-14">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
              >
                {/* Name */}

                <div className="relative">
                  <HiOutlineUser className="absolute left-5 top-5 text-xl text-gray-400" />

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full rounded-2xl border border-gray-300 py-4 pl-14 pr-5 outline-none transition focus:border-[#B9FF66]"
                  />
                </div>

                {/* Email */}

                <div className="relative">
                  <HiOutlineEnvelope className="absolute left-5 top-5 text-xl text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full rounded-2xl border border-gray-300 py-4 pl-14 pr-5 outline-none transition focus:border-[#B9FF66]"
                  />
                </div>

                {/* Phone */}

                <div className="relative">
                  <HiOutlinePhone className="absolute left-5 top-5 text-xl text-gray-400" />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full rounded-2xl border border-gray-300 py-4 pl-14 pr-5 outline-none transition focus:border-[#B9FF66]"
                  />
                </div>

                {/* Company */}

                <div className="relative">
                  <HiOutlineBuildingOffice2 className="absolute left-5 top-5 text-xl text-gray-400" />

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full rounded-2xl border border-gray-300 py-4 pl-14 pr-5 outline-none transition focus:border-[#B9FF66]"
                  />
                </div>
                
                {/* Service */}

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#B9FF66]"
                >
                  <option value="">Select Service</option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                {/* Budget */}

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#B9FF66]"
                >
                  <option value="">Project Budget</option>

                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>

                {/* Message */}

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="col-span-1 w-full resize-none rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#B9FF66] md:col-span-2"
                ></textarea>

                {/* Upload */}

                <label className="col-span-1 flex cursor-pointer items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-gray-300 px-6 py-6 transition hover:border-[#B9FF66] md:col-span-2">
                  <HiOutlineCloudArrowUp className="text-3xl text-[#B9FF66]" />

                  <div>
                    <p className="font-semibold text-[#191A23]">
                      Upload Project Brief
                    </p>

                    <p className="text-sm text-gray-500">
                      PDF, DOCX, ZIP (Max 10MB)
                    </p>
                  </div>

                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>

                {formData.file && (
                  <p className="text-sm font-medium text-green-600 md:col-span-2">
                    Selected File: {formData.file.name}
                  </p>
                )}

                {/* Checkbox */}

                <label className="col-span-1 flex items-start gap-3 md:col-span-2">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 accent-[#B9FF66]"
                  />

                  <span className="text-sm leading-7 text-gray-600">
                    I agree to the Privacy Policy and Terms & Conditions.
                  </span>
                </label>

                {/* Button */}

                <button
                  type="submit"
                  className="col-span-1 rounded-2xl bg-[#191A23] px-8 py-5 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9FF66] hover:text-black hover:shadow-2xl md:col-span-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
