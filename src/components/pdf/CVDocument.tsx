import React, { memo, useMemo } from "react";
import { Document, Page } from "@react-pdf/renderer";
import { TranslationContext } from "@/context/TranslationContext";
import { PortfolioContext } from "@/context/PortfolioContext";
import type { Language } from "@/langs";
import type { ResolvedPortfolioData } from "@/types";
import type { CvVersion } from "@/types/cvVersion";
import { CV_VERSION_CONFIG } from "@/types/cvVersion";
import {
  CVHeader,
  CvSummary,
  TechnicalSkills,
  Experience,
  Projects,
  Education,
  LanguagesAndHobbies,
  Certificates,
} from "./sections";

const pageStyle = {
  paddingVertical: 16,
  paddingHorizontal: 22,
  backgroundColor: "#ffffff",
  fontFamily: "Helvetica",
  fontSize: 9,
  color: "#374151",
} as const;

const CV_SECTIONS = [
  CVHeader,
  CvSummary,
  Experience,
  TechnicalSkills,
  Education,
  Projects,
  Certificates,
  LanguagesAndHobbies,
];

interface PDFProps {
  t: (key: string) => string;
  language: Language;
  portfolioData: ResolvedPortfolioData;
  cvVersion: CvVersion;
}

function filterPortfolioData(
  data: ResolvedPortfolioData,
  version: CvVersion
): ResolvedPortfolioData {
  const config = CV_VERSION_CONFIG[version];
  return {
    ...data,
    skills: data.skills.filter((s) => config.skillIds.includes(s.id)),
    projects: data.projects.filter((p) => config.projectKeys.includes(p.key)),
  };
}

function createVersionedT(
  t: (key: string) => string,
  version: CvVersion
): (key: string) => string {
  const config = CV_VERSION_CONFIG[version];
  const overrides: Record<string, string> = {
    "developer.role": config.roleKey,
    "about_me.description": config.summaryKey,
  };

  return (key: string) => {
    const overrideKey = overrides[key];
    if (overrideKey) {
      const result = t(overrideKey);
      if (result !== overrideKey) return result;
    }
    return t(key);
  };
}

/** PDF uses its own React reconciler — provide data synchronously via context */
export const PDFWithTranslations: React.FC<PDFProps> = memo(
  ({ t, language, portfolioData, cvVersion }) => {
    const filteredData = useMemo(
      () => filterPortfolioData(portfolioData, cvVersion),
      [portfolioData, cvVersion]
    );
    const versionedT = useMemo(
      () => createVersionedT(t, cvVersion),
      [t, cvVersion]
    );

    return (
      <TranslationContext.Provider
        value={{ language, setLanguage: () => {}, t: versionedT }}
      >
        <PortfolioContext.Provider value={filteredData}>
          <Document>
            <Page size="A4" style={pageStyle}>
              {CV_SECTIONS.map((Component) => (
                <Component key={Component.name} />
              ))}
            </Page>
          </Document>
        </PortfolioContext.Provider>
      </TranslationContext.Provider>
    );
  }
);

PDFWithTranslations.displayName = "PDFWithTranslations";
