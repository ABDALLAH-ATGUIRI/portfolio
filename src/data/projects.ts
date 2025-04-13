import TaskManagementApp from "@/assets/images/projects/task-management-app.png";
import VirtualGearHub01 from "@/assets/images/projects/virtual_gear_hub01.png";
import VirtualGearHub02 from "@/assets/images/projects/virtual_gear_hub02.png";
import OnlineRestaurentReservation from "../assets/images/projects/online_restaurant_reservation_application.png";
import { Project } from "@/types";

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