import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { usePortfolio } from "@/hooks/usePortfolio";
import { useTranslation } from "@/hooks/useTranslation";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const Certificates: React.FC = () => {
  const { certificates } = usePortfolio();
  const { t } = useTranslation();

  return (
    <Section title={t("about_me.certificates_title")}>
      {certificates.map(({ title, institution, date }) => (
        <View key={title} style={{ marginBottom: 3 }} wrap={false}>
          <View style={styles.rowBetween}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Text style={styles.subtitle}>{institution}</Text>
        </View>
      ))}
    </Section>
  );
};
