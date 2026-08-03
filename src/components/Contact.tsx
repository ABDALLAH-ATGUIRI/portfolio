import React, { useState, useCallback } from "react";
import { Mail, MapPin, Phone, Send, ArrowUpRight, Copy, Check } from "lucide-react";
import { Contact as ContactType } from "@/types";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolio } from "@/hooks/usePortfolio";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { DownloadButton } from "@/components/global/DownloadButton";

/** Keep tel:/mailto: links ASCII (portfolio.json), display may be localized */
function toTelHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits.startsWith("+") ? digits : `+${digits}`}`;
}

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();
  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 transition-colors"
      aria-label={t("contact.copy") || "Copy"}
    >
      {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
    </button>
  );
};

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { contactLinks, me } = usePortfolio();

  const email = me.email || t("developer.email");
  const phone = me.phone || t("developer.phone");
  const phoneDisplay = t("developer.phone");
  const emailDisplay = t("developer.email");

  const contactCards = [
    {
      icon: <Mail size={22} />,
      label: t("contact.email_label"),
      text: emailDisplay,
      copyText: email,
      href: `mailto:${email}`,
      color: "blue",
    },
    {
      icon: <Phone size={22} />,
      label: t("contact.phone_label"),
      text: phoneDisplay,
      copyText: phone,
      href: toTelHref(phone),
      color: "emerald",
    },
    {
      icon: <MapPin size={22} />,
      label: t("contact.location_label"),
      text: t("developer.location"),
      copyText: t("developer.location"),
      color: "purple",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 ring-blue-500/10",
    emerald:
      "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 dark:text-emerald-400 ring-emerald-500/10",
    purple:
      "bg-purple-50 dark:bg-purple-900/20 text-purple-500 dark:text-purple-400 ring-purple-500/10",
  };

  return (
    <SectionLayout id="contact" title={t("contact.title")}>
      <div
        className="stagger-item relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 p-8 md:p-10 mb-8 shadow-xl"
        style={{ animationDelay: "0ms" }}
      >
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-400/10 blur-2xl" />
        <div className="absolute -bottom-16 -left-8 w-56 h-56 rounded-full bg-white/5 blur-2xl" />

        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-white/20 blur-sm" />
              <img
                src={me.image}
                alt={me.name}
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-[50%_24%] ring-4 ring-white/30 shadow-lg"
                loading="eager"
                decoding="async"
                width={96}
                height={96}
              />
            </div>
          </div>

          <div className="text-center md:text-start flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {t("contact.get_in_touch")}
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-lg">
              {t("contact.description")}
            </p>
          </div>

          <div className="shrink-0 flex flex-col gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-6 py-3 text-sm font-bold shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              <Send size={16} />
              {t("contact.send_email")}
            </a>
            <DownloadButton />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {contactCards.map(({ icon, label, text, copyText, href, color }, i) => (
          <div
            key={label}
            className="stagger-item group rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-5 transition-all hover:shadow-lg hover:border-cyan-200 dark:hover:border-cyan-800 hover:-translate-y-0.5"
            style={{ animationDelay: `${150 + i * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2.5 rounded-xl ring-1 ${colorMap[color]}`}>{icon}</div>
              <CopyButton text={copyText} />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
              {label}
            </p>
            {href ? (
              <a
                href={href}
                className="text-gray-800 dark:text-white font-semibold text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 group/link"
                dir="ltr"
              >
                <span className="truncate">{text}</span>
                <ArrowUpRight
                  size={14}
                  className="shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity"
                />
              </a>
            ) : (
              <p className="text-gray-800 dark:text-white font-semibold text-sm truncate">
                {text}
              </p>
            )}
          </div>
        ))}
      </div>

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
              className="group grid place-items-center h-12 w-12 rounded-2xl border border-gray-200/80 bg-white/80 text-gray-500 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-cyan-400 hover:text-cyan-600 hover:shadow-md hover:-translate-y-1 hover:bg-cyan-50 dark:border-gray-700/80 dark:bg-gray-800/80 dark:text-gray-400 dark:hover:border-cyan-500 dark:hover:text-cyan-400 dark:hover:bg-cyan-900/30"
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
