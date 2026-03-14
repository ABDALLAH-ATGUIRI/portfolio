import React, { useState, useCallback } from "react";
import { Mail, MapPin, Phone, Send, ArrowUpRight, Copy, Check } from "lucide-react";
import { Contact as ContactType } from "@/types";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { DownloadButton } from "@/components/global/DownloadButton";

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
      aria-label="Copy"
    >
      {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
    </button>
  );
};

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { contactLinks, me } = usePortfolio();

  const contactCards = [
    {
      icon: <Mail size={22} />,
      label: t("contact.email_label"),
      text: t("developer.email"),
      href: `mailto:${t("developer.email")}`,
      color: "blue",
    },
    {
      icon: <Phone size={22} />,
      label: t("contact.phone_label"),
      text: t("developer.phone"),
      href: `tel:${t("developer.phone")}`,
      color: "emerald",
    },
    {
      icon: <MapPin size={22} />,
      label: t("contact.location_label"),
      text: t("developer.location"),
      color: "purple",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 ring-blue-500/10",
    emerald: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 dark:text-emerald-400 ring-emerald-500/10",
    purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-500 dark:text-purple-400 ring-purple-500/10",
  };

  return (
    <SectionLayout id="contact" title={t("contact.title")}>
      {/* ── Hero banner ─────────────────────────────────── */}
      <div
        className="stagger-item relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-8 md:p-10 mb-8 shadow-xl"
        style={{ animationDelay: "0ms" }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 -left-8 w-56 h-56 rounded-full bg-white/5 blur-2xl" />

        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Profile photo */}
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-white/20 blur-sm" />
              <img
                src={me.image}
                alt={t("developer.name")}
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-[50%_24%] ring-4 ring-white/30 shadow-lg"
                loading="eager"
                decoding="async"
                style={{ imageRendering: "auto" }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {t("contact.get_in_touch")}
            </h3>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-lg">
              {t("contact.description")}
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0 flex flex-col gap-3">
            <a
              href={`mailto:${t("developer.email")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-blue-600 px-6 py-3 text-sm font-bold shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-blue-50"
            >
              <Send size={16} />
              {t("contact.send_email")}
            </a>
            <DownloadButton />
          </div>
        </div>
      </div>

      {/* ── Contact cards grid ──────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {contactCards.map(({ icon, label, text, href, color }, i) => (
          <div
            key={i}
            className="stagger-item group rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-5 transition-all hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-0.5"
            style={{ animationDelay: `${150 + i * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2.5 rounded-xl ring-1 ${colorMap[color]}`}>
                {icon}
              </div>
              <CopyButton text={text} />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
              {label}
            </p>
            {href ? (
              <a
                href={href}
                className="text-gray-800 dark:text-white font-semibold text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-1 group/link"
              >
                <span className="truncate">{text}</span>
                <ArrowUpRight size={14} className="shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
            ) : (
              <p className="text-gray-800 dark:text-white font-semibold text-sm truncate">
                {text}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* ── Social links ────────────────────────────────── */}
      <div
        className="stagger-item flex flex-col items-center gap-4"
        style={{ animationDelay: "500ms" }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          {t("contact.find_me")}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {contactLinks.map(({ icon: Icon, href, ariaLabel }: ContactType) => (
            <a
              key={ariaLabel}
              href={href}
              className="group grid place-items-center h-12 w-12 rounded-2xl border border-gray-200/80 bg-white/80 text-gray-500 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-blue-400 hover:text-blue-500 hover:shadow-md hover:-translate-y-1 hover:bg-blue-50 dark:border-gray-700/80 dark:bg-gray-800/80 dark:text-gray-400 dark:hover:border-blue-500 dark:hover:text-blue-400 dark:hover:bg-blue-900/30"
              aria-label={ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
