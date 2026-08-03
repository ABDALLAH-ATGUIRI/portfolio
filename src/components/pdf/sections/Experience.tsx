import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles, CV_LIMITS } from "../PDFStyle";
import { cvText } from "../cvText";

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const { experiences } = usePortfolio();

  return (
    <Section title={t("experience.title")}>
      {experiences.map((experience) => {
        const tech = experience.technical_skills
          .slice(0, CV_LIMITS.techPerExperience)
          .join(", ");
        const company = experience.company_name;
        return (
          <View key={company} style={styles.entry} wrap={false}>
            <View style={styles.rowBetween}>
              <Text style={styles.title}>
                {t(`experience.companies.${company}.position`)}
              </Text>
              <Text style={styles.date}>
                {t(`experience.companies.${company}.date`)}
              </Text>
            </View>
            <Text style={styles.subtitle}>
              {t(`experience.companies.${company}.title`)}
            </Text>
            <Text style={styles.contentText}>
              {cvText(
                t,
                `experience.companies.${company}.cv_description`,
                `experience.companies.${company}.description`
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
