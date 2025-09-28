import { motion } from "framer-motion";
import { cardVariants } from "../../Contexts/framer-varients";
export default function SkillCard({ skill }: { skill: any }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <div className="h-full bg-white/80 shadow hover:shadow-md transition-all duration-300 group rounded-2xl">
        <div className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-lg text-white mb-4 group-hover:scale-110 transition-transform duration-300">
            <skill.icon size={30} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
            {skill.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
