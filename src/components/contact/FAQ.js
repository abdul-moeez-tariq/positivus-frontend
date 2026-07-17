import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const faqData = [
  {
    id: 1,
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the project scope. A standard business website usually takes 2–4 weeks, while larger web applications may take 2–4 months depending on the required features.",
  },
  {
    id: 2,
    question: "Which technologies do you use?",
    answer:
      "We specialize in React.js, Next.js, React Native, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, and modern cloud technologies.",
  },
  {
    id: 3,
    question: "Do you provide UI/UX design services?",
    answer:
      "Yes. We design modern, responsive, and user-friendly interfaces using Figma before development begins.",
  },
  {
    id: 4,
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can redesign your current website with a premium modern UI while improving performance, SEO, and user experience.",
  },
  {
    id: 5,
    question: "Do you offer maintenance and support?",
    answer:
      "Yes. We provide long-term maintenance, feature updates, security patches, performance optimization, and technical support.",
  },
  {
    id: 6,
    question: "How do we get started?",
    answer:
      "Simply fill out the contact form, tell us about your project, and we'll schedule a free consultation to discuss your requirements.",
  },
];

function FAQ() {
  const [activeId, setActiveId] = useState(1);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#B9FF66] px-4 py-2 text-sm font-semibold text-black">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#191A23] sm:text-5xl">
            Got Questions?
            <br />
            We've Got Answers.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are some of the most common questions our clients ask before
            starting a project.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-16 flex flex-col gap-6">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                activeId === item.id
                  ? "border-[#B9FF66] bg-white shadow-2xl"
                  : "border-gray-200 bg-white hover:border-[#B9FF66] hover:shadow-xl"
              }`}
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <h3 className="text-xl font-semibold text-[#191A23]">
                  {item.question}
                </h3>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#191A23] text-white">
                  {activeId === item.id ? (
                    <HiChevronUp className="text-2xl" />
                  ) : (
                    <HiChevronDown className="text-2xl" />
                  )}
                </div>
              </button>

              <div
                className={`grid transition-all duration-500 ${
                  activeId === item.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-200 px-8 py-6">
                    <p className="leading-8 text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-[#191A23] px-8 py-12 text-center shadow-2xl sm:px-12 lg:px-20">
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            Still Have Questions?
          </h3>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Our team is always available to answer your questions and guide you
            through your project.
          </p>

          <a
            href="#contact-form"
            className="mt-10 inline-flex items-center justify-center rounded-2xl bg-[#B9FF66] px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
