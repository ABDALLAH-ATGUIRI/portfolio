import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeButton: React.FC = () => {

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 text-gray-600 dark:text-gray-200 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm hover:bg-gray-100/90 dark:hover:bg-gray-700/90 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-500" />
      )}
    </button>
  );
};

export default ThemeButton;
