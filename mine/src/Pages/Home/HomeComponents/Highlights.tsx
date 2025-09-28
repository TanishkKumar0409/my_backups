import React from "react";
import { motion } from "framer-motion";
import UserData from "../../../Data/UserData";
import { containerVariants } from "../../../Contexts/framer-varients";
import MainHeadings from "../../../UI/Headings/MainHeadings";
import StatCard from "../../../UI/Cards/StatCard";

const Highlights: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MainHeadings
          heading="Achievements & Stats"
          para="Numbers that showcase my journey and dedication to excellence"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {UserData.highlights.map((stat, index) => (
            <StatCard stat={stat} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
