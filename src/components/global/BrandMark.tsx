import { useTranslation } from "@/hooks/useTranslation";

/** Personal mark from the atguiri.dev emblem: silver A, orbital swoosh, code brackets. */
export function BrandMark({ withName = true }: { withName?: boolean }) {
  const { t } = useTranslation();

  return (
    <a
      href="#about_me"
      className="group inline-flex items-center gap-2 shrink-0 rounded-xl"
      aria-label={t("developer.name")}
    >
      <img
        src="/assets/brand/mark.png"
        alt=""
        width={40}
        height={40}
        className="brand-mark h-10 w-10"
      />
      {withName && (
        <span className="hidden xl:inline-flex items-baseline font-display text-[15px] font-bold tracking-tight">
          <span className="text-slate-900 dark:text-white">atguiri</span>
          <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
            .dev
          </span>
        </span>
      )}
    </a>
  );
}
