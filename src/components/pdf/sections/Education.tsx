import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("education.title")}>
      {["ensa_safi", "simplon_grand_ouest", "youcode", "high_school"].map(
        (key) => (
        <View key={key}>
          <Text style={styles.title}>
            {t(`education.diploma.${key}.title`)}
          </Text>
          <Text style={styles.subtitle}>
            {t(`education.diploma.${key}.school`)} |{" "}
            {t(`education.diploma.${key}.date`)}
          </Text>
          <Text style={styles.contentText}>
            • {t(`education.diploma.${key}.description`)}
          </Text>
        </View>
      ))}
    </Section>
  );
};
