import { FaHashtag } from "react-icons/fa6";
import { Badge } from "./ui/badge";
import { SKILL_MAP } from "@/lib/constants";

type BadgeProps = {
  name: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "destructive";
};

const SkillBadge = ({ name, className, variant = "default" }: BadgeProps) => {
  const Icon = SKILL_MAP[name] ?? FaHashtag;
  return (
    <Badge className="gap-1 rounded-full" variant={variant}>
      <Icon className={`w-4 h-4 ${className ?? ""}`} /> {name}
    </Badge>
  );
};

export default SkillBadge;
