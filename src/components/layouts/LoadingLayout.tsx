// LoadingLayout.tsx
import React from "react";
import { Terminal } from "lucide-react";

export const LoadingLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        {/* Animated Terminal Icon with Pulse Effect */}
        <div className="relative flex justify-center items-center mb-4">
          <Terminal className="w-14 h-14 text-blue-600 dark:text-blue-400 animate-pulse" />
          <div className="absolute w-20 h-20 border-2 border-blue-200 dark:border-blue-800 rounded-lg animate-ping opacity-30" />
        </div>

        {/* Loading Text with Progress Dots */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 tracking-tight">
            Loading...
          </h2>
          <div className="flex gap-1.5">
            <span
              className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            />
            <span
              className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <span
              className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
