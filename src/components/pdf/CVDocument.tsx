import React from "react";
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

export const PDFWithTranslations: React.FC = () => (
  <TranslationProvider>
    <Document>
      <Page
        size="A4"
        style={{
          padding: 24,
          backgroundColor: "#ffffff",
          fontFamily: "Helvetica", // Use default font
          fontSize: 12,
          color: "#374151",
        }}
      >
        {[
          CVHeader,
          CvSummary,
          TechnicalSkills,
          Experience,
          Projects,
          Education,
          LanguagesAndHobbies,
        ].map((Component, index) => (
          <Component key={index} />
        ))}
      </Page>
    </Document>
  </TranslationProvider>
);
