import { useState } from "react";
import ProcessItem from "./ProcessItem";
import processData from "./processData";

function WorkingProcess() {
  const [activeId, setActiveId] = useState(1);

  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="process" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
          <h2 className="w-fit rounded-md bg-[#B9FF66] px-3 py-1 text-3xl font-semibold text-black">
            Our Working Process
          </h2>

          <p className="max-w-xl text-base leading-7 text-gray-600">
            A simple and transparent workflow that transforms your ideas into
            scalable, high-performance web applications with modern technologies
            and industry best practices.
          </p>
        </div>

        {/* Process Items */}
        <div className="space-y-6">
          {processData.map((item) => (
            <ProcessItem
              key={item.id}
              item={item}
              isOpen={activeId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkingProcess;
