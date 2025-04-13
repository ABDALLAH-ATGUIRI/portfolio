import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { styles } from "../PDFStyle";

export const Section: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <View
    style={{
      marginBottom: 4,
    }}
  >
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);
