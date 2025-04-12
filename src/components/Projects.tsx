import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import ProjectCard from "@/components/global/cards/ProjectCard";
import useTranslation from "@/hooks/useTranslation";
import projects from "@/data/projects";

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1); // -1 for rounding errors
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollDistance = scrollContainerRef.current.clientWidth + 24; // 100px for the gap
      scrollContainerRef.current.scrollBy({ left: -scrollDistance, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollDistance = scrollContainerRef.current.clientWidth  + 24;
      scrollContainerRef.current.scrollBy({ left: scrollDistance, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollPosition(); // Initial check
      container.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  return (
    <SectionLayout id="projects" title={t("projects.title")}>
      <div className="max-w-6xl mx-auto py-8 relative">
        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden gap-6 snap-x snap-mandatory hide-scrollbar"
        >
          {projects.map((project, index) => (
            <div
              key={`${project.key}-${index}`}
              className="flex-none w-full md:w-[calc(50%-1.5rem)] min-w-[300px]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-4 mt-8 max-w-xl mx-auto">
          {/* Scroll right Button */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="bg-gray-800/80 hover:bg-gray-700/80 dark:bg-gray-800/90 dark:hover:bg-gray-700/90 text-gray-200 dark:text-gray-300 p-2 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <span
                key={index}
                className="w-2.5 h-2.5 rounded-full bg-gray-600 dark:bg-gray-500 opacity-70 hover:bg-gray-300 dark:hover:bg-gray-200 transition-all duration-300"
              />
            ))}
          </div>

          {/* Scroll left Button */}
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="bg-gray-800/80 hover:bg-gray-700/80 dark:bg-gray-800/90 dark:hover:bg-gray-700/90 text-gray-200 dark:text-gray-300 p-2 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </SectionLayout>
  );
};
