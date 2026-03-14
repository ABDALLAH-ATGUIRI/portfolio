import React, { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";

export const DownloadButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t, language } = useTranslation();
  const portfolioData = usePortfolio();

  const handleDownload = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const [{ pdf }, { PDFWithTranslations }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/pdf/CVDocument"),
      ]);

      const blob = await pdf(
        <PDFWithTranslations t={t} language={language} portfolioData={portfolioData} />
      ).toBlob();
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
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-800 text-white px-6 py-3 text-sm font-bold shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-blue-900 disabled:opacity-60"
      aria-label={isLoading ? "Preparing CV" : "Download CV"}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 aria-hidden="true" className="w-4 h-4 animate-spin" />
      ) : (
        <Download aria-hidden="true" className="w-4 h-4" />
      )}
      Download CV
    </button>
  );
};
