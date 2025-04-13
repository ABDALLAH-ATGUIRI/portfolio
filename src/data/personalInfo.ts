import { Contact, Hobby, PersonalInfo } from "../types";
import MyPhoto from "../assets/images/abdallahatguiri.webp";
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

const me: PersonalInfo = {
  name: "Abdallah Atguiri",
  title: "Full Stack Web Developer",
  image: MyPhoto,
  location: "Morocco",
  phone: "+212623779270",
  email: "abdallahatguiri@gmail.com",
  summary: "about.description",
};

const contactLinks: Contact[] = [
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

const hobbies: Hobby[] = [
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

export { me, contactLinks, hobbies };
