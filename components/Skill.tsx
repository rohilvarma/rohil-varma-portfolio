import { iconsSvgs } from "@/lib/constants";

type SkillProps = {
  name: string;
  size: number;
  className?: string;
};

const Skill = ({ name, size, className }: SkillProps) => {
  const skill = iconsSvgs.find((i) => i.name === name)!;
  return (
    <div
      className={className ?? ""}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: skill.svg }}
    ></div>
  );
};

export default Skill;
