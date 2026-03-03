import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        scrollTrigger: {
          trigger: ".contact-title",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 75%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 75%",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "f.menjura.22@gmail.com",
      link: "mailto:f.menjura.22@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+57 (314) 636-4068",
      link: "https://wa.me/573146364068",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Tunja - Boyaca - Colombia",
      link: "https://maps.app.goo.gl/Fq6amDEa8MPkg4R69",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/fabian-07-menjura",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/fabian-menjura-1409ba216/",
      label: "LinkedIn",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="contact-title text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
          Hablemos
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Me encantaría escucharte y ayudarte a
          hacerlo realidad
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="contact-info space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{method.title}</p>
                      <p className="text-gray-900 font-medium">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sígueme en Redes
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">
                ¿Listo para colaborar?
              </h3>
              <p className="leading-relaxed mb-6">
                Estoy disponible para proyectos freelance, oportunidades de
                tiempo completo y consultoría técnica. Hablemos sobre tu próximo
                proyecto.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">
                  Disponible para nuevos proyectos
                </span>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
