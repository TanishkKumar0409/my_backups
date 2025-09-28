import { motion } from "framer-motion";
import { itemVariants } from "../../Contexts/framer-varients";

export default function ServiceCard({ service }: { service: any }) {
  return (
    <motion.div
      key={service?.id}
      className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition-shadow"
      variants={itemVariants}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl shadow-lg text-white mb-6 group-hover:scale-110 transition-transform duration-300">
        {service?.icon && <service.icon size={24} />}
      </div>
      <h3 className="text-xl font-semibold mb-3">{service?.title}</h3>
      <p className="text-gray-600 mb-4">{service?.description}</p>
      <ul className="space-y-2">
        {service?.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
