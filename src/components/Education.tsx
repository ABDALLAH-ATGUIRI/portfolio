import React from "react";
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { useTranslation } from "@/hooks/useTranslation";

export const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout id="education" title={t("education.title")}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
        {["ensa_safi", "simplon_grand_ouest", "youcode", "high_school"].map(
          (education, index) => {
            const isInProgress = education === "ensa_safi";

            return (
              <div
                key={education}
                className="card stagger-item flex flex-col gap-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card header — icon + title + school */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 shrink-0 mt-0.5">
                    <GraduationCap
                      size={22}
                      className="text-blue-500 dark:text-blue-400"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="card-header leading-snug">
                      {t(`education.diploma.${education}.title`)}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin
                        size={13}
                        className="text-blue-500 dark:text-blue-400 shrink-0"
                      />
                      <p className="text-blue-600 dark:text-blue-300 font-semibold text-sm truncate">
                        {t(`education.diploma.${education}.school`)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Date + graduated badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm italic">
                    <Calendar size={13} className="shrink-0" />
                    <span>{t(`education.diploma.${education}.date`)}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200 dark:border-green-800/40">
                    <CheckCircle2 size={12} />
                    {isInProgress
                      ? t("education.in_progress")
                      : t("education.graduated")}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {t(`education.diploma.${education}.description`)}
                </p>
              </div>
            );
          },
        )}
      </div>
    </SectionLayout>
  );
};
