import { memo } from "react";
import { Skill } from "@/types";
import useTranslation from "@/hooks/useTranslation";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import Chip from "@/components/global/Chip";
import { skills } from "@/data/skills";

export const TechnicalSkills = memo(() => {
  const { t } = useTranslation();

  return (
    <SectionLayout title={t("technical_skills.title")} id="technical_skills">
      <div
        className="mb-12 grid gap-6 md:grid-cols-6 lg:gap-8"
        aria-label="Technical Skills"
      >
        {skills.map(({ id, title, skills: items }: Skill) => (
          <article
            key={id}
            className={[
              `rounded-xl border p-6 shadow-md transition-colors hover:shadow-lg dark:border-gray-700`,
              `bg-gradient-to-br from-transparent to-gray-50 dark:from-gray-800 dark:to-gray-900`,
              id <= 2 ? "md:col-span-3" : "md:col-span-2",
            ].join(" ")}
            role="group"
            aria-labelledby={`skill-${id}`}
          >
            <h3
              id={`skill-${id}`}
              className="mb-4 text-xl font-semibold text-gray-800 dark:text-white"
            >
              {t(`technical_skills.${title}.title`)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Chip
                  key={item}
                  text={item}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionLayout>
  );
});
