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
  const { ref, inView } = useInView<HTMLElement>(0.08);
  const isRTL = language === "AR";

  return (
    <section
      ref={ref}
      id={id}
      aria-label={title}
      className={[
        "scroll-mt-24 flex flex-col py-14 md:py-16",
        isRTL
          ? "pr-12 md:pr-14 pl-4 md:pl-6"
          : "pl-12 md:pl-14 pr-4 md:pr-6",
        inView ? "section-visible" : "",
      ].join(" ")}
    >
      <div className="relative mb-6 w-full">
        <div
          className={`absolute top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-cyan-500 to-cyan-400/15 ${
            isRTL ? "-right-7" : "-left-7"
          }`}
          aria-hidden="true"
        />

        <span
          className={`absolute top-[6px] w-3 h-3 rounded-full bg-cyan-500 border-2 border-white dark:border-slate-900 ring-4 ring-cyan-500/20 ${
            isRTL ? "-right-[31px]" : "-left-[31px]"
          }`}
          aria-hidden="true"
        />

        <h2
          className={`font-display text-2xl md:text-3xl font-bold text-slate-800 dark:text-white pb-3 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {title}
          {inView && <span className="section-title-line" aria-hidden="true" />}
        </h2>
      </div>

      <div className="w-full flex-1">{children}</div>
    </section>
  );
};
