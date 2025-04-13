import {
  agriwiseLogo,
  codNetworkLogo,
  digitalEliteLogo,
} from "@/assets/images/companies";
import { Experience } from "@/types";

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