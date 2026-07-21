import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import TeamCard from "./TeamCard";
import teamData from "./teamData";

function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background Element */}

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
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
            Our Team
          </span>

          <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Meet the talented professionals behind IN2NEXT. Our team combines
            creativity, engineering expertise, and innovative thinking to build
            powerful digital solutions for modern businesses.
          </p>
        </motion.div>

        {/* Team Cards */}

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {teamData.slice(0, 6).map((member, index) => (
            <motion.div
              key={member.id}
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
                delay: index * 0.1,
              }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

        {/* Button */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-12 flex justify-center lg:justify-end"
        >
          <Link
            to="/team"
            className="rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            Meet Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Team;
