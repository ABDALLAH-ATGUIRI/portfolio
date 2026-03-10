import React from "react";
import { Mail, MapPin, Phone, ArrowDown } from "lucide-react";
import { Contact } from "@/types";
import { useTranslation } from "@/hooks/useTranslation";
import { contactLinks } from "@/data";
import { DownloadButton } from "@/components/global/DownloadButton";
import { HeroBackground } from "@/components/global/HeroBackground";
import { ProfileImage } from "@/components/global/ProfileImage";
import { Chip } from "@/components/global/Chip";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo: { icon: React.ReactNode; text: string; copy?: boolean }[] =
    [
      { icon: <MapPin size={16} />, text: t("developer.location"), copy: true },
      { icon: <Phone size={16} />, text: t("developer.phone"), copy: true },
      { icon: <Mail size={16} />, text: t("developer.email"), copy: true },
    ];

  return (
    <section className="relative overflow-hidden min-h-screen snap-start snap-always flex flex-col">
      <HeroBackground />

      <div className="relative flex-1 container mx-auto max-w-5xl px-5 sm:px-8 flex items-center">
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-center py-24 lg:py-0">

          {/* ── Left: text ───────────────────────────────── */}
          <div className=" col-span-2 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">

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

            {/* Short tagline — unique to Hero */}
            <p
              className="anim-fade-up max-w-md text-base sm:text-lg leading-relaxed text-gray-500 dark:text-gray-400"
              style={{ animationDelay: "0.18s" }}
            >
              {t("developer.tagline")}
            </p>

            {/* Contact pills */}
            <div
              className="anim-fade-up flex flex-wrap justify-center lg:justify-start gap-2"
              style={{ animationDelay: "0.26s" }}
            >
              {contactInfo.map(({ icon, text, copy }, i) => (
                <Chip
                  key={i}
                  text={text}
                  title={copy ? "Click to copy" : undefined}
                  icon={icon}
                  copy={copy}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-sm backdrop-blur-sm transition-all hover:border-blue-400 hover:text-blue-600 hover:shadow-md dark:border-gray-700/80 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-300 cursor-pointer"
                />
              ))}
            </div>

            {/* Actions */}
            <div
              className="anim-fade-up flex items-center gap-3 pt-2"
              style={{ animationDelay: "0.34s" }}
            >
              {contactLinks.map(({ icon: Icon, href, ariaLabel }: Contact) => (
                <a
                  key={ariaLabel}
                  href={href}
                  className="group grid place-items-center h-12 w-12 rounded-xl border border-gray-200/80 bg-white/80 text-gray-500 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-md hover:-translate-y-0.5 dark:border-gray-700/80 dark:bg-gray-800/80 dark:text-gray-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
                  aria-label={ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
              <DownloadButton />
            </div>
          </div>

          {/* ── Right: profile image ─────────────────────── */}
          <div className="order-1 lg:order-2 flex justify-center anim-scale-in" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              {/* Rotating gradient ring */}
              <div className="absolute -inset-3 rounded-3xl hero-glow-ring opacity-60" />
              {/* Ambient glow */}
              <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-indigo-500/15 blur-3xl opacity-50 animate-pulse" />
              {/* Image frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 dark:ring-gray-700/40">
                <ProfileImage />
              </div>
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
