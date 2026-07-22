import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { HiArrowRight, HiChatBubbleLeftRight } from "react-icons/hi2";

function TermsCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      {/* Background Glow */}

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
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
            duration: 0.6,
          }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 p-8 text-center sm:p-12"
        >
          {/* Inner Card */}

          <div className="rounded-3xl bg-white/95 px-6 py-10 sm:px-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
              <HiChatBubbleLeftRight className="text-3xl text-white" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl">
              Need More Information About Terms?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              If you have any questions about our terms and conditions, feel
              free to contact our team. We are always ready to assist you.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Contact Us
              <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TermsCTA;
