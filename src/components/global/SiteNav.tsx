import { useEffect, useState, useCallback, useRef } from "react";
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

function getSectionElements() {
  return SECTIONS.map(({ id }) => document.getElementById(id)).filter(
    (el): el is HTMLElement => Boolean(el)
  );
}

export const SiteNav = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  /* Re-attach when sections mount after lazy load */
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    const attach = () => {
      if (cancelled) return;
      const elements = getSectionElements();
      if (elements.length === 0) return false;

      observer?.disconnect();
      observer = new IntersectionObserver(
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
      elements.forEach((el) => observer!.observe(el));
      return true;
    };

    if (attach()) {
      return () => {
        cancelled = true;
        observer?.disconnect();
      };
    }

    /* Sections may lag behind portfolio + Suspense */
    const mo = new MutationObserver(() => {
      if (attach()) mo.disconnect();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const tries = [100, 300, 800, 1600].map((ms) =>
      window.setTimeout(() => attach(), ms)
    );

    return () => {
      cancelled = true;
      mo.disconnect();
      observer?.disconnect();
      tries.forEach(clearTimeout);
    };
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
    const onPointerDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [mobileOpen]);

  const linkClass = (id: string) =>
    [
      "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
      activeId === id
        ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300"
        : "text-gray-600 hover:text-cyan-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-cyan-400 dark:hover:bg-gray-800",
    ].join(" ");

  return (
    <nav ref={navRef} aria-label={t("nav.main") || "Main navigation"} className="relative">
      <ul className="hidden lg:flex items-center gap-1">
        {SECTIONS.map(({ id, key }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(id);
              }}
              className={linkClass(id)}
              aria-current={activeId === id ? "location" : undefined}
            >
              {t(`nav.${key}`)}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="lg:hidden p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 shadow-sm"
        aria-label={mobileOpen ? t("nav.close_menu") : t("nav.open_menu")}
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav-menu"
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {mobileOpen && (
        <ul
          id="mobile-nav-menu"
          className="lg:hidden absolute top-full start-0 mt-2 w-52 rounded-xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border border-gray-200 dark:border-gray-700 p-2 flex flex-col gap-0.5 z-50"
        >
          {SECTIONS.map(({ id, key }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
                className={`block ${linkClass(id)}`}
                aria-current={activeId === id ? "location" : undefined}
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
