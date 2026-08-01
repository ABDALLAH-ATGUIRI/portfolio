import React from "react";
import { Text } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

/**
 * Skills as plain labeled lines — ATS parsers read this reliably.
 * Includes AI group for keyword coverage.
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
          {items.join(", ")}
        </Text>
      ))}
    </Section>
  );
};
