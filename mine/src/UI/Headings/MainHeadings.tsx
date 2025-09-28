import { motion } from "framer-motion";
interface HeadingProps {
  heading: string;
  para: string;
}
export default function MainHeadings({ heading, para }: HeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
          {heading}
        </span>
      </h2>
      {para && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{para}</p>
      )}

      <div className="flex items-center justify-center space-x-4 mt-8">
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full"></div>
        <div className="w-6 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
        <div className="w-3 h-1 bg-purple-600 rounded-full"></div>
      </div>
    </motion.div>
  );
}
