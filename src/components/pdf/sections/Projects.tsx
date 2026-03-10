import React from "react";
import { View, Text, Link } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { projects } = usePortfolio();
  const filteredProjects = projects.filter(({ key }) =>
    ["project_1", "project_2"].includes(key)
  );

  return (
    <Section title={t("projects.title")}>
      {filteredProjects.map(({ key, technologies, github }) => (
        <View key={key}>
          <Text style={styles.title}>{t(`projects.${key}.title`)}</Text>
          <Text style={styles.contentText}>
            {t(`projects.${key}.description`)}
          </Text>
          <View style={styles.chipContainer}>
            <Text style={styles.contentText}>
              • {t(`setting.technologies`)} :{" "}
            </Text>
            {technologies.map((tech) => (
              <Text key={tech} style={styles.chip}>
                {tech}
              </Text>
            ))}
          </View>
          {github && (
            <Text style={styles.contentText}>
              • GitHub: <Link src={github} style={styles.contactLink}>{github.replace(/^https?:\/\/(www\.)?/, "")}</Link>
            </Text>
          )}
        </View>
      ))}
    </Section>
  );
};
