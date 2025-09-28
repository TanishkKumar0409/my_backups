import { motion } from "framer-motion";
import { cardVariants } from "../../Contexts/framer-varients";

export default function ToolsCard({ tool }: { tool: any }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <div className="h-full bg-white/80 rounded-2xl shadow hover:shadow-md transition-all duration-300 group">
        <div className="p-6 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16  bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-lg text-white mb-4 group-hover:scale-110 transition-transform duration-300">
            <tool.icon className="w-8 h-8" />
          </div>

          {/* Type Badge */}
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 text-xs font-medium rounded-full mb-3">
            {tool.type}
          </div>

          {/* Name */}
          <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-violet-600 transition-colors duration-300">
            {tool.name}
          </h4>

          {/* Heading */}
          <h3 className="text-sm font-semibold text-violet-600 mb-3">
            {tool.heading}
          </h3>

          {/* Text */}
          <p className="text-gray-600 text-sm leading-relaxed">{tool.text}</p>
        </div>
      </div>
    </motion.div>
  );
}
