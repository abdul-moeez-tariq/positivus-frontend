import React from "react";
import { motion } from "framer-motion";

import { HiCheck, HiXMark } from "react-icons/hi2";

const comparisonData = [
  {
    feature: "Landing Page Development",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Custom Web Application",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "UI/UX Design",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Dedicated Support",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Advanced Security",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "Custom Integrations",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Analytics Dashboard",
    starter: false,
    professional: true,
    enterprise: true,
  },
];

function StatusIcon({ available }) {
  return available ? (
    <HiCheck className="text-xl text-green-600" />
  ) : (
    <HiXMark className="text-xl text-gray-400" />
  );
}

function PricingComparison() {
  return (
    <section className="bg-gray-50 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
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
            Compare Plans
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Find the right plan for your needs
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            Compare features and choose the solution that fits your business
            goals.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <div className="mt-14 hidden overflow-hidden rounded-3xl border border-gray-200 bg-white lg:block">
          {/* Header */}
          <div className="grid grid-cols-4 bg-black px-8 py-6 text-white">
            <p className="font-semibold">Features</p>

            <p className="text-center font-semibold">Starter</p>

            <p className="rounded-full bg-lime-300 py-2 text-center font-semibold text-black">
              Professional
            </p>

            <p className="text-center font-semibold">Enterprise</p>
          </div>

          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 items-center border-b border-gray-200 px-8 py-5"
            >
              <p className="text-sm font-medium text-black">{item.feature}</p>

              <div className="flex justify-center">
                <StatusIcon available={item.starter} />
              </div>

              <div className="flex justify-center">
                <StatusIcon available={item.professional} />
              </div>

              <div className="flex justify-center">
                <StatusIcon available={item.enterprise} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="mt-14 grid gap-6 lg:hidden">
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
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
              className="rounded-3xl border border-gray-200 bg-white p-6"
            >
              <h3 className="text-lg font-bold text-black">{item.feature}</h3>

              <div className="mt-5 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs text-gray-500">Starter</p>

                  <StatusIcon available={item.starter} />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs text-gray-500">Pro</p>

                  <StatusIcon available={item.professional} />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs text-gray-500">Enterprise</p>

                  <StatusIcon available={item.enterprise} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingComparison;
