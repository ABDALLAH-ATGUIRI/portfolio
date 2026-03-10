import { Suspense, useState, useEffect, lazy } from "react";
import { LoadingLayout } from "@/components/layouts/LoadingLayout";
import { MainLayout } from "@/components/layouts/MainLayout";

/** Helper to lazy-load a named export as `default` */
function lazyNamed<T extends Record<string, React.ComponentType>>(
  factory: () => Promise<T>,
  name: keyof T
) {
  return lazy(() => factory().then((mod) => ({ default: mod[name] })));
}

const Hero = lazyNamed(() => import("@/components/Hero"), "Hero");
const Summary = lazyNamed(() => import("@/components/Summary"), "Summary");
const Experience = lazyNamed(() => import("@/components/Experience"), "Experience");
const Education = lazyNamed(() => import("@/components/Education"), "Education");
const Hobbies = lazyNamed(() => import("@/components/Hobbies"), "Hobbies");
const TechnicalSkills = lazyNamed(() => import("@/components/TechnicalSkills"), "TechnicalSkills");
const Projects = lazyNamed(() => import("@/components/Projects"), "Projects");

function AppContent() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-secondary bg-background-light dark:bg-background-dark transition-colors duration-300 relative">
      {/* Loading Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          isReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <LoadingLayout />
      </div>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <MainLayout>
          <Suspense fallback={null}>
            <Hero />
            <Summary />
            <Experience />
            <Projects />
            <TechnicalSkills />
            <Education />
            <Hobbies />
          </Suspense>
        </MainLayout>
      </div>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<LoadingLayout />}>
      <AppContent />
    </Suspense>
  );
}

export default App;
