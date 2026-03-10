import React from "react";
import { Monitor, Server, Database, Users, Award } from "lucide-react";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { useTranslation } from "@/hooks/useTranslation";
import { certificates } from "@/data";

export const Summary: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      value: t("about_me.stats.experience_value"),
      label: t("about_me.stats.experience_label"),
    },
    {
      value: t("about_me.stats.companies_value"),
      label: t("about_me.stats.companies_label"),
    },
    {
      value: t("about_me.stats.projects_value"),
      label: t("about_me.stats.projects_label"),
    },
    {
      value: t("about_me.stats.tech_value"),
      label: t("about_me.stats.tech_label"),
    },
  ];

  const whatIDo = [
    {
      Icon: Monitor,
      title: t("about_me.what_i_do.frontend_title"),
      desc: t("about_me.what_i_do.frontend_desc"),
    },
    {
      Icon: Server,
      title: t("about_me.what_i_do.backend_title"),
      desc: t("about_me.what_i_do.backend_desc"),
    },
    {
      Icon: Database,
      title: t("about_me.what_i_do.database_title"),
      desc: t("about_me.what_i_do.database_desc"),
    },
    {
      Icon: Users,
      title: t("about_me.what_i_do.teamwork_title"),
      desc: t("about_me.what_i_do.teamwork_desc"),
    },
  ];

  return (
    <SectionLayout id="about_me" title={t("about_me.title")}>
      {/* Description */}
      <p
        className="stagger-item text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed"
        style={{ animationDelay: "0ms" }}
      >
        {t("about_me.description")}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="stagger-item card flex flex-col items-center justify-center gap-1 py-5"
            style={{ animationDelay: `${100 + i * 80}ms` }}
          >
            <span className="text-3xl font-extrabold text-blue-500 dark:text-blue-400 leading-none">
              {stat.value}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* What I Do */}
      <h3
        className="stagger-item text-lg font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        style={{ animationDelay: "420ms" }}
      >
        {t("about_me.what_i_do.title")}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {whatIDo.map(({ Icon, title, desc }, i) => (
          <div
            key={i}
            className="stagger-item card flex items-start gap-4"
            style={{ animationDelay: `${500 + i * 80}ms` }}
          >
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 shrink-0 mt-0.5">
              <Icon size={18} className="text-blue-500 dark:text-blue-400" />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800 dark:text-white">
                {title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 font-mono">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <h3
        className="stagger-item text-lg font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        style={{ animationDelay: "820ms" }}
      >
        {t("about_me.certificates_title")}
      </h3>
      <div className="flex flex-col gap-3">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="stagger-item flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/60"
            style={{ animationDelay: `${900 + i * 80}ms` }}
          >
            <div className="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 shrink-0">
              <Award size={18} className="text-yellow-500" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm text-gray-800 dark:text-white truncate">
                {cert.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {cert.institution} · {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
