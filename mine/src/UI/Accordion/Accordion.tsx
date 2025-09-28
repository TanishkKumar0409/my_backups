import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <motion.div className="bg-white rounded-xl shadow-sm overflow-hidden mb-2">
      <motion.button
        onClick={toggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <FaMinus className="text-indigo-600" />
          ) : (
            <FaPlus className="text-indigo-600" />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-4">
              <p className="text-gray-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
