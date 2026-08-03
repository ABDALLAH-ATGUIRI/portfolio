import React from "react";
import { View, Text, Link } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles, CV_LIMITS } from "../PDFStyle";
import { cvText } from "../cvText";

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { projects } = usePortfolio();

  return (
    <Section title={t("projects.title")}>
      {projects.map(({ key, technologies, github, demo }) => {
        const tech = technologies
          .slice(0, CV_LIMITS.techPerProject)
          .join(", ");
        return (
          <View key={key} style={styles.entry} wrap={false}>
            <View style={styles.rowBetween}>
              <Text style={styles.title}>{t(`projects.${key}.title`)}</Text>
              <Text style={styles.date}>
                {demo && (
                  <Link src={demo} style={styles.contactLink}>
                    {t("projects.live_site")}
                  </Link>
                )}
                {demo && github ? "  ·  " : ""}
                {github && (
                  <Link src={github} style={styles.contactLink}>
                    {t("projects.github")}
                  </Link>
                )}
              </Text>
            </View>
            <Text style={styles.contentText}>
              {cvText(
                t,
                `projects.${key}.cv_description`,
                `projects.${key}.description`
              )}
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
