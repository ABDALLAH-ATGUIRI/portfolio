import React, { Fragment, useContext } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Contact } from "@/types";
import useTranslation from "@/hooks/useTranslation";
import { contactLinks } from "@/data/personalInfo";
import { DownloadButton } from "@/components/global/DownloadButton";
import { HeroBackground } from "@/components/global/HeroBackground";
import { ProfileImage } from "@/components/global/ProfileImage";
import Chip from "@/components/global/Chip";
import { TranslationContext } from "@/context/TranslationContext";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(TranslationContext);

  const contactInfo = [
    { icon: <MapPin />, text: t("developer.location") },
    { icon: <Phone />, text: t("developer.phone") },
    { icon: <Mail />, text: t("developer.email") },
  ];

  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      <HeroBackground />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-5xl min-h-[60vh] flex items-center">
        <div className="grid grid-cols-1 w-full lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center py-16">
          {/* Profile Image */}
          <ProfileImage />

          {/* Text Content */}
          <div className="text-center space-y-3 transition-colors duration-300 dark:text-white text-gray-900">
            <div
              className={[
                "space-y-2 inline-block w-full transition-colors duration-300 text-gray-900 dark:text-white",
                context?.language === "AR"
                  ? "lg:text-right lg:!order-1 [&>h1]:!mr-6"
                  : "lg:text-left lg:order-2 [&>h1]:!ml-6",
              ].join(" ")}
            >
              <span className="font-mono text-sm text-blue-600 dark:text-blue-300">
                const {t("setting.developer")} = {`{`}
              </span>
              <h1
                className={[
                  "text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent ",
                  "bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600 dark:from-gray-100 dark:via-blue-400 dark:to-cyan-400",
                ].join(" ")}
              >
                {t("developer.name")}
              </h1>
              <h1 className="text-xl lg:text-2xl font-medium font-mono text-blue-600 dark:text-blue-200">
                {t("setting.role")}: "{t("developer.role")}"
              </h1>
              <span className="font-mono text-sm text-blue-600 dark:text-blue-300">
                {`}`};
              </span>
            </div>

            {/*  */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm justify-center lg:justify-start">
              {contactInfo.map(
                ({ icon, text }, index: number): JSX.Element => (
                  <Fragment key={index}>
                    <Chip
                      text={text}
                      icon={icon}
                      className="contact-button [&>svg]:!text-md !px-5 !py-2"
                    />
                  </Fragment>
                )
              )}
            </div>

            {/*  */}
            <div className="flex justify-center lg:justify-start gap-6 pt-2">
              {contactLinks.map(({ icon: Icon, href, ariaLabel }: Contact) => (
                <a
                  key={ariaLabel}
                  href={href}
                  className="contact-button"
                  aria-label={ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
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
