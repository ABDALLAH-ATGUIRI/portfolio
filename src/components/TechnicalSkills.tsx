import { memo } from "react";
import { Skill } from "@/types";
import useTranslation from "@/hooks/useTranslation";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { Chip } from "@/components/global/Chip";
import { skills } from "@/data";

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
              `card`,
              id <= 2 ? "md:col-span-3" : "md:col-span-2",
            ].join(" ")}
            role="group"
            aria-labelledby={`skill-${id}`}
          >
            <h3 id={`skill-${id}`} className="card-header mb-4">
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
