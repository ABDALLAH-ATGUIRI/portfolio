import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FlagFr, FlagGb, FlagMa } from "@/assets/images/flags";
import useTranslation from "@/hooks/useTranslation";

type Language = "EN" | "FR" | "AR";

const languageOptions: {
  code: Language;
  label: string;
  icon: string;
}[] = [
  { code: "EN", label: "English", icon: FlagGb },
  { code: "FR", label: "Français", icon: FlagFr },
  { code: "AR", label: "العربية", icon: FlagMa },
];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const selectedLanguage = languageOptions.find((l) => l.code === language);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-sm text-gray-800 dark:text-white">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-full shadow-md backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
      >
        {selectedLanguage?.icon && (
          <img
            src={selectedLanguage.icon}
            alt={`${selectedLanguage.label} flag`}
            className="w-4 h-4"
          />
        )}
        <span>{selectedLanguage?.label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {languageOptions.map(({ code, label, icon }) => (
            <li
              key={code}
              onClick={() => handleSelect(code)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200"
            >
              <img src={icon} alt={`${label} flag`} className="w-4 h-4" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
