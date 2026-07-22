import React from "react";
import { motion } from "framer-motion";

import {
  HiShieldCheck,
  HiLockClosed,
  HiSparkles,
  HiServerStack,
  HiArrowRight,
} from "react-icons/hi2";

import { Link } from "react-router-dom";

function PrivacyHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      {/* Gradient Background */}

      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}

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
            className="flex flex-col"
          >
            {/* Badge */}

            <div className="flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2">
              <HiSparkles className="text-white" />

              <span className="text-sm font-semibold text-white">
                Privacy & Security
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-7 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
              Your Privacy Is
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              At IN2NEXT Solutions, we respect your privacy and protect your
              personal information with secure technology and transparent
              practices.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105"
              >
                Contact Us
                <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold text-black">
                Last Updated July 2026
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
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
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
                  <HiShieldCheck className="text-4xl text-white" />
                </div>

                <span className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-blue-600">
                  Protected
                </span>
              </div>

              <h3 className="mt-8 text-3xl font-bold text-black">
                Privacy Protection
              </h3>

              <p className="mt-3 text-gray-600">
                Your information is handled with secure and reliable systems.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-5">
                  <HiLockClosed className="text-3xl text-blue-600" />

                  <div>
                    <h4 className="font-bold text-black">Secure Data</h4>

                    <p className="text-sm text-gray-500">
                      Modern protection standards
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-5">
                  <HiServerStack className="text-3xl text-purple-600" />

                  <div>
                    <h4 className="font-bold text-black">Safe Storage</h4>

                    <p className="text-sm text-gray-500">
                      Responsible data handling
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Gradient Card */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -right-5 top-10 hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-4 shadow-xl lg:block"
            >
              <p className="text-2xl font-bold text-white">100%</p>

              <p className="text-xs text-white">Secure</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyHero;
