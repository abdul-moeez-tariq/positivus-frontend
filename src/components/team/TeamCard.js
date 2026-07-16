import { FaLinkedinIn } from "react-icons/fa";

function TeamCard({ member }) {
  return (
    <article className="group flex h-full flex-col rounded-[32px] border border-black bg-white p-6 shadow-[0_6px_0_0_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_0_0_#000]">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="relative">
            {/* Green Background */}
            <div className="absolute inset-0 rotate-45 rounded-full bg-[#B9FF66] transition duration-300 group-hover:rotate-90"></div>

            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="relative h-20 w-20 rounded-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Name & Position */}
          <div>
            <h3 className="text-xl font-semibold text-black">{member.name}</h3>

            <p className="mt-1 text-sm text-gray-500">{member.position}</p>
          </div>
        </div>

        {/* LinkedIn */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} LinkedIn`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:rotate-12 hover:bg-[#B9FF66] hover:text-black"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-gray-300"></div>

      {/* Description */}
      <p className="flex-1 text-base leading-7 text-gray-600">
        {member.description}
      </p>
    </article>
  );
}

export default TeamCard;
