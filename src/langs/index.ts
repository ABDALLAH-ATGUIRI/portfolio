// Define available languages
export type Language = "EN" | "AR" | "FR";

// Import all translation files
import EN from "./en.json";
import AR from "./ar.json";
import FR from "./fr.json";

// Define translation keys and their structure
export interface Translations {
  welcome: string;
  about: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    email: string;
    message: string;
    send: string;
  };
}

// Translation data
export const translations: Record<Language, Translations> = { EN, AR, FR };
