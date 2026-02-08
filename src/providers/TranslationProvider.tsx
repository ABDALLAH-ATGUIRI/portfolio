import React, { useState, useEffect, useMemo } from "react";
import { Language, translations } from "@/langs";
import { TranslationContext } from "@/context/TranslationContext";

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  // Load language preference from localStorage
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "EN";
    }
    try {
      return (localStorage.getItem("appLanguage") as Language) || "EN";
    } catch {
      return "EN";
    }
  });

  // Save language preference when changed
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("appLanguage", language);
    } catch {
      // ignore storage errors
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = language.toLowerCase();
      if (document.body) {
        document.body.dir = language === "AR" ? "rtl" : "ltr";
      }
    }
  }, [language]);

  // Optimized translation function with memoization
  const t = useMemo(() => {
    return (key: string): string => {
      return (
        key
          .split(".")
          .reduce(
            (obj: Record<string, any> | undefined, k: string) =>
              obj && typeof obj === "object" ? obj[k] : undefined,
            translations[language] as any
          ) ?? key
      );
    };
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
