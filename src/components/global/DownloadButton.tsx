import React, { useState } from "react";
import { FileText, Loader2 } from "lucide-react";

export const DownloadButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const [{ pdf }, { PDFWithTranslations }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/pdf/CVDocument"),
      ]);

      const blob = await pdf(<PDFWithTranslations />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "abdallah-atguiri-cv.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="group grid place-items-center h-12 w-12 rounded-xl border border-gray-200/80 bg-white/80 text-gray-500 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-md hover:-translate-y-0.5 dark:border-gray-700/80 dark:bg-gray-800/80 dark:text-gray-400 dark:hover:border-blue-500 dark:hover:text-blue-400 disabled:opacity-60"
      aria-label={isLoading ? "Preparing CV" : "Download CV"}
      title="Download CV"
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 aria-hidden="true" className="w-5 h-5 animate-spin" />
      ) : (
        <FileText aria-hidden="true" className="w-5 h-5 transition-transform group-hover:scale-110" />
      )}
    </button>
  );
};
