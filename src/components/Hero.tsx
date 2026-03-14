import React from "react";
import { ArrowDown, Code2, Terminal, Braces } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { HeroBackground } from "@/components/global/HeroBackground";
import { DeveloperAvatar } from "@/components/global/DeveloperAvatar";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden min-h-screen snap-start snap-always flex flex-col" aria-label="Abdallah Atguiri — Full Stack Web Developer Hero">
      <HeroBackground />

      <div className="relative flex-1 container mx-auto max-w-5xl px-5 sm:px-8 flex items-center">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center py-24 lg:py-0">

          {/* ── Left: text ───────────────────────────────── */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">

            {/* Status badge */}
            <span
              className="anim-fade-up inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-emerald-50/70 px-3.5 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-900/30 dark:text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t("developer.role")}
            </span>

            {/* Name */}
            <h1
              className="anim-fade-up text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] hero-gradient-text"
              style={{ animationDelay: "0.1s" }}
            >
              {t("developer.name")}
            </h1>

            {/* Short tagline */}
            <p
              className="anim-fade-up max-w-md text-base sm:text-lg leading-relaxed text-gray-500 dark:text-gray-400"
              style={{ animationDelay: "0.18s" }}
            >
              {t("developer.tagline")}
            </p>

            {/* CTA */}
            <div
              className="anim-fade-up flex items-center gap-3 pt-2"
              style={{ animationDelay: "0.26s" }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-sm font-semibold shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                {t("contact.get_in_touch")}
              </a>
              <a
                href="#about_me"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200/80 bg-white/80 text-gray-600 px-6 py-3 text-sm font-semibold shadow-sm backdrop-blur-sm transition-all hover:border-blue-400 hover:text-blue-600 hover:shadow-md dark:border-gray-700/80 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-300"
              >
                {t("about_me.title")}
              </a>
            </div>
          </div>

          {/* ── Right: 3D Character ─────────────────────── */}
          <div className="order-1 lg:order-2 flex justify-center anim-scale-in" style={{ animationDelay: "0.15s" }}>
            <div className="relative hero-3d-scene">
              {/* Floating code icons */}
              <div className="absolute -top-6 -left-6 p-3 rounded-2xl bg-blue-500/10 dark:bg-blue-400/10 border border-blue-200/50 dark:border-blue-500/20 backdrop-blur-sm shadow-lg hero-float-1">
                <Code2 size={24} className="text-blue-500 dark:text-blue-400" />
              </div>
              <div className="absolute -bottom-4 -left-8 p-3 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-200/50 dark:border-emerald-500/20 backdrop-blur-sm shadow-lg hero-float-2">
                <Terminal size={24} className="text-emerald-500 dark:text-emerald-400" />
              </div>
              <div className="absolute -top-2 -right-8 p-3 rounded-2xl bg-purple-500/10 dark:bg-purple-400/10 border border-purple-200/50 dark:border-purple-500/20 backdrop-blur-sm shadow-lg hero-float-3">
                <Braces size={24} className="text-purple-500 dark:text-purple-400" />
              </div>

              {/* 3D card with perspective */}
              <div className="hero-3d-card relative">
                {/* Ambient glow */}
                <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-indigo-500/15 blur-3xl opacity-50 animate-pulse" />
                {/* Avatar */}
                <DeveloperAvatar className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 drop-shadow-2xl" />
              </div>

              {/* Platform/shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-4 rounded-[50%] bg-blue-500/10 dark:bg-blue-400/5 blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      <div className="relative pb-10 flex justify-center anim-fade-up" style={{ animationDelay: "0.5s" }}>
        <a
          href="#about_me"
          className="group flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 transition-colors hover:text-blue-500 dark:hover:text-blue-400"
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
