import React from "react";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import useTranslation from "@/hooks/useTranslation";

export const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout id="education" title={t("education.title")}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
        {["high_school", "youcode"].map((education) => (
          <div key={education} className="card">
            <h3 className="card-header">
              {t(`education.diploma.${education}.title`)}
            </h3>
            <p className="text-blue-600 dark:text-blue-300 font-semibold text-sm mt-1">
              {t(`education.diploma.${education}.school`)}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm italic mb-4 bg-gray-50 dark:bg-gray-900 px-3 py-1 rounded-full inline-block">
              {t(`education.diploma.${education}.date`)}{" "}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t(`education.diploma.${education}.description`)}
            </p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
