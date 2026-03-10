import { useState, useEffect, useCallback, type ReactNode } from "react";
import { Language, langFileName } from "@/langs";
import { TranslationContext } from "@/context/TranslationContext";
import { fetchJson } from "@/utils/fetchJson";

type NestedRecord = { [key: string]: string | NestedRecord };

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("appLanguage") as Language) || "EN"
  );
  const [translations, setTranslations] = useState<NestedRecord>({});

  useEffect(() => {
    localStorage.setItem("appLanguage", language);
    document.documentElement.lang = language.toLowerCase();
    document.body.dir = language === "AR" ? "rtl" : "ltr";

    fetchJson<NestedRecord>(`data/langs/${langFileName(language)}.json`).then(
      setTranslations
    );
  }, [language]);

  const t = useCallback(
    (key: string): string => {
      const result = key
        .split(".")
        .reduce<NestedRecord | string | undefined>(
          (obj, k) =>
            obj && typeof obj === "object" ? (obj as NestedRecord)[k] : undefined,
          translations
        );
      return typeof result === "string" ? result : key;
    },
    [translations]
  );

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
