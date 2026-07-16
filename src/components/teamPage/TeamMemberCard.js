import { FaLinkedinIn } from "react-icons/fa";

function TeamMemberCard({ member }) {
  return (
    <article
      id="team-members"
      className="group relative overflow-hidden rounded-[32px] border border-black bg-white p-6 shadow-[0_6px_0_0_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_0_0_#000]"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#B9FF66]/20 blur-3xl transition duration-500 group-hover:scale-150"></div>

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 rotate-45 rounded-full bg-[#B9FF66] transition duration-500 group-hover:rotate-90"></div>

            <img
              src={member.image}
              alt={member.name}
              className="relative h-24 w-24 rounded-full border-4 border-white object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">{member.name}</h3>

            <p className="mt-1 text-sm text-gray-500">{member.position}</p>
          </div>
        </div>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:rotate-12 hover:bg-[#B9FF66] hover:text-black"
          aria-label={`${member.name} LinkedIn`}
        >
          <FaLinkedinIn />
        </a>
      </div>

      <div className="my-6 h-px bg-gray-200"></div>

      <p className="relative text-base leading-7 text-gray-600">
        {member.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {member.skills?.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 hover:bg-[#B9FF66]"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default TeamMemberCard;
