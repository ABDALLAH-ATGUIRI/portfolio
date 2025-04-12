import React from "react";
import { PDFDocument } from "./PDFDocument";
import useTranslation from "@/hooks/useTranslation";
import { TranslationProvider } from "@/providers/TranslationProvider";

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
