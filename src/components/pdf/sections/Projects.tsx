import React from "react";
import { View, Text, Link } from "@react-pdf/renderer";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { projects } = usePortfolio();

  return (
    <Section title={t("projects.title")}>
      {projects.map(({ key, technologies, github }) => (
        <View key={key} style={{ marginBottom: 1.5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={styles.title}>{t(`projects.${key}.title`)}</Text>
            {github && (
              <Link src={github} style={styles.contactLink}>
                [GitHub]
              </Link>
            )}
          </View>
          <Text style={styles.contentText}>
            {t(`projects.${key}.description`)}
          </Text>
          <View style={{ ...styles.chipContainer, marginLeft: 4, marginTop: 0.5 }}>
            {technologies.map((tech) => (
              <Text key={tech} style={styles.chip}>
                {tech}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </Section>
  );
};
