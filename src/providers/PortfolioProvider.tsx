import { useState, useEffect, type ReactNode } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";
import { fetchJson } from "@/utils/fetchJson";
import { resolveIcon } from "@/utils/iconMap";
import type { PortfolioData, ResolvedPortfolioData } from "@/types";

function resolveData(raw: PortfolioData): ResolvedPortfolioData {
  return {
    ...raw,
    contactLinks: raw.contactLinks.map((c) => ({
      ...c,
      href: c.ariaLabel === "Portfolio" ? window.location.origin : c.href,
      icon: resolveIcon(c.icon),
    })),
    hobbies: raw.hobbies.map((h) => ({
      ...h,
      icon: resolveIcon(h.icon),
    })),
  };
}

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ResolvedPortfolioData | null>(null);

  useEffect(() => {
    fetchJson<PortfolioData>("data/portfolio.json").then((raw) =>
      setData(resolveData(raw))
    );
  }, []);

  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
};
