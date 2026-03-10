import React from "react";
import { FolderOpen } from "lucide-react";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { ProjectCard } from "@/components/global/cards/ProjectCard";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { projects } = usePortfolio();

  return (
    <SectionLayout id="projects" title={t("projects.title")}>
      {/* Intro row — description + stat */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <p
          className="stagger-item text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-xl"
          style={{ animationDelay: "0ms" }}
        >
          {t("projects.description")}
        </p>

        <div
          className="stagger-item card flex flex-col items-center justify-center gap-1 px-6 py-4 shrink-0"
          style={{ animationDelay: "100ms" }}
        >
          <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 mb-1">
            <FolderOpen size={16} className="text-blue-500 dark:text-blue-400" />
          </div>
          <span className="text-2xl font-extrabold text-blue-500 dark:text-blue-400 leading-none">
            {t("projects.stats.total")}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {t("projects.stats.total_label")}
          </span>
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.key}
            className="stagger-item"
            style={{ animationDelay: `${200 + index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
