import React, { Fragment, useContext } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Contact } from "@/types";
import useTranslation from "@/hooks/useTranslation";
import { contactLinks } from "@/data";
import { DownloadButton } from "@/components/global/DownloadButton";
import { HeroBackground } from "@/components/global/HeroBackground";
import { ProfileImage } from "@/components/global/ProfileImage";
import { Chip } from "@/components/global/Chip";
import { TranslationContext } from "@/context/TranslationContext";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(TranslationContext);

  const contactInfo = [
    { icon: <MapPin />, text: t("developer.location") },
    { icon: <Phone />, text: t("developer.phone"), copy: true },
    { icon: <Mail />, text: t("developer.email"), copy: true },
  ];

  return (
    <section className="relative overflow-hidden pb-16">
      <HeroBackground />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-5xl !min-h-screen md:min-h-[60vh] flex items-center">
        <div className="grid grid-cols-1 w-full lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center py-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-30 animate-pulse" />
            <ProfileImage />
          </div>

          {/* Text Content */}
          <div className="text-center space-y-6 transition-colors duration-300 dark:text-white text-gray-900">
            <div
              className={[
                "space-y-3 inline-block w-full transition-colors duration-300 text-gray-900 dark:text-white",
                context?.language === "AR"
                  ? "lg:text-right lg:!order-1 [&>h1]:!mr-6"
                  : "lg:text-left lg:order-2 [&>h1]:!ml-6",
              ].join(" ")}
            >
              <span className="font-mono text-sm text-blue-500 dark:text-blue-400 font-semibold">
                const {t("setting.developer")} = {`{`}
              </span>
              <h1
                className={[
                  "text-5xl lg:text-6xl font-black tracking-tight bg-clip-text text-transparent ",
                  "bg-gradient-to-r from-gray-900 via-blue-600 to-blue-500 dark:from-gray-100 dark:via-blue-400 dark:to-cyan-300",
                  "drop-shadow-lg",
                ].join(" ")}
              >
                {t("developer.name")}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-300 tracking-wider">
                {t("setting.role")}: "{t("developer.role")}"
              </h2>
              <span className="font-mono text-sm text-blue-500 dark:text-blue-400 font-semibold inline-block">
                {`}`};
              </span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-3 justify-center lg:justify-start flex-wrap">
              {contactInfo.map(
                ({ icon, text, copy }, index: number): JSX.Element => (
                  <Fragment key={index}>
                    <Chip
                      text={text}
                      title="Click to copy"
                      icon={icon}
                      className="contact-button !w-auto !px-5 !py-2.5 font-medium"
                      copy={copy}
                    />
                  </Fragment>
                )
              )}
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              {contactLinks.map(({ icon: Icon, href, ariaLabel }: Contact) => (
                <a
                  key={ariaLabel}
                  href={href}
                  className="contact-button group hover:scale-110"
                  aria-label={ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </a>
              ))}
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
