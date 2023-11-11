import Heading from "@/components/Heading";
import SkillItem from "@/components/SkillItem";

import { skills } from "@/data/data";

const Skills = () => {
  const renderLanguages = () => {
    const languages = skills.filter((skill) => skill.type === "language");
    return languages.map((language) => (
      <SkillItem skillItem={language} key={language.key} />
    ));
  };

  const renderFrameworks = () => {
    const frameworks = skills.filter((skill) => skill.type === "framework");
    return frameworks.map((framework) => (
      <SkillItem skillItem={framework} key={framework.key} />
    ));
  };

  const renderClouds = () => {
    const clouds = skills.filter((skill) => skill.type === "cloud");
    return clouds.map((cloud) => (
      <SkillItem skillItem={cloud} key={cloud.key} />
    ));
  };
  return (
    <div className="">
      <Heading heading="Programming Languages" />
      <div className="skill-grid">{renderLanguages()}</div>

      <Heading heading="Frameworks" />
      <div className="skill-grid">{renderFrameworks()}</div>

      <Heading heading="Cloud" />
      <div className="skill-grid">{renderClouds()}</div>
    </div>
  );
};

export default Skills;
