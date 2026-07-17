import React from "react";
import { motion } from "framer-motion";

import { HiComputerDesktop, HiChartBar, HiCog6Tooth } from "react-icons/hi2";

const items = [
  {
    title: "Better Experience",
    description:
      "Cookies help us remember preferences and improve your browsing experience.",
    icon: HiComputerDesktop,
  },
  {
    title: "Analytics",
    description:
      "We use cookies to understand usage patterns and improve our services.",
    icon: HiChartBar,
  },
  {
    title: "Service Improvement",
    description:
      "Cookies help us optimize performance and deliver better features.",
    icon: HiCog6Tooth,
  },
];

function CookieHighlights() {
  return (
    <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
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
              className="rounded-3xl border border-gray-800 bg-zinc-900 p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-300 text-black">
                <Icon className="text-3xl" />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default CookieHighlights;
