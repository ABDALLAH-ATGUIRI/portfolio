import { Suspense, lazy, useContext, type ComponentType } from "react";
import { LoadingLayout } from "@/components/layouts/LoadingLayout";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PortfolioContext } from "@/context/PortfolioContext";
import { Hero } from "@/components/Hero";

/** Helper to lazy-load a named export as `default` */
function lazyNamed<T extends Record<string, ComponentType>>(
  factory: () => Promise<T>,
  name: keyof T
) {
  return lazy(() => factory().then((mod) => ({ default: mod[name] })));
}

const Summary = lazyNamed(() => import("@/components/Summary"), "Summary");
const Experience = lazyNamed(
  () => import("@/components/Experience"),
  "Experience"
);
const Education = lazyNamed(() => import("@/components/Education"), "Education");
const Hobbies = lazyNamed(() => import("@/components/Hobbies"), "Hobbies");
const TechnicalSkills = lazyNamed(
  () => import("@/components/TechnicalSkills"),
  "TechnicalSkills"
);
const AiSection = lazyNamed(() => import("@/components/AiSection"), "AiSection");
const Projects = lazyNamed(() => import("@/components/Projects"), "Projects");
const Store = lazyNamed(() => import("@/components/Store"), "Store");
const Contact = lazyNamed(() => import("@/components/Contact"), "Contact");

function SectionFallback() {
  return (
    <div className="w-full py-12" aria-busy="true" aria-label="Loading section">
      <div className="h-8 w-48 rounded bg-slate-200 dark:bg-slate-800 animate-pulse mb-6" />
      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-slate-100 dark:bg-slate-800/80 animate-pulse" />
        <div className="h-4 w-5/6 rounded bg-slate-100 dark:bg-slate-800/80 animate-pulse" />
        <div className="h-4 w-2/3 rounded bg-slate-100 dark:bg-slate-800/80 animate-pulse" />
      </div>
    </div>
  );
}

function AppContent() {
  const data = useContext(PortfolioContext);

  if (!data) {
    return <LoadingLayout />;
  }

  return (
    <MainLayout>
      {/* Hero is above-the-fold — load eagerly for LCP */}
      <Hero />
      <main className="container mx-auto max-w-5xl px-4 sm:px-6 pb-16">
        {/* Paint primary content first */}
        <Suspense fallback={<SectionFallback />}>
          <Summary />
          <Experience />
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Store />
          <TechnicalSkills />
          <AiSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Education />
          <Hobbies />
          <Contact />
        </Suspense>
      </main>
    </MainLayout>
  );
}

function App() {
  return <AppContent />;
}

export default App;
