import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserData from "../../../Data/UserData";
import {
  containerVariants,
  itemVariants,
  titleVariants,
  nameVariants,
} from "../../../Contexts/framer-varients";
import SocialLinks from "../../../UI/LinkIcons/SocialLinks";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile: Image first */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <img
                  src={UserData?.profile}
                  alt={UserData?.name}
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl shadow-lg object-cover border-4 border-white"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-xl shadow-lg"
              >
                5+
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-12 -left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg"
              >
                <div className="text-center">
                  <div className="text-xs sm:text-sm">2</div>
                  <div className="text-xs">Projects</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-indigo-200 text-indigo-700 rounded-full text-xs sm:text-sm font-medium mb-4"
              >
                🙏 Welcome to my portfolio
              </motion.span>
            </motion.div>

            <motion.h1
              variants={titleVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
            >
              Hi, I'm{" "}
              <motion.span
                variants={nameVariants}
                className="text-transparent text-nowrap bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600"
              >
                {UserData?.name}
              </motion.span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <motion.h2
                className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-3 sm:mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                {UserData?.role}
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.8 }}
              >
                {UserData?.bannerBio}
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start px-4 lg:px-0"
            >
              <Link
                to={`/projects`}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              >
                <FaEye />
                View My Work
              </Link>
              <motion.a
                href={UserData?.resume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 md:py-4 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all text-sm sm:text-base"
              >
                <FaDownload />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Follow me:
              </span>
              <div className="flex gap-3">
                {UserData?.socialLinks.map((social: any, index: number) => (
                  <SocialLinks social={social} key={index} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
