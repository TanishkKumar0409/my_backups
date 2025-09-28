import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuClock, LuUser, LuArrowRight, LuSparkles } from "react-icons/lu";
import { getTimeAgo } from "../../../Contexts/TimeCouter";
// import { getTimeAgo } from "../utils/dateUtils";

const SuggestedBlogs = ({ blogs }: { blogs: any }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-28 backdrop-blur-sm">
      {/* Enhanced Header */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="p-2 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg">
          <LuSparkles className="w-4 h-4 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            You Might Also Like
          </h3>
          <p className="text-xs text-gray-500">Handpicked for you</p>
        </div>
      </div>

      <div className="space-y-4">
        {blogs.map((blog: any, index: number) => (
          <motion.div
            key={blog._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Link to={`/blog/${blog.uniqueId}`} className="block">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-xs transition-all duration-300 hover:shadow-sm group-hover:bg-white">
                <div className="flex space-x-3">
                  {/* Enhanced Image */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-violet-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={blog.featured_image[0]}
                      alt={blog.title}
                      className="relative w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 border-2 border-white shadow-sm"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <LuArrowRight className="w-2 h-2 text-white" />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 text-sm leading-tight mb-2 line-clamp-2">
                      {blog.title}
                    </h4>

                    {/* Enhanced Meta Info */}
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-gray-500">
                        <LuUser className="w-3 h-3 mr-1 flex-shrink-0" />
                        <span className="truncate font-medium">
                          {blog.author}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <LuClock className="w-3 h-3 mr-1 flex-shrink-0" />
                        <span className="whitespace-nowrap">
                          {getTimeAgo(blog.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="h-0.5 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200/50">
        <Link
          to="/blogs"
          className="flex items-center justify-center space-x-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200 group"
        >
          <span>View All Articles</span>
          <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default SuggestedBlogs;
