import React from "react";
import UserData from "../../../Data/UserData";
import SkillCard from "../../../UI/Cards/SkillCard";
import MainHeadings from "../../../UI/Headings/MainHeadings";

const Skills: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <MainHeadings
          heading="Skill & Tecnologies"
          para="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {UserData?.skills.slice(0, 4).map((skill, index) => (
            <SkillCard skill={skill} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
