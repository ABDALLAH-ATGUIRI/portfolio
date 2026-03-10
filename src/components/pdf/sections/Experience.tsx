import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const { experiences } = usePortfolio();

  return (
    <Section title={t("experience.title")}>
      {experiences.map((experience) => (
        <View key={experience.company_name} style={{ marginBottom: 1.5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.title}>
              {t(`experience.companies.${experience.company_name}.position`)}
            </Text>
            <Text style={{ ...styles.subtitle, fontStyle: "normal" }}>
              {t(`experience.companies.${experience.company_name}.date`)}
            </Text>
          </View>
          <Text style={styles.subtitle}>
            {t(`experience.companies.${experience.company_name}.title`)}
          </Text>
          <Text style={styles.contentText}>
            {t(`experience.companies.${experience.company_name}.description`)}
          </Text>
          <View style={{ ...styles.chipContainer, marginLeft: 4, marginTop: 0.5 }}>
            {experience.technical_skills.map((tech) => (
              <Text key={tech} style={styles.chip}>{tech}</Text>
            ))}
          </View>
        </View>
      ))}
    </Section>
  );
};
