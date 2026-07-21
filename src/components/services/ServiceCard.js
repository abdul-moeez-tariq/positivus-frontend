import { IoArrowForward } from "react-icons/io5";

function ServiceCard({ service }) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl sm:p-8 lg:flex-row lg:items-center">
      {/* Glow */}

      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20" />

      {/* Content */}

      <div className="relative flex flex-1 flex-col">
        <h3 className="w-fit rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-4 py-2 text-xl font-bold text-white sm:text-2xl">
          {service.title}
        </h3>

        <p className="mt-5 max-w-sm text-gray-600">{service.description}</p>

        <a
          href="#contact"
          className="mt-8 flex items-center gap-4 text-base font-semibold text-gray-800 transition-all duration-300 group-hover:text-blue-600 sm:text-lg"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white transition-transform duration-300 group-hover:rotate-45">
            <IoArrowForward />
          </span>
          Learn More
        </a>
      </div>

      {/* Image */}

      <div className="relative mt-8 flex justify-center lg:mt-0 lg:justify-end">
        <img
          src={service.image}
          alt={service.title}
          className="h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-110 sm:h-44 lg:h-40 xl:h-48"
        />
      </div>
    </article>
  );
}

export default ServiceCard;
