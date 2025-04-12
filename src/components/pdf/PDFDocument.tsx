import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Font,
  Link,
  Image,
} from "@react-pdf/renderer";
import { me, contactLinks, hobbies } from "@/data/personalInfo";
import { Contact, Hobby, PersonalInfo } from "@/types/personalInfo";
import robotoRegular from "@/assets/fonts/Roboto-Regular.ttf";
import robotoBold from "@/assets/fonts/Roboto-Bold.ttf";
import styles from "./PDFDocumentStyle";
import Experiences from "@/data/experience";
import projects from "@/data/projects";

// Register fonts at module level
Font.register({
  family: "Roboto",
  fonts: [
    { src: robotoRegular, fontWeight: "normal" },
    { src: robotoBold, fontWeight: "bold" },
  ],
});

// Reusable Components
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const SkillItem: React.FC<{ skill: string }> = ({ skill }) => (
  <View style={styles.skillItem}>
    <Text style={styles.skillText}>{skill}</Text>
  </View>
);

const ExperienceItem: React.FC<{
  experience: (typeof Experiences)[0];
  t: (key: string) => string;
}> = ({ experience, t }) => (
  <View style={styles.experienceItem}>
    <Text style={styles.companyName}>
      {t(`experience.companies.${experience.company_name}.position`)}
    </Text>
    <Text style={styles.date}>
      {t(`experience.companies.${experience.company_name}.title`)} -{" "}
      {t(`experience.companies.${experience.company_name}.date`)}
    </Text>
    <Text style={styles.bulletPoint}>
      {t(`experience.companies.${experience.company_name}.description`)}
    </Text>
  </View>
);

const ProjectItem: React.FC<{
  project: (typeof projects)[0];
  t: (key: string) => string;
}> = ({ project, t }) => (
  <View style={styles.projectItem}>
    <Text style={styles.projectTitle}>
      {t(`projects.${project.key}.title`)}
    </Text>
    <Text style={styles.bulletPoint}>
      {t(`projects.${project.key}.description`)}
    </Text>
  </View>
);

const EducationItem: React.FC<{
  educationKey: string;
  t: (key: string) => string;
}> = ({ educationKey, t }) => (
  <View style={styles.experienceItem}>
    <Text style={styles.companyName}>
      {t(`education.diploma.${educationKey}.title`)}
    </Text>
    <Text style={styles.date}>
      {t(`education.diploma.${educationKey}.school`)} |{" "}
      {t(`education.diploma.${educationKey}.date`)}
    </Text>
    <Text style={styles.bulletPoint}>
      • {t(`education.diploma.${educationKey}.description`)}
    </Text>
  </View>
);

// Static Data
const SKILLS = [
  "PHP",
  "Laravel",
  "Vue.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "MySQL",
  "Git",
  "REST APIs",
];

const LANGUAGES = [
  "Arabic: Native",
  "English: Intermediate",
  "French: Beginner",
];

const CERTIFICATIONS = [
  "Meta: Intro to Front-End Development",
  "IBM: Back-End with Node.js and Express",
];

// Props Interface
interface PDFDocumentProps {
  t: (key: string) => string;
}

export const PDFDocument: React.FC<PDFDocumentProps> = ({ t }) => {
  const { image, phone }: PersonalInfo = me;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              src={image || "https://via.placeholder.com/60"}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.name}>{t("developer.name")}</Text>
              <Text style={styles.title}>{t("developer.role")}</Text>
            </View>
          </View>
          <View style={styles.contactContainer}>
            <Text style={styles.contact}>
              address : {t("developer.location")}
            </Text>
            <Text style={styles.contact}>phone : {phone}</Text>
            {contactLinks.map(({ href, ariaLabel }: Contact, index) => (
              <Text style={styles.contact} key={index}>
                {ariaLabel} :{" "}
                <Link key={index} src={href} style={styles.link}>
                  {" "}
                  {href}{" "}
                </Link>
              </Text>
            ))}
          </View>
        </View>

        {/* Professional Summary */}
        <Section title={t("about_me.title")}>
          <Text style={styles.text}>{t("about_me.description")}</Text>
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills">
          <View style={styles.skillsGrid}>
            {SKILLS.map((skill) => (
              <SkillItem key={skill} skill={skill} />
            ))}
          </View>
        </Section>

        {/* Professional Experience */}
        <Section title={t("experience.title")}>
          {Experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} t={t} />
          ))}
        </Section>

        {/* Projects */}
        <Section title={t("projects.title")}>
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} t={t} />
          ))}
        </Section>

        {/* Education & Certifications */}
        <Section title="Education & Certifications">
          {["high_school", "youcode"].map((educationKey) => (
            <EducationItem
              key={educationKey}
              educationKey={educationKey}
              t={t}
            />
          ))}
          <Text style={styles.companyName}>Certifications</Text>
          {CERTIFICATIONS.map((cert, index) => (
            <Text key={index} style={styles.bulletPoint}>
              • {cert}
            </Text>
          ))}
        </Section>

        {/* Languages & Hobbies */}
        <Section title="Languages & Hobbies">
          <View style={styles.languagesContainer}>
            {LANGUAGES.map((lang, index) => (
              <Text key={index} style={styles.text}>
                {lang}
              </Text>
            ))}
          </View>
          <Text style={styles.text}>
            Hobbies:{" "}
            {...hobbies.map(
              ({ name }: Hobby) => t(`hobbies.${name}.title`) + ", "
            )}
          </Text>
        </Section>
      </Page>
    </Document>
  );
};
