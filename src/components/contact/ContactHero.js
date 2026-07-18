import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiPhone,
  HiEnvelope,
  HiCheckCircle,
} from "react-icons/hi2";

export default function ContactHero() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="inline-flex items-center rounded-full bg-[#B9FF66] px-5 py-2 font-semibold">
            Contact Us
          </div>
          <h1 className="mt-8 text-5xl font-bold leading-tight text-[#191A23] sm:text-6xl">
            Let's Build Something Amazing Together.
          </h1>
          <p className="mt-8 text-lg leading-9 text-gray-600">
            Tell us about your project and we'll help turn your ideas into
            modern digital experiences.
          </p>
          <div className="mt-10 space-y-4">
            {[
              "Free consultation",
              "24 hour response",
              "Transparent pricing",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3">
                <HiCheckCircle className="text-2xl text-[#B9FF66]" />
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact#form"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#191A23] px-8 py-4 font-semibold text-white transition hover:bg-[#B9FF66] hover:text-black"
            >
              Start Project
              <HiArrowRight />
            </Link>
            <a
              href="tel:+920000000000"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black px-8 py-4 font-semibold"
            >
              <HiPhone />
              Schedule Call
            </a>
          </div>
        </div>
        <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-2xl">
          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-3xl bg-[#191A23] p-6 text-white">
              <HiEnvelope className="text-3xl text-[#B9FF66]" />
              <h3 className="mt-6 text-4xl font-bold">&lt;24h</h3>
              <p>Average Response</p>
            </div>
            <div className="rounded-3xl bg-[#B9FF66] p-6">
              <h3 className="text-4xl font-bold">98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="rounded-3xl bg-gray-100 p-6">
              <h3 className="text-4xl font-bold">150+</h3>
              <p>Projects</p>
            </div>
            <div className="rounded-3xl bg-gray-100 p-6">
              <h3 className="text-4xl font-bold">40+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="mt-8 rounded-3xl bg-[#191A23] p-8 text-white">
            <h3 className="text-3xl font-bold">Ready to discuss your idea?</h3>
            <p className="mt-4 leading-8 text-gray-300">
              Whether it's a website, SaaS platform or mobile app, we'd love to
              hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
