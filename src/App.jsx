import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";

function App() {
  if (styles === null || styles === undefined) {
    throw new Error("styles is null or undefined");
  }

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
