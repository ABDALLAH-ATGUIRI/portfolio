import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { styles } from "../PDFStyle";

export const Section: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <View style={styles.sectionWrapper}>
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, { marginRight: 6 }]}>{title}</Text>
      <View style={styles.sectionDivider} />
    </View>
    {children}
  </View>
);
