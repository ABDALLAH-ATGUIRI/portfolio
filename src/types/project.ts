interface Project {
    images?: Array<string>;
    key: string;
    technologies: string[];
    github?: string; // Optional property for GitHub URL
    demo?: string; // Optional property for demo URL
}

export type { Project };