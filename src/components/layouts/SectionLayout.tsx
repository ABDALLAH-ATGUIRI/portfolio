import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useInView } from "@/hooks/useInView";

interface SectionLayoutProps {
  children: React.ReactNode;
  title: string;
  id: string;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  children,
  title,
  id,
}) => {
  const { language } = useTranslation();
  const { ref, inView } = useInView<HTMLElement>(0.05);
  const isRTL = language === "AR";

  return (
    <section
      ref={ref}
      id={id}
      aria-label={title}
      /* Full-screen snap section */
      className={[
        "min-h-screen snap-start snap-always overflow-y-auto",
        "flex flex-col",
        /* Header clearance + bottom padding */
        "pt-20 pb-10",
        /* Horizontal padding — enough room for the timeline dot */
        isRTL
          ? "pr-12 md:pr-14 pl-4 md:pl-8"
          : "pl-12 md:pl-14 pr-4 md:pr-8",
        inView ? "section-visible" : "",
      ].join(" ")}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {/* ── Section header ── */}
      <div className="relative mb-6 container mx-auto max-w-5xl w-full">
        {/* Vertical accent bar */}
        <div
          className={`absolute top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-blue-500 to-blue-400/20 ${
            isRTL ? "-right-7" : "-left-7"
          }`}
        />

        {/* Timeline dot with glow ring */}
        <span
          className={`absolute top-[6px] w-3 h-3 rounded-full bg-blue-500 border-2 border-white dark:border-gray-900 ring-4 ring-blue-500/20 ${
            isRTL ? "-right-[31px]" : "-left-[31px]"
          }`}
        />

        <h2
          className={`text-2xl md:text-3xl font-bold text-gray-800 dark:text-white pb-3 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {title}
          {inView && <span className="section-title-line" />}
        </h2>
      </div>

      {/* ── Section body ── */}
      <div className="container mx-auto max-w-5xl w-full flex-1">
        {children}
      </div>
    </section>
  );
};
