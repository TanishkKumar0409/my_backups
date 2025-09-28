import PageBanner from "../../Components/PageBanner/PageBanner";
import { LuCodeXml } from "react-icons/lu";
import Services from "./SkillComponents/Services";
import MainSkill from "./SkillComponents/MainSkill";
import Tools from "./SkillComponents/Tools";

export default function Skills() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
  ];
  return (
    <>
      <PageBanner
        title="Technologies I Use Every Day"
        subtitle="A showcase of the technologies, tools, and frameworks I use to build fast, scalable, and responsive applications."
        icon={<LuCodeXml />}
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
        breadcrumbs={breadcrumbs}
      />
      <MainSkill />
      <Services />
      <Tools />
    </>
  );
}
