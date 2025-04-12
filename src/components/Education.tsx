import React from "react";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import useTranslation from "@/hooks/useTranslation";

export const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout id="education" title={t("education.title")}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
        {["high_school", "youcode"].map((education) => (
          <div
            key={education}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {t(`education.diploma.${education}.title`)}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
              {t(`education.diploma.${education}.school`)}
            </p>
            <p className="text-gray-500 dark:text-gray-400 italic text-sm mb-3">
              {t(`education.diploma.${education}.date`)}
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
