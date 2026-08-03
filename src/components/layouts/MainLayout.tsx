import { Copyright } from "lucide-react";
import { LanguageSwitcher } from "@/components/global/LanguageSwitcher";
import { SiteNav } from "@/components/global/SiteNav";
import { ThemeButton } from "@/components/global/ThemeButton";
import type { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <a
        href="#about_me"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4" role="banner">
        <div className="container mx-auto max-w-5xl flex items-center justify-between gap-4 rounded-2xl px-4 py-2 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border border-gray-200/70 dark:border-gray-700/60 shadow-sm">
          <SiteNav />

          <nav aria-label="Site settings" className="flex items-center gap-2 shrink-0">
            <ThemeButton />
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      <div>{children}</div>

      <footer role="contentinfo">
        <div className="container mx-auto pb-10 max-w-5xl text-center flex justify-center items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
          <Copyright size={16} />
          <p>2026 Abdallah Atguiri — Full-Stack Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
