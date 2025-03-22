import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import SplashCursor from "./components/ui/splash-cursor";
import Grid from "./components/Grid";
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
          {/* Navigation - Fixed Position */}
          <Nav />

          {/* Cursor Effect */}
          <SplashCursor />

          {/* Hero Section - Full Height */}
          <section
            id="hero"
            
          >
            <Hero />
          </section>

          {/* Grid Component - About Section */}
          <section id="about">
            <Grid />
          </section>

          {/* Main Content Area - Dark Background */}

          {/* Projects Section */}
          <section id="projects" >
            <h1 className="text-3xl font-bold mb-8 text-white">
              Projects Section
            </h1>
            {/* Your Projects content goes here */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project items would go here */}
              <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Project 1
                </h3>
                <p className="text-white/80">
                  Project description would go here
                </p>
              </div>
              <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Project 2
                </h3>
                <p className="text-white/80">
                  Project description would go here
                </p>
              </div>
            </div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="min-h-screen py-20">
            <h1 className="text-3xl font-bold mb-8 text-white">
              Resume Section
            </h1>
            {/* Your Resume content goes here */}
            <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Experience
              </h3>
              <p className="text-white/80">
                Your work experience would go here
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
