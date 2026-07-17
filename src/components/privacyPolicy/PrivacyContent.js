import React from "react";

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

export default PrivacyContent;
