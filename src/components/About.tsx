import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Rocket, Users, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: "Desarrollo Full Stack",
      description: "Experiencia en frontend y backend con tecnologías modernas",
    },
    {
      icon: Rocket,
      title: "Proyectos Innovadores",
      description:
        "Soluciones creativas que impulsan el crecimiento del negocio",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración efectiva en equipos multidisciplinarios",
    },
    {
      icon: Award,
      title: "Calidad y Excelencia",
      description: "Código limpio, escalable y bien documentado",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="about-title text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-6">
          Sobre Mí
        </h2>

        <div className="about-content max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Soy un Ingeniero de Sistemas apasionado por la tecnología y el
            desarrollo de software. Con experiencia en la creación de
            aplicaciones web modernas y escalables, me especializo en
            transformar ideas complejas en soluciones digitales elegantes y
            funcionales.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Mi enfoque está en escribir código limpio, mantener las mejores
            prácticas y crear experiencias de usuario excepcionales que generen
            un impacto real.
          </p>
        </div>

        <div className="about-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="about-card bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
