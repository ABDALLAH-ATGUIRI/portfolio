import { Suspense, lazy, useContext } from "react";
import { LoadingLayout } from "@/components/layouts/LoadingLayout";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PortfolioContext } from "@/context/PortfolioContext";

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
const AiSection = lazyNamed(() => import("@/components/AiSection"), "AiSection");
const Projects = lazyNamed(() => import("@/components/Projects"), "Projects");
const Store = lazyNamed(() => import("@/components/Store"), "Store");
const Contact = lazyNamed(() => import("@/components/Contact"), "Contact");

function AppContent() {
  const data = useContext(PortfolioContext);

  if (!data) {
    return <LoadingLayout />;
  }

  return (
    <MainLayout>
      <Suspense fallback={<LoadingLayout />}>
        <Hero />
        <main className="container mx-auto px-4 max-w-5xl py-8">
          <Summary />
          <Experience />
          <Projects />
          <Store />
          <TechnicalSkills />
          <AiSection />
          <Education />
          <Hobbies />
          <Contact />
        </main>
      </Suspense>
    </MainLayout>
  );
}

function App() {
  return <AppContent />;
}

export default App;
