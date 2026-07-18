import { HiPhone, HiEnvelope, HiMapPin, HiClock } from "react-icons/hi2";
export default function ContactInfo() {
  const items = [
    {
      icon: <HiPhone className="text-4xl" />,
      title: "Call Us",
      v: "+92 XXX XXX XXXX",
      d: "Mon-Fri 9AM-6PM",
    },
    {
      icon: <HiEnvelope className="text-4xl" />,
      title: "Email",
      v: "hello@positivus.com",
      d: "Reply within 24 hours",
    },
    {
      icon: <HiMapPin className="text-4xl" />,
      title: "Office",
      v: "Lahore, Pakistan",
      d: "Worldwide Remote",
    },
    {
      icon: <HiClock className="text-4xl" />,
      title: "Working Hours",
      v: "Mon-Fri",
      d: "09:00 - 18:00",
    },
  ];
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#B9FF66] px-5 py-2 font-semibold">
            Get In Touch
          </span>
          <h2 className="mt-6 text-5xl font-bold text-[#191A23]">
            Multiple Ways To Reach Us
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Choose the communication channel that works best for you.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {items.map((i, n) => (
            <div
              key={n}
              className="group rounded-[32px] border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#B9FF66] hover:shadow-2xl"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#B9FF66] text-black">
                {i.icon}
              </div>
              <h3 className="mt-8 text-2xl font-bold">{i.title}</h3>
              <p className="mt-4 font-semibold">{i.v}</p>
              <p className="mt-2 text-gray-600">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
