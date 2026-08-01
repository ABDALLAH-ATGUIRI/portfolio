import React, { Suspense, lazy } from "react";
import { ArrowDown, Sparkles, Boxes } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { HeroBackground } from "@/components/global/HeroBackground";
import { DeveloperAvatar } from "@/components/global/DeveloperAvatar";

const Hero3DScene = lazy(() =>
  import("@/components/global/Hero3DScene").then((m) => ({
    default: m.Hero3DScene,
  }))
);

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative overflow-hidden min-h-screen snap-start snap-always flex flex-col pt-24"
      aria-label="Abdallah Atguiri — Full Stack Web Developer Hero"
    >
      <HeroBackground />

      <div className="relative flex-1 container mx-auto max-w-6xl px-5 sm:px-8 flex items-center">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-0">
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <span className="anim-fade-up inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-white/60 px-3.5 py-1.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md dark:border-cyan-500/25 dark:bg-slate-900/50 dark:text-cyan-200">
              <Sparkles size={14} className="text-cyan-500" />
              {t("developer.role")}
            </span>

            <h1
              className="anim-fade-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] hero-gradient-text"
              style={{ animationDelay: "0.08s" }}
            >
              {t("developer.name")}
            </h1>

            <p
              className="anim-fade-up max-w-lg text-base sm:text-lg leading-relaxed text-slate-500 dark:text-slate-400"
              style={{ animationDelay: "0.16s" }}
            >
              {t("developer.tagline")}
            </p>

            <div
              className="anim-fade-up flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1"
              style={{ animationDelay: "0.24s" }}
            >
              <a
                href="#store"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
              >
                <Boxes size={16} />
                {t("store.cta")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/70 text-slate-700 px-6 py-3 text-sm font-semibold shadow-sm backdrop-blur-sm transition-all hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
              >
                {t("contact.get_in_touch")}
              </a>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 relative flex justify-center anim-scale-in"
            style={{ animationDelay: "0.12s" }}
          >
            <div className="relative w-full max-w-[420px]">
              <Suspense
                fallback={
                  <div className="w-full aspect-square rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse" />
                }
              >
                <Hero3DScene />
              </Suspense>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <DeveloperAvatar className="w-24 h-24 md:w-28 md:h-28 shadow-2xl ring-4 ring-white/70 dark:ring-slate-900/70" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative pb-10 flex justify-center anim-fade-up"
        style={{ animationDelay: "0.45s" }}
      >
        <a
          href="#about_me"
          className="group flex flex-col items-center gap-2 text-slate-400 transition-colors hover:text-cyan-500 dark:text-slate-500 dark:hover:text-cyan-400"
          aria-label="Scroll down"
        >
          <div className="relative w-6 h-9 rounded-full border-2 border-current flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-current hero-scroll-dot" />
          </div>
          <ArrowDown size={14} className="animate-bounce" style={{ animationDuration: "1.5s" }} />
        </a>
      </div>
    </section>
  );
};
