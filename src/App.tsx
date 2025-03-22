import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import SplashCursor from "./components/ui/splash-cursor";

function App() {
  return (
    <>
      <Nav />
      <SplashCursor />
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about" className="min-h-screen">
        <h1 className="text-3xl font-bold">About Section</h1>
        {/* Your About content goes here */}
      </section>
      
      <section id="projects" className="min-h-screen">
        <h1 className="text-3xl font-bold">Projects Section</h1>
        {/* Your Projects content goes here */}
      </section>
      
      <section id="resume" className="min-h-screen">
        <h1 className="text-3xl font-bold">Resume Section</h1>
        {/* Your Resume content goes here */}
      </section>
    </>
  );
}

export default App;