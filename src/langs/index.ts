export type Language = "EN" | "AR" | "FR";

const LANG_FILE: Record<Language, string> = {
  EN: "en",
  AR: "ar",
  FR: "fr",
};

export function langFileName(lang: Language): string {
  return LANG_FILE[lang];
}
