import React from "react";
import { motion } from "framer-motion";

import { HiCircleStack, HiArrowRight } from "react-icons/hi2";

import { Link } from "react-router-dom";

function CookieHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Content */}

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
            duration: 0.7,
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
            <HiCircleStack className="text-lg" />
            Cookie Policy
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Understanding How
            <br />
            We Use Cookies
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            We use cookies and similar technologies to improve your experience,
            analyze website performance and provide secure digital services.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Contact Us
              <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700">
              Updated July 2026
            </div>
          </div>
        </motion.div>

        {/* Visual Card */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow Circle */}

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 blur-3xl opacity-40" />

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-2xl"
            >
              <div className="flex h-60 w-60 flex-col items-center justify-center rounded-full bg-white text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
                  <HiCircleStack className="text-5xl text-white" />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-black">
                  Safe Data
                </h3>

                <p className="mt-2 text-sm text-gray-500">Secure Experience</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CookieHero;
