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
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  ariaLabel: string;
}

export interface Hobby {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Skill {
  id: number;
  title: string;
  skills: Array<string>;
}

export interface Project {
  images?: Array<string>;
  key: string;
  technologies: string[];
  github?: string; // Optional property for GitHub URL
  demo?: string; // Optional property for demo URL
}