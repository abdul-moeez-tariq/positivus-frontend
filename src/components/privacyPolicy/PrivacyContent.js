import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    text: "We may collect personal information such as your name, email address, device information and usage data when you use our services.",
  },
  {
    title: "How We Use Your Information",
    text: "Your information helps us improve our services, provide support, communicate updates and deliver a better user experience.",
  },
  {
    title: "Data Security",
    text: "We implement appropriate security measures to protect your personal information from unauthorized access.",
  },
  {
    title: "Third Party Services",
    text: "We may use trusted third-party services that help us operate, analyze and improve our applications.",
  },
  {
    title: "Changes To Privacy Policy",
    text: "We may update this privacy policy from time to time. Any changes will be reflected on this page.",
  },
];

function PrivacyContent() {
  return (
    <section className="relative overflow-hidden bg-gray-50 px-6 py-20 sm:px-10 lg:px-16">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
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
            duration: 0.6,
          }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
            Privacy Details
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Understanding Our
            <br />
            Privacy Practices
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            Learn how we collect, use and protect your information while
            maintaining transparency and trust.
          </p>
        </motion.div>

        {/* Content Cards */}

        <div className="mt-14 flex flex-col gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
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
                y: -6,
              }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-black">{section.title}</h3>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrivacyContent;
