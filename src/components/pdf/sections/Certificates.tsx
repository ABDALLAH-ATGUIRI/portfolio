import React from "react";
import { Text } from "@react-pdf/renderer";
import { usePortfolio } from "@/hooks/usePortfolio";
import { useTranslation } from "@/hooks/useTranslation";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

/**
 * Compact one line per cert — role-filtered list only (2–3).
 * Full cert details live on the website; CV stays one A4 page.
 */
export const Certificates: React.FC = () => {
  const { certificates } = usePortfolio();
  const { t } = useTranslation();

  if (!certificates.length) return null;

  return (
    <Section title={t("about_me.certificates_title")}>
      {certificates.map(({ key, title, institution, date }) => (
        <Text key={key} style={styles.skillLine}>
          <Text style={styles.skillLabel}>{title}</Text>
          {` — ${institution} · ${date}`}
        </Text>
      ))}
    </Section>
  );
};
