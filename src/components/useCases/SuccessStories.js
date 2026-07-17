import React from "react";
import { motion } from "framer-motion";

import { HiArrowTrendingUp, HiCheckBadge, HiSparkles } from "react-icons/hi2";

const stories = [
  {
    id: 1,
    company: "Healthcare Platform",
    title: "Improving digital patient experiences",
    description:
      "We helped a healthcare company build a modern digital platform that simplified patient management and improved communication.",
    results: [
      "40% faster operations",
      "Better patient engagement",
      "Improved workflow management",
    ],
    growth: "+40%",
  },
  {
    id: 2,
    company: "E-Commerce Brand",
    title: "Increasing online sales performance",
    description:
      "A scalable shopping experience helped the business improve conversions and deliver a smoother customer journey.",
    results: [
      "2x conversion growth",
      "Faster website performance",
      "Higher customer retention",
    ],
    growth: "2x",
  },
  {
    id: 3,
    company: "Finance Solution",
    title: "Building secure financial experiences",
    description:
      "We developed a reliable digital solution that improved security, speed and customer trust.",
    results: [
      "Enhanced security",
      "Faster transactions",
      "Better user satisfaction",
    ],
    growth: "+65%",
  },
];

function SuccessStories() {
  return (
    <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
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
            Success Stories
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Real results from real solutions
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-400 sm:text-lg">
            Discover how our digital solutions helped businesses overcome
            challenges and achieve measurable growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
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
              className="flex flex-col rounded-3xl border border-gray-800 bg-zinc-900 p-8"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-300 text-black">
                <HiSparkles className="text-3xl" />
              </div>

              <span className="mt-8 text-sm font-medium text-lime-300">
                {story.company}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {story.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {story.description}
              </p>

              {/* Growth */}
              <div className="mt-8 flex items-center gap-4 rounded-2xl bg-black p-5">
                <HiArrowTrendingUp className="text-3xl text-lime-300" />

                <div>
                  <p className="text-3xl font-bold text-white">
                    {story.growth}
                  </p>

                  <p className="text-xs text-gray-400">Business Growth</p>
                </div>
              </div>

              {/* Results */}
              <div className="mt-6 flex flex-col gap-3">
                {story.results.map((result, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-3">
                    <HiCheckBadge className="text-xl text-lime-300" />

                    <p className="text-sm text-gray-300">{result}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
