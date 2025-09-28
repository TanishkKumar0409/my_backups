import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LuBookOpen,
  LuClock,
  LuUser,
  LuArrowLeft,
  LuChevronRight,
} from "react-icons/lu";
// import SuggestedBlogs from '../components/SuggestedBlogs';
import blogs from "../../Data/Blogs.json";
import SuggestedBlogs from "./BlogsComponents/SuggestedBlogs";
import { getTimeAgo } from "../../Contexts/TimeCouter";
// import { getTimeAgo } from '../utils/dateUtils';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const blog = useMemo(() => {
    return blogs.find((post) => post.uniqueId === id);
  }, [id]);

  const suggestedBlogs = useMemo(() => {
    if (!blog) return [];

    const otherBlogs = blogs.filter((post) => post.uniqueId !== id);
    const shuffled = [...otherBlogs].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, [blog, id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <LuBookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            <LuArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Home", href: "/", icon: <div className="w-4 h-4" /> },
    { name: "Blog", href: "/blogs" },
    { name: blog.title, href: `/blog/${blog.uniqueId}` },
  ];

  return (
    <div className="min-h-screen">
      {/* Fixed Enhanced Breadcrumb Bar */}
      <div className="relative top-20 left-0 right-0 z-30">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Blog Title */}
            <div className="flex-1 min-w-0 mr-6">
              <h1 className="text-lg font-bold text-gray-900 truncate">
                {blog.title}
              </h1>
              <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <LuUser className="w-3 h-3" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <LuClock className="w-3 h-3" />
                  <span>{getTimeAgo(blog.createdAt)}</span>
                </div>
              </div>
            </div>

            {/* Enhanced Breadcrumbs */}
            <nav className="flex-shrink-0">
              <div className="flex items-center space-x-1 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-full px-4 py-2 border border-indigo-100">
                {breadcrumbs.map((item, index) => (
                  <React.Fragment key={item.name}>
                    {index > 0 && (
                      <LuChevronRight className="w-3 h-3 text-gray-400 mx-1" />
                    )}
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
                        index === breadcrumbs.length - 1
                          ? "text-indigo-700 bg-indigo-100/70"
                          : "text-gray-600 hover:text-indigo-600 hover:bg-white/60"
                      }`}
                    >
                      {item.icon && item.icon}
                      <span
                        className={
                          index === breadcrumbs.length - 1
                            ? "max-w-32 truncate"
                            : ""
                        }
                      >
                        {item.name}
                      </span>
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content with Top Padding */}
      <div className="pt-24 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8"
            >
              <div className="relative h-80 group">
                <img
                  src={blog.featured_image[0]}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:scale-105 transition-all duration-300"></div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {blog.title}
                </h1>

                <div className="flex items-center space-x-6 text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <img
                      src={blog.author_image}
                      alt={blog.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex items-center space-x-1">
                      <LuUser className="w-4 h-4" />
                      <span className="font-medium">{blog.author}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    <LuClock className="w-4 h-4" />
                    <span>{getTimeAgo(blog.createdAt)}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {blog.category.map((cat) => (
                    <span
                      key={cat}
                      className="bg-violet-50 text-violet-600 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.blog }}
              />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SuggestedBlogs blogs={suggestedBlogs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
