import React from "react";
import { motion } from "framer-motion";
import UserData from "../../../Data/UserData";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-2 rounded-full inline-block mb-6">
                About Me
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Crafting Digital Experiences with Passion
                </span>
              </h2>
              {/* Decorative line */}
              <div className="flex items-center justify-start space-x-4 mt-8">
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full"></div>
                <div className="w-6 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
                <div className="w-3 h-1 bg-purple-600 rounded-full"></div>
              </div>
            </motion.div>
            {UserData?.about.map((item: string, index: any) => (
              <p
                key={index}
                className="text-lg text-gray-600 mb-6 leading-relaxed"
              >
                {item}
              </p>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h4 className="font-semibold text-indigo-900 mb-2">Frontend</h4>
                <p className="text-indigo-700">React, Vue, TypeScript</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h4 className="font-semibold text-purple-900 mb-2">Backend</h4>
                <p className="text-purple-700">Node.js, Python, PostgreSQL</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={UserData?.aboutImg}
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
