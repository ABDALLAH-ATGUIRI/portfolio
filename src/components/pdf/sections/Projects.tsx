import React from "react";
import { View, Text, Link } from "@react-pdf/renderer";
import useTranslation from "@/hooks/useTranslation";
import { projects } from "@/data";
import { Section } from "./Section";
import { styles } from "../PDFStyle";

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const filteredProjects = projects.filter(({ key }) =>
    ["project_1", "project_2"].includes(key)
  );

  return (
    <Section title={t("projects.title")}>
      {filteredProjects.map(({ key, technologies, github }, index) => (
        <View key={index}>
          <Text style={styles.title}>{t(`projects.${key}.title`)}</Text>
          <Text style={styles.countentText}>
            {t(`projects.${key}.description`)}
          </Text>
          <View style={styles.chipContainer}>
            <Text style={styles.countentText}>
              • {t(`setting.technologies`)} :{" "}
            </Text>
            {technologies.map((tech, techIndex) => (
              <Text key={techIndex} style={styles.chip}>
                {tech}
              </Text>
            ))}
          </View>
          <Text style={styles.countentText}>
            • github :{" "}
            <Link src={github} style={styles.contactLink}>
              {github}
            </Link>
          </Text>
        </View>
      ))}
    </Section>
  );
};
