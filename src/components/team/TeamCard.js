import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

function TeamCard({ member }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl">
      {/* Gradient Glow */}

      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Image */}

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 blur-sm" />

            <img
              src={member.image}
              alt={member.name}
              className="relative h-20 w-20 rounded-full border-4 border-white object-cover"
            />
          </motion.div>

          <div>
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>

            <p className="mt-1 text-sm text-gray-500">{member.position}</p>
          </div>
        </div>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white transition-all duration-300 hover:rotate-12"
        >
          <FaLinkedinIn />
        </a>
      </div>

      <div className="my-6 h-px bg-gray-200" />

      <p className="text-base leading-7 text-gray-600">{member.description}</p>
    </article>
  );
}

export default TeamCard;
