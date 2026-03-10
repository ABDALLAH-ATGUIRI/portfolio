import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("education.title")}>
      {["ensa_safi", "youcode_simplon"].map((key) => (
        <View key={key} style={{ flexDirection: "row", marginBottom: 1 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>
              {t(`education.diploma.${key}.title`)}
            </Text>
            <Text style={styles.subtitle}>
              {t(`education.diploma.${key}.school`)} |{" "}
              {t(`education.diploma.${key}.date`)}
            </Text>
          </View>
        </View>
      ))}
    </Section>
  );
};
