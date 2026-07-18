import { Link } from "react-router-dom";
import { HiArrowRight, HiPhone } from "react-icons/hi2";

export default function ContactCTA() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] bg-[#191A23] px-8 py-14 shadow-2xl sm:px-10 lg:px-16 lg:py-16">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#B9FF66]/20 blur-3xl"></div>
          <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#B9FF66]/10 blur-3xl"></div>
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_.7fr]">
            <div>
              <span className="inline-flex rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
                Let's Work Together
              </span>
              <h2 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Ready To Turn Your Ideas Into Reality?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-gray-300">
                Whether you need a modern website, SaaS platform, mobile
                application or complete digital solution, our team is ready to
                help you build something exceptional.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact#form"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#B9FF66] px-8 py-4 font-semibold text-black transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Your Project <HiArrowRight />
                </Link>
                <a
                  href="tel:+920000000000"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#B9FF66] hover:bg-white hover:text-black"
                >
                  <HiPhone /> Schedule a Call
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl bg-white p-6 text-center">
                <h3 className="text-5xl font-bold text-[#191A23]">150+</h3>
                <p className="mt-2 text-gray-600">Projects</p>
              </div>
              <div className="rounded-3xl bg-[#B9FF66] p-6 text-center">
                <h3 className="text-5xl font-bold text-black">40+</h3>
                <p className="mt-2 text-black">Clients</p>
              </div>
              <div className="rounded-3xl bg-[#B9FF66] p-6 text-center">
                <h3 className="text-5xl font-bold text-black">98%</h3>
                <p className="mt-2 text-black">Satisfaction</p>
              </div>
              <div className="rounded-3xl bg-white p-6 text-center">
                <h3 className="text-5xl font-bold text-[#191A23]">24h</h3>
                <p className="mt-2 text-gray-600">Response</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
