import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const SECTIONS = [
  { id: "about_me", key: "about" },
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "store", key: "store" },
  { id: "technical_skills", key: "skills" },
  { id: "ai", key: "ai" },
  { id: "education", key: "education" },
  { id: "hobbies", key: "hobbies" },
  { id: "contact", key: "contact" },
] as const;

export const SiteNav = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const linkClass = (id: string) =>
    [
      "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
      activeId === id
        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
        : "text-gray-600 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800",
    ].join(" ");

  return (
    <nav aria-label="Main navigation" className="relative">
      {/* Desktop */}
      <ul className="hidden lg:flex items-center gap-1">
        {SECTIONS.map(({ id, key }) => (
          <li key={id}>
            <a href={`#${id}`} onClick={(e) => { e.preventDefault(); handleNavClick(id); }} className={linkClass(id)}>
              {t(`nav.${key}`)}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        type="button"
        className="lg:hidden p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 shadow-sm"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav-menu"
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul
          id="mobile-nav-menu"
          className="lg:hidden absolute top-full left-0 mt-2 w-52 rounded-xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border border-gray-200 dark:border-gray-700 p-2 flex flex-col gap-0.5"
        >
          {SECTIONS.map(({ id, key }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(id); }}
                className={`block ${linkClass(id)}`}
              >
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
