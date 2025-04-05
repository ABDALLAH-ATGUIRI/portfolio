import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { Language, translations } from "../langs";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load language preference from localStorage
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("appLanguage") as Language) || "EN";
  });

  // Save language preference when changed
  useEffect(() => {
    localStorage.setItem("appLanguage", language);
    document.documentElement.lang = language.toLowerCase();
    document.body.dir = language === "AR" ? "rtl" : "ltr";
  }, [language]);

  // Optimized translation function with memoization
  const t = useMemo(() => {
    return (key: string): string => {
      return key.split(".").reduce((obj, k) => (obj && typeof obj === "object" ? obj[k] : undefined), translations[language]) ?? key;
    };
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
