import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";

export default function ContactFAQ() {
  const faqs = [
    {
      question: "How quickly do you respond?",
      answer:
        "We usually respond to all inquiries within 24 hours. For urgent projects, we aim to reply even sooner.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. We work with startups, agencies, and enterprises from all over the world through online meetings and remote collaboration.",
    },
    {
      question: "Can you sign an NDA before starting?",
      answer:
        "Absolutely. We respect your privacy and are happy to sign a Non-Disclosure Agreement before discussing your project.",
    },
    {
      question: "Do you provide maintenance after launch?",
      answer:
        "Yes. We offer ongoing maintenance, performance optimization, bug fixes, security updates, and feature enhancements.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Every project is different. Pricing depends on the scope, features, timeline, and technologies required.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#191A23] sm:text-5xl lg:text-6xl">
            Have Questions?
            <br />
            We've Got Answers.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to the most common questions about our services,
            pricing, development process and ongoing support.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-16 space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <h3 className="pr-6 text-lg font-semibold text-[#191A23] sm:text-xl">
                  {item.question}
                </h3>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B9FF66] transition-all duration-300">
                  {open === index ? (
                    <HiMinus className="text-2xl text-black" />
                  ) : (
                    <HiPlus className="text-2xl text-black" />
                  )}
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-8 py-6">
                    <p className="leading-8 text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
