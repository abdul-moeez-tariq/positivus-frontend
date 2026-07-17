import React from "react";

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
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:border-black hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold text-black">{section.title}</h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600">
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CookieContent;
