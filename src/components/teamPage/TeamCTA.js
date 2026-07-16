import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

function TeamCTA() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-black bg-neutral-900 px-8 py-12 shadow-[0_8px_0_0_#000] sm:px-12 lg:px-16">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#B9FF66]/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#B9FF66]/10 blur-3xl"></div>

          <div className="relative flex flex-col items-center gap-8 text-center">
            <span className="rounded-full border border-[#B9FF66]/40 bg-[#B9FF66]/10 px-4 py-2 text-sm font-medium text-[#B9FF66]">
              Join Our Journey
            </span>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Build Something Amazing Together?
            </h2>

            <p className="max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Whether you're looking to hire our team, collaborate on an
              exciting project, or discuss your next big idea, we're here to
              help turn your vision into reality.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#B9FF66] px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Contact Us
                <IoArrowForward />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-[#B9FF66] hover:bg-[#B9FF66] hover:text-black"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamCTA;
