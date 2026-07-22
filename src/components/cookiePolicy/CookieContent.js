import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "What Are Cookies?",
    text: "Cookies are small text files stored on your device when you visit a website or use an application. They help websites remember information about your activity.",
  },

  {
    title: "How We Use Cookies",
    text: "We use cookies to improve functionality, analyze performance, remember user preferences and provide a better experience.",
  },

  {
    title: "Types Of Cookies We Use",
    text: "We may use essential cookies, analytics cookies and functionality cookies to improve our services.",
  },

  {
    title: "Managing Cookies",
    text: "You can control or disable cookies through your browser settings. However, disabling cookies may affect some features.",
  },

  {
    title: "Third Party Cookies",
    text: "Some trusted third-party services may use cookies to provide analytics and improve service quality.",
  },

  {
    title: "Updates To This Policy",
    text: "We may update this Cookie Policy periodically. Any changes will be published on this page.",
  },
];

function CookieContent() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
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
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
            Cookie Information
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl">
            Everything You Need To Know
            <br />
            About Cookies
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            Learn how cookies work, why we use them and how you can manage your
            preferences.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6">
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
                y: -5,
              }}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-sm font-bold text-white">
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

export default CookieContent;
