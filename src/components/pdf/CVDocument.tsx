import React, { memo } from "react";
import { Document, Page } from "@react-pdf/renderer";
import { TranslationContext } from "@/context/TranslationContext";
import { PortfolioContext } from "@/context/PortfolioContext";
import type { Language } from "@/langs";
import type { ResolvedPortfolioData } from "@/types";
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
}

/** PDF uses its own React reconciler — provide data synchronously via context */
export const PDFWithTranslations: React.FC<PDFProps> = memo(
  ({ t, language, portfolioData }) => (
    <TranslationContext.Provider
      value={{ language, setLanguage: () => {}, t }}
    >
      <PortfolioContext.Provider value={portfolioData}>
        <Document>
          <Page size="A4" style={pageStyle}>
            {CV_SECTIONS.map((Component) => (
              <Component key={Component.name} />
            ))}
          </Page>
        </Document>
      </PortfolioContext.Provider>
    </TranslationContext.Provider>
  )
);

PDFWithTranslations.displayName = "PDFWithTranslations";
