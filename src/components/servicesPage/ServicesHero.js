import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-lime-200 opacity-40 blur-3xl"></div>

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-green-100 opacity-40 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col"
        >
          <span className="w-fit rounded-full bg-lime-300 px-5 py-2 text-sm font-medium text-black">
            Our Services
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Digital solutions that help your business
            <span className="text-green-600">grow faster</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            We create powerful digital experiences through modern web
            development, mobile applications, UI/UX design, and scalable
            technology solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="group flex items-center gap-3 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-green-600"
            >
              Explore Services
              <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-black px-7 py-3 text-sm font-medium text-black transition duration-300 hover:bg-black hover:text-white"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="text-2xl font-bold text-black">50+</h3>

              <p className="text-sm text-gray-500">Projects</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="text-2xl font-bold text-black">10+</h3>

              <p className="text-sm text-gray-500">Experts</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="text-2xl font-bold text-black">99%</h3>

              <p className="text-sm text-gray-500">Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-black sm:h-96 sm:w-96">
            <div className="absolute inset-8 rounded-full bg-green-400"></div>

            <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-3xl bg-white shadow-xl">
              <div className="text-center">
                <p className="text-4xl font-bold text-black">360°</p>

                <p className="text-sm text-gray-500">Digital Growth</p>
              </div>
            </div>
          </div>

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute right-0 top-10 rounded-2xl bg-white px-5 py-4 shadow-lg"
          >
            <p className="text-sm font-medium text-black">🚀 Fast Solutions</p>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute bottom-10 left-0 rounded-2xl bg-black px-5 py-4 shadow-lg"
          >
            <p className="text-sm font-medium text-white">Modern Technology</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesHero;
