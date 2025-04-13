import React from "react";
import { View, Text } from "@react-pdf/renderer";
import useTranslation from "@/hooks/useTranslation";
import { hobbies, LANGUAGES } from "@/data/personalInfo";
import { Hobby } from "@/types";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const LanguagesAndHobbies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("languages.title") + " & " + t("hobbies.title")}>
      <View style={styles.container}>
        {LANGUAGES.map((lang, index) => (
          <Text key={index} style={styles.countentText}>
            • {t(`languages.${lang}.name`)} : {t(`languages.${lang}.level`)}
          </Text>
        ))}
      </View>
      <View style={styles.container}>
        <Text style={styles.countentText}>
          • {t("hobbies.title")} :
          {hobbies.map(({ name }: Hobby) => `${t(`hobbies.${name}.name`)}, `)}
        </Text>
      </View>
    </Section>
  );
};
