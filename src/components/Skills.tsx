import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Database, Server, GitBranch, Layout, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1120px)", () => {
        const sections = gsap.utils.toArray(".section-horizontal");

        if (!sliderRef.current || !sectionRef.current) return;

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            start: "top top",

            end: () => "+=" + sliderRef.current!.offsetWidth,
          },
        });

        gsap.from(".skills-title", {
          scrollTrigger: {
            trigger: ".skills-title",
            start: "top 80%",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: [
        "React",
        "Vue.js",
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Bases de Datos",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "SQL"],
      color: "from-orange-500 to-amber-500",
    },

    {
      icon: GitBranch,
      title: "Control de Versiones",
      skills: ["Git", "GitHub", "GitLab", "Code Review", "Pull Requests"],
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Layout,
      title: "Diseño & UX",
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"],
      color: "from-fuchsia-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "Herramientas",
      skills: ["VS Code", "Webpack", "Vite", "npm", "Jest", "Postman"],
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div ref={sectionRef} className="overflow-hidden bg-gray-50 " id="skills">
      <div ref={sliderRef} className="container">
        <section className="section-horizontal section">
          <h2 className="skills-title  text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Habilidades Técnicas
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear soluciones
            robustas
          </p>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 max-w-7xl w-full">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 min-w-[180px] md:flex-1"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 text-white`}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-horizontal bg-white section">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">
            Nivel de Competencia
          </h3>

          <div className="space-y-6 w-full max-w-3xl">
            {[
              { skill: "JavaScript / TypeScript", level: 95 },
              { skill: "React / Next.js", level: 90 },
              { skill: "Node.js / Express", level: 85 },
              { skill: "Bases de Datos SQL/NoSQL", level: 80 },
              { skill: "Cloud Services (AWS)", level: 75 },
              { skill: "Java", level: 60 },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900">
                    {item.skill}
                  </span>
                  <span className="text-blue-600 font-semibold">
                    {item.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
