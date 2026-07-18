import {
  HiBolt,
  HiShieldCheck,
  HiCodeBracket,
  HiUsers,
  HiSparkles,
  HiChartBar,
} from "react-icons/hi2";
export default function WhyWorkWithUs() {
  const data = [
    ["Fast Delivery", HiBolt],
    ["Secure Solutions", HiShieldCheck],
    ["Clean Code", HiCodeBracket],
    ["Expert Team", HiUsers],
    ["Creative Design", HiSparkles],
    ["Business Growth", HiChartBar],
  ];
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#B9FF66] px-5 py-2 font-semibold">
            Why Choose Positivus
          </span>
          <h2 className="mt-6 text-5xl font-bold text-[#191A23]">
            Built For Long-Term Success
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            We combine creativity, technology and strategy to deliver
            exceptional digital products.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data.map(([t, I], i) => (
            <div
              key={i}
              className="group rounded-[32px] border border-gray-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:border-[#B9FF66] hover:shadow-2xl"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#B9FF66]">
                <I className="text-4xl" />
              </div>
              <h3 className="mt-8 text-2xl font-bold">{t}</h3>
              <p className="mt-4 leading-8 text-gray-600">
                Premium quality solutions with modern technologies and dedicated
                support.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 rounded-[36px] bg-[#191A23] p-10 text-white">
          <div className="grid gap-8 lg:grid-cols-4 text-center">
            <div>
              <h3 className="text-5xl font-bold text-[#B9FF66]">150+</h3>
              <p>Projects</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#B9FF66]">40+</h3>
              <p>Clients</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#B9FF66]">98%</h3>
              <p>Satisfaction</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#B9FF66]">5+</h3>
              <p>Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
