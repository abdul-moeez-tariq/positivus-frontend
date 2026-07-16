import { Link } from "react-router-dom";
import TeamCard from "./TeamCard";
import teamData from "./teamData";

function Team() {
  return (
    <section id="team" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
          <h2 className="w-fit rounded-md bg-[#B9FF66] px-3 py-1 text-3xl font-semibold text-black">
            Team
          </h2>

          <p className="max-w-2xl text-base leading-7 text-gray-600">
            Meet the passionate professionals behind our Full Stack Development
            team. Together, we create fast, scalable, and user-friendly web
            applications using modern technologies and best development
            practices.
          </p>
        </div>

        {/* Team Members */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {teamData.slice(0, 6).map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center lg:justify-end">
          <Link
            to="/team"
            className="inline-flex items-center justify-center rounded-2xl bg-black px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9FF66] hover:text-black hover:shadow-xl"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Team;
