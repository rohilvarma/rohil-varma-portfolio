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

export interface IGitHubRepos {
  name: string
  techUsed: string[]
  description: string
  githubLink: string
  liveURL: string
}

export interface ISkill {
  name: string;
  type: "language" | "framework" | "cloud";
  icon: React.FunctionComponentElement<any>;
}