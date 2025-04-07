// PDFWrapper.tsx
import React from "react";
import { PDFDocument } from "./PDFDocument";
import { TranslationProvider } from "../../context/TranslationContext"; // Assuming this exists
import useTranslation from "../../hooks/useTranslation";

// Wrapper component to provide translations
const PDFWrapper: React.FC = () => {
  const { t } = useTranslation();
  return <PDFDocument t={t} />;
};

// Top-level component with TranslationProvider
export const PDFWithTranslations: React.FC = () => (
  <TranslationProvider>
    <PDFWrapper />
  </TranslationProvider>
);
