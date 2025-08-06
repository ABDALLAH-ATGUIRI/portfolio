import React from "react";
import { View, Text } from "@react-pdf/renderer";
import useTranslation from "@/hooks/useTranslation";
import { styles } from "../PDFStyle";

export const CvSummary: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        marginBottom: 4,
      }}
    >
      <Text style={styles.countentText}>{t("about_me.description")}</Text>
    </View>
  );
};
