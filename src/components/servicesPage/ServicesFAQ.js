import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HiPlus } from "react-icons/hi2";

const faqs = [
  {
    id: 1,
    question: "What services do you provide?",
    answer:
      "We provide complete digital solutions including web development, mobile app development, UI/UX design, cloud solutions, and digital marketing.",
  },
  {
    id: 2,
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on requirements and complexity. A simple project may take a few weeks, while larger solutions can take several months.",
  },
  {
    id: 3,
    question: "Do you provide custom solutions?",
    answer:
      "Yes, we create fully customized solutions based on your business goals, audience and technical requirements.",
  },
  {
    id: 4,
    question: "Which technologies do you use?",
    answer:
      "We work with modern technologies including React, Next.js, Node.js, Firebase, MongoDB, AWS, Tailwind CSS and other industry tools.",
  },
  {
    id: 5,
    question: "Do you provide support after launch?",
    answer:
      "Yes, we provide maintenance and technical support to ensure your product continues running smoothly.",
  },
  {
    id: 6,
    question: "How can I start my project?",
    answer:
      "Simply contact us and share your requirements. Our team will discuss your idea and suggest the best solution.",
  },
];

function ServicesFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
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
          className="flex flex-col items-center text-center"
        >
          <span className="rounded-full bg-lime-300 px-5 py-2 text-sm font-medium text-black">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Everything you need to know
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            Find answers to common questions about our services, process and
            technology.
          </p>
        </motion.div>

        {/* FAQ */}
        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={faq.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <h3 className="text-lg font-semibold text-black">
                    {faq.question}
                  </h3>

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <HiPlus className="text-xl" />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="mt-5 text-sm leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesFAQ;
