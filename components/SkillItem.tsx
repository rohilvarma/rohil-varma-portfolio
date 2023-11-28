import { ISkill } from "@/interfaces";

type SkillItemProps = {
  skillItem: ISkill
  isTechStack?: boolean
}

const SkillItem = ({ skillItem, isTechStack = false }: SkillItemProps) => {
  return (
    <div className="flex items-center ring-2 ring-neutral-700 bg-neutral-900 rounded-sm p-2 pl-3">
      {skillItem.icon}{" "}
      <span className={`ml-2 text-neutral-400 text-selection hover:text-neutral-200 duration-150 ease-in-out cursor-pointer ${isTechStack ? 'text-xs' : 'text-sm'}`}>
        {skillItem.name}
      </span>
    </div>
  );
};

export default SkillItem;
