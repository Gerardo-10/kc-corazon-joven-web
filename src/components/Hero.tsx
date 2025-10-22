import { ImageWithFallback } from './figma/ImageWithFallback';

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
                Brindando amor, cuidado y compañía a nuestros adultos mayores con calidez y profesionalismo
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => onNavigate('what-i-do')}
                className="px-6 py-3 bg-[#8B1538] text-white rounded-lg hover:bg-[#6d1029] transition-colors"
              >
                Conocer Servicios
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 border-2 border-[#1e3a5f] text-[#1e3a5f] rounded-lg hover:bg-[#1e3a5f] hover:text-white transition-colors"
              >
                Contáctame
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gray-100 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691031410-13bd745df928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvcnMlMjBzbWlsaW5nfGVufDF8fHx8MTc2MTA2NzEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Adultos mayores felices"
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
