import { HiMinus, HiPlus } from "react-icons/hi2";

function ProcessItem({ item, isOpen, onToggle }) {
  return (
    <article
      className={`overflow-hidden rounded-[32px] border border-black shadow-[0_6px_0_0_#000] transition-all duration-300 ${
        isOpen
          ? "bg-[#B9FF66] shadow-[0_8px_0_0_#000]"
          : "bg-[#F3F3F3] hover:-translate-y-1 hover:shadow-[0_8px_0_0_#000]"
      }`}
    >
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-5 p-6 text-left sm:p-8"
      >
        <div className="flex flex-1 items-center gap-4 sm:gap-6">
          {/* Number */}
          <span className="text-4xl font-bold text-black sm:text-5xl">
            {String(item.id).padStart(2, "0")}
          </span>

          {/* Title */}
          <h3 className="text-lg font-semibold leading-snug text-black sm:text-2xl">
            {item.title}
          </h3>
        </div>

        {/* Icon */}
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black bg-white text-2xl transition-transform duration-300 hover:scale-105">
          {isOpen ? <HiMinus /> : <HiPlus />}
        </span>
      </button>

      {/* Content */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-black px-6 py-6 sm:px-8">
            <p className="text-base leading-8 text-gray-800 sm:text-lg">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProcessItem;
