import React from "react";
import { motion } from "framer-motion";

import {
  HiHeart,
  HiBanknotes,
  HiAcademicCap,
  HiShoppingCart,
  HiHomeModern,
  HiRocketLaunch,
  HiBuildingOffice2,
} from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const industries = [
  {
    id: "01",
    title: "Healthcare",
    description:
      "Digital healthcare platforms that improve patient care, simplify operations and deliver secure experiences.",
    icon: HiHeart,
  },
  {
    id: "02",
    title: "Finance",
    description:
      "Secure financial solutions built for banking, fintech and modern payment ecosystems.",
    icon: HiBanknotes,
  },
  {
    id: "03",
    title: "Education",
    description:
      "Interactive learning platforms designed for students, educators and institutions.",
    icon: HiAcademicCap,
  },
  {
    id: "04",
    title: "E-Commerce",
    description:
      "Scalable online stores focused on performance, conversions and customer engagement.",
    icon: HiShoppingCart,
  },
  {
    id: "05",
    title: "Real Estate",
    description:
      "Smart property solutions that simplify listings, management and customer experiences.",
    icon: HiHomeModern,
  },
  {
    id: "06",
    title: "Startups",
    description:
      "Complete digital products that help startups launch, scale and grow faster.",
    icon: HiRocketLaunch,
  },
];

function Industries() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-20 sm:px-8 lg:px-10">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
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
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
            <HiBuildingOffice2 className="text-lg" />
            Industries We Serve
          </span>

          <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Industry-Focused
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Digital Solutions
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We help businesses across different industries build secure,
            scalable and high-performance digital products.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.article
                key={industry.id}
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-cyan-300 hover:shadow-xl sm:p-8"
              >
                {/* Hover Glow */}
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute right-6 top-6 text-5xl font-black text-slate-100 transition duration-300 group-hover:text-cyan-100">
                  {industry.id}
                </span>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg transition duration-300 group-hover:scale-110">
                  <Icon className="text-3xl" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mt-6 text-xl font-bold text-slate-900 transition duration-300 group-hover:text-cyan-600 sm:text-2xl">
                    {industry.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {industry.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
                      Industry Solution
                    </span>

                    <span className="text-sm font-semibold text-slate-400">
                      {industry.id}
                    </span>
                  </div>

                  {/* Inside Card Line */}
                  <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
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
          className="relative mt-16 overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-center shadow-2xl sm:px-10 lg:px-16"
        >
          {/* Background Glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-xs font-semibold text-white shadow-lg sm:text-sm">
              <HiRocketLaunch className="text-base" />
              Let's Build Together
            </span>

            {/* Heading */}
            <h3 className="mt-5 text-3xl font-black leading-snug text-white sm:text-4xl lg:text-5xl">
              Building Future-Ready
              <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text pb-2 text-transparent">
                Digital Experiences
              </span>
            </h3>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:text-lg">
              Whether you are a startup or enterprise, we create scalable
              digital solutions designed around your goals, customers and
              long-term growth.
            </p>

            {/* Button */}
            <div className="mt-5 flex justify-center">
              <Link
                to="/contact"
                className="group mt-5 flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:shadow-xl sm:px-8 sm:py-4"
              >
                Start Your Project
                <HiArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Industries;
