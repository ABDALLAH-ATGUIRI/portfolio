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
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}
    >
      <Text style={[styles.sectionTitle, { marginRight: 8 }]}>{title}</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
    </View>{" "}
    {children}
  </View>
);
