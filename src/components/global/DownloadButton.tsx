import React from "react";
import { Download } from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFWithTranslations } from "@/components/pdf/PDFWrapper";

export const DownloadButton: React.FC = () => {
  return (
    <div className="w-auto flex justify-center items-center">
      <PDFDownloadLink
        document={<PDFWithTranslations />}
        fileName="abdallah-atguiri-cv.pdf"
        className="contact-button"
      >
        <Download aria-label="Download CV" className="w-6 h-6" />
      </PDFDownloadLink>
    </div>
  );
};
