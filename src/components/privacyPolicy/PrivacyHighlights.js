import React from "react";
import { motion } from "framer-motion";

import {
  HiLockClosed,
  HiEye,
  HiDocumentCheck,
  HiArrowRight,
} from "react-icons/hi2";

const items = [
  {
    title: "Data Protection",
    description:
      "Your personal information is secured with modern technologies and strong protection practices.",
    icon: HiLockClosed,
  },
  {
    title: "Transparency",
    description:
      "We clearly explain how your information is collected, processed and managed.",
    icon: HiEye,
  },
  {
    title: "User Rights",
    description:
      "You have complete control over your personal information and privacy choices.",
    icon: HiDocumentCheck,
  },
];

function PrivacyHighlights() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
            Privacy & Security
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            We Protect Your Data
            <br />
            With Complete Transparency
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            Your trust matters to us. We follow secure practices to protect your
            personal information and provide a safe digital experience.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl"
              >
                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 transition duration-300 group-hover:scale-110">
                  <Icon className="text-3xl text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>

                {/* Link */}

                <button
                  type="button"
                  className="group mt-6 flex items-center gap-3 text-sm font-semibold text-black"
                >
                  Learn More
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white transition duration-300 group-hover:translate-x-1">
                    <HiArrowRight />
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PrivacyHighlights;
