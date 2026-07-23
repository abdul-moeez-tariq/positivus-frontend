import React from "react";
import { motion } from "framer-motion";

import {
  HiMagnifyingGlass,
  HiClipboardDocumentList,
  HiPaintBrush,
  HiCodeBracket,
  HiBugAnt,
  HiRocketLaunch,
  HiClipboardDocumentCheck,
} from "react-icons/hi2";

const processSteps = [
  {
    id: "01",
    title: "Discovery",
    description:
      "We analyze your business goals, audience and technical requirements to create a strong project foundation.",
    icon: HiMagnifyingGlass,
  },
  {
    id: "02",
    title: "Strategy & Planning",
    description:
      "We define architecture, roadmap and execution strategy to ensure smooth project delivery.",
    icon: HiClipboardDocumentList,
  },
  {
    id: "03",
    title: "UI / UX Design",
    description:
      "We create modern, intuitive and conversion-focused interfaces that deliver excellent user experiences.",
    icon: HiPaintBrush,
  },
  {
    id: "04",
    title: "Development",
    description:
      "Our team builds scalable and secure digital solutions using modern technologies and best practices.",
    icon: HiCodeBracket,
  },
  {
    id: "05",
    title: "Testing & QA",
    description:
      "We perform detailed testing to ensure quality, performance and reliability before launch.",
    icon: HiBugAnt,
  },
  {
    id: "06",
    title: "Launch & Support",
    description:
      "We deploy your product and provide continuous support for long-term success.",
    icon: HiRocketLaunch,
  },
];

function DevelopmentProcess() {
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
            <HiClipboardDocumentCheck className="text-lg" />
            Development Process
          </span>

          <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Our Proven
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Workflow
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            From idea validation to final deployment, our structured process
            helps deliver scalable, secure and high-quality digital products.
          </p>
        </motion.div>

        {/* Process Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-cyan-300 hover:shadow-xl sm:p-8"
              >
                {/* Glow */}
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Icon + Step */}
                <div className="relative flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg transition duration-300 group-hover:scale-110">
                    <Icon className="text-3xl" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
                      Step {step.id}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-slate-900 transition duration-300 group-hover:text-cyan-600 sm:text-2xl">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="relative mt-6 text-sm leading-7 text-slate-600 sm:text-base">
                  {step.description}
                </p>

                {/* Inside Card Footer */}
                <div className="relative mt-8">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProcess;
