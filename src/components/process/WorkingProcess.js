import { useState } from "react";
import { motion } from "framer-motion";

import ProcessItem from "./ProcessItem";
import processData from "./processData";

function WorkingProcess() {
  const [activeId, setActiveId] = useState(1);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Animated Background */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-10 top-20 h-96 w-96 rounded-full border border-blue-500/10"
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
            Our Process
          </span>

          <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Our structured development process ensures every project moves from
            idea to launch with clear communication, modern technology, and
            exceptional quality.
          </p>
        </motion.div>

        {/* Process List */}

        <div className="mt-12 flex flex-col gap-5">
          {processData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ProcessItem
                item={item}
                isOpen={activeId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkingProcess;
