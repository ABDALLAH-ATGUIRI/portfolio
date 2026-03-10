import { createContext } from "react";
import type { ResolvedPortfolioData } from "@/types";

export const PortfolioContext = createContext<ResolvedPortfolioData | null>(null);
