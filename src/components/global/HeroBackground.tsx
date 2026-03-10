import React from "react";

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden transition-colors duration-500 bg-gray-50 dark:bg-gray-950">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.08),transparent)]" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-300/10 dark:from-blue-600/10 dark:to-cyan-500/5 blur-3xl hero-orb-1" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-400/15 to-purple-300/10 dark:from-indigo-600/8 dark:to-purple-500/5 blur-3xl hero-orb-2" />
      <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-cyan-300/10 to-blue-200/10 dark:from-cyan-500/5 dark:to-blue-400/5 blur-3xl hero-orb-3" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
};