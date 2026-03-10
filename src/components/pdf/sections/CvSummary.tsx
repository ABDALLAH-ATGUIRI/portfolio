import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { styles } from "../PDFStyle";
import { Section } from "./Section";

export const CvSummary: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("about_me.title")}>
      <Text style={{ ...styles.contentText, marginLeft: 0 }}>
        {t("about_me.description")}
      </Text>
    </Section>
  );
};
