import React from "react";
import { motion } from "framer-motion";

import { HiArrowTrendingUp, HiCheckCircle, HiLightBulb } from "react-icons/hi2";

const solutions = [
  {
    id: 1,
    industry: "Healthcare",
    problem:
      "Healthcare businesses struggle with managing patient data and delivering smooth digital experiences.",
    solution:
      "We build secure healthcare platforms that simplify operations and improve patient engagement.",
    impact: "Better patient experience and improved operational efficiency.",
  },
  {
    id: 2,
    industry: "Finance",
    problem:
      "Financial companies need secure systems with fast and reliable user experiences.",
    solution:
      "We create scalable financial applications with modern security standards.",
    impact: "Faster transactions and increased customer trust.",
  },
  {
    id: 3,
    industry: "E-Commerce",
    problem:
      "Online businesses need better customer experiences and conversion optimization.",
    solution:
      "We develop high-performance e-commerce platforms with smooth shopping journeys.",
    impact: "Higher conversions and improved customer retention.",
  },
];

function IndustrySolutions() {
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
            Industry Solutions
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Solving challenges with smart digital solutions
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            We understand industry-specific challenges and create solutions that
            deliver real business results.
          </p>
        </motion.div>

        {/* Solutions */}
        <div className="mt-14 flex flex-col gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
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
              className="grid gap-8 rounded-3xl border border-gray-200 bg-gray-50 p-8 lg:grid-cols-2 lg:p-12"
            >
              {/* Left */}
              <div className="flex flex-col">
                <span className="w-fit rounded-full bg-black px-5 py-2 text-sm font-medium text-lime-300">
                  {item.industry}
                </span>

                <h3 className="mt-6 text-3xl font-bold text-black">
                  {item.industry} Solutions
                </h3>

                <p className="mt-5 text-base leading-relaxed text-gray-600">
                  {item.problem}
                </p>
              </div>

              {/* Right */}
              <div className="grid gap-5">
                <div className="rounded-2xl bg-white p-6">
                  <div className="flex items-center gap-3">
                    <HiLightBulb className="text-3xl text-lime-500" />

                    <h4 className="text-xl font-bold text-black">
                      Our Solution
                    </h4>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {item.solution}
                  </p>
                </div>

                <div className="rounded-2xl bg-black p-6">
                  <div className="flex items-center gap-3">
                    <HiArrowTrendingUp className="text-3xl text-lime-300" />

                    <h4 className="text-xl font-bold text-white">
                      Business Impact
                    </h4>
                  </div>

                  <div className="mt-4 flex items-start gap-3">
                    <HiCheckCircle className="mt-1 text-xl text-lime-300" />

                    <p className="text-sm leading-relaxed text-gray-300">
                      {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustrySolutions;
