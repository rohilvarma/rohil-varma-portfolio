import { ISkill, INavLink, IEducationExperience, IWorkExperience, IGitHubRepos } from "@/interfaces";

import {
  JavaOriginal,
  PythonOriginal,
  TypescriptOriginal,
  JavascriptOriginal,
  BashOriginal,
  ReactOriginal,
  AngularjsOriginal,
  NextjsOriginal,
  DjangoPlain,
  TailwindcssPlain,
  FastapiPlain,
  AzurePlain,
  DockerPlain,
  MysqlPlain
} from "devicons-react";

export const githubProjectsURL = 'https://api.github.com/users/rohilvarma/repos'

const githubLink = "https://github.com/rohilvarma"

export const profileDescription: string[] = [
  "I'm a software developer currently working at Deloitte USI. I spend my days diving into Python scripting, crafting solutions and enjoying the intricacies of code.",
  "Always up for a challenge, I'm on a constant quest for growth. Right now, I'm broadening my skills with Next.JS and Python because, well, why not? I find joy in tackling complex problems, breaking them down into manageable bits.",
  "Currently, I bring my coding enthusiasm to Deloitte, where I specialize in Python scripting. Here's a glimpse of my professional journey:",
  "My aim? To become a savvy full-stack engineer and make a mark in the software engineering world. In the meanwhile, have a look at my toolkit:"
]

export const workExperience: IWorkExperience[] = [
  {
    key: 1,
    company: "Deloitte India (Offices of the US)",
    description: [
      "Spearheading the integration of Generative AI and LangChain into the tagging feature to improve execution and accuracy.",
      "Managing deployment pipelines to ensure smooth and efficient project rollouts.",
      "Improved stakeholder satisfaction by providing updates, acting on feedbackm and refining the tagging feature."
    ],
    duration: "June 2024 - Present",
    designation: "Software Engineer 1",
    type: "work"
  },
  {
    key: 2,
    company: "Deloitte India (Offices of the US)",
    description: [
      "Engineered a tagging feature in Python, crafting an API for seamless UI and Azure Data Factory integration. Reduced process time from 24-48 hours to just 5-10 minutes.",
      "Implemented an advanced caching mechanism that improved code execution speed by approximately 90%.",
      "Managed Azure DevOps boards to enhance project tracking and adherence to schedules.",
      "Skilled in Azure Functions, Container Instances and Azure Data Factory, supporting cloud-based development and deployment."
    ],
    duration: "June 2022 - June 2024",
    designation: "Associate Software Engineer",
    type: "work"
  },
  {
    key: 3,
    company: "Deloitte India (Offices of the US)",
    description: [
      "Revamped UI screens to streamline navigation and improve visual appeal, resulting in a more engaging user experience.",
      "Engaged stakeholders to align project objectives with user expectations, ensuring seamless user experiences and effective collaboration."
    ],
    duration: "Jan 2022 - April 2022",
    designation: "Technology Intern",
    type: "work"
  },
  {
    key: 4,
    company: "Delberto Club",
    description: [
      "Designed and developed the current deployed website of the company along with a template for an E-commerce site."
    ],
    duration: "Sept 2020 - Dec 2020",
    designation: "Front-end Developer",
    type: "work"
  },
];

export const githubRepos: IGitHubRepos[] = [
  {
    name: 'My Portfolio',
    techUsed: ['Next.JS', 'TypeScript', 'TailwindCSS'],
    description: "First iteration of my website built using Next.JS and TailwindCSS, hosted on Vercel.",
    githubLink: `${githubLink}/rohil-varma-portfolio`,
    liveURL: "https://rohilvarma.com/"
  },
  {
    name: 'Wordle Clone',
    techUsed: ['Next.JS', 'TypeScript', 'TailwindCSS'],
    description: "My Wordle clone, crafted with Next.js & Zustand, showcases creative problem-solving & modern development expertise, hosted on Vercel.",
    githubLink: `${githubLink}/wordle-clone`,
    liveURL: "https://wordle-clone-taupe.vercel.app/"
  },
  {
    name: 'REST Countries API',
    techUsed: ['Next.JS', 'TypeScript', 'TailwindCSS'],
    description: "Built a dynamic country explorer with Next.JS & TailwindCSS, powered by REST Countries API, hosted on Vercel.",
    githubLink: `${githubLink}/rest-countries-api`,
    liveURL: "https://rest-countries-api-rust-tau.vercel.app/"
  },
  {
    name: 'Shortly Landing Page',
    techUsed: ['Next.JS', 'TypeScript', 'TailwindCSS'],
    description: "Simplify link sharing with my custom-built URL shortener. Input long URLs, receive concise links instantly. Enhance user experience and streamline your online presence effortlessly.",
    githubLink: `${githubLink}/shortly-landing-page`,
    liveURL: "https://shortly-landing-page-psi.vercel.app/"
  },
  {
    name: 'Clipboard Landing Page',
    techUsed: ['Next.JS', 'TypeScript', 'TailwindCSS'],
    description: "Elevate your productivity with the innovative Clipboard. Experience seamless copying and sharing across devices. Simplify workflows and amplify efficiency effortlessly.",
    githubLink: `${githubLink}/clipboard-landing-page`,
    liveURL: "https://clipboard-landing-page-vert-alpha.vercel.app/"
  },
  {
    name: 'Bookmark Landing Page',
    techUsed: ['React', 'JavaScript', 'TailwindCSS'],
    description: "Transformed a design concept into reality with React and Tailwind CSS. Implemented a sleek and functional website bookmarking solution, showcasing my ability to bring visual ideas to life through coding expertise.",
    githubLink: `${githubLink}/bookmark-landing-page`,
    liveURL: "https://bookmark-landing-page-spa.netlify.app/"
  },
  {
    name: "Budget Calculator App",
    techUsed: ["Angular", "TypeScript", "TailwindCSS"],
    description: "Built a cool budget manager using Angular and Tailwind CSS. It helps you handle your money easily with a smooth design and features like saving and editing expenses.",
    githubLink: `${githubLink}/budget-calculator-app`,
    liveURL: "https://budget-calculator-app-using-angular.netlify.app/"
  },
  {
    name: "Sunnyside Landing Page",
    techUsed: ["React", "JavaScript", "TailwindCSS"],
    description: "Crafted a vibrant React landing page with Tailwind CSS, offering a sunny and modern user experience. Ideal for captivating content discovery.",
    githubLink: `${githubLink}/sunnyside-agency-landing-page`,
    liveURL: "https://sunny-side-agency-page.netlify.app/"
  }
]

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
    name: "Next.JS",
    type: "framework",
    icon: <NextjsOriginal className={iconClass} size={iconSize} />
  },
  {
    name: "React",
    type: "framework",
    icon: <ReactOriginal className={iconClass} size={iconSize} />
  },
  {
    name: "Angular",
    type: "framework",
    icon: <AngularjsOriginal className={iconClass} size={iconSize} />
  },
  {
    name: "TypeScript",
    type: "language",
    icon: <TypescriptOriginal className={iconClass} size={iconSize} />
  },
  {
    name: "JavaScript",
    type: "language",
    icon: <JavascriptOriginal className={iconClass} size={iconSize} />
  },
  {
    name: "Python",
    type: "language",
    icon: <PythonOriginal className={iconClass} size={iconSize} />
  },
  {
    name: "FastAPI",
    type: "framework",
    icon: <FastapiPlain className={iconClass} size={iconSize} />
  },  
  {
    name: "Django",
    type: "framework",
    icon: <DjangoPlain className={iconClass} size={iconSize} />
  },
  {
    name: "Azure",
    type: "cloud",
    icon: <AzurePlain className={iconClass} size={iconSize} />
  },
  {
    name: "Docker",
    type: "framework",
    icon: <DockerPlain className={iconClass} size={iconSize} />
  },
  {
    name: "SQL",
    type: "language",
    icon: <MysqlPlain className={iconClass} size={iconSize} />
  },
  {
    name: "TailwindCSS",
    type: "framework",
    icon: <TailwindcssPlain className={iconClass} size={iconSize} />
  },
  {
    name: "Bash",
    type: "language",
    icon: <BashOriginal className={iconClass} size={iconSize} />
  },
  {
    name: "Java",
    type: "language",
    icon: <JavaOriginal className={iconClass} size={iconSize} />
  },
]

export const socialMediaLinks = {
  "linkedin": 'https://www.linkedin.com/in/rohil-varma/',
  "github": githubLink
}