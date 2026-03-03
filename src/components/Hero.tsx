import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      }).from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "pwer3.out",
        },
        "-=0.5",
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Ingeniero de Sistemas
            <span className="block text-blue-600 mt-2">
              Full Stack Developer
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transformando ideas en soluciones tecnológicas innovadoras.
            Especializado en desarrollo web moderno y arquitecturas escalables.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Proyectos
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-gray-200"
            >
              Contáctame
            </button>

            <div className="flex gap-4 sm:ml-4">
              <a
                href="https://github.com/fabian-07-menjura"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <Github className="w-6 h-6 text-gray-900" />
              </a>
              <a
                href="https://www.linkedin.com/in/fabian-menjura-1409ba216/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="mailto:f.menjura.22@gmail.com"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <Mail className="w-6 h-6 text-gray-900" />
              </a>
            </div>
          </div>

          <a
            href="/cv-fabian-menjura.pdf"
            download
            className="mt-12 flex items-center justify-center gap-2 px-6 py-3 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span className="font-medium">Descargar CV</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
          <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
