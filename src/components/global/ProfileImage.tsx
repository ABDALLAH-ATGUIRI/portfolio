import React from "react";
import MyPhoto from "@/assets/images/abdallahatguiri.webp";

export const ProfileImage: React.FC = () => {
  return (
    <div className="relative size-48 md:size-52 lg:size-64 mx-auto lg:mx-0">
      <div
        className={[
          "absolute inset-0 rounded-2xl overflow-hidden ",
          "dark:border-4 dark:border-blue-500/20 dark:shadow-[0_0_40px_rgba(59,130,246,0.5)] dark:bg-blue-900/30",
          "backdrop-blur-sm border-4 border-gray-200 shadow-[0_0_40px_rgba(148,163,184,0.2)] bg-white/30",
        ].join(" ")}
      >
        <img
          src={MyPhoto}
          alt={`Abdallah Atguiri - Full Stack Web Developer`}
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
        className={[
          "absolute -z-10 -inset-4 rounded-full opacity-20 blur-2xl animate-pulse",
          "dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-400",
          "bg-gradient-to-r from-blue-400 to-cyan-300",
        ].join(" ")}
      />
      <div
        className="absolute -z-10 inset-0 rounded-2xl animate-ping dark:bg-blue-400/10 bg-blue-300/10"
        style={{ animationDuration: "3s" }}
      />
    </div>
  );
};
