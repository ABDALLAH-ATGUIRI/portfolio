import React from "react";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import useTranslation from "@/hooks/useTranslation";

export const Summary: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout id="about_me" title={t("about_me.title")}>
      <p className="card">
        {t("about_me.description")}
      </p>
    </SectionLayout>
  );
};
