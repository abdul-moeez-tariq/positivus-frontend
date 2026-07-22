import { motion } from "framer-motion";

import {
  HiTrophy,
  HiUsers,
  HiGlobeAlt,
  HiStar,
  HiSparkles,
} from "react-icons/hi2";

const achievements = [
  {
    icon: HiTrophy,
    number: "250+",
    title: "Projects Delivered",
    description:
      "Successfully delivered scalable digital products for startups and businesses.",
  },

  {
    icon: HiUsers,
    number: "120+",
    title: "Happy Clients",
    description:
      "Trusted by businesses through reliable solutions and long-term partnerships.",
  },

  {
    icon: HiGlobeAlt,
    number: "15+",
    title: "Countries Served",
    description: "Helping global businesses build modern digital experiences.",
  },

  {
    icon: HiStar,
    number: "99%",
    title: "Client Satisfaction",
    description:
      "Focused on quality, performance and exceptional user experience.",
  },
];

const journey = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "IN2NEXT started with a vision to help businesses grow through modern technology solutions.",
  },

  {
    year: "2022",
    title: "Expanding Capabilities",
    description:
      "Expanded expertise into full-stack development, UI/UX design and cloud-based solutions.",
  },

  {
    year: "2024",
    title: "Global Growth",
    description:
      "Delivered advanced digital products for clients across different industries worldwide.",
  },

  {
    year: "Today",
    title: "Innovation First",
    description:
      "Creating AI-powered, scalable and future-ready digital products.",
  },
];

function Achievements() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
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
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
            <HiSparkles className="text-lg" />
            Our Achievements
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Milestones That
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Define Our Success
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Our achievements represent years of dedication, innovation and
            commitment towards building reliable digital solutions for our
            clients.
          </p>
        </motion.div>

        {/* Achievement Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
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
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-7 shadow-sm transition duration-500 hover:border-cyan-300 hover:shadow-2xl"
              >
                {/* Hover Glow */}

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg">
                    <Icon className="text-3xl" />
                  </div>

                  <h3 className="mt-7 text-4xl font-black bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {item.number}
                  </h3>

                  <h4 className="mt-3 text-xl font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Journey Section */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          className="mt-24"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
              Our Journey
            </span>

            <h3 className="mt-8 text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
              Growing Through
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovation & Experience
              </span>
            </h3>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              Every step of our journey reflects our commitment to technology,
              creativity and delivering meaningful digital solutions.
            </p>
          </div>

          {/* Timeline */}

          <div className="relative mx-auto mt-16 max-w-4xl">
            {/* Line */}

            <div className="absolute left-6 top-0 hidden h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600 sm:block" />

            <div className="flex flex-col gap-8">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline Dot */}

                  <div className="absolute left-3 top-7 hidden h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-lg sm:flex">
                    <div className="h-3 w-3 rounded-full bg-white" />
                  </div>

                  <div className="group rounded-[32px] border border-gray-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h4>

                      <span className="inline-flex w-fit rounded-full bg-gradient-to-r from-cyan-50 to-purple-50 px-5 py-2 text-sm font-bold text-cyan-600">
                        {item.year}
                      </span>
                    </div>

                    <p className="mt-5 text-base leading-8 text-gray-600">
                      {item.description}
                    </p>

                    <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
