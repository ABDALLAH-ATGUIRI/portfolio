import React from "react";
import { Terminal } from "lucide-react";
import { HeroBackground } from "../global/HeroBackground";

export const LoadingLayout: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center px-4 sm:px-6"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Subtle HeroBackground */}
      <HeroBackground />

      <div className="relative z-50 text-center space-y-4">
        {/* Animated Terminal Icon */}
        <div className="relative flex justify-center items-center">
          <Terminal
            className="w-20 h-20 text-primary dark:text-primary-light animate-pulse"
            aria-hidden="true"
          />
          <div
            className="absolute w-16 h-16 border-2 border-accent dark:border-primary rounded-md animate-ping opacity-25"
            aria-hidden="true"
          />
        </div>

        {/* Loading Text with Progress Dots */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-semibold text-primary dark:text-primary-light">
            Loading...
          </h2>
          <div className="flex gap-1.5">
            {[0, 1, 2, 3, 4].map((_, index) => (
              <span
                key={index}
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                aria-hidden="true"
                style={{ animationDelay: "0.2s" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
