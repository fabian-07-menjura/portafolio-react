import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Folder } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", {
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Sanitisu",
      description:
        "Plataforma completa que ofrece soluciones de higiene profesional (papel higiénico, toallas, servilletas, jabones, geles y dispensadores). Están organizados por líneas (como la línea Eco, Clásica o Premium), lo cual es útil si estás buscando comparar especificaciones técnicas antes de decidir",
      technologies: ["Wordpress", "PHP", "JS", "Cpanel", "GitLab"],
      image:
        "https://sanitisu.com/wp-content/uploads/2024/01/shutterstock_2341042223.jpg",
      github: "https://github.com",
      demo: "https://sanitisu.com/col/inicio/",
    },
    {
      title: "Social live",
      description:
        "Sitio web que ofrece una gama de servicios diseñados para ayudar a empresas a crecer y optimizar su presencia digital, como en Desarrollo IT y sofware, Estrategia digital y publicidad, getion de marcas e innovacion de ventas",
      technologies: ["Angular", "TypeScript", "Cpanel", "GitLab"],
      image: "https://sociallive.com.co/assets/img/banner-home-1-desktop.jpg",
      github: "https://github.com",
      demo: "https://sociallive.com.co/",
    },
    {
      title: "Team Foods",
      description:
        "Sitio web que ofrece información detallada sobre sus marcas líderes, que son muy comunes en los supermercados de Colombia, México y Chile, dividido en varias areas como lo son Portafolio de consumo masivo, soluciones para Negocios y Sostenibilidad e innovacion",
      technologies: ["Wordpress", "PHP", "JS", "Cpanel", "GitLab"],
      image:
        "https://teamfoodservice.sociallive.com.co/wp-content/uploads/2025/10/banner-principal-portafolio-desktop.webp",
      github: "https://github.com",
      demo: "https://teamfoodservice.sociallive.com.co/",
    },
    {
      title: "VIDA",
      description:
        "Sitio web que esta diseñado para que el usuario se identifique con una necesidad específica. Su estructura guía al visitante para que elija el producto según su situación ",
      technologies: ["Wordpress", "PHP", "JS", "Sass", "Cpanel", "GitLab"],
      image: "https://i.postimg.cc/mgXyKJpj/vida.png",
      github: "https://github.com",
      demo: "https://vida.sociallive.com.co/",
    },
    {
      title: "Cruz Verde",
      description:
        "Landing Page donde  el usuario podra consultar el contenido de acuerdo a su necesidad, si ejemplo un usuario desea saber como cuidar su piel al exponerla al sol, encontrara un contenido con sus cuidados y los productos recomendados para su proteccion",
      technologies: ["Contenfull", "JS", "CSS"],
      image: "https://i.postimg.cc/6Q61vFys/cruz-verde.png",
      github: "https://github.com",
      demo: "https://www.cruzverde.com.co/blog/que-es-dermocosmetica/",
    },
    {
      title: "Maquetacion de Mails",
      description:
        "Desarrollo y maquetación de emails responsive bajo estándares profesionales, garantizando una visualización óptima en múltiples dispositivos y gestores de correo (Outlook, Gmail, Apple Mail)",
      technologies: ["HTML", "CSS", "JS"],
      image: "https://i.postimg.cc/Gt9CxHtb/javeriana.png",
      github: "https://github.com/fabian-07-menjura/maquetacion-de-mail",
      demo: "https://private-user-images.githubusercontent.com/86250631/557119885-5468865c-9f76-46aa-8ce1-41c0c9e19117.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzI0ODU3NjEsIm5iZiI6MTc3MjQ4NTQ2MSwicGF0aCI6Ii84NjI1MDYzMS81NTcxMTk4ODUtNTQ2ODg2NWMtOWY3Ni00NmFhLThjZTEtNDFjMGM5ZTE5MTE3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAzMDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMzAyVDIxMDQyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUzMzZmOWNkMTQwNjliM2UxYjhmZGQwYjUyZDQxNTFiNzIzOTgyZGMyMjI4MGY3MjNmY2EwOTU3M2Y1OTBlNTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.NARBiWq6EB8Bt_adjkZq5r5DavwCmy0LMhY4llcFMU0",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="projects-title text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
          Proyectos Destacados
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          Una selección de proyectos que demuestran mis habilidades técnicas y
          creatividad
        </p>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Folder className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div>
          <p className="fs-6 text-gray-700 py-6">
            Los anteriores fueron los proyectos mas recientes en los que he
            trabajado, por supuesto que hay proyectos personales (revisar{" "}
            <a href="https://github.com/fabian-07-menjura">Github</a>) en los
            que practique bastante el sistema CRUD, tambien he participado en
            adminitración de mas sitios como{" "}
            <a href="https://derco.com.co/">Derco, </a>
            <a href="https://plazadelasamericas.com.co/">
              Plaza De las Americas,{" "}
            </a>
            <a href="https://gprovivienda.com/">Gprovivienda, </a>
            <a href="https://blauresidence.com/">Blau Residence </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
