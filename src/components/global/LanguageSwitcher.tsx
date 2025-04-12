import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FlagFr, FlagGb, FlagMa } from "@/assets/images/flags";
import useTranslation from "@/hooks/useTranslation";

type Language = "EN" | "FR" | "AR";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const languages: {
    code: Language;
    label: string;
    icon: string;
  }[] = [
    { code: "EN", label: "English", icon: FlagGb },
    { code: "FR", label: "Français", icon: FlagFr },
    { code: "AR", label: "العربية", icon: FlagMa },
  ];

  const selectedLanguage = languages.find((lang) => lang.code === language) ?? {
    code: "",
    label: "",
    icon: "",
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
      >
        <img
          src={selectedLanguage.icon}
          alt={`${selectedLanguage.label} flag`}
          className="w-4 h-4"
        />
        <span className="text-sm text-dark dark:!text-white">
          {selectedLanguage.label}
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <ul className="absolute w-full top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {languages.map(({ code, label, icon }) => (
            <li
              key={code}
              onClick={() => {
                setLanguage(code);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200"
            >
              <img src={icon} alt={`${label} flag`} className="w-4 h-4" />
              <span className="text-sm text-dark dark:!text-white">
                {label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
