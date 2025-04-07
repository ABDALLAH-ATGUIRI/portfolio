import React from "react";
import Experiences from "../data/experience";
import ExperienceCard from "./global/cards/ExperienceCard";
import { SectionLayout } from "./layouts/SectionLayout";
import useTranslation from "../hooks/useTranslation";

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout id="experience" title={t("experience.title")}>
      <div className="grid grid-cols-1 gap-6">
        {Experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </SectionLayout>
  );
};
