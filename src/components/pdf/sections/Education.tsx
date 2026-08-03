import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

/** Compact education — title + school + date only (one-page CV) */
export const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("education.title")}>
      {["ensa_safi", "youcode_simplon"].map((key) => (
        <View key={key} style={styles.entry} wrap={false}>
          <View style={styles.rowBetween}>
            <Text style={styles.title}>
              {t(`education.diploma.${key}.title`)}
            </Text>
            <Text style={styles.date}>
              {t(`education.diploma.${key}.date`)}
            </Text>
          </View>
          <Text style={styles.subtitle}>
            {t(`education.diploma.${key}.school`)}
          </Text>
        </View>
      ))}
    </Section>
  );
};
