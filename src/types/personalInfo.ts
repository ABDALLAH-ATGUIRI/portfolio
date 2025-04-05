interface PersonalInfo {
  name: string;
  title: string;
  image: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
}

interface Contact {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  ariaLabel: string;
}

interface Hobby {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type { PersonalInfo, Contact, Hobby };
