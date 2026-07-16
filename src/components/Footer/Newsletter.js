import { HiOutlineArrowRight } from "react-icons/hi";

function Newsletter() {
  return (
    <section>
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-[#B9FF66]/40 hover:bg-white/10 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-[#B9FF66]/20 px-4 py-2 text-sm font-medium text-[#B9FF66]">
              Newsletter
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Stay Updated With Our Latest Insights
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-300">
              Subscribe to our newsletter and receive web development tips,
              industry updates, technology trends, and exclusive resources
              directly in your inbox.
            </p>
          </div>

          {/* Right Content */}
          <form className="w-full max-w-xl">
            <div className="flex flex-col gap-5 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-2xl border border-white/20 bg-transparent px-6 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#B9FF66]"
              />

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#B9FF66] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Subscribe
                <HiOutlineArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <p className="mt-5 text-sm text-gray-400">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
