import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { styles } from "../PDFStyle";

export const CvSummary: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        marginBottom: 3,
      }}
    >
      <Text style={styles.contentText}>{t("about_me.description")}</Text>
    </View>
  );
};
