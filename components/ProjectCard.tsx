import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SkillItem } from ".";
import Link from "next/link";
import { IGitHubRepos, ISkill } from "@/interfaces";
import { skills } from "@/data/data";

const ProjectCard = (repo: IGitHubRepos) => {
  const renderSkills = () => {
    return repo.techUsed.map((tech, index) => {
      const techSkill = skills.filter(skill => skill.name === tech)[0]
      return <SkillItem skillItem={techSkill} isTechStack={true} key={index} />
    })
  }
  return (
    <div className="bg-neutral-900/80 rounded-md p-4 hover:translate-x-1 hover:-translate-y-1 duration-300 text-selection">
      <div className="flex items-center justify-between">

        <Link href={repo.githubLink} target="_blank">
          <FaGithub size={30} />
        </Link>
        <Link href={repo.liveURL} target="_blank">
          <FaExternalLinkAlt size={15} />
        </Link>
      </div>
      <h3 className="font-bold mt-6">{repo.name}</h3>
      <p className="text-neutral-700 mt-4 text-sm">
        {repo.description}
      </p>
      <div className="flex items-center mt-4 gap-2 flex-wrap">
        {renderSkills()}
      </div>
    </div>
  );
};

export default ProjectCard;
