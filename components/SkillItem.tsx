import { ISkill } from "@/interfaces/Skill";

const SkillItem = ({ skillItem }: { skillItem: ISkill }) => {
  return (
    <div className="flex items-center">
      {skillItem.icon}{" "}
      <span className={`ml-4 text-neutral-400 text-sm text-selection hover:text-neutral-200 duration-150 ease-in-out cursor-pointer`}>
        {skillItem.name}
      </span>
    </div>
  );
};

export default SkillItem;
