import { IoArrowForward } from "react-icons/io5";

function ServiceCard({ service }) {
  const darkCard = service.textColor === "text-white";

  return (
    <article
      className={`group flex flex-col justify-between gap-8 rounded-[32px] border border-black p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8 lg:flex-row lg:items-center ${service.bg}`}
    >
      {/* Left Content */}
      <div className="flex flex-1 flex-col justify-between">
        <h3
          className={`inline-block w-fit rounded-lg px-3 py-2 text-2xl font-semibold leading-snug sm:text-3xl ${service.titleBg} ${service.textColor}`}
        >
          {service.title}
        </h3>

        <a
          href="#contact"
          className={`mt-8 flex items-center gap-4 text-base font-medium transition duration-300 hover:gap-5 sm:text-lg ${service.textColor}`}
        >
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-full transition duration-300 group-hover:rotate-45 ${
              darkCard ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            <IoArrowForward />
          </span>
          Learn More
        </a>
      </div>

      {/* Right Image */}
      <div className="flex flex-1 justify-center lg:justify-end">
        <img
          src={service.image}
          alt={service.title}
          className="h-40 w-auto transition duration-300 group-hover:scale-110 sm:h-48 lg:h-44 xl:h-52"
        />
      </div>
    </article>
  );
}

export default ServiceCard;
