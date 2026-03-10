import { useContext } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return ctx;
}
