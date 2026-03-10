import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const LanguagesAndHobbies: React.FC = () => {
  const { t } = useTranslation();
  const { languages } = usePortfolio();

  return (
    <Section title={t("languages.title")}>
      <View style={{ flexDirection: "row", gap: 16 }}>
        {languages.map((lang) => (
          <Text key={lang} style={styles.contentText}>
            {t(`languages.${lang}.name`)}: {t(`languages.${lang}.level`)}
          </Text>
        ))}
      </View>
    </Section>
  );
};
