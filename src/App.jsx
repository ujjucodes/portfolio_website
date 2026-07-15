import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Dashboards from "./components/Dashboards";
import Toolkit from "./components/Toolkit";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Dashboards />
        <Toolkit />
        <Projects />
        <Contact />
      </main>
    </>
  );
}