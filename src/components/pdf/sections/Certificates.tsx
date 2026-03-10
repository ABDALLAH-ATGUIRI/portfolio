import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const Certificates: React.FC = () => {
  const { certificates } = usePortfolio();

  return (
    <Section title="Certifications">
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
        {certificates.map(({ title, institution, date, description }) => (
          <View key={title} style={{ flex: "1 0 45%", marginBottom: 1.5 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>
              {institution} | {date}
            </Text>
            <Text style={{ ...styles.contentText, marginLeft: 0, fontSize: 8 }}>
              {description}
            </Text>
          </View>
        ))}
      </View>
    </Section>
  );
};
