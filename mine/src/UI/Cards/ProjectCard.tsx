import { motion } from "framer-motion";
import { itemVariants } from "../../Contexts/framer-varients";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      key={project.id}
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative group">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4 scale-0 group-hover:scale-100 transition-transform duration-300">
            {project?.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Live Demo
              </motion.a>
            )}
            {project?.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                GitHub
              </motion.a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-xs rounded-full font-medium shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
