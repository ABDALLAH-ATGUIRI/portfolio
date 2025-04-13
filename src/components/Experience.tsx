import React from "react";
import useTranslation from "@/hooks/useTranslation";
import ExperienceCard from "@/components/global/cards/ExperienceCard";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { Experiences } from "@/data/experience";

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
