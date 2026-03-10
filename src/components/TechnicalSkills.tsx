import { memo } from "react";
import { Layout, Server, Database, GitBranch, Wrench, Code2 } from "lucide-react";
import { Skill } from "@/types";
import { useTranslation } from "@/hooks/useTranslation";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { Chip } from "@/components/global/Chip";
import { skills } from "@/data";

const SKILL_ICONS: Record<string, React.ElementType> = {
  frontend: Layout,
  backend: Server,
  database: Database,
  version_control: GitBranch,
  devops: Wrench,
  others: Code2,
};

export const TechnicalSkills = memo(() => {
  const { t } = useTranslation();
  const totalSkills = skills.reduce((sum, g) => sum + g.skills.length, 0);

  return (
    <SectionLayout title={t("technical_skills.title")} id="technical_skills">
      {/* Total summary pill */}
      <div
        className="stagger-item flex items-center gap-2 mb-6 text-sm text-gray-600 dark:text-gray-400"
        style={{ animationDelay: "0ms" }}
      >
        <Code2 size={16} className="text-blue-500" />
        <span>
          <span className="font-bold text-blue-500">{totalSkills}+</span>{" "}
          {t("technical_skills.overall_label")}
        </span>
      </div>

      {/* Skills grid */}
      <div
        className="mb-12 grid gap-6 md:grid-cols-6 lg:gap-8"
        aria-label="Technical Skills"
      >
        {skills.map(({ id, title, skills: items }: Skill, index) => {
          const Icon = SKILL_ICONS[title] ?? Code2;
          return (
            <article
              key={id}
              className={[
                "card stagger-item",
                id <= 2 ? "md:col-span-3" : "md:col-span-2",
              ].join(" ")}
              style={{ animationDelay: `${80 + index * 120}ms` }}
              role="group"
              aria-labelledby={`skill-${id}`}
            >
              {/* Group header with icon + count */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 shrink-0">
                  <Icon size={16} className="text-blue-500 dark:text-blue-400" />
                </div>
                <h3
                  id={`skill-${id}`}
                  className="card-header flex-1"
                >
                  {t(`technical_skills.${title}.title`)}
                </h3>
                <span className="text-xs font-semibold text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">
                  {items.length}
                </span>
              </div>

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
          );
        })}
      </div>
    </SectionLayout>
  );
});
