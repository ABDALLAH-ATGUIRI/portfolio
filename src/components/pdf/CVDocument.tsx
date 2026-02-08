import React, { memo } from "react";
import { Document, Page } from "@react-pdf/renderer";
import { TranslationProvider } from "@/providers/TranslationProvider";
import {
  CVHeader,
  CvSummary,
  TechnicalSkills,
  Experience,
  Projects,
  Education,
  LanguagesAndHobbies,
} from "./sections";

const pageStyle = {
  padding: 14,
  backgroundColor: "#ffffff",
  fontFamily: "Helvetica",
  fontSize: 11,
  color: "#374151",
} as const;

const CV_SECTIONS = [
  CVHeader,
  CvSummary,
  TechnicalSkills,
  Experience,
  Projects,
  Education,
  LanguagesAndHobbies,
];

export const PDFWithTranslations: React.FC = memo(() => (
  <TranslationProvider>
    <Document>
      <Page size="A4" style={pageStyle}>
        {CV_SECTIONS.map((Component) => (
          <Component key={Component.name} />
        ))}
      </Page>
    </Document>
  </TranslationProvider>
));

PDFWithTranslations.displayName = "PDFWithTranslations";
