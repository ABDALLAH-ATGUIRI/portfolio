import React from "react";
import { ShoppingBag, Sparkles, Box, Palette, Cpu, ArrowUpRight } from "lucide-react";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import type { StoreProduct } from "@/types";

const PRODUCT_ICONS: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  box: Box,
  palette: Palette,
  cpu: Cpu,
};

export const Store: React.FC = () => {
  const { t } = useTranslation();
  const { storeProducts } = usePortfolio();

  return (
    <SectionLayout id="store" title={t("store.title")}>
      <p
        className="stagger-item text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8"
        style={{ animationDelay: "0ms" }}
      >
        {t("store.description")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {storeProducts.map((product: StoreProduct, i) => {
          const Icon = PRODUCT_ICONS[product.icon] ?? Sparkles;
          return (
            <article
              key={product.key}
              className="stagger-item group relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-700/70 bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-cyan-300/60 dark:hover:border-cyan-500/40"
              style={{ animationDelay: `${80 + i * 90}ms` }}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan-400/10 blur-2xl group-hover:bg-cyan-400/20 transition-colors" />

              <div className="relative flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-slate-900 text-cyan-300 dark:bg-cyan-500/15 dark:text-cyan-300">
                  <Icon size={20} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full dark:text-cyan-300 dark:bg-cyan-900/40">
                  {t(`store.products.${product.key}.badge`)}
                </span>
              </div>

              <h3 className="relative font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                {t(`store.products.${product.key}.title`)}
              </h3>
              <p className="relative text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                {t(`store.products.${product.key}.description`)}
              </p>

              <div className="relative flex items-center justify-between gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-700/70">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">
                    {t("store.price_label")}
                  </p>
                  <p className="text-base font-bold text-slate-900 dark:text-white">
                    {product.price}
                  </p>
                </div>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-cyan-600 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                >
                  <ShoppingBag size={14} />
                  {t("store.buy")}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </SectionLayout>
  );
};
