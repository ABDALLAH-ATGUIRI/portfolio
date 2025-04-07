import { useContext } from "react";
import { TranslationContext } from "../context/TranslationContext";

const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};

export default useTranslation;
