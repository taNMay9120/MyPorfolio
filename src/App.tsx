import { About } from "./components/About/About.tsx";
import { Experience } from "./components/Experience/Experience.tsx";
import { Hero } from "./components/Hero/Hero.tsx";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { Contact } from "./components/Contact/Contact.tsx";
import { Projects } from "./components/Projects/Projects.tsx";

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-dark text-light overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
