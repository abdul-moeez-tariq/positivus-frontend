function TeamStats() {
  const stats = [
    { value: "25+", label: "Completed Projects" },
    { value: "15+", label: "Happy Clients" },
    { value: "8+", label: "Team Members" },
    { value: "5+", label: "Years Experience" },
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="group rounded-[28px] border border-black bg-white p-8 text-center shadow-[0_6px_0_0_#000] transition-all duration-300 hover:-translate-y-2 hover:bg-[#B9FF66] hover:shadow-[0_10px_0_0_#000]"
          >
            <h3 className="text-4xl font-bold text-black transition duration-300 group-hover:scale-110">
              {item.value}
            </h3>

            <p className="mt-3 text-base text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamStats;
