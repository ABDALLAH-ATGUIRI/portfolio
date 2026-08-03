import { useState, useEffect, useCallback, type ReactNode } from "react";
import { Language, langFileName } from "@/langs";
import { TranslationContext } from "@/context/TranslationContext";
import { fetchJson } from "@/utils/fetchJson";

type NestedRecord = { [key: string]: string | NestedRecord };

const TITLE_BY_LANG: Record<Language, string> = {
  EN: "Abdallah Atguiri — Full-Stack Developer & AI Coder | React, Laravel, Node.js",
  FR: "Abdallah Atguiri — Développeur Full-Stack & AI Coder | React, Laravel, Node.js",
  AR: "عبد الله اتقيري — مطور Full-Stack و AI Coder | React, Laravel, Node.js",
};

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("appLanguage");
    return saved === "EN" || saved === "FR" || saved === "AR" ? saved : "EN";
  });
  const [translations, setTranslations] = useState<NestedRecord>({});

  useEffect(() => {
    localStorage.setItem("appLanguage", language);
    const lang = language.toLowerCase();
    document.documentElement.lang = lang === "ar" ? "ar" : lang;
    document.documentElement.dir = language === "AR" ? "rtl" : "ltr";
    document.title = TITLE_BY_LANG[language] ?? TITLE_BY_LANG.EN;

    let cancelled = false;
    fetchJson<NestedRecord>(`data/langs/${langFileName(language)}.json`)
      .then((data) => {
        if (!cancelled) setTranslations(data);
      })
      .catch(() => {
        if (!cancelled) setTranslations({});
      });
    return () => {
      cancelled = true;
    };
  }, [language]);

  const setLanguageSafe = useCallback((lang: Language) => {
    if (lang === "EN" || lang === "FR" || lang === "AR") {
      setLanguage(lang);
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      const result = key
        .split(".")
        .reduce<NestedRecord | string | undefined>(
          (obj, k) =>
            obj && typeof obj === "object"
              ? (obj as NestedRecord)[k]
              : undefined,
          translations
        );
      return typeof result === "string" ? result : key;
    },
    [translations]
  );

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage: setLanguageSafe, t }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
