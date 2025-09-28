import { motion } from "framer-motion";
import { itemVariants } from "../../Contexts/framer-varients";
import CountUp from "react-countup";

export default function StatCard({ stat }: { stat: any }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-md transition-all"
    >
      <div
        className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
      >
        <stat.icon className="text-white text-2xl" />
      </div>

      <motion.h3
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-900 mb-2"
      >
        <CountUp end={stat.number} start={0} />+
      </motion.h3>

      <p className="text-gray-600 font-medium">{stat.label}</p>
    </motion.div>
  );
}
