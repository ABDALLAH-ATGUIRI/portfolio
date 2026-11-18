import type { ResolvedPortfolioData } from "@/types";
import type { KnowledgeEntry } from "./answerQuestion";

type Translate = (key: string) => string;

const PROJECT_TRIGGERS: Record<string, string[]> = {
  fleetava: [
    "fleetava",
    "car rental",
    "location de voiture",
    "rental platform",
    "تأجير",
  ],
  atg_labs: ["atg-labs", "atg labs", "stlup", "3d print", "impression 3d", "طباعة"],
  mongestion: ["mongestion", "mon gestion", "inventaire", "inventory", "مخزون", "نقطة بيع"],
};

function written(t: Translate, key: string): string | null {
  const value = t(key);
  if (!value || value === key) return null;
  return value;
}

function joinLines(parts: Array<string | null | undefined | false>): string {
  return parts.filter((part): part is string => Boolean(part)).join("\n");
}

function projectAnswer(t: Translate, projectKey: string, technologies: string[], demo?: string): string {
  const highlights = [1, 2, 3]
    .map((index) => written(t, `projects.${projectKey}.highlight_${index}`))
    .filter((item): item is string => Boolean(item))
    .map((item) => `• ${item}`);

  return joinLines([
    `${t(`projects.${projectKey}.title`)} — ${t(`projects.${projectKey}.tagline`)}`,
    t(`projects.${projectKey}.description`),
    highlights.join("\n"),
    technologies.length > 0 ? technologies.join(", ") : null,
    demo,
  ]);
}

function contactAnswer(t: Translate, portfolio: ResolvedPortfolioData): string {
  const links = portfolio.contactLinks
    .filter((link) => link.ariaLabel !== "Email")
    .map((link) => `${link.ariaLabel}: ${link.href}`);

  return joinLines([
    `${t("contact.email_label")}: ${t("developer.email")}`,
    `${t("contact.phone_label")}: ${t("developer.phone")}`,
    `${t("contact.location_label")}: ${t("developer.location")}`,
    ...links,
  ]);
}

export function buildKnowledge(t: Translate, portfolio: ResolvedPortfolioData): KnowledgeEntry[] {
  const projectEntries = portfolio.projects.map((project) => ({
    id: `project-${project.key}`,
    triggers: PROJECT_TRIGGERS[project.key] ?? [project.key],
    answer: projectAnswer(t, project.key, project.technologies, project.demo),
  }));

  const experienceEntries = portfolio.experiences.map((experience) => {
    const companyKey = experience.company_name;
    return {
      id: `experience-${companyKey}`,
      triggers: [
        companyKey.split("_").join(" "),
        t(`experience.companies.${companyKey}.title`).split(",")[0] ?? companyKey,
      ],
      answer: joinLines([
        t(`experience.companies.${companyKey}.position`),
        t(`experience.companies.${companyKey}.title`),
        t(`experience.companies.${companyKey}.date`),
        t(`experience.companies.${companyKey}.description`),
      ]),
    };
  });

  const skillEntries = portfolio.skills.map((group) => ({
    id: `skill-${group.title}`,
    triggers: [t(`technical_skills.${group.title}.title`), ...group.skills],
    answer: joinLines([
      t(`technical_skills.${group.title}.title`),
      t(`technical_skills.${group.title}.description`),
      group.skills.join(", "),
    ]),
  }));

  const projectsOverview = portfolio.projects
    .map((project) => {
      const title = t(`projects.${project.key}.title`);
      const tagline = t(`projects.${project.key}.tagline`);
      return `• ${title}: ${tagline}`;
    })
    .join("\n");

  return [
    {
      id: "greeting",
      triggers: [],
      answer: t("assistant.greeting"),
    },
    {
      id: "about",
      triggers: [
        "who are you",
        "about you",
        "about me",
        "introduce",
        "qui es",
        "qui etes",
        "presente toi",
        "من أنت",
        "من انت",
        "عرفني",
      ],
      answer: joinLines([
        `${t("developer.name")} — ${t("developer.role")}`,
        t("developer.tagline"),
        t("about_me.description"),
      ]),
    },
    {
      id: "projects",
      triggers: [
        "projects",
        "shipped",
        "portfolio",
        "projets",
        "livré",
        "livre",
        "مشاريع",
        "سلمت",
      ],
      answer: joinLines([t("projects.description"), projectsOverview]),
    },
    ...projectEntries,
    {
      id: "experience",
      triggers: ["experience", "work history", "career", "expérience", "experience pro", "خبرة", "عمل"],
      answer: experienceEntries.map((entry) => entry.answer).join("\n\n"),
    },
    ...experienceEntries,
    {
      id: "skills",
      triggers: ["stack", "skills", "technologies", "compétences", "competences", "مهارات", "تقنيات"],
      answer: portfolio.skills
        .map((group) => `${t(`technical_skills.${group.title}.title`)}: ${group.skills.join(", ")}`)
        .join("\n"),
    },
    ...skillEntries,
    {
      id: "education",
      triggers: ["education", "degree", "diploma", "youcode", "ensa", "école", "ecole", "تعليم", "شهادة", "دراسة"],
      answer: joinLines([
        t("education.diploma.ensa_safi.title"),
        `${t("education.diploma.ensa_safi.school")} · ${t("education.diploma.ensa_safi.date")} · ${t("education.graduated")}`,
        t("education.diploma.youcode_simplon.title"),
        `${t("education.diploma.youcode_simplon.school")} · ${t("education.diploma.youcode_simplon.date")}`,
        t("education.diploma.high_school.title"),
        `${t("education.diploma.high_school.school")} · ${t("education.diploma.high_school.date")}`,
      ]),
    },
    {
      id: "certificates",
      triggers: ["certificate", "certification", "meta", "ibm", "codingame", "شهادة مهنية"],
      answer: portfolio.certificates
        .map((certificate) => `${certificate.title} — ${certificate.institution}, ${certificate.date}`)
        .join("\n"),
    },
    {
      id: "languages",
      triggers: [
        "languages",
        "speak",
        "arabic",
        "french",
        "english",
        "langues",
        "parles",
        "لغات",
        "عربي",
        "فرنسي",
      ],
      answer: portfolio.languages
        .map((language) => `${t(`languages.${language}.name`)} — ${t(`languages.${language}.level`)}`)
        .join("\n"),
    },
    ...portfolio.hobbies.map((hobby) => ({
      id: `hobby-${hobby.name}`,
      triggers: [t(`hobbies.${hobby.name}.name`)],
      answer: `${t(`hobbies.${hobby.name}.name`)}: ${t(`hobbies.${hobby.name}.description`)}`,
    })),
    {
      id: "hobbies",
      triggers: ["hobby", "hobbies", "loisirs", "هوايات"],
      answer: portfolio.hobbies
        .map((hobby) => `${t(`hobbies.${hobby.name}.name`)}: ${t(`hobbies.${hobby.name}.description`)}`)
        .join("\n"),
    },
    {
      id: "ai",
      triggers: ["cursor", "copilot", "claude", "chatgpt", "artificial intelligence", "الذكاء الاصطناعي"],
      answer: joinLines([
        t("ai.description"),
        t("ai.ai_coder.description"),
        t("ai.practice_1"),
        t("ai.practice_4"),
      ]),
    },
    {
      id: "contact",
      triggers: [
        "contact",
        "email",
        "phone",
        "reach",
        "hire",
        "available",
        "linkedin",
        "github",
        "contacter",
        "courriel",
        "téléphone",
        "telephone",
        "تواصل",
        "بريد",
        "هاتف",
        "ايميل",
      ],
      answer: joinLines([t("contact.description"), contactAnswer(t, portfolio)]),
    },
    {
      id: "location",
      triggers: [
        "where are you",
        "where do you live",
        "based in",
        "location",
        "morocco",
        "maroc",
        "المغرب",
        "أين تسكن",
        "وين ساكن",
      ],
      answer: `${t("contact.location_label")}: ${t("developer.location")}`,
    },
    {
      id: "cv",
      triggers: ["cv", "resume", "curriculum"],
      answer: t("assistant.cv_hint"),
    },
  ];
}
