import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import SkillsSection from "./components/Skills";
import SplashCursor from "./components/ui/splash-cursor";
import Grid from "./components/Grid";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { cn } from "@/lib/utils";

function App() {
  return (
    <>
      {/* Hero Section with Grid Background */}
      <div className="relative bg-gray-900 text-white">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl w-full mx-auto sm:px-10 px-5">
          <Nav />

          <SplashCursor />

          <Hero />

          <Grid />

          <SkillsSection />

          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
