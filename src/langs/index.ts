export type Language = "EN" | "AR" | "FR";

import EN from "./en.json";
import AR from "./ar.json";
import FR from "./fr.json";

export const translations: Record<Language, typeof EN> = { EN, AR, FR };
