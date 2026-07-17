import React from "react";
import { motion } from "framer-motion";

import {
  HiHeart,
  HiBanknotes,
  HiAcademicCap,
  HiShoppingCart,
  HiHomeModern,
  HiRocketLaunch,
} from "react-icons/hi2";

const industries = [
  {
    id: 1,
    title: "Healthcare",
    description:
      "Digital solutions that improve patient experiences and healthcare operations.",
    icon: HiHeart,
  },
  {
    id: 2,
    title: "Finance",
    description:
      "Secure and scalable solutions for modern financial businesses.",
    icon: HiBanknotes,
  },
  {
    id: 3,
    title: "Education",
    description:
      "Technology solutions that make learning easier and more accessible.",
    icon: HiAcademicCap,
  },
  {
    id: 4,
    title: "E-Commerce",
    description:
      "Powerful online platforms that increase sales and customer engagement.",
    icon: HiShoppingCart,
  },
  {
    id: 5,
    title: "Real Estate",
    description:
      "Smart digital platforms for property businesses and customers.",
    icon: HiHomeModern,
  },
  {
    id: 6,
    title: "Startups",
    description:
      "Flexible technology solutions designed for fast-growing companies.",
    icon: HiRocketLaunch,
  },
];

function Industries() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
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
          className="flex flex-col items-center text-center"
        >
          <span className="rounded-full bg-lime-300 px-5 py-2 text-sm font-medium text-black">
            Industries We Serve
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Digital solutions for every industry
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            We help businesses across different industries transform ideas into
            powerful digital experiences.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:border-black hover:bg-black"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-lime-300 transition duration-300 group-hover:bg-lime-300 group-hover:text-black">
                  <Icon className="text-3xl" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-black transition duration-300 group-hover:text-white">
                  {industry.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-600 transition duration-300 group-hover:text-gray-300">
                  {industry.description}
                </p>

                <div className="mt-8 h-1 w-0 rounded-full bg-lime-300 transition duration-500 group-hover:w-full"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Industries;
