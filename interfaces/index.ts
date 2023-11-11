export interface IWorkExperience {
  key: number;
  type: string;
  company: string;
  duration: string;
  description: string[];
  designation?: string;
}

export interface IEducationExperience {
  key: number;
  type: string;
  institution: string;
  graduation: string;
  degree: string;
  grade: string;
}

export interface IHead {
  heading: string;
}

export interface INavLink {
  key: number;
  link: string;
  url: string;
}

export interface ISkill {
  key: number;
  name: string;
  type: "language" | "framework" | "cloud";
  icon: React.FunctionComponentElement<any>;
}