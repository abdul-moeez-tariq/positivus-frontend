import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { HiArrowRight, HiRocketLaunch, HiSparkles } from "react-icons/hi2";

function AboutCTA() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
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
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#071120] via-[#0B172A] to-[#111827] px-8 py-14 shadow-xl sm:px-12 lg:px-16"
        >
          {/* Glow */}

          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white">
                <HiSparkles className="text-lg" />
                Let's Build Together
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready To Build Your Next Digital Product?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
                Partner with IN2NEXT to transform your ideas into modern,
                scalable and high-performance digital solutions that help your
                business grow.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Your Project
                  <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/services"
                  className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

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
                  duration: 3,
                  repeat: Infinity,
                }}
                className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 p-1 sm:h-80 sm:w-80"
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#071120]">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
                      <HiRocketLaunch className="text-4xl text-white" />
                    </div>

                    <h3 className="mt-6 text-3xl font-bold text-white">
                      Grow Faster
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      With IN2NEXT Solutions
                    </p>
                  </div>
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
