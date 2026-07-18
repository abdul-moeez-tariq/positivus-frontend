import { HiMapPin, HiPhone, HiArrowTopRightOnSquare } from "react-icons/hi2";
export default function OfficeLocations() {
  const offices = [
    {
      name: "Lahore HQ",
      addr: "Johar Town, Lahore",
      phone: "+92 XXX XXX XXXX",
      status: "Head Office",
    },
    {
      name: "Karachi",
      addr: "Shahrah-e-Faisal",
      phone: "+92 XXX XXX XXXX",
      status: "Branch",
    },
    {
      name: "Islamabad",
      addr: "Blue Area",
      phone: "+92 XXX XXX XXXX",
      status: "Branch",
    },
  ];
  return (
    <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold">
            Our Offices
          </span>
          <h2 className="mt-6 text-5xl font-bold text-[#191A23]">
            Visit Our Locations
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Meet our team or schedule a visit at one of our offices.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {offices.map((o, i) => (
            <div
              key={i}
              className="group rounded-[32px] border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#B9FF66] hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B9FF66]">
                <HiMapPin className="text-3xl" />
              </div>
              <span className="mt-6 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold">
                {o.status}
              </span>
              <h3 className="mt-4 text-3xl font-bold text-[#191A23]">
                {o.name}
              </h3>
              <p className="mt-4 text-gray-600">{o.addr}</p>
              <div className="mt-3 flex items-center gap-2 text-gray-700">
                <HiPhone />
                {o.phone}
              </div>
              <button className="mt-8 flex items-center gap-2 rounded-2xl bg-[#191A23] px-6 py-3 font-semibold text-white transition hover:bg-[#B9FF66] hover:text-black">
                Get Directions <HiArrowTopRightOnSquare />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-[36px] bg-[#191A23] p-10 text-center text-white">
          <h3 className="text-4xl font-bold">Serving Clients Worldwide</h3>
          <p className="mt-5 text-gray-300">
            Can't visit? We work remotely with businesses around the globe
            through online meetings.
          </p>
        </div>
      </div>
    </section>
  );
}
