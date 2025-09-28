import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuClock, LuUser, LuStar, LuArrowRight } from "react-icons/lu";
import { getTimeAgo } from "../../../Contexts/TimeCouter";

const FeaturedBlogCard = ({ blog }: { blog: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 rounded-3xl overflow-hidden shadow group"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Content Side */}
        <div className="p-8 lg:p-12 flex flex-col justify-center text-white relative z-10">
          {/* Featured Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 w-fit"
          >
            <LuStar className="w-4 h-4 text-yellow-300 fill-current" />
            <span className="text-sm font-medium">Featured Article</span>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {blog.tags.slice(0, 3).map((tag: string) => (
              <span
                key={tag}
                className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
          >
            {blog.title}
          </motion.h2>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/90 text-lg mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html:
                blog.blog.replace(/<[^>]*>/g, "").substring(0, 180) + "...",
            }}
          />

          {/* Author & Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center space-x-6 mb-8"
          >
            <div className="flex items-center space-x-3">
              <img
                src={blog.author_image}
                alt={blog.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <LuUser className="w-4 h-4" />
                  <span className="font-medium">{blog.author}</span>
                </div>
                <div className="flex items-center space-x-1 text-white/80 text-sm">
                  <LuClock className="w-3 h-3" />
                  <span>{getTimeAgo(blog.createdAt)}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Read More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to={`/blog/${blog.uniqueId}`}
              className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 group"
            >
              <span>Read Full Article</span>
              <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="relative lg:block">
          <div className="absolute w-full group-hover:scale-105 inset-0 bg-gradient-to-l from-transparent to-indigo-600/20 z-10 transition-transform duration-700"></div>
          <img
            src={blog.featured_image[0]}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-8 w-6 h-6 bg-white/30 rounded-full backdrop-blur-sm"
          ></motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-8 right-12 w-4 h-4 bg-yellow-300/60 rounded-full backdrop-blur-sm"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedBlogCard;
