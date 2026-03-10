import type { LucideIcon } from "lucide-react";

export interface Experience {
  company_name: string;
  companyLogo: string;
  technical_skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  image: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
}

/** JSON-serializable contact (icon stored as string key) */
export interface ContactData {
  icon: string;
  href: string;
  ariaLabel: string;
}

/** Resolved contact with actual Lucide component */
export interface Contact {
  icon: LucideIcon;
  href: string;
  ariaLabel: string;
}

/** JSON-serializable hobby (icon stored as string key) */
export interface HobbyData {
  name: string;
  icon: string;
}

/** Resolved hobby with actual Lucide component */
export interface Hobby {
  name: string;
  icon: LucideIcon;
}

export interface Skill {
  id: number;
  title: string;
  skills: string[];
}

export interface Project {
  images?: string[];
  key: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export interface Certificate {
  title: string;
  institution: string;
  date: string;
  description: string;
}

/** Raw portfolio JSON shape (before icon resolution) */
export interface PortfolioData {
  me: PersonalInfo;
  contactLinks: ContactData[];
  projects: Project[];
  skills: Skill[];
  certificates: Certificate[];
  experiences: Experience[];
  hobbies: HobbyData[];
  languages: string[];
}

/** Resolved portfolio data (icons are Lucide components) */
export interface ResolvedPortfolioData {
  me: PersonalInfo;
  contactLinks: Contact[];
  projects: Project[];
  skills: Skill[];
  certificates: Certificate[];
  experiences: Experience[];
  hobbies: Hobby[];
  languages: string[];
}