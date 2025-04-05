import { Copyright } from "lucide-react";
import { LanguageSwitcher } from "../global/LanguageSwitcher";
import ThemeButton from "../global/ThemeButton";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* HEADER */}
      <header className="bg-transparent flex gap-4 items-center text-white absolute top-4 right-4 z-50">
        <ThemeButton />
        <LanguageSwitcher />
      </header>

      {/* Main Content */}
      <div>{children}</div>

      {/* FOOTER */}
      <footer>
        <div className="container mx-auto pb-10 max-w-5xl text-center flex justify-center items-center gap-2">
          <Copyright size={16} />
          <p>2025 ABDALLAH ATGUIRI. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};
export default MainLayout;
