import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, ImageOff } from "lucide-react";
import type { Project } from "@/types";
import { useTranslation } from "@/hooks/useTranslation";
import { Chip } from "@/components/global/Chip";

const MAX_CHIPS = 6;

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const images = project.images ?? [];
  const [currentImage, setCurrentImage] = useState(0);

  const goPrev = () => setCurrentImage((i) => Math.max(i - 1, 0));
  const goNext = () => setCurrentImage((i) => Math.min(i + 1, images.length - 1));

  const visibleTechs = project.technologies?.slice(0, MAX_CHIPS) ?? [];
  const extraCount = (project.technologies?.length ?? 0) - MAX_CHIPS;

  const title = t(`projects.${project.key}.title`);
  const tagline = t(`projects.${project.key}.tagline`);
  const role = t(`projects.${project.key}.role`);
  const description = t(`projects.${project.key}.description`);
  const hasTagline = tagline && !tagline.startsWith("projects.");
  const hasRole = role && !role.startsWith("projects.");

  return (
    <article className="card overflow-hidden flex flex-col h-full group border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-lg hover:border-cyan-500/30 dark:hover:border-cyan-400/25 transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
        {images.length > 0 ? (
          <>
            <img
              key={currentImage}
              src={images[currentImage]}
              alt={`${title} — screen ${currentImage + 1}`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/40 to-transparent" />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={currentImage === 0}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-0"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={currentImage === images.length - 1}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-0"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentImage(i)}
                      className={[
                        "w-1.5 h-1.5 rounded-full transition-all duration-200",
                        i === currentImage
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/80",
                      ].join(" ")}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full gap-2 text-gray-400 dark:text-gray-500">
            <ImageOff size={32} />
            <span className="text-xs font-medium">No Preview Available</span>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {hasRole && (
          <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1.5">
            {role}
          </p>
        )}
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug">
          {title}
        </h3>
        {hasTagline && (
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 mb-2">
            {tagline}
          </p>
        )}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {visibleTechs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {visibleTechs.map((tech, i) => (
              <Chip
                key={`${tech}-${i}`}
                text={tech}
                className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              />
            ))}
            {extraCount > 0 && (
              <span className="inline-flex items-center rounded-md bg-cyan-50 dark:bg-cyan-950/40 px-2.5 py-0.5 text-xs font-medium text-cyan-700 dark:text-cyan-300">
                +{extraCount}
              </span>
            )}
          </div>
        )}

        {(project.github || project.demo) && (
          <div className="flex gap-3 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg transition-colors duration-200 border border-slate-300 dark:border-slate-700 text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors duration-200 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Site
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
