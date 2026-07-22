import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Acceptance Of Terms",
    text: "By accessing or using our website, applications or services, you agree to be bound by these Terms & Conditions.",
  },

  {
    title: "Use Of Services",
    text: "You agree to use our services only for lawful purposes and avoid any activity that may harm our platform or other users.",
  },

  {
    title: "Intellectual Property",
    text: "All content, designs, logos, graphics and software are owned by us and protected by applicable intellectual property laws.",
  },

  {
    title: "Account Responsibility",
    text: "Users are responsible for maintaining the confidentiality of their account information and activities.",
  },

  {
    title: "Limitation Of Liability",
    text: "We are not responsible for losses caused by misuse of our services or circumstances beyond our control.",
  },

  {
    title: "Changes To Terms",
    text: "We reserve the right to update these terms at any time. Updated terms will be published on this page.",
  },
];

function TermsContent() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      {/* Glow */}

      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

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
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
            Terms Details
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Understanding Our
            <br />
            Terms & Conditions
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            These guidelines explain how our services work and help maintain a
            secure and transparent experience.
          </p>
        </motion.div>

        {/* Content Cards */}

        <div className="mt-12 grid gap-6">
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
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-lg font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black">
                    {section.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-gray-600">
                    {section.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TermsContent;
