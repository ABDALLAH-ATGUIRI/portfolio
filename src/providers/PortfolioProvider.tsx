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
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchJson<PortfolioData>("data/portfolio.json")
      .then((raw) => {
        if (!cancelled) setData(resolveData(raw));
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Couldn’t load portfolio data
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="text-sm text-cyan-600 dark:text-cyan-400 underline"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
};
