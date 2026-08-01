import React from "react";
import { Text } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

/** Single compact line — no hobbies on CV */
export const LanguagesAndHobbies: React.FC = () => {
  const { t } = useTranslation();
  const { languages } = usePortfolio();

  const line = languages
    .map(
      (lang) =>
        `${t(`languages.${lang}.name`)} (${t(`languages.${lang}.level`)})`
    )
    .join("  ·  ");

  return (
    <Section title={t("languages.title")}>
      <Text style={styles.contentText}>{line}</Text>
    </Section>
  );
};
