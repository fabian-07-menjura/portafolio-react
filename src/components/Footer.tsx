import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>por un Ingeniero de Sistemas</span>
          </div>

          <div className="text-gray-500 text-sm">
            © {currentYear} Portfolio. Todos los derechos reservados.
          </div>

          <div className="text-gray-600 text-xs">
            Construido con React + TypeScript + GSAP + Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
