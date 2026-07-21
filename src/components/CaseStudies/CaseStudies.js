import { motion } from "framer-motion";

import CaseStudyCard from "./CaseStudyCard";
import caseStudiesData from "./caseStudiesData";

function CaseStudies() {
  return (
    <section
      id="use-cases"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background Animation */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-20 top-20 h-72 w-72 rounded-full border border-blue-500/10"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
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
            duration: 0.7,
          }}
          className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10"
        >
          <span className="w-fit rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-3 text-3xl font-bold text-white">
            Case Studies
          </span>

          <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Explore our successful projects where we combine innovative
            technology, scalable architecture, and modern design to create
            impactful digital solutions.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{
                opacity: 0,
                y: 60,
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
                delay: index * 0.15,
              }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
