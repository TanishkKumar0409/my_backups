import { motion } from "framer-motion";
import UserData from "../../../Data/UserData";
import MainHeadings from "../../../UI/Headings/MainHeadings";
import { containerVariants } from "../../../Contexts/framer-varients";
import SkillCard from "../../../UI/Cards/SkillCard";

export default function MainSkill() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <MainHeadings
          heading="My Skills"
          para=" A comprehensive overview of my technical expertise and
              professional capabilities that I bring to every project."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {UserData.skills.map((skill: any, index: number) => (
            <SkillCard skill={skill} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
