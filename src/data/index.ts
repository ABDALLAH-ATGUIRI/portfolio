import {
  Book,
  Code,
  Compass,
  Gamepad,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Music,
  Puzzle,
} from "lucide-react";

import {
  agriwiseLogo,
  codNetworkLogo,
  digitalEliteLogo,
} from "@/assets/images/companies";
import { Experience, Contact, Hobby, PersonalInfo,Certificate, Skill, Project } from "@/types";

  import MyPhoto from "@/assets/images/abdallahatguiri.webp";
import TaskManagementApp from "@/assets/images/projects/task-management-app.png";
import VirtualGearHub01 from "@/assets/images/projects/virtual_gear_hub01.png";
import VirtualGearHub02 from "@/assets/images/projects/virtual_gear_hub02.png";
import OnlineRestaurentReservation from "@/assets/images/projects/online_restaurant_reservation_application.png";

export const projects: Project[] = [
  {
    key: "project_4",
    technologies: [
      "React.js",
      "Redux",
      "React Icons",
      "React DnD",
      "JavaScript",
      "Tailwind CSS",
      "Matial-UI",
      "Vite",
    ],
    images: [VirtualGearHub01, VirtualGearHub02],
    github: "https://github.com/ABDALLAH-ATGUIRI/virtual-gear-hub",
  },
  {
    key: "project_2",
    technologies: ["Laravel", "MySQL", "Repository Pattern", "Passport"],
    github: "https://github.com/ABDALLAH-ATGUIRI/e-commerce-laravel",
  },
  {
    key: "project_1",
    technologies: [
      "React.js",
      "Redux",
      "React Icons",
      "React DnD",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
    ],
    images: [TaskManagementApp],
    github: "https://github.com/ABDALLAH-ATGUIRI/Task_management_app",
    demo: "https://abdallah-atguiri.github.io/Task_management_app/",
  },
  {
    key: "project_3",
    technologies: [
      "React.js",
      "Redux",
      "React Icons",
      "Matial-UI",
      "Vite",
      "Node.js",
      "Nestjs",
      "Prisma",
      "MongoDB",
    ],
    images: [OnlineRestaurentReservation],
    github: "https://github.com/ABDALLAH-ATGUIRI/Restaurant-app-frontend",
  },
];

export const skills: Skill[] = [
  {
    id: 1,
    title: "frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue",
      "Next",
      "Tailwind",
      "Bootstrap",
      "Material UI",
      "Element+",
      "Redux",
      "Vuex",
      "Nuxt",
    ],
  },
  {
    id: 2,
    title: "backend",
    skills: [
      "PHP",
      "Laravel",
      "Laravel Passport",
      "Sanctum",
      "Eloquent ORM",
      "API Development",
      "Authentication",
      "Redis",
      "Cron Jobs",
      "WebSockets",
    ],
  },
  {
    id: 3,
    title: "database",
    skills: ["MySQL", "MongoDB", "Redis"],
  },
  {
    id: 4,
    title: "version_control",
    skills: ["Git", "GitHub", "GitLab", "Jira", "Bitbucket"],
  },
  {
    id: 8,
    title: "others",
    skills: ["Linux", "Windows", "Figma", "Jest", "AI tools"],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Meta Front-End Developer",
    institution: "Meta",
    date: "August 2023",
    description:
      "Completed the Meta Front-End Developer Professional Certificate, covering HTML, CSS, JavaScript, React, and responsive web design.",
  },
  {
    title: "IBM Back-End Developer",
    institution: "IBM",
    date: "August 2023",
    description:
      "Completed the IBM Back-End Developer Professional Certificate, covering Node.js, Express, SQL, and RESTful APIs.",
  },
  {
    title: "CodinGame JavaScript Certification",
    institution: "CodinGame",
    date: "July 2023",
    description:
      "Achieved a score of 100% in the CodinGame JavaScript certification, demonstrating proficiency in JavaScript programming.",
  },
];

export const Experiences: Experience[] = [
  {
    company_name: "cod_network",
    companyLogo: codNetworkLogo,
    technical_skills: [
      "Laravel",
      "PHP",
      "JavaScript",
      "Vue.js",
      "React",
      "Tailwind CSS",
      "Docker",
      "MySQL",
      "Rides",
      "Rest API",
    ],
  },
  {
    company_name: "agriwise",
    companyLogo: agriwiseLogo,
    technical_skills: [
      "Laravel",
      "Php",
      "JavaScript",
      "Vue.js",
      "Tailwind CSS",
    ],
  },
  {
    company_name: "digital_elite",
    companyLogo: digitalEliteLogo,
    technical_skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
    ],
  },
];

export const me: PersonalInfo = {
  name: "Abdallah Atguiri",
  title: "Full Stack Web Developer",
  image: MyPhoto,
  location: "Morocco",
  phone: "+212623779270",
  email: "abdallahatguiri@gmail.com",
  summary: "about.description",
};

export const contactLinks: Contact[] = [
  {
    icon: Globe,
    href: "https://abdallah-atguiri.github.io/portfolio",
    ariaLabel: "Portfolio",
  },
  {
    icon: Github,
    href: "https://www.github.com/ABDALLAH-ATGUIRI",
    ariaLabel: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abdallah-atguiri",
    ariaLabel: "LinkedIn",
  },
  { icon: Mail, href: "mailto:abdallah.atguiri@gmail.com", ariaLabel: "Email" },
];

export const hobbies: Hobby[] = [
  {
    name: "coding",
    icon: Code,
  },
  {
    name: "music",
    icon: Music,
  },
  {
    name: "basketball",
    icon: Globe,
  },
  {
    name: "reading",
    icon: Book,
  },
  {
    name: "exploring",
    icon: Compass,
  },
  {
    name: "gaming",
    icon: Gamepad,
  },
  {
    name: "learning",
    icon: GraduationCap,
  },
  {
    name: "problem_solving",
    icon: Puzzle,
  },
];

export const LANGUAGES = ["arabic", "french", "english"];
