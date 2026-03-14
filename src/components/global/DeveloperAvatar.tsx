import React from "react";
import { usePortfolio } from "@/hooks/usePortfolio";

const HERO_FALLBACK = "/assets/images/abdallahatguiri.jpg";

export const DeveloperAvatar: React.FC<{ className?: string }> = ({ className = "" }) => {
  const {
    me: { image },
  } = usePortfolio();

  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    if (target.src.includes(HERO_FALLBACK)) {
      return;
    }
    target.src = HERO_FALLBACK;
  };

  return (
    <div
      className={[
        "overflow-hidden rounded-[1.75rem] border border-blue-200/45 bg-white/20",
        "dark:border-blue-500/20 dark:bg-slate-900/40",
        className,
      ].join(" ")}
    >
      <img
        src={image || HERO_FALLBACK}
        alt="Portrait of Abdallah Atguiri"
        className="h-full w-full object-cover object-[50%_22%] select-none"
        loading="eager"
        decoding="async"
        onError={handleError}
        style={{
          imageRendering: "auto",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
};
