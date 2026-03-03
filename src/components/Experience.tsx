import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-title", {
        scrollTrigger: {
          trigger: ".experience-title",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: "Desarrollador Web",
      company: "Social Agencia Global",
      period: "2025 - 2026",
      description:
        "Lideré y ejecuté el desarrollo completo de 4 sitios web productivos de inicio a fin (Full Stack) en un período de solo 3 meses, demostrando alta eficiencia y capacidad de gestionar múltiples proyectos simultáneamente.",
      technologies: [
        "Angular",
        "Wordpress",
        "PHP",
        "JavaScript",
        "Sass",
        "CPanel",
      ],
    },
    {
      title: "Web Master",
      company: "Pangea Digital Marketing",
      period: "2023 - 2025",
      description:
        "Construí y diseñe aplicaciones web con HTML, CSS, JS, CMS como Contentfull y WordPress, Drupal, estando a cargo de la administración de sitios web como Derco, plaza las américas de Bogotá y GProvivienda de Panamá, cree mas de 70 micrositios para Cruz verde y también maquete mas de 200 mails para la Universidad Javeriana de Colombia.",
      technologies: [
        "Wordpress",
        "Drupal",
        "Contenfull",
        "JavaScript",
        "CPanel",
      ],
    },
    {
      title: "Auxiliar Soporte Tecnico",
      company: "Covinoc S.A",
      period: "2020",
      description:
        "Colabore como auxiliar en la mesa de soporte técnico de la empresa, realice actualización preventivo y correctivo de equipos de computo e instale cableado estructurado de red.",
      technologies: ["Sistemas Operativos", "Antivirus", "Redes"],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="experience-title text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
          Experiencia Profesional
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Mi trayectoria en el mundo Tech
        </p>

        <div className="timeline-container relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item mb-12 flex flex-col md:flex-row gap-6 items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                  </div>

                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    {exp.company}
                  </h4>

                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
