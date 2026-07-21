import { motion, AnimatePresence } from "framer-motion";
import { HiMinus, HiPlus } from "react-icons/hi2";

function ProcessItem({ item, isOpen, onToggle }) {
  return (
    <motion.article
      layout
      className={`group overflow-hidden rounded-3xl border transition-all duration-500

  ${
    isOpen
      ? "border-blue-200 bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 shadow-xl"
      : "border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl"
  }

  `}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-5 p-6 text-left sm:p-8"
      >
        <div className="flex items-center gap-5">
          {/* Number */}

          <span
            className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold transition-all duration-300

${
  isOpen
    ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white"
    : "bg-gray-100 text-gray-700"
}

`}
          >
            {String(item.id).padStart(2, "0")}
          </span>

          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-2xl">
              {item.title}
            </h3>

            <p className="mt-1 hidden text-sm text-gray-500 sm:block">
              Step {item.id} of project development
            </p>
          </div>
        </div>

        {/* Icon */}

        <motion.span
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl text-white transition-all duration-300

${
  isOpen
    ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"
    : "bg-gray-900"
}

`}
        >
          {isOpen ? <HiMinus /> : <HiPlus />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            <div className="border-t border-gray-200 px-6 py-6 sm:px-8">
              <p className="max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
                {item.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default ProcessItem;
