import React from "react";
import { motion } from "framer-motion";

import {
  HiShieldCheck,
  HiBolt,
  HiUsers,
  HiChartBar,
  HiWrenchScrewdriver,
  HiCloudArrowUp,
} from "react-icons/hi2";

const features = [
  {
    id: 1,
    title: "Secure Solutions",
    description:
      "We build secure digital products with reliable architecture and best practices.",
    icon: HiShieldCheck,
  },
  {
    id: 2,
    title: "High Performance",
    description:
      "Optimized solutions that deliver fast and smooth user experiences.",
    icon: HiBolt,
  },
  {
    id: 3,
    title: "Dedicated Support",
    description:
      "Get continuous support from our experienced development team.",
    icon: HiUsers,
  },
  {
    id: 4,
    title: "Business Analytics",
    description:
      "Track performance and make better decisions with useful insights.",
    icon: HiChartBar,
  },
  {
    id: 5,
    title: "Custom Development",
    description:
      "Solutions designed according to your specific business requirements.",
    icon: HiWrenchScrewdriver,
  },
  {
    id: 6,
    title: "Scalable Technology",
    description: "Future-ready solutions that grow with your business.",
    icon: HiCloudArrowUp,
  },
];

function PricingFeatures() {
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
            Why Choose Us
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Everything you need to grow your business
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            Our plans are designed to provide flexibility, reliability and
            long-term business value.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
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
                className="group rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-black hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-lime-300 transition duration-300 group-hover:bg-lime-300 group-hover:text-black">
                  <Icon className="text-3xl" />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-black">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingFeatures;
