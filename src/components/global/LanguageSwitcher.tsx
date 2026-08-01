import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import type { Language } from "@/langs";

const BASE = import.meta.env.BASE_URL;

const languageOptions: {
  code: Language;
  label: string;
  icon: string;
}[] = [
  { code: "EN", label: "English", icon: `${BASE}assets/images/flags/gb.svg` },
  { code: "FR", label: "Français", icon: `${BASE}assets/images/flags/fr.svg` },
  { code: "AR", label: "العربية", icon: `${BASE}assets/images/flags/ma.svg` },
];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLanguage = languageOptions.find((l) => l.code === language);

  const handleSelect = useCallback((code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  }, [setLanguage]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative inline-block text-sm text-gray-800 dark:text-white">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
        className="flex items-center gap-2 px-3 py-2 rounded-full shadow-md backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
      >
        {selectedLanguage?.icon && (
          <img
            src={selectedLanguage.icon}
            alt=""
            aria-hidden="true"
            className="w-4 h-4"
          />
        )}
        <span>{selectedLanguage?.label}</span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Language options"
          className="absolute end-0 z-10 mt-2 min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {languageOptions.map(({ code, label, icon }) => (
            <li key={code} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={language === code}
                onClick={() => handleSelect(code)}
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200 text-left"
              >
                <img src={icon} alt="" aria-hidden="true" className="w-4 h-4" />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
