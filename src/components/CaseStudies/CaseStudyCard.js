import { IoArrowForward } from "react-icons/io5";

function CaseStudyCard({ study }) {
  return (
    <article className="group flex h-full flex-col justify-between p-8 transition-all duration-300 hover:bg-neutral-800 sm:p-10">
      {/* Content */}
      <div>
        <h3 className="mb-4 text-2xl font-semibold text-white">
          {study.title}
        </h3>

        <p className="text-base leading-7 text-gray-300">{study.description}</p>
      </div>

      {/* Learn More */}
      <a
        href={study.link}
        className="mt-8 inline-flex w-fit items-center gap-3 text-lg font-medium text-[#B9FF66] transition-all duration-300 hover:gap-5"
      >
        <span>Learn More</span>

        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B9FF66] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#B9FF66] group-hover:text-black">
          <IoArrowForward />
        </span>
      </a>
    </article>
  );
}

export default CaseStudyCard;
