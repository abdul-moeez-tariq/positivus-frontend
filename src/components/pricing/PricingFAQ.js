import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HiPlus, HiMinus } from "react-icons/hi2";

const faqs = [
  {
    id: 1,
    question: "Which pricing plan is right for my business?",
    answer:
      "It depends on your business goals and project requirements. Our Starter plan works for small projects, Professional is ideal for growing businesses, and Enterprise is designed for large-scale solutions.",
  },
  {
    id: 2,
    question: "Can I customize a pricing plan?",
    answer:
      "Yes. We create custom solutions according to your business needs, features, timeline and technical requirements.",
  },
  {
    id: 3,
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We provide maintenance and support services to ensure your digital solution continues working smoothly.",
  },
  {
    id: 4,
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on complexity and requirements. Small projects may take a few weeks while larger solutions require more time.",
  },
  {
    id: 5,
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade your solution as your business grows and your requirements increase.",
  },
];

function PricingFAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
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
          className="flex flex-col items-center text-center"
        >
          <span className="rounded-full bg-lime-300 px-5 py-2 text-sm font-medium text-black">
            FAQ
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            Find answers to common questions about our pricing, services and
            process.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mt-14 flex flex-col gap-5">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-6"
            >
              <button
                onClick={() => setActive(active === faq.id ? null : faq.id)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <h3 className="text-lg font-bold text-black sm:text-xl">
                  {faq.question}
                </h3>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-lime-300">
                  {active === faq.id ? (
                    <HiMinus className="text-xl" />
                  ) : (
                    <HiPlus className="text-xl" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {active === faq.id && (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingFAQ;
