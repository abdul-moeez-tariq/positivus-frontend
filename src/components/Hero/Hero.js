import { motion } from "framer-motion";

import heroImage from "../../assets/images/hero/heroImage.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Animated Background */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-20 h-72 w-72 rounded-full border border-blue-500/10"
      />

      {/* Hero Content */}

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left"
          >
            <div className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20">
              IN2NEXT Solutions
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Building Digital Experiences That Drive
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Business Growth
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              We help businesses transform ideas into powerful digital solutions
              with modern web development, innovative technology, and scalable
              strategies.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Start Your Project
              </a>

              <a
                href="/services"
                className="rounded-2xl border border-gray-200 px-8 py-4 text-lg font-semibold text-gray-800 transition-all duration-300 hover:border-blue-500 hover:text-blue-600"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex w-full justify-center lg:w-1/2"
          >
            <img
              src={heroImage}
              alt="IN2NEXT Solutions"
              className="w-full max-w-xs sm:max-w-md lg:max-w-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
