import React from "react";
import { motion } from "framer-motion";

import {
  HiDocumentText,
  HiShieldCheck,
  HiCheckCircle,
  HiArrowRight,
} from "react-icons/hi2";

import { Link } from "react-router-dom";

function TermsHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex flex-col"
        >
          <span className="flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
            <HiDocumentText className="text-lg" />
            Terms & Conditions
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Clear Rules.
            <br />
            Transparent
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Partnerships.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Our terms explain how you can use our services, your
            responsibilities and the guidelines that help us create a secure and
            reliable experience.
          </p>

          {/* Points */}

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <HiCheckCircle className="text-2xl text-cyan-500" />

              <p className="text-gray-700">Transparent service guidelines</p>
            </div>

            <div className="flex items-center gap-3">
              <HiShieldCheck className="text-2xl text-blue-600" />

              <p className="text-gray-700">Secure and trusted platform usage</p>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Contact Us
              <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-gray-700 shadow-sm">
              Last Updated: July 2026
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}

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
            duration: 0.8,
          }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Main Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
                <HiDocumentText className="text-5xl text-white" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-black">
                Service Agreement
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-600">
                Understanding our policies helps create a better experience for
                everyone.
              </p>

              <div className="mt-6 rounded-2xl bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <HiShieldCheck className="text-2xl text-cyan-500" />

                  <p className="text-sm font-semibold text-black">
                    Protected & Verified
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="absolute -right-6 -top-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-4 text-center text-white shadow-xl"
            >
              <p className="text-2xl font-bold">100%</p>

              <p className="text-xs">Transparency</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TermsHero;
