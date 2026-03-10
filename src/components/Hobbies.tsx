import React from "react";
import { Hobby } from "@/types";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { SectionLayout } from "@/components/layouts/SectionLayout";

export const Hobbies: React.FC = () => {
  const { t } = useTranslation();
  const { hobbies } = usePortfolio();

  return (
    <SectionLayout id="hobbies" title={t("hobbies.title")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {hobbies.map(({ icon: Icon, name }: Hobby, index: number) => (
          <div
            key={`hobby-${index}`}
            className="stagger-item card flex flex-col gap-3"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            {/* Icon + name */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 shrink-0">
                <Icon size={18} className="text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-sm text-gray-800 dark:text-white">
                {t(`hobbies.${name}.name`)}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {t(`hobbies.${name}.description`)}
            </p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
