import React from "react";
import { Sparkles, Wand2, Bot, CheckCircle2 } from "lucide-react";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { Chip } from "@/components/global/Chip";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";

export const AiSection: React.FC = () => {
  const { t } = useTranslation();
  const { skills } = usePortfolio();
  const aiSkills = skills.find((s) => s.title === "ai")?.skills ?? [];

  const roles = [
    {
      Icon: Bot,
      title: t("ai.ai_coder.title"),
      description: t("ai.ai_coder.description"),
    },
    {
      Icon: Wand2,
      title: t("ai.vibe_coder.title"),
      description: t("ai.vibe_coder.description"),
    },
  ];

  const practices = [
    t("ai.practice_1"),
    t("ai.practice_2"),
    t("ai.practice_3"),
    t("ai.practice_4"),
  ];

  return (
    <SectionLayout id="ai" title={t("ai.title")}>
      <p
        className="stagger-item text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed"
        style={{ animationDelay: "0ms" }}
      >
        {t("ai.description")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {roles.map(({ Icon, title, description }, i) => (
          <article
            key={title}
            className="stagger-item card flex flex-col gap-3"
            style={{ animationDelay: `${100 + i * 80}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 shrink-0">
                <Icon size={18} className="text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </article>
        ))}
      </div>

      {aiSkills.length > 0 && (
        <div
          className="stagger-item flex flex-wrap gap-2 mt-8"
          style={{ animationDelay: "280ms" }}
        >
          {aiSkills.map((skill) => (
            <Chip
              key={skill}
              text={skill}
              className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            />
          ))}
        </div>
      )}

      <h3
        className="stagger-item text-lg font-semibold text-gray-800 dark:text-white mt-10 mb-4 flex items-center gap-2"
        style={{ animationDelay: "360ms" }}
      >
        <Sparkles size={18} className="text-blue-500" />
        {t("ai.practices_title")}
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {practices.map((practice, i) => (
          <li
            key={practice}
            className="stagger-item flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 p-4"
            style={{ animationDelay: `${420 + i * 60}ms` }}
          >
            <CheckCircle2
              size={16}
              className="text-emerald-500 shrink-0 mt-0.5"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {practice}
            </span>
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
};
