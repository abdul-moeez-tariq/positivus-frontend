import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

const frontend = [
  {
    icon: <FaReact className="text-5xl text-[#61DBFB]" />,
    title: "React.js",
    description:
      "Building fast, scalable and modern applications with reusable components.",
  },
  {
    icon: <SiNextdotjs className="text-5xl text-black" />,
    title: "Next.js",
    description:
      "High-performance applications with SEO optimization and server rendering.",
  },
  {
    icon: <SiTailwindcss className="text-5xl text-sky-500" />,
    title: "Tailwind CSS",
    description:
      "Creating responsive and premium interfaces with utility-first styling.",
  },
  {
    icon: <FaHtml5 className="text-5xl text-orange-500" />,
    title: "HTML5",
    description:
      "Semantic and accessible structure following modern standards.",
  },
  {
    icon: <FaCss3Alt className="text-5xl text-blue-600" />,
    title: "CSS3",
    description: "Modern layouts, animations and responsive experiences.",
  },
  {
    icon: <FaJs className="text-5xl text-yellow-400" />,
    title: "JavaScript",
    description: "Interactive and dynamic web application development.",
  },
];

const backend = [
  {
    icon: <FaNodeJs className="text-5xl text-green-600" />,
    title: "Node.js",
    description: "Fast and scalable backend applications using JavaScript.",
  },
  {
    icon: <SiExpress className="text-5xl text-black" />,
    title: "Express.js",
    description: "Building secure APIs and backend services.",
  },
  {
    icon: <SiFirebase className="text-5xl text-orange-500" />,
    title: "Firebase",
    description: "Authentication, database, hosting and cloud services.",
  },
  {
    icon: <SiMongodb className="text-5xl text-green-700" />,
    title: "MongoDB",
    description: "Flexible database solutions for scalable applications.",
  },
  {
    icon: <FaDatabase className="text-5xl text-blue-700" />,
    title: "SQL Database",
    description: "Reliable relational database architecture.",
  },
];

const tools = [
  {
    icon: <FaGitAlt className="text-6xl text-red-500" />,
    title: "Git",
  },
  {
    icon: <FaGithub className="text-6xl text-black" />,
    title: "GitHub",
  },
  {
    icon: <FaFigma className="text-6xl text-pink-500" />,
    title: "Figma",
  },
  {
    icon: <SiTypescript className="text-6xl text-blue-700" />,
    title: "TypeScript",
  },
];

function TechnologyCard({ item }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-xl"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gray-50">
        {item.icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-black">{item.title}</h3>

      <p className="mt-4 leading-relaxed text-gray-600">{item.description}</p>
    </motion.div>
  );
}

function Technologies() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
            Technologies We Use
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Modern Technology
            <br />
            Powerful Solutions
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            We use modern technologies to build secure, scalable and
            high-performance digital products.
          </p>
        </div>

        {/* Frontend */}

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-black">
            Frontend Development
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {frontend.map((item, index) => (
              <TechnologyCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Backend */}

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-black">Backend & Database</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {backend.map((item, index) => (
              <TechnologyCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Tools */}

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-black">Tools & Workflow</h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center"
              >
                {item.icon}

                <h4 className="mt-5 text-xl font-bold text-black">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-black p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
                Build With Us
              </span>

              <h3 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Technology That Drives Growth
              </h3>

              <p className="mt-5 text-gray-300">
                Combining creativity and modern technology to build future-ready
                digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl bg-white p-6 text-center">
                <h4 className="text-4xl font-bold text-black">15+</h4>

                <p className="mt-2 text-gray-600">Technologies</p>
              </div>

              <div className="rounded-3xl bg-[#B9FF66] p-6 text-center">
                <h4 className="text-4xl font-bold text-black">150+</h4>

                <p className="mt-2 text-black">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
