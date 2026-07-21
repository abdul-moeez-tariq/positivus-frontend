import { motion } from "framer-motion";

import amazon from "../../assets/images/logos/amazon.png";
import dribbble from "../../assets/images/logos/dribbble.png";
import hubspot from "../../assets/images/logos/hubspot.png";
import notion from "../../assets/images/logos/notion.png";
import netflix from "../../assets/images/logos/netflix.png";
import zoom from "../../assets/images/logos/zoom.png";

function Companies() {
  const companies = [
    {
      id: 1,
      name: "Amazon Web Services",
      logo: amazon,
    },
    {
      id: 2,
      name: "Dribbble",
      logo: dribbble,
    },
    {
      id: 3,
      name: "HubSpot",
      logo: hubspot,
    },
    {
      id: 4,
      name: "Notion",
      logo: notion,
    },
    {
      id: 5,
      name: "Netflix",
      logo: netflix,
    },
    {
      id: 6,
      name: "Zoom",
      logo: zoom,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Background Animation */}

      <motion.div
        animate={{
          x: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

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
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white">
            Trusted Technology
          </span>

          <h2 className="mt-8 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Technologies That Power Our
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Digital Solutions
            </span>
          </h2>

          <p className="mt-8 text-base leading-8 text-gray-600 sm:text-lg">
            At IN2NEXT, we use modern technologies and industry-leading
            platforms to create scalable, secure, and high-performance digital
            experiences for businesses.
          </p>
        </motion.div>

        {/* Logos */}

        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
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
              className="group flex h-24 items-center justify-center rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-9 w-auto object-contain grayscale transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;
