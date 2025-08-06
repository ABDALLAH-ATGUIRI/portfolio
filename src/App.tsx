import { Suspense, useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Hobbies } from "@/components/Hobbies";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { LoadingLayout } from "@/components/layouts/LoadingLayout";
import { Projects } from "@/components/Projects";
import MainLayout from "@/components/layouts/MainLayout";

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Mark as ready once Suspense resolves (simulated here)
    const timer = setTimeout(() => setIsReady(true), 1500); // Match lazy delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<LoadingLayout />}>
      <div className="min-h-screen text-secondary bg-background-light dark:bg-background-dark transition-colors duration-300 relative overflow-hidden">
        {/* Loading Overlay */}
        <div
          className={[
            "fixed inset-0 z-50 transition-opacity duration-500",
            isReady ? "opacity-0 pointer-events-none" : "opacity-100",
          ].join(" ")}
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
              {/* No fallback here since LoadingLayout is above */}
              <main className="container mx-auto px-4 max-w-5xl py-8">
                <Summary />
                <Experience />
                <Projects />
                <TechnicalSkills />
                <Education />
                <Hobbies />
              </main>
            </Suspense>
          </MainLayout>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
