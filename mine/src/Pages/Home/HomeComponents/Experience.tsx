import React from "react";
import { motion } from "framer-motion";
import UserData from "../../..//Data/UserData";
import MainHeadings from "../../../UI/Headings/MainHeadings";
import ExperiencCard from "../../../UI/Cards/ExperiencCard";

const Experience: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MainHeadings
          heading="Work Experience"
          para="My professional journey and career milestones"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {UserData?.experience?.slice(0, 2).map((experience, index) => (
              <ExperiencCard key={index} experience={experience} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
