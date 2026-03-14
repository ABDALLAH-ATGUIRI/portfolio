import { Copyright } from "lucide-react";
import { LanguageSwitcher } from "@/components/global/LanguageSwitcher";
import { ThemeButton } from "@/components/global/ThemeButton";
import type { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* HEADER */}
      <header className="fixed top-4 right-4 z-50" role="banner">
        <nav aria-label="Site settings" className="flex items-center gap-3 rounded-full px-3 py-2 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border border-gray-200/70 dark:border-gray-700/60 shadow-sm text-gray-900 dark:text-gray-100">
          <ThemeButton />
          <LanguageSwitcher />
        </nav>
      </header>

      {/* Main Content */}
      <main role="main" aria-label="Abdallah Atguiri — Full Stack Web Developer Portfolio">{children}</main>

      {/* FOOTER */}
      <footer role="contentinfo">
        <div className="container mx-auto pb-10 max-w-5xl text-center flex justify-center items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
          <Copyright size={16} />
          <p>2026 Abdallah Atguiri — Full Stack Web Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
