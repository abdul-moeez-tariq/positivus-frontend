import React from "react";
import { motion } from "framer-motion";

import {
  HiMagnifyingGlass,
  HiClipboardDocumentList,
  HiPaintBrush,
  HiCodeBracket,
  HiBugAnt,
  HiRocketLaunch,
} from "react-icons/hi2";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We analyze your business goals, audience and project requirements to create the right strategy.",
    icon: HiMagnifyingGlass,
  },
  {
    id: 2,
    title: "Planning",
    description:
      "We prepare a detailed roadmap, technical structure and development approach.",
    icon: HiClipboardDocumentList,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Our designers create intuitive and engaging interfaces focused on user experience.",
    icon: HiPaintBrush,
  },
  {
    id: 4,
    title: "Development",
    description:
      "Our developers transform designs into fast, scalable and powerful solutions.",
    icon: HiCodeBracket,
  },
  {
    id: 5,
    title: "Testing",
    description:
      "We test performance, security and functionality to deliver a reliable product.",
    icon: HiBugAnt,
  },
  {
    id: 6,
    title: "Launch",
    description:
      "We deploy your product and provide support for smooth business growth.",
    icon: HiRocketLaunch,
  },
];

function DevelopmentProcess() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
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
            Our Process
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            A simple process that turns ideas into reality
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            From the first discussion to final launch, we follow a structured
            approach to deliver high-quality digital products.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
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
                className="relative rounded-3xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:border-black hover:bg-white hover:shadow-xl"
              >
                {/* Number */}
                <div className="absolute right-6 top-6 text-5xl font-bold text-gray-200">
                  0{step.id}
                </div>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-lime-300">
                  <Icon className="text-3xl" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-black">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProcess;
