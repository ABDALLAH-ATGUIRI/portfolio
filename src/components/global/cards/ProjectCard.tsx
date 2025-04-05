import { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Project } from "../../../types/project";
import Chip from "../Chip";
import { useTranslation } from "../../../context/TranslationContext";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }): JSX.Element => {
  const { t } = useTranslation();
  const imageScrollRef = useRef<HTMLDivElement>(null);

  const disabledLeft =
    imageScrollRef.current && imageScrollRef.current.scrollLeft === 0;

  const disabledRight =
    imageScrollRef.current &&
    imageScrollRef.current.scrollWidth -
      imageScrollRef.current.scrollLeft -
      imageScrollRef.current.clientWidth <=
      0;
  const scrollLeftDisabled = disabledLeft
    ? "opacity-50 cursor-not-allowed"
    : "";
  const scrollRightDisabled = disabledRight
    ? "opacity-50 cursor-not-allowed"
    : "";

  const scrollImagesLeft = () => {
    if (imageScrollRef.current) {
      imageScrollRef.current.scrollBy({ left: -1000, behavior: "smooth" });
    }
  };

  const scrollImagesRight = () => {
    if (imageScrollRef.current) {
      imageScrollRef.current.scrollBy({ left: 1000, behavior: "smooth" });
    }
  };

  return (
    <article className="bg-transparent dark:bg-gray-900 rounded-xl overflow-hidden shadow-md dark:shadow-lg hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 h-full flex flex-col">
      {/* Image Gallery */}
      <div className="relative">
        <div
          ref={imageScrollRef}
          className="flex overflow-x-hidden gap-2 h-56 hide-scrollbar snap-start transform transition-transform duration-300 hover:scale-[1.02]"
        >
          {project.images && project.images.length > 0 ? (
            project.images.map((image: string, imgIndex: number) => (
              <img
                key={imgIndex}
                src={image}
                alt={`${project.key} screenshot ${imgIndex + 1}`}
                className="flex-none w-full object-cover snap-start"
                loading="lazy"
              />
            ))
          ) : (
            <div className="flex items-center justify-center w-full bg-gray-200 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700">
              <span className="text-gray-500 dark:text-gray-400 text-lg font-semibold">
                No Preview Available
              </span>
            </div>
          )}
        </div>

        {/* Image Scroll Buttons */}
        {project.images && project.images.length > 1 && (
          <>
            <button
              onClick={scrollImagesLeft}
              className={
                "absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 dark:bg-gray-800/90 dark:hover:bg-gray-700/90 text-gray-200 dark:text-gray-300 p-1 rounded-full transition-all duration-200" +
                scrollLeftDisabled
              }
              aria-label="Scroll images left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollImagesRight}
              className={
                "absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 dark:bg-gray-800/90 dark:hover:bg-gray-700/90 text-gray-200 dark:text-gray-300 p-1 rounded-full transition-all duration-200" +
                scrollRightDisabled
              }
              aria-label="Scroll images right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-br from-white to-gray-50 shadow-md transition-all hover:shadow-lg dark:from-gray-800 dark:to-gray-900 h-[48vh]">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
          {t(`projects.${project.key}.title`)}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4 line-clamp-3 flex-grow">
          {t(`projects.${project.key}.description`)}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.map((tech: string, techIndex: number) => (
            <Chip key={`${tech}-${techIndex}`} text={tech} />
          ))}
        </div>
        <div className="flex gap-4 mt-auto border-t border-gray-200 dark:border-gray-700 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors duration-200 border border-gray-300 dark:border-gray-700"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
