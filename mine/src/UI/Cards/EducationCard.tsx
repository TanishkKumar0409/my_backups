import { FaCalendarAlt, FaGraduationCap, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function EducationCard({ edu }: { edu: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
            <FaGraduationCap className="text-white text-xl" />
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FaCalendarAlt className="mr-2" />
            {edu.period}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>

        <h4 className="text-xl font-semibold text-indigo-600 mb-4">
          {edu.school}
        </h4>

        <p className="text-gray-600 mb-6 leading-relaxed">{edu.description}</p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-2" />
            <span className="text-sm text-gray-600">GPA:</span>
            <span className="text-sm font-semibold text-gray-900 ml-2">
              {edu.gpa}
            </span>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-gray-900 mb-3">
            Achievements
          </h5>
          <div className="flex flex-wrap gap-2">
            {edu.highlights.map((highlight: string, idx: number) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
                className="px-3 py-1 bg-indigo-100 font-bold text-indigo-700 rounded-full text-xs"
              >
                {highlight}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
