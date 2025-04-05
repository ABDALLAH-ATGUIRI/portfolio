import React from "react";
import { Hobby } from "../types/personalInfo";
import { SectionLayout } from "./layouts/SectionLayout";
import { useTranslation } from "../context/TranslationContext";
import { hobbies } from "../data/personalInfo";
import Chip from "./global/Chip";

export const Hobbies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout id="hobbies" title={t("hobbies.title")}>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hobbies.map(({ icon: Icon, name }: Hobby, index) => (
          <li key={name || index}>
            <Chip
              text={t(`hobbies.${name}.title`)}
              icon={<Icon className="dark:text-blue-300 text-blue-600" />}
              className="flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border transition-colors duration-300
                dark:bg-blue-900/30 dark:border-blue-500/20 dark:text-blue-100
                bg-white/50 border-gray-200 text-gray-700"
            />
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
};
