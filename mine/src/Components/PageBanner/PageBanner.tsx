import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";

interface PageBannerProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  image: string;
  breadcrumbs?: { name: string; href: string }[];
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  icon,
  image,
  breadcrumbs,
}) => {
  return (
    <div className="relative h-screen py-20 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-violet-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-200/40 to-indigo-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-violet-300/20 rounded-full blur-2xl"></div>

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-indigo-400/20 rotate-45"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-purple-400/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-violet-400/20 rotate-12"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Breadcrumbs */}
        {breadcrumbs && breadcrumbs?.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-1 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-white/20">
              {breadcrumbs?.map((item, index) => (
                <React.Fragment key={item.name}>
                  {index > 0 && (
                    <LuChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  )}
                  <Link
                    to={item.href}
                    className={`px-2 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                      index === breadcrumbs.length - 1
                        ? "text-indigo-700 bg-indigo-100/50"
                        : "text-gray-600 hover:text-indigo-600 hover:bg-white/40"
                    }`}
                  >
                    {item.name}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </motion.nav>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-lg text-white text-2xl mb-4"
            >
              {icon}
            </motion.div>

            {/* Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-violet-900 bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              {subtitle}
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-4 pt-4"
            >
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full"></div>
              <div className="w-6 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
              <div className="w-3 h-1 bg-purple-600 rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Image Container with Multiple Layers */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/20 to-violet-600/20 rounded-3xl blur-2xl"></div>

              {/* Main Image */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-3 shadow-xl border border-white/30">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
                />

                {/* Image Overlay */}
                <div className="absolute inset-3 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full shadow-lg"
              ></motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full shadow-lg"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
