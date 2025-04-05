import React from "react";
import { Download } from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFWithTranslations } from "../Pdf/PDFWrapper";

export const DownloadButton: React.FC = () => {
  return (
    <div className="w-auto flex justify-center items-center">
      <PDFDownloadLink
        document={<PDFWithTranslations />}
        fileName="abdallah-atguiri-cv.pdf"
        className={[
          "transition-colors duration-200",
          "backdrop-blur-sm p-3 rounded-full border",
          "dark:text-blue-200 dark:hover:text-white",
          "dark:bg-blue-900/30 dark:hover:bg-blue-800/30",
          "dark:border-blue-500/20",
        ].join(" ")}
      >
        <Download aria-label="Download CV" className="w-6 h-6" />
      </PDFDownloadLink>
    </div>
  );
};
