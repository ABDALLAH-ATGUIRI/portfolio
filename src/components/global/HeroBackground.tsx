import React from "react";

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-18%] left-[-8%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-violet-500/25 to-fuchsia-400/10 blur-3xl hero-orb-1" />
      <div className="absolute bottom-[-18%] right-[-8%] w-[460px] h-[460px] rounded-full bg-gradient-to-br from-cyan-400/20 to-sky-300/10 blur-3xl hero-orb-2" />
      <div className="absolute top-[38%] right-[18%] w-[280px] h-[280px] rounded-full bg-gradient-to-br from-violet-400/15 to-cyan-300/10 blur-3xl hero-orb-3" />
    </div>
  );
};
