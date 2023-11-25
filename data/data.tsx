import { ISkill, INavLink, IEducationExperience, IWorkExperience } from "@/interfaces";

import {
  JavaOriginal,
  JavascriptOriginal,
  PythonOriginal,
  TypescriptOriginal,
  BashOriginal,
  Html5Original,
  Css3Original,
  ReactOriginal,
  AngularjsOriginal,
  NextjsOriginal,
  DjangoPlain,
  TailwindcssPlain,
  BootstrapPlain,
  AzurePlain,
} from "devicons-react";


export const profileDescription: string[] = [
  "I'm a software developer currently working at Deloitte USI. I spend my days diving into Python scripting, crafting solutions and enjoying the intricacies of code.",
  "Always up for a challenge, I'm on a constant quest for growth. Right now, I'm broadening my skills with Next.JS and Django because, well, why not? I find joy in tackling complex problems, breaking them down into manageable bits.",
  "Currently, I bring my coding enthusiasm to Deloitte, where I specialize in Python scripting. Here's a glimpse of my professional journey:",
  "My aim? To become a savvy full-stack engineer and make a mark in the software engineering world. In the meanwhile, have a look at my toolkit:"
]

export const workExperience: IWorkExperience[] = [
  {
    key: 1,
    company: "Deloitte India (Offices of the US)",
    description: [
      "As a Python backend developer, I am a key contributor to the development of new features for the product. I work closely with the business team to understand their needs and expectations, and then design and implement solutions that meet those needs.",
      "I am also responsible for deploying new features to production, and for optimizing and documenting my code.",
      "My work is essential to the success of the product, and it has been recognized with two spot awards for my contributions to the project. I am proud to use my skills and knowledge to solve complex problems and to create new value for customers.",
    ],
    duration: "June 2022 - Present",
    designation: "Associate Software Engineer",
    type: "work"
  },
  {
    key: 2,
    company: "Deloitte India (Offices of the US)",
    description: [
      "I was primarily tasked with completing my learnings on Azure. This included obtaining the AZ-900 certification, which demonstrates my foundational knowledge of cloud computing concepts.",
      "Once I had completed my Azure training, I was assigned to the frontend of the project, where I used my Angular skills to make UI changes.",
      "This included interacting with the stakeholders of the project and accordingly managing expectations to ensure a smooth user experience."
    ],
    duration: "Jan 2022 - April 2022",
    designation: "Technology Intern",
    type: "work"
  },
  {
    key: 3,
    company: "Delberto Club",
    description: [
      "Designed and developed the current deployed website of the company along with a template for an E-commerce site."
    ],
    duration: "Sept 2020 - Dec 2020",
    designation: "Front-end Developer",
    type: "work"
  },
];

export const educationExperience: IEducationExperience[] = [
  {
    key: 1,
    institution: "Vellore Institute of Technology Chennai",
    graduation: "May 2022",
    degree: "B.Tech, Electronics and Communications Engineering",
    grade: "8.54 CGPA",
    type: "education"
  },
  {
    key: 2,
    institution: "Delhi Public School Indirapuram",
    graduation: "May 2018",
    degree: "XII",
    grade: "94.6%",
    type: "education"
  },
  {
    key: 3,
    institution: "Delhi Public School Indirapuram",
    graduation: "April 2016",
    degree: "X",
    grade: "10 CGPA",
    type: "education"
  }, 
]

export const navLinks: INavLink[] = [
  {
    key: 1,
    link: "home",
    url: "/",
  },
  {
    key: 2,
    link: "experience",
    url: "/experience",
  },
  {
    key: 3,
    link: "projects",
    url: "/projects"
  }
];

const iconSize: number = 15
const iconClass: string = "mx-auto"

export const skills: ISkill[] = [
  {
    key: 1,
    name: "Java",
    type: "language",
    icon: <JavaOriginal className={iconClass} size={iconSize} />
  },
  {
    key: 2,
    name: "Python",
    type: "language",
    icon: <PythonOriginal className={iconClass} size={iconSize} />
  },
  {
    key: 5,
    name: "JavaScript",
    type: "language",
    icon: <JavascriptOriginal className={iconClass} size={iconSize} />
  },
  {
    key: 6,
    name: "TypeScript",
    type: "language",
    icon: <TypescriptOriginal className={iconClass} size={iconSize} />
  },
  {
    key: 3,
    name: "HTML",
    type: "language",
    icon: <Html5Original className={iconClass} size={iconSize} />
  },
  {
    key: 4,
    name: "CSS",
    type: "language",
    icon: <Css3Original className={iconClass} size={iconSize} />
  },
  {
    key: 7,
    name: "React",
    type: "framework",
    icon: <ReactOriginal className={iconClass} size={iconSize} />
  },
  {
    key: 8,
    name: "Next.JS",
    type: "framework",
    icon: <NextjsOriginal className={iconClass} size={iconSize} />
  },
  {
    key: 9,
    name: "Angular",
    type: "framework",
    icon: <AngularjsOriginal className={iconClass} size={iconSize} />
  },
  {
    key: 10,
    name: "Django",
    type: "framework",
    icon: <DjangoPlain className={iconClass} size={iconSize} />
  },
  {
    key: 11,
    name: "Azure",
    type: "cloud",
    icon: <AzurePlain className={iconClass} size={iconSize} />
  },
  {
    key: 12,
    name: "TailwindCSS",
    type: "framework",
    icon: <TailwindcssPlain className={iconClass} size={iconSize} />
  },
  {
    key: 13,
    name: "Bootstrap",
    type: "framework",
    icon: <BootstrapPlain className={iconClass} size={iconSize} />
  },
  {
    key: 14,
    name: "Bash",
    type: "language",
    icon: <BashOriginal className={iconClass} size={iconSize} />
  }
]

export const socialMediaLinks = {
  "linkedin": 'https://www.linkedin.com/in/rohil-varma/',
  "github": "https://github.com/rohilvarma11"
}