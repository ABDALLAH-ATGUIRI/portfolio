import { createContext } from "react";
import { Language } from "../langs";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const TranslationContext = createContext<
  TranslationContextType | undefined
>(undefined);
