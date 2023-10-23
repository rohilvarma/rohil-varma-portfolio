import { IWorkExperience, IEducationExperience } from "@/interfaces/Experience";
import { INavLink } from "@/interfaces/NavLink";

export const profileDescription: string[] = [
  "As a software engineer, my journey began with a fascination for HTML during my school years. With a strong grasp of Java and a knack for web development, I embarked on a fast-track trajectory.",
  "Constantly seeking growth opportunities and currently expanding my skill set with Next.js and Django. I am driven by the satisfaction of overcoming challenges and believe in breaking down complex problems into manageable solutions. With a goal to become a highly knowledgeable full-stack engineer, I am determined to leave a lasting impact in the world of software engineering."
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
    link: "about",
    url: "/about",
  },
  {
    key: 3,
    link: "skills",
    url: "/skills",
  },
  {
    key: 4,
    link: "contact",
    url: "/contact"
  }
];