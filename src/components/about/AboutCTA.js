import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiArrowRight,
  HiRocketLaunch,
  HiCheckCircle,
} from "react-icons/hi2";

function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-10 sm:px-6">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative overflow-hidden rounded-[40px] bg-slate-950 px-8 py-12 shadow-2xl sm:px-12 lg:px-16 lg:py-16"
        >
          {/* Animated Glow */}

          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                <HiRocketLaunch className="text-lg" />
                Let's Build Together
              </span>

              <h2 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Turn Your Ideas Into
                <span className="block pb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Partner with IN2NEXT to create scalable software, modern
                applications and future-ready digital experiences that help your
                business grow faster.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Start Your Project
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                    <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  to="/services"
                  className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-gray-900"
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust Points */}

              <div className="mt-10 flex flex-wrap gap-3">
                {["Expert Team", "Modern Technology", "Scalable Solutions"].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-200"
                    >
                      <HiCheckCircle className="text-cyan-400" />

                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Visual */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
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
              className="flex justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 blur-2xl opacity-40" />

                <div className="relative rounded-[40px] border border-white/20 bg-white/10 p-8 backdrop-blur-xl sm:p-10">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-xl">
                    <HiRocketLaunch className="text-5xl text-white" />
                  </div>

                  <h3 className="mt-8 text-4xl font-black text-white">
                    Grow Faster
                  </h3>

                  <p className="mt-3 text-slate-300">With IN2NEXT Solutions</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutCTA;
