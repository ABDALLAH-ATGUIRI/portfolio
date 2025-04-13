import React from "react";
import { Text } from "@react-pdf/renderer";
import useTranslation from "@/hooks/useTranslation";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const CvSummary: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("about_me.title")}>
      <Text style={styles.countentText}>{t("about_me.description")}</Text>
    </Section>
  );
};
