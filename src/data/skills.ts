import { Skill } from "../types/skills";

const skills: Skill[] = [
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

export default skills;
