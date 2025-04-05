import React from "react";
import { SectionLayout } from "./layouts/SectionLayout";
import { useTranslation } from "../context/TranslationContext";

export const Summary: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout id="about_me" title={t("about_me.title")}>
      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed bg-transparent dark:bg-gray-800 p-6 rounded-lg shadow-md">
        {t("about_me.description")}
      </p>
    </SectionLayout>
  );
};
