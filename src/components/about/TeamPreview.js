import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { HiEnvelope, HiSparkles, HiArrowRight } from "react-icons/hi2";

import { FaLinkedinIn } from "react-icons/fa6";

import abdulImage from "../../assets/images/team/member1.png";
import aliImage from "../../assets/images/team/member1.png";
import fatimaImage from "../../assets/images/team/member1.png";
import ahmedImage from "../../assets/images/team/member1.png";

const teamMembers = [
  {
    name: "Abdul Moeez",
    role: "Founder & CEO",
    experience: "6+ Years",
    image: abdulImage,
  },

  {
    name: "Muhammad Ali",
    role: "Lead Full Stack Developer",
    experience: "5+ Years",
    image: aliImage,
  },

  {
    name: "Fatima Noor",
    role: "UI / UX Designer",
    experience: "4+ Years",
    image: fatimaImage,
  },

  {
    name: "Ahmed Hassan",
    role: "Backend Engineer",
    experience: "5+ Years",
    image: ahmedImage,
  },
];

function TeamPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 60, 0],
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
          x: [0, -60, 0],
          y: [0, 40, 0],
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
            Meet Our Experts
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            The Minds Behind
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              IN2NEXT
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            A team of passionate engineers, designers and innovators creating
            scalable digital solutions for modern businesses.
          </p>
        </motion.div>

        {/* Team Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
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
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -12,
              }}
              className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-slate-900 shadow-xl transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Experience Badge */}

                <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl">
                  {member.experience}
                </div>

                {/* Bottom Content */}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                    <h3 className="text-2xl font-bold text-white">
                      {member.name}
                    </h3>

                    <p className="mt-2 text-sm text-white/80">{member.role}</p>

                    {/* Social */}

                    <div className="mt-5 flex gap-3">
                      <a
                        href="/"
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white transition duration-300 hover:scale-110"
                      >
                        <FaLinkedinIn />
                      </a>

                      <a
                        href="/"
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white transition duration-300 hover:scale-110"
                      >
                        <HiEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}

        <motion.div
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
            duration: 0.8,
          }}
          className="relative mt-24 overflow-hidden rounded-[40px] bg-slate-950 px-8 py-10 sm:px-10 lg:px-14 lg:py-14"
        >
          {/* CTA Glow */}

          <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                Join Our Team
              </span>

              <h3 className="mt-7 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Great Products Are Built
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  By Great People
                </span>
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                We bring together talented developers, designers and innovators
                who create meaningful digital experiences and scalable
                technology solutions.
              </p>
            </div>

            <Link
              to="/team"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Meet Full Team
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TeamPreview;
