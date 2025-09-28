import { motion } from "framer-motion";
import UserData from "../../../Data/UserData";
import { containerVariants } from "../../../Contexts/framer-varients";
import MainHeadings from "../../../UI/Headings/MainHeadings";
import ProjectCard from "../../../UI/Cards/ProjectCard";

export default function Projects() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MainHeadings
          heading="Featured Projects"
          para="A showcase of my recent work and creative solutions"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {UserData?.projects.slice(0, 3).map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
