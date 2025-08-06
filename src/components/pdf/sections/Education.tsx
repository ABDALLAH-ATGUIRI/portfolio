import React from "react";
import { View, Text } from "@react-pdf/renderer";
import useTranslation from "@/hooks/useTranslation";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("education.title")}>
      {["youcode", "high_school"].map((key, index) => (
        <View key={index}>
          <Text style={styles.title}>
            {t(`education.diploma.${key}.title`)}
          </Text>
          <Text style={styles.subtitle}>
            {t(`education.diploma.${key}.school`)} |{" "}
            {t(`education.diploma.${key}.date`)}
          </Text>
          <Text style={styles.countentText}>
            • {t(`education.diploma.${key}.description`)}
          </Text>
        </View>
      ))}
    </Section>
  );
};
