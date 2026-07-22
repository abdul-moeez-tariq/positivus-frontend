import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiArrowRight,
  HiSparkles,
  HiCheckCircle,
  HiCodeBracket,
  HiCpuChip,
} from "react-icons/hi2";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-32 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >
            {/* Badge */}

            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
                <HiSparkles className="text-lg" />
                About IN2NEXT Solutions
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="mt-8 text-4xl font-black leading-loose text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Building
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text pb-2 text-transparent">
                Intelligent
              </span>
              Digital Products
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              IN2NEXT Solutions helps startups and businesses transform ideas
              into scalable web platforms, AI-powered applications, mobile
              solutions, and cloud-based systems using modern technologies and
              industry best practices.
            </motion.p>

            {/* Features */}

            <motion.div variants={fadeUp} className="mt-8 grid gap-4">
              {[
                {
                  icon: <HiCodeBracket />,
                  title: "Modern Full Stack Development",
                },

                {
                  icon: <HiCpuChip />,
                  title: "AI Powered Digital Solutions",
                },

                {
                  icon: <HiCheckCircle />,
                  title: "Scalable Cloud Architecture",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-xl text-white">
                    {item.icon}
                  </div>

                  <h3 className="text-sm font-semibold text-gray-800 sm:text-base">
                    {item.title}
                  </h3>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1"
              >
                Let's Build Together
                <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center rounded-2xl border border-gray-200 bg-white px-7 py-3 font-semibold text-gray-700 shadow-sm transition duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative flex justify-center"
          >
            {/* Main Dashboard */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative w-full max-w-lg rounded-3xl border border-gray-200 bg-white shadow-xl"
            >
              {/* Dashboard Header */}

              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                <div>
                  <p className="text-sm text-gray-500">Company Overview</p>

                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    IN2NEXT Dashboard
                  </h3>
                </div>

                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />

                  <span className="h-3 w-3 rounded-full bg-yellow-400" />

                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Dashboard Body */}

              <div className="p-6">
                {/* Progress Card */}

                <div className="rounded-3xl bg-gray-50 p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">
                      Project Delivery
                    </h4>

                    <span className="font-bold text-blue-600">96%</span>
                  </div>

                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-200">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: "96%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.2,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"
                    />
                  </div>
                </div>

                {/* Stats */}

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-3xl border border-gray-200 p-5">
                    <h3 className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-3xl font-black text-transparent">
                      120+
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">Happy Clients</p>
                  </div>

                  <div className="rounded-3xl border border-gray-200 p-5">
                    <h3 className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-3xl font-black text-transparent">
                      5+
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      Years Experience
                    </p>
                  </div>
                </div>

                {/* Technology Stack */}

                <div className="mt-5 rounded-3xl border border-gray-200 p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-900">
                      Technology Stack
                    </h4>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                      Active
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {[
                      "React.js",
                      "Next.js",
                      "Node.js",
                      "MongoDB",
                      "Firebase",
                      "AI",
                    ].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{
                          y: -3,
                        }}
                        className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Active Projects */}

                <div className="mt-5 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/80">Active Projects</p>

                      <h3 className="mt-2 text-4xl font-black">24</h3>
                    </div>

                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40"
                    >
                      <HiSparkles className="text-3xl" />
                    </motion.div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/90">
                    Building scalable web applications, AI-powered systems,
                    mobile apps, cloud platforms and enterprise solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge Desktop Only */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-6 top-10 hidden rounded-2xl border border-cyan-100 bg-white p-4 shadow-xl xl:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white">
                  <HiCpuChip className="text-xl" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">AI Ready</h4>

                  <p className="text-xs text-gray-500">Future Solutions</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-6 bottom-10 hidden rounded-2xl border border-purple-100 bg-white p-4 shadow-xl xl:block"
            >
              <h4 className="text-3xl font-black text-purple-600">98%</h4>

              <p className="text-xs text-gray-500">Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
