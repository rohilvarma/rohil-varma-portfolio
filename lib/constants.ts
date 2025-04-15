import deloitteLogo from "@/public/deloitte_logo.jpeg";
import { FaJava } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import {
    SiAngular,
    SiAuth0,
    SiBootstrap,
    SiClerk,
    SiDrizzle,
    SiGithub,
    SiGnubash,
    SiInstagram,
    SiJavascript,
    SiLeetcode,
    SiLinkedin,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiShadcnui,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiZod,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

type Project = {
  title: string;
  description: string;
  tech: string[];
  source: string;
  live: string | null;
  status: {
    name: string;
    variant: "secondary" | "default" | "success" | "progress";
  };
};

interface IconMap {
  [key: string]: IconType;
}

export const workEx = [
  {
    company: "Deloitte",
    designation: "Software Engineer 1",
    from: "06/2024",
    to: "Present",
    icon: deloitteLogo,
  },
  {
    company: "Deloitte",
    designation: "Associate Software Engineer",
    from: "06/2022",
    to: "06/2024",
    icon: deloitteLogo,
  },
  {
    company: "Deloitte",
    designation: "Technology Intern",
    from: "01/2022",
    to: "04/2022",
    icon: deloitteLogo,
  },
];

export const footerContent = [
  {
    name: "Snippets",
    link: "/snippets",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Photography",
    link: "/photography",
  },
  {
    name: "Uses",
    link: "/uses",
  },
  {
    name: "Guestbook",
    link: "/guestbook",
  },
  {
    name: "Home",
    link: "/",
  },
];

export const uses = [
  {
    heading: "Workstation",
    items: [
      {
        item: "MacBook Air M1 (2020)",
        link: "",
        description:
          "My personal machine and the only difference between it and my work machine, HP Elitebook 845 G11 Notebook, is night and day.",
      },
      {
        item: "Keychron K2 V2",
        link: "https://keychron.in/product/keychron-k2-v-2/",
        description:
          "A keyboard I've admired for years before finally making it mine. Its minimalist design, perfect form factor, and satisfying key feel make it the centerpiece of my setup. The blend of retro aesthetics with modern functionality is exactly what I was looking for.",
      },
      {
        item: "Logitech MX Master 3S",
        link: "https://www.logitech.com/en-in/products/mice/mx-master-3s.910-006561.html",
        description:
          "After dealing with wired mice for too long, I needed something that could seamlessly work with both my Mac and work machine. This beast not only matches my K2 and Mac perfectly but also brings the perfect blend of style and functionality. It was the obvious choice that checked all the boxes.",
      },
      // {
      //   item: "24\" LG 24ML600S-W",
      //   link: "https://www.amazon.in/dp/B08J5Y9ZSV?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
      //   description: "My first external display and a perfect upgrade to my desk setup. Clean, minimal, and just what I needed."
      // },
    ],
  },
  {
    heading: "Editors/IDEs",
    items: [
      {
        item: "Zed",
        link: "https://zed.dev/",
        description:
          "My current daily driver for Next.js development. Its Claude integration, minimalist design, and lightning-fast performance make it a refreshing alternative to traditional editors. The clean, distraction-free environment helps me stay focused and productive.",
      },
      {
        item: "PyCharm CE",
        link: "https://www.jetbrains.com/pycharm/download/?section=mac",
        description: "My go-to IDE for Python development at work.",
      },
      {
        item: "VSCode",
        link: "https://code.visualstudio.com/",
        description:
          "While no longer my primary choice for Next.js, it remains a realiable companion for literally everything else. It's extension ecosystem remains unmatched!",
      },
      {
        item: "Helix",
        link: "https://helix-editor.com/",
        description:
          "A recent addition to my arsenal and already my favorite terminal-based editor. Its modern approach to modal editing and impressive out-of-the-box experience sets it apart from other terminal editors. A must try!",
      },
    ],
  },
  {
    heading: "Others",
    items: [
      {
        item: "iTerm2",
        link: "https://iterm2.com/",
        description:
          "My terminal emulator of choice. Coupled with Zsh and custom themes, it's both powerful and beautiful.",
      },
      {
        item: "Raycast",
        link: "https://www.raycast.com/",
        description:
          "The ultimate productivity tool for Mac. Replaced Spotlight and never looked back.",
      },
      {
        item: "Obsidian",
        link: "https://obsidian.md/",
        description:
          "My digital brain for notes, thoughts, and connections. Markdown support and local-first approach make it perfect.",
      },
      {
        item: "Spotify",
        link: "https://open.spotify.com/",
        description:
          "Essential companion for coding sessions. Sets the mood for productive development.",
      },
      {
        item: "Proton VPN",
        link: "https://protonvpn.com/?srsltid=AfmBOopmlV3mzoqWYKJ7wOBJRnpxX4XVCnFtUi-R0fOuUx27ENm7oWO5",
        description:
          "My trusted VPN service. Open-source, secure, and allows me to bypass geo restrictions - exactly what a VPN should be.",
      },
    ],
  },
];

export const snippets = [
  {
    link: "/snippets/cra-bash",
    title: "create-react-app using Bash",
    tags: ["Bash", "React", "Scripting"],
  },
  {
    link: "/snippets/boost-py-performance",
    title: "Boost Python Performance",
    tags: ["Python"],
  },
];

export const SKILL_MAP: IconMap = {
  Drizzle: SiDrizzle,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  "Next.js": SiNextdotjs,
  Supabase: SiSupabase,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  Bash: SiGnubash,
  Clerk: SiClerk,
  NextAuth: SiAuth0,
  Shadcn: SiShadcnui,
  Zod: SiZod,
  MongoDB: SiMongodb,
  SQL: SiPostgresql,
  Azure: VscAzure,
  Java: FaJava,
  Angular: SiAngular,
  Bootstrap: SiBootstrap,
};

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "Java"],
  frameworks: ["Next.js", "Angular", "Tailwind CSS", "Bootstrap"],
  database: ["Neon Postgres", "Supabase", "Drizzle", "MongoDB", "SQL"],
  auth: ["NextAuth", "Clerk"],
  cloud: ["Azure"],
};

export const projects: Project[] = [
  {
    title: "Envoice",
    description:
      "Simple, modern invoicing that lets small businesses focus on what matters.",
    tech: [
      "Next.js",
      "TypeScript",
      "Drizzle",
      "NextAuth",
      "Tailwind CSS",
      "Shadcn",
      "Zod",
    ],
    source: "https://github.com/rohilvarma/envoice",
    live: null,
    status: {
      variant: "progress",
      name: "In-Progress",
    },
  },
  {
    title: "Git Vault",
    description:
      "Your personal cloud storage hack: Turn GitHub into a free media vault, no coding required.",
    tech: ["Python"],
    source: "https://github.com/rohilvarma/git-vault",
    live: null,
    status: {
      name: "In-Progress",
      variant: "progress",
    },
  },
  {
    title: "HTTP Server",
    description:
      "A custom HTTP server built from scratch using Python sockets - handling requests and responses the old-school way.",
    tech: ["Python", "Socket Programming"],
    source: "https://github.com/rohilvarma/http-server-python",
    live: null,
    status: {
      name: "Completed",
      variant: "success",
    },
  },
  {
    title: "Portfolio",
    description:
      "A minimalist showcase of my developer journey, crafted with Next.js and styled with precision.",
    tech: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "Drizzle",
      "Tailwind CSS",
      "Shadcn",
    ],
    source: "https://github.com/rohilvarma/rohil-varma-portfolio",
    live: "https://rohilvarma.in/",
    status: {
      name: "Completed",
      variant: "success",
    },
  },
  {
    title: "Panvar Billing Suite",
    description:
      "Custom invoicing solution built for Panvar - streamlining billing workflows with modern tech and clean design.",
    tech: ["Angular", "TypeScript", "Tailwind CSS", "NextAuth", "Supabase"],
    source: "https://github.com/rohilvarma/panvar-billing-suite",
    live: "https://panvar-billing-suite.vercel.app/",
    status: {
      name: "Completed",
      variant: "success",
    },
  },
  {
    title: "Wordle Clone",
    description:
      "A homemade version of everyone's favorite five-letter word puzzle. Same addictive gameplay, fresh implementation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    source: "https://github.com/rohilvarma/wordle-clone",
    live: "https://wordle-clone-taupe.vercel.app/",
    status: {
      name: "Completed",
      variant: "success",
    },
  },
];

export const socials = [
  {
    label: "GitHub",
    link: "https://github.com/rohilvarma",
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/rohil-varma/",
    icon: SiLinkedin,
  },
  {
    label: "LeetCode",
    link: "https://leetcode.com/u/rohilvarma96/",
    icon: SiLeetcode,
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/_rohilvarma_/",
    icon: SiInstagram,
  },
];
