import React, { useContext } from "react";
import { TranslationContext } from "@/context/TranslationContext";

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
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("TranslationContext is not provided.");
  }

  const { language } = context;

  return (
    <section className="mb-12" id={id}>
      <div className="relative ">
        {/* Timeline Dot */}
        <span
          className={`
            absolute top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 transform transition-transform duration-300 group-hover:scale-125
            ${language === "AR" ? "-right-8" : "-left-8"}
          `}
        />

        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          {title}
        </h2>
      </div>
      <div className="relative max-w-6xl mx-auto py-6">{children}</div>
    </section>
  );
};
