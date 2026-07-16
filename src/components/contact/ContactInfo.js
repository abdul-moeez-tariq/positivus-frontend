import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
} from "react-icons/hi2";

const contactInfo = [
  {
    id: 1,
    icon: <HiOutlineMapPin />,
    title: "Visit Our Office",
    value: "123 Business Avenue",
    description: "Lahore, Punjab, Pakistan",
  },
  {
    id: 2,
    icon: <HiOutlinePhone />,
    title: "Call Us",
    value: "+92 300 1234567",
    description: "Mon - Sat | 9:00 AM - 7:00 PM",
  },
  {
    id: 3,
    icon: <HiOutlineEnvelope />,
    title: "Email Us",
    value: "hello@positivus.com",
    description: "We'll reply within 24 hours",
  },
  {
    id: 4,
    icon: <HiOutlineClock />,
    title: "Working Hours",
    value: "Monday - Saturday",
    description: "09:00 AM - 07:00 PM",
  },
];

function ContactInfo() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#B9FF66]/20 px-4 py-2 text-sm font-semibold text-[#191A23]">
            Contact Information
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#191A23] sm:text-5xl">
            We're Always Ready To Help
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Reach out through any of the following channels. Whether you have a
            project idea, a question, or need technical consultation, we're here
            to help.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-[#B9FF66] hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#191A23] text-3xl text-[#B9FF66] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#B9FF66] group-hover:text-[#191A23]">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="mt-8 text-2xl font-semibold text-[#191A23]">
                {item.title}
              </h3>

              <p className="mt-5 text-lg font-medium text-[#191A23]">
                {item.value}
              </p>

              <p className="mt-3 leading-7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 overflow-hidden rounded-[32px] bg-[#191A23] p-10 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                Let's Turn Your Ideas Into Reality
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-300">
                Our experienced Full Stack Development team is ready to build
                fast, scalable, secure, and modern digital products tailored to
                your business needs.
              </p>
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-2xl bg-[#B9FF66] px-8 py-4 text-lg font-semibold text-[#191A23] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
