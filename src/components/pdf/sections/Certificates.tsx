import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const Certificates: React.FC = () => {
  const { certificates } = usePortfolio();

  return (
    <Section title="Certifications">
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
        {certificates.map(({ title, institution, date }) => (
          <View key={title} style={{ flex: "1 0 30%", marginBottom: 1 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>
              {institution} | {date}
            </Text>
          </View>
        ))}
      </View>
    </Section>
  );
};
