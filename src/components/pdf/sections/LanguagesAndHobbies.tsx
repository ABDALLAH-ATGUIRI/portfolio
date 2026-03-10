import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const LanguagesAndHobbies: React.FC = () => {
  const { t } = useTranslation();
  const { languages, hobbies } = usePortfolio();

  return (
    <View style={{ flexDirection: "row", gap: 12 }}>
      <View style={{ flex: 1 }}>
        <Section title={t("languages.title")}>
          <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
            {languages.map((lang) => (
              <Text key={lang} style={{ ...styles.contentText, marginLeft: 0 }}>
                {t(`languages.${lang}.name`)}: {t(`languages.${lang}.level`)}
              </Text>
            ))}
          </View>
        </Section>
      </View>
      <View style={{ flex: 1 }}>
        <Section title={t("hobbies.title")}>
          <View style={styles.chipContainer}>
            {hobbies.slice(0, 5).map(({ name }) => (
              <Text key={name} style={styles.chip}>
                {t(`hobbies.${name}.name`)}
              </Text>
            ))}
          </View>
        </Section>
      </View>
    </View>
  );
};
