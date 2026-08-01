import { useState, useEffect, type ReactNode } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";
import { fetchJson } from "@/utils/fetchJson";
import { resolveIcon } from "@/utils/iconMap";
import type { PortfolioData, ResolvedPortfolioData } from "@/types";

function resolveData(raw: PortfolioData): ResolvedPortfolioData {
  const isLocal =
    typeof window !== "undefined" &&
    /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);

  return {
    ...raw,
    contactLinks: raw.contactLinks.map((c) => {
      let href = c.href;
      if (c.ariaLabel === "Portfolio") {
        // Always use production URL on CV/PDF; never leak localhost
        href =
          !c.href || isLocal
            ? "https://atguiri.dev"
            : c.href || window.location.origin;
      }
      return { ...c, href, icon: resolveIcon(c.icon) };
    }),
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
