import { Mail, Linkedin, Facebook } from 'lucide-react';
// @ts-ignore: image module without type declaration
import logoImage from '../assets/logo-kc-corazon-joven.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'Principal' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'what-i-do', label: 'Que Hago' },
    { id: 'contact', label: 'Contáctame' }
  ];

  return (
    <footer className="bg-[#1e3a5f] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="KC Corazón Joven" className="h-12 w-auto bg-white rounded-lg p-1" />
            </div>
            <p className="text-white/80 text-sm">
              Cuidado y compañía con amor para nuestros adultos mayores
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contacto</h3>
            <div className="space-y-3">
              <a href="mailto:kc.corazonjoven@ejemplo.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                kc.corazonjoven@ejemplo.com
              </a>
              <div className="flex gap-4 mt-4">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© 2025 KC Corazón Joven. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
