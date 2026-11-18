import React from "react";
import { ArrowDown, Sparkles, FolderKanban, MessageCircle } from "lucide-react";
import { useAssistant } from "@/context/AssistantContext";
import { useTranslation } from "@/hooks/useTranslation";
import { HeroBackground } from "@/components/global/HeroBackground";
import { DeveloperAvatar } from "@/components/global/DeveloperAvatar";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { openAssistant } = useAssistant();

  return (
    <section
      className="relative overflow-hidden min-h-[100svh] snap-start snap-always flex flex-col pt-24"
      aria-label={t("developer.name")}
    >
      <HeroBackground />

      <div className="relative flex-1 container mx-auto max-w-5xl px-5 sm:px-8 flex items-center">
        <div className="w-full flex flex-col items-center text-center gap-6 py-14 sm:py-18">
          <div
            className="anim-scale-in relative"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="avatar-glow absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/30 to-cyan-400/20 blur-2xl" />
            <DeveloperAvatar className="relative w-36 h-36 sm:w-40 sm:h-40 shadow-xl ring-4 ring-white/80 dark:ring-[#070b18]/80" />
          </div>

          <div className="anim-fade-up flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-white/70 px-3.5 py-1.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md dark:border-violet-400/25 dark:bg-[#0c1428]/70 dark:text-violet-100">
              <Sparkles size={14} className="text-cyan-500" aria-hidden="true" />
              {t("developer.role")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-white/70 px-3 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur-md dark:border-emerald-400/25 dark:bg-[#0c1428]/70 dark:text-emerald-300">
              <span className="live-ping h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              {t("developer.availability")}
            </span>
          </div>

          <p className="anim-fade-up font-display text-sm font-semibold tracking-[0.18em] uppercase" style={{ animationDelay: "0.06s" }}>
            <span className="text-slate-900 dark:text-white">atguiri</span>
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">.dev</span>
          </p>

          <h1
            className="anim-fade-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] hero-gradient-text"
            style={{ animationDelay: "0.08s" }}
          >
            {t("developer.name")}
          </h1>

          <p
            className="anim-fade-up max-w-xl text-base sm:text-lg leading-relaxed text-slate-500 dark:text-slate-400"
            style={{ animationDelay: "0.16s" }}
          >
            {t("developer.tagline")}
          </p>

          <div
            className="anim-fade-up flex flex-wrap items-center justify-center gap-3 pt-1"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href="#projects"
              className="brand-cta inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <FolderKanban size={16} aria-hidden="true" />
              {t("projects.title")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-violet-200/80 bg-white/70 text-slate-700 px-6 py-3 text-sm font-semibold shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-cyan-400 hover:text-violet-700 dark:border-cyan-400/20 dark:bg-[#0c1428]/70 dark:text-slate-100 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
            >
              {t("contact.get_in_touch")}
            </a>
            <button
              type="button"
              onClick={openAssistant}
              className="inline-flex items-center gap-2 rounded-2xl border border-transparent text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300 px-3 py-3 text-sm font-medium transition-colors"
            >
              <MessageCircle size={16} aria-hidden="true" />
              {t("assistant.open")}
            </button>
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
          aria-label={t("nav.about")}
        >
          <div className="relative w-6 h-9 rounded-full border-2 border-current flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-current hero-scroll-dot" />
          </div>
          <ArrowDown
            size={14}
            className="animate-bounce"
            style={{ animationDuration: "1.5s" }}
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
};
