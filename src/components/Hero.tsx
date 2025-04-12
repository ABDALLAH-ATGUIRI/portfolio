import { Mail, MapPin, Phone } from "lucide-react";
import { Contact, PersonalInfo } from "@/types/personalInfo";
import useTranslation from "@/hooks/useTranslation";
import { contactLinks, me } from "@/data/personalInfo";
import { DownloadButton } from "@/components/global/DownloadButton";
import { HeroBackground } from "@/components/global/HeroBackground";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const { name, image, phone, email }: PersonalInfo = me;

  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      <HeroBackground />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-5xl min-h-[60vh] flex items-center">
        <div className="grid grid-cols-1 w-full lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center py-16">
          {/* Profile Image */}
          <div className="relative size-64 mx-auto lg:mx-0">
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden backdrop-blur-sm
              dark:border-4 dark:border-blue-500/20 dark:shadow-[0_0_40px_rgba(59,130,246,0.5)] dark:bg-blue-900/30
              border-4 border-gray-200 shadow-[0_0_40px_rgba(148,163,184,0.2)] bg-white/30"
            >
              <img
                src={image}
                alt={`${name}'s profile picture`}
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
                decoding="async"
                style={{
                  imageRendering: "auto",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              />
            </div>
            {/* Decorative elements */}
            <div
              className="absolute -z-10 -inset-4 rounded-full opacity-20 blur-2xl animate-pulse
              dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-400
              bg-gradient-to-r from-blue-400 to-cyan-300"
            />
            <div
              className="absolute -z-10 inset-0 rounded-2xl animate-ping
              dark:bg-blue-400/10
              bg-blue-300/10"
              style={{ animationDuration: "3s" }}
            />
          </div>

          {/* Text Content */}
          <div
            className="text-center lg:text-left space-y-6 transition-colors duration-300
            dark:text-white text-gray-900"
          >
            <div className="space-y-3">
              <div className="inline-block">
                <span className="font-mono text-sm dark:text-blue-300 text-blue-600">
                  const {t("setting.developer")} = {`{`}
                </span>
                <h1
                  className="text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent
                  dark:bg-gradient-to-r dark:from-white dark:via-blue-200 dark:to-cyan-200
                  bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600"
                >
                  {t("developer.name")}
                </h1>
                <h2
                  className="text-xl lg:text-2xl font-medium font-mono
                  dark:text-blue-200 text-blue-600"
                >
                  {t("setting.role")}: "{t("developer.role")}"
                </h2>
                <span className="font-mono text-sm dark:text-blue-300 text-blue-600">
                  {`}`};
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm justify-center lg:justify-start">
              <span
                className="flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border transition-colors duration-300
                dark:bg-blue-900/30 dark:border-blue-500/20 dark:text-blue-100
                bg-white/50 border-gray-200 text-gray-700"
              >
                <MapPin
                  size={16}
                  className="dark:text-blue-300 text-blue-600"
                />
                {t("developer.location")}
              </span>
              <span
                className="flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border transition-colors duration-300
                dark:bg-blue-900/30 dark:border-blue-500/20 dark:text-blue-100
                bg-white/50 border-gray-200 text-gray-700"
              >
                <Phone size={16} className="dark:text-blue-300 text-blue-600" />{" "}
                {phone}
              </span>
              <span
                className="flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border transition-colors duration-300
                dark:bg-blue-900/30 dark:border-blue-500/20 dark:text-blue-100
                bg-white/50 border-gray-200 text-gray-700"
              >
                <Mail size={16} className="dark:text-blue-300 text-blue-600" />{" "}
                {email}
              </span>
            </div>

            <div className="flex justify-center lg:justify-start gap-6 pt-2">
              {contactLinks.map(({ icon: Icon, href, ariaLabel }: Contact) => (
                <a
                  key={ariaLabel}
                  href={href}
                  className="transition-colors duration-200 backdrop-blur-sm p-3 rounded-full border
                    dark:text-blue-200 dark:hover:text-white dark:bg-blue-900/30 dark:hover:bg-blue-800/30 dark:border-blue-500/20
                    text-blue-600 hover:text-blue-700 bg-white/50 hover:bg-white/80 border-gray-200"
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
