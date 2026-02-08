import React, { useState } from "react";
import { Download } from "lucide-react";

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
    <div className="w-auto flex justify-center items-center">
      <button
        type="button"
        onClick={handleDownload}
        className="contact-button"
        aria-label={isLoading ? "Preparing CV" : "Download CV"}
        disabled={isLoading}
      >
        <Download aria-hidden="true" className="w-6 h-6" />
      </button>
    </div>
  );
};
