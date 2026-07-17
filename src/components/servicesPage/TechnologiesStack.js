import React from "react";
import { motion } from "framer-motion";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import { HiCloud } from "react-icons/hi2";

const technologies = [
  {
    id: 1,
    name: "React",
    description: "Modern frontend development",
    icon: SiReact,
  },
  {
    id: 2,
    name: "Next.js",
    description: "High performance web apps",
    icon: SiNextdotjs,
  },
  {
    id: 3,
    name: "Node.js",
    description: "Powerful backend solutions",
    icon: SiNodedotjs,
  },
  {
    id: 4,
    name: "Firebase",
    description: "Realtime cloud services",
    icon: SiFirebase,
  },
  {
    id: 5,
    name: "AWS",
    description: "Scalable cloud infrastructure",
    icon: HiCloud,
  },
  {
    id: 6,
    name: "MongoDB",
    description: "Flexible database solutions",
    icon: SiMongodb,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    description: "Modern UI development",
    icon: SiTailwindcss,
  },
  {
    id: 8,
    name: "Framer Motion",
    description: "Smooth web animations",
    icon: SiFramer,
  },
];

function TechnologiesStack() {
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
            Technologies We Use
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Building with powerful modern technologies
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-300 sm:text-lg">
            We use reliable and scalable technologies to create fast, secure and
            future-ready digital solutions.
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <motion.div
                key={technology.id}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-gray-800 bg-zinc-900 p-6 transition duration-300 hover:border-lime-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-300 text-black transition duration-300 group-hover:rotate-6">
                  <Icon className="text-3xl" />
                </div>

                <h3 className="mt-7 text-xl font-bold text-white">
                  {technology.name}
                </h3>

                <p className="mt-3 text-sm text-gray-400">
                  {technology.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechnologiesStack;
