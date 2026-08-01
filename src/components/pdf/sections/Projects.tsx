import React from "react";
import { View, Text, Link } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

const MAX_TECH = 6;

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { projects } = usePortfolio();

  return (
    <Section title={t("projects.title")}>
      {projects.map(({ key, technologies, github, demo }) => {
        const tech = technologies.slice(0, MAX_TECH).join(", ");
        return (
          <View key={key} style={styles.entry} wrap={false}>
            <View style={styles.rowBetween}>
              <Text style={styles.title}>{t(`projects.${key}.title`)}</Text>
              <Text style={styles.date}>
                {github && (
                  <Link src={github} style={styles.contactLink}>
                    GitHub
                  </Link>
                )}
                {github && demo ? "  ·  " : ""}
                {demo && (
                  <Link src={demo} style={styles.contactLink}>
                    Demo
                  </Link>
                )}
              </Text>
            </View>
            <Text style={styles.contentText}>
              {t(`projects.${key}.description`)}
            </Text>
            {tech ? (
              <Text style={styles.techLine}>
                {t("cv.tech_label")}: {tech}
              </Text>
            ) : null}
          </View>
        );
      })}
    </Section>
  );
};
