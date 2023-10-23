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