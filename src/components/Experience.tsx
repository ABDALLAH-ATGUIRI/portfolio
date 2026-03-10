import React from "react";
import { Building2, Code2, Clock3 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { ExperienceCard } from "@/components/global/cards/ExperienceCard";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { experiences } from "@/data";

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      Icon: Clock3,
      value: t("experience.stats.years"),
      label: t("experience.stats.years_label"),
    },
    {
      Icon: Building2,
      value: t("experience.stats.companies"),
      label: t("experience.stats.companies_label"),
    },
    {
      Icon: Code2,
      value: t("experience.stats.focus"),
      label: t("experience.stats.focus_label"),
    },
  ];

  return (
    <SectionLayout id="experience" title={t("experience.title")}>
      {/* Stats strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map(({ Icon, value, label }, i) => (
          <div
            key={i}
            className="stagger-item card flex flex-col items-center justify-center gap-2 py-5 text-center"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 shadow-sm">
              <Icon size={20} className="text-blue-500 dark:text-blue-400" />
            </div>
            <span className="text-2xl font-extrabold text-blue-500 dark:text-blue-400 leading-none">
              {value}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Experience cards */}
      <div className="grid grid-cols-1 gap-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="stagger-item"
            style={{ animationDelay: `${300 + index * 150}ms` }}
          >
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
