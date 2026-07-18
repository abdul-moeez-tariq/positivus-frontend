import { useState } from "react";
import { HiPaperAirplane, HiCheckCircle } from "react-icons/hi2";

export default function ContactForm() {
  const [service, setService] = useState("Web Development");
  return (
    <section id="form" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.2fr_.8fr]">
        <form className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl">
          <span className="inline-flex rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold">
            Start Your Project
          </span>
          <h2 className="mt-6 text-4xl font-bold text-[#191A23]">
            Tell Us About Your Project
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <input className="rounded-2xl border p-4" placeholder="Full Name" />
            <input
              className="rounded-2xl border p-4"
              placeholder="Email Address"
            />
            <input
              className="rounded-2xl border p-4"
              placeholder="Phone Number"
            />
            <input
              className="rounded-2xl border p-4"
              placeholder="Company Name"
            />
          </div>
          <h3 className="mt-8 text-xl font-bold">Select Service</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {["Web Development", "Mobile App", "UI/UX Design", "SEO"].map(
              (s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setService(s)}
                  className={`rounded-2xl border p-4 text-left transition ${service === s ? "border-[#B9FF66] bg-[#B9FF66]" : "hover:border-[#B9FF66]"}`}
                >
                  {s}
                </button>
              ),
            )}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <select className="rounded-2xl border p-4">
              <option>Budget</option>
              <option>$1k-$5k</option>
              <option>$5k-$10k</option>
            </select>
            <select className="rounded-2xl border p-4">
              <option>Timeline</option>
              <option>2 Weeks</option>
              <option>1 Month</option>
            </select>
          </div>
          <textarea
            rows="6"
            className="mt-6 w-full rounded-2xl border p-4"
            placeholder="Project Details"
          />
          <label className="mt-6 flex items-center gap-3">
            <input type="checkbox" />
            <span>I agree to the Privacy Policy.</span>
          </label>
          <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#191A23] px-8 py-5 font-semibold text-white transition hover:bg-[#B9FF66] hover:text-black">
            <HiPaperAirplane />
            Send Message
          </button>
        </form>
        <div className="rounded-[32px] bg-[#191A23] p-8 text-white shadow-2xl">
          <h3 className="text-3xl font-bold">Why Work With Us?</h3>
          <p className="mt-4 leading-8 text-gray-300">
            We deliver modern, scalable and premium digital solutions for
            startups and enterprises.
          </p>
          <div className="mt-8 space-y-5">
            {[
              "Free Consultation",
              "Transparent Pricing",
              "Dedicated Team",
              "Long-Term Support",
              "Fast Delivery",
            ].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <HiCheckCircle className="text-[#B9FF66]" />
                <span>{i}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-white p-6 text-[#191A23]">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <h4 className="text-4xl font-bold">150+</h4>
                <p>Projects</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold">40+</h4>
                <p>Clients</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold">98%</h4>
                <p>Satisfaction</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold">24h</h4>
                <p>Response</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
