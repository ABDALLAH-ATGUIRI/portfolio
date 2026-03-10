import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, ImageOff } from "lucide-react";
import type { Project } from "@/types";
import { useTranslation } from "@/hooks/useTranslation";
import { Chip } from "@/components/global/Chip";

const MAX_CHIPS = 5;

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

  return (
    <article className="card overflow-hidden flex flex-col h-full group">
      {/* Image Gallery */}
      <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {images.length > 0 ? (
          <>
            <img
              key={currentImage}
              src={images[currentImage]}
              alt={`${project.key} screenshot ${currentImage + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
            />

            {/* Hover-reveal nav buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  disabled={currentImage === 0}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-0"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={goNext}
                  disabled={currentImage === images.length - 1}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-0"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
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

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 leading-snug">
          {t(`projects.${project.key}.title`)}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {t(`projects.${project.key}.description`)}
        </p>

        {/* Technologies */}
        {visibleTechs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {visibleTechs.map((tech, i) => (
              <Chip
                key={`${tech}-${i}`}
                text={tech}
                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200"
              />
            ))}
            {extraCount > 0 && (
              <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">
                +{extraCount} more
              </span>
            )}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors duration-200 border border-gray-300 dark:border-gray-700 text-sm"
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
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
