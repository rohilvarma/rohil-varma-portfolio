export interface ISkill {
  key: number;
  name: string;
  type: "language" | "framework" | "cloud";
  icon: React.FunctionComponentElement<any>;
}