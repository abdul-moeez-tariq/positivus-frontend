import CaseStudyCard from "./CaseStudyCard";
import caseStudiesData from "./caseStudiesData";

function CaseStudies() {
  return (
    <section id="use-cases" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
          <h2 className="w-fit rounded-md bg-[#B9FF66] px-3 py-1 text-3xl font-semibold text-black">
            Case Studies
          </h2>

          <p className="max-w-2xl text-base leading-7 text-gray-600">
            Explore some of my recent Full Stack Development projects that
            demonstrate clean architecture, responsive interfaces, scalable
            backend solutions, and exceptional user experiences.
          </p>
        </div>

        {/* Cards Container */}
        <div className="mt-12 overflow-hidden rounded-[36px] bg-neutral-900 shadow-xl">
          <div className="grid grid-cols-1 divide-y divide-gray-700 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-3">
            {caseStudiesData.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
