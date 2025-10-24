import { ImageWithFallback } from './figma/ImageWithFallback';
// @ts-ignore: image module without type declaration
import logoImage from '../assets/Logo-KC.jpg';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#8B1538]/10 to-[#1e3a5f]/10 rounded-full text-sm text-[#8B1538]">
                Bienvenido
              </div>
              <h1 className="text-5xl md:text-6xl text-gray-900">
                KC Corazón
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#1e3a5f]">
                  Joven
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Brindando amor, cuidado y compañía a nuestros adultos mayores
                con calidez y profesionalismo
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => onNavigate("what-i-do")}
                className="px-6 py-3 bg-[#8B1538] text-white rounded-lg hover:bg-[#6d1029] transition-colors">
                Conocer Servicios
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="px-6 py-3 border-2 border-[#1e3a5f] text-[#1e3a5f] rounded-lg hover:bg-[#1e3a5f] hover:text-white transition-colors">
                Contáctame
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border-4 border-gray-100 shadow-2xl">
              <ImageWithFallback
                src={logoImage}
                alt="KC Corazón Joven"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8B1538] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1e3a5f] rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
