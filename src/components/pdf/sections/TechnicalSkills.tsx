import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const TechnicalSkills: React.FC = () => {
  const { t } = useTranslation();
  const { skills } = usePortfolio();
  const filteredSkills = skills.slice(0, -1);
  return (
    <Section title={t("technical_skills.title")}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 6,
        }}
      >
        {filteredSkills.map(({ id, title, skills }) => (
          <View key={id} style={styles.skillGroup}>
            <Text style={styles.title}>
              {t(`technical_skills.${title}.title`)}
            </Text>
            <View style={styles.chipContainer}>
              {skills.map((item) => (
                <Text key={item} style={styles.chip}>
                  {item}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </Section>
  );
};
