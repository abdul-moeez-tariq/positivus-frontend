import { IoArrowForward } from "react-icons/io5";

function CaseStudyCard({ study }) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl sm:p-10">
      {/* Hover Glow */}

      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20" />

      {/* Number */}

      <div className="relative">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-lg font-bold text-white">
          0{study.id}
        </span>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">{study.title}</h3>

        <p className="mt-5 text-base leading-8 text-gray-600">
          {study.description}
        </p>
      </div>

      {/* Link */}

      <a
        href={study.link}
        className="relative mt-8 inline-flex w-fit items-center gap-4 text-lg font-semibold text-gray-800 transition-all duration-300 group-hover:text-blue-600"
      >
        <span>View Project</span>

        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white transition-transform duration-300 group-hover:rotate-45">
          <IoArrowForward />
        </span>
      </a>
    </article>
  );
}

export default CaseStudyCard;
