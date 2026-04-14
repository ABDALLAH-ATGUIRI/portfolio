import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { createPortal } from "react-dom";
import {
  Download,
  Loader2,
  ChevronDown,
  Layers,
  Server,
  Monitor,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import type { CvVersion } from "@/types/cvVersion";
import { CV_VERSION_CONFIG } from "@/types/cvVersion";

const VERSION_META: {
  version: CvVersion;
  icon: React.ElementType;
  color: string;
  bgHover: string;
  accent: string;
}[] = [
  {
    version: "fullstack",
    icon: Layers,
    color: "text-blue-500",
    bgHover: "hover:bg-blue-50 dark:hover:bg-blue-950/40",
    accent: "bg-blue-500/10 dark:bg-blue-400/10",
  },
  {
    version: "backend",
    icon: Server,
    color: "text-emerald-500",
    bgHover: "hover:bg-emerald-50 dark:hover:bg-emerald-950/40",
    accent: "bg-emerald-500/10 dark:bg-emerald-400/10",
  },
  {
    version: "frontend",
    icon: Monitor,
    color: "text-purple-500",
    bgHover: "hover:bg-purple-50 dark:hover:bg-purple-950/40",
    accent: "bg-purple-500/10 dark:bg-purple-400/10",
  },
];

export const DownloadButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState<CvVersion | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const { t, language } = useTranslation();
  const portfolioData = usePortfolio();

  const updatePosition = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMenuPos({
      top: rect.top + window.scrollY,
      left: rect.left + rect.width / 2 + window.scrollX,
    });
  }, []);

  useLayoutEffect(() => {
    if (isOpen) updatePosition();
  }, [isOpen, updatePosition]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        buttonRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      )
        return;
      setIsOpen(false);
    };
    const handleScroll = () => updatePosition();
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, updatePosition]);

  const handleDownload = useCallback(
    async (version: CvVersion) => {
      if (isLoading) return;
      setIsOpen(false);
      setIsLoading(version);
      try {
        const [{ pdf }, { PDFWithTranslations }] = await Promise.all([
          import("@react-pdf/renderer"),
          import("@/components/pdf/CVDocument"),
        ]);

        const config = CV_VERSION_CONFIG[version];
        const blob = await pdf(
          <PDFWithTranslations
            t={t}
            language={language}
            portfolioData={portfolioData}
            cvVersion={version}
          />,
        ).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = config.fileName;
        link.click();
        URL.revokeObjectURL(url);
      } finally {
        setIsLoading(null);
      }
    },
    [isLoading, t, language, portfolioData],
  );

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        id="download-cv-button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-800 text-white px-6 py-3 text-sm font-bold shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-blue-900 disabled:opacity-60"
        aria-label={isLoading ? "Preparing CV" : "Download CV"}
        aria-expanded={isOpen}
        aria-haspopup="true"
        disabled={!!isLoading}
      >
        {isLoading ? (
          <Loader2 aria-hidden="true" className="w-4 h-4 animate-spin" />
        ) : (
          <Download aria-hidden="true" className="w-4 h-4" />
        )}
        {t("cv_versions.title")}
        <ChevronDown
          aria-hidden="true"
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {createPortal(
        <div
          ref={menuRef}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="download-cv-button"
          style={{
            position: "absolute",
            top: menuPos.top,
            left: menuPos.left,
            transform: "translate(-50%, -100%) translateY(-8px)",
          }}
          className={`z-[9999] w-[260px] rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-2xl border border-gray-200/60 dark:border-gray-700/60 origin-bottom transition-all duration-200 ease-out ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="p-1.5">
            {VERSION_META.map(
              ({ version, icon: Icon, color, bgHover, accent }, i) => (
                <button
                  key={version}
                  type="button"
                  role="menuitem"
                  onClick={() => handleDownload(version)}
                  disabled={!!isLoading}
                  className={`w-full text-left rounded-xl px-3 py-2.5 transition-all duration-150 disabled:opacity-50 flex items-center gap-3 group ${bgHover} ${
                    i > 0 ? "mt-0.5" : ""
                  }`}
                >
                  <span
                    className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-lg ${accent} transition-transform duration-150 group-hover:scale-110`}
                  >
                    {isLoading === version ? (
                      <Loader2
                        aria-hidden="true"
                        className={`w-4.5 h-4.5 animate-spin ${color}`}
                      />
                    ) : (
                      <Icon
                        aria-hidden="true"
                        className={`w-4.5 h-4.5 ${color}`}
                      />
                    )}
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">
                      {t(CV_VERSION_CONFIG[version].label)}
                    </span>
                    <span className="text-[11px] text-gray-400 dark:text-gray-500 truncate">
                      {t(CV_VERSION_CONFIG[version].roleKey)}
                    </span>
                  </span>
                  <Download
                    aria-hidden="true"
                    className="shrink-0 w-3.5 h-3.5 text-gray-300 dark:text-gray-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  />
                </button>
              ),
            )}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};
