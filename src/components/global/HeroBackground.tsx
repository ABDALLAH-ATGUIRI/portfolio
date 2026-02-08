import React, { useMemo } from "react";

export const HeroBackground: React.FC = () => {
  const codeLines = useMemo(
    () =>
      Array.from({ length: 15 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 200 + 100}px`,
        duration: `${Math.random() * 3 + 2}s`,
        delay: `${Math.random() * 2}s`,
      })),
    []
  );

  return (
    <div
      className="absolute inset-0 transition-colors duration-500
      dark:bg-[radial-gradient(circle_at_30%_50%,#0f172a,#020617_70%)]
      bg-[radial-gradient(circle_at_30%_50%,#f8fafc,#e2e8f0_70%)]"
    >
      <div className="absolute inset-0 opacity-10 bg-hero-pattern" />
      {/* Animated code lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {codeLines.map((line, i) => (
          <div
            key={i}
            className="absolute h-0.5 dark:bg-blue-400/30 bg-blue-600/30"
            style={{
              left: line.left,
              top: line.top,
              width: line.width,
              animation: `slideDown ${line.duration} linear infinite`,
              animationDelay: line.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};