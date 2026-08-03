import React from "react";
import { Text } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles, CV_LIMITS } from "../PDFStyle";

/**
 * Skills as plain labeled lines — ATS parsers read this reliably.
 * Lists are truncated to protect one-page layout.
 */
export const TechnicalSkills: React.FC = () => {
  const { t } = useTranslation();
  const { skills } = usePortfolio();

  return (
    <Section title={t("technical_skills.title")}>
      {skills.map(({ id, title, skills: items }) => (
        <Text key={id} style={styles.skillLine}>
          <Text style={styles.skillLabel}>
            {t(`technical_skills.${title}.title`)}:{" "}
          </Text>
          {items.slice(0, CV_LIMITS.skillsPerGroup).join(", ")}
          {items.length > CV_LIMITS.skillsPerGroup ? "…" : ""}
        </Text>
      ))}
    </Section>
  );
};
