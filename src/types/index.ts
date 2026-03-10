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

export interface Contact {
  icon: LucideIcon;
  href: string;
  ariaLabel: string;
}

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