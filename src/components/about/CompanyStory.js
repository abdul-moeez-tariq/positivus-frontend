import { motion } from "framer-motion";

import {
  HiSparkles,
  HiLightBulb,
  HiRocketLaunch,
  HiChartBar,
  HiCheckCircle,
} from "react-icons/hi2";

const stats = [
  {
    number: "150+",
    label: "Projects Delivered",
  },
  {
    number: "40+",
    label: "Happy Clients",
  },
  {
    number: "5+",
    label: "Years Experience",
  },
];

const values = [
  {
    icon: HiLightBulb,
    title: "Innovation First",
    description:
      "We create modern digital solutions by combining creativity, technology and business understanding.",
  },

  {
    icon: HiRocketLaunch,
    title: "Built To Scale",
    description:
      "Our products are designed with clean architecture, reliability and future growth in mind.",
  },

  {
    icon: HiChartBar,
    title: "Result Driven",
    description:
      "We focus on building solutions that create real value and measurable business impact.",
  },
];

function CompanyStory() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE */}

          <motion.div
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
              duration: 0.8,
            }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
              <HiSparkles className="text-lg" />
              Our Story
            </div>

            {/* Heading */}

            <h2 className="mt-7 max-w-2xl text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Turning Ideas Into
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Powerful Digital Solutions
              </span>
            </h2>

            {/* Description */}

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              IN2NEXT Solutions helps businesses transform their ideas into
              scalable digital products. We build modern web applications,
              AI-powered platforms, mobile solutions and cloud-based systems
              using advanced technologies.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Our approach combines innovation, clean engineering practices and
              business strategy to deliver reliable solutions that grow with our
              clients.
            </p>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-3xl font-black text-transparent">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

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
              duration: 0.8,
            }}
            className="relative"
          >
            {/* Main Card */}

            <div className="relative overflow-hidden rounded-[36px] border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
              {/* Header */}

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Company Vision</p>

                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    Building The Future
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg">
                  <HiRocketLaunch className="text-2xl" />
                </div>
              </div>

              {/* Values */}

              <div className="mt-8 flex flex-col gap-5">
                {values.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
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
                        duration: 0.5,
                        delay: index * 0.15,
                      }}
                      className="rounded-3xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:bg-white hover:shadow-lg"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white">
                          <Icon className="text-xl" />
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Highlight */}

              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 p-5 text-white">
                <HiCheckCircle className="text-3xl shrink-0" />

                <p className="text-sm leading-6">
                  Delivering secure, scalable and innovative digital experiences
                  for businesses worldwide.
                </p>
              </div>
            </div>

            {/* Floating Badge */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -right-5 -top-5 hidden rounded-3xl border border-purple-100 bg-white p-5 shadow-xl lg:block"
            >
              <h4 className="text-3xl font-black text-purple-600">98%</h4>

              <p className="text-sm text-gray-500">Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CompanyStory;
