import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/loader";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (loading) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(min-width: 1200px)", () => {
        ScrollTrigger.create({
          trigger: ".hero-stack",
          start: "top top",
          pin: true,
          pinSpacing: false,
          end: "bottom top",
        });
      });
    }, mainRef);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, [loading]);

  return (
    <div ref={mainRef} className="min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navigation />

          <div className="hero-stack">
            <Hero />
          </div>

          <div className="relative z-10">
            <About />
          </div>

          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
