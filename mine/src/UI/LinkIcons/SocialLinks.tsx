import { motion } from "framer-motion";
export default function SocialLinks({ social }: { social: any }) {
  return (
    <motion.a
      href={social.href}
      whileHover={{ scale: 1.2, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 shadow hover:shadow-md transition-all"
      title={social.label}
    >
      <social.icon size={20} />
    </motion.a>
  );
}
