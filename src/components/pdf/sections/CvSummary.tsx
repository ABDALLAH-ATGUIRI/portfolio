import React from "react";
import { Text } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { styles } from "../PDFStyle";
import { Section } from "./Section";

export const CvSummary: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("cv.summary_title")}>
      <Text style={styles.contentText}>{t("about_me.description")}</Text>
    </Section>
  );
};
