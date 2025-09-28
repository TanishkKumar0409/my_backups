import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuClock, LuUser } from "react-icons/lu";
import { getTimeAgo } from "../../../Contexts/TimeCouter";

interface BlogCardProps {
  blog: any;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group`}
    >
      <Link to={`/blog/${blog.uniqueId}`} className="block">
        <div className="relative">
          <div className={`relative overflow-hidden`}>
            <img
              src={blog.featured_image[0]}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        <div className={`p-6`}>
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.tags.slice(0, 2).map((tag: string) => (
              <span
                key={tag}
                className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-lg text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200 truncate">
            {blog.title}
          </h3>

          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <img
                src={blog.author_image}
                alt={blog.author}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex items-center space-x-1">
                <LuUser className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <LuClock className="w-4 h-4" />
              <span>{getTimeAgo(blog.createdAt)}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
