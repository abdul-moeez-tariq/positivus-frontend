import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

function Newsletter() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="relative overflow-hidden rounded-[36px] border border-gray-200 bg-gray-50 p-8 sm:p-10 lg:p-12"
    >
      {/* Animated Glow */}

      <motion.div
        animate={{
          x: [0, 60, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Content */}

        <div className="max-w-xl">
          <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white">
            Newsletter
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Stay Updated With Latest Technology Insights
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Subscribe to receive latest updates about web development, software
            solutions, technology trends, and digital innovation from <span className="font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">IN2NEXT.</span>
          </p>
        </div>

        {/* Form */}

        <form className="w-full max-w-xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-2xl border border-gray-300 bg-white px-6 py-4 text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />

            <button
              type="submit"
              className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Subscribe
              <HiOutlineArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            No spam. Only valuable updates and technology insights.
          </p>
        </form>
      </div>
    </motion.section>
  );
}

export default Newsletter;
