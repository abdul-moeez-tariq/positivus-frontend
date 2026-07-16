function TeamHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-black py-20 text-white sm:py-24 lg:py-32">
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#B9FF66]/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#B9FF66]/10 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 text-center sm:px-6 lg:px-8">
        <span className="rounded-full border border-[#B9FF66]/40 bg-[#B9FF66]/10 px-4 py-2 text-sm font-medium text-[#B9FF66]">
          Meet Our Experts
        </span>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
          Building Digital Products With Passion & Innovation
        </h1>

        <p className="max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
          Our multidisciplinary team combines design, frontend, backend,
          databases, cloud technologies, and quality assurance to deliver
          exceptional digital experiences.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#team-members"
            className="rounded-2xl bg-[#B9FF66] px-8 py-4 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Meet the Team
          </a>

          <a
            href="#contact"
            className="rounded-2xl border border-white/30 px-8 py-4 font-semibold transition duration-300 hover:border-[#B9FF66] hover:bg-[#B9FF66] hover:text-black"
          >
            Start a Project
          </a>
        </div>

        <div className="mt-8 grid w-full max-w-5xl grid-cols-2 gap-5 lg:grid-cols-4">
          {[
            ["25+", "Projects"],
            ["8+", "Experts"],
            ["5+", "Years"],
            ["100%", "Commitment"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#B9FF66]/50"
            >
              <h3 className="text-3xl font-bold text-[#B9FF66]">{value}</h3>
              <p className="mt-2 text-gray-300">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamHero;
