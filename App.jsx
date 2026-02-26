import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";


import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // ✅ AOS Initialization goes INSIDE the component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Technologies />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;