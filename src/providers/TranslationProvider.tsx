import { useState, useEffect, useMemo, type ReactNode } from "react";
import { Language, translations } from "@/langs";
import { TranslationContext } from "@/context/TranslationContext";

type NestedRecord = { [key: string]: string | NestedRecord };

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("appLanguage") as Language) || "EN"
  );

  useEffect(() => {
    localStorage.setItem("appLanguage", language);
    document.documentElement.lang = language.toLowerCase();
    document.body.dir = language === "AR" ? "rtl" : "ltr";
  }, [language]);

  const t = useMemo(() => {
    return (key: string): string => {
      const result = key
        .split(".")
        .reduce<NestedRecord | string | undefined>(
          (obj, k) =>
            obj && typeof obj === "object" ? (obj as NestedRecord)[k] : undefined,
          translations[language] as NestedRecord
        );
      return typeof result === "string" ? result : key;
    };
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
