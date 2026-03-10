import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { Section } from "./Section";
import { styles } from "../PDFStyle";
import { experiences } from "@/data";

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("experience.title")}>
      {experiences.map((experience) => (
        <View key={experience.company_name}>
          <Text style={styles.title}>
            {t(`experience.companies.${experience.company_name}.position`)}
          </Text>
          <Text style={styles.subtitle}>
            {t(`experience.companies.${experience.company_name}.title`)} -{" "}
            {t(`experience.companies.${experience.company_name}.date`)}
          </Text>
          <Text style={styles.contentText}>
            {t(`experience.companies.${experience.company_name}.description`)}
          </Text>
        </View>
      ))}
    </Section>
  );
};
