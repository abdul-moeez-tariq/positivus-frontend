import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#191A23]">
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#B9FF66]/20 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-14 px-5 py-20 sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          {/* Breadcrumb */}

          <div className="flex items-center gap-3 text-sm text-gray-300">
            <Link to="/" className="transition hover:text-[#B9FF66]">
              Home
            </Link>

            <span>/</span>

            <span className="text-[#B9FF66]">Contact Us</span>
          </div>

          {/* <span className="inline-flex rounded-full border border-[#B9FF66]/40 bg-[#B9FF66]/10 px-4 py-2 text-sm font-semibold text-[#B9FF66]">
            Contact Us
          </span> */}

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Let's Build Something Amazing Together.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            Whether you need a modern website, scalable web application, mobile
            app, or complete digital solution, we'd love to hear about your
            project.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#B9FF66] px-8 py-4 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Start Your Project
              <HiArrowRight />
            </a>

            <a
              href="tel:+923001234567"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition duration-300 hover:border-[#B9FF66] hover:text-[#B9FF66]"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        <div className="relative flex h-[420px] w-full max-w-lg items-center justify-center">
          <div className="absolute h-80 w-80 animate-pulse rounded-full border border-[#B9FF66]/30"></div>
          <div className="absolute h-60 w-60 rounded-full border border-white/20"></div>
          <div className="flex h-48 w-48 items-center justify-center rounded-full bg-[#B9FF66] text-center text-3xl font-bold text-black shadow-2xl">
            Let's Talk
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
