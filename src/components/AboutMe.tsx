import { Heart, BookOpen, Briefcase, Star } from 'lucide-react';

export function AboutMe() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Sobre <span className="text-[#8B1538]">Mí</span>
          </h2>
        </div>

        {/* Quién soy */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1723433892471-62f113c8c9a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMHNlbmlvciUyMHN1cHBvcnR8ZW58MXx8fHwxNzYxMTQ4NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cuidado de adultos mayores"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8B1538] to-[#1e3a5f] rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl text-gray-900">¿Quién Soy?</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Soy <span className="text-gray-900">Keyla</span>, fundadora de KC Corazón Joven. 
              Mi pasión es brindar amor, cuidado y compañía a nuestros adultos mayores, 
              quienes merecen vivir sus años dorados con dignidad, alegría y el mejor cuidado posible.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Creo firmemente que cada adulto mayor tiene una historia invaluable que contar 
              y merece ser tratado con el respeto, la paciencia y el cariño que han cultivado 
              a lo largo de sus vidas.
            </p>
          </div>
        </div>

        {/* Mi Historia */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#8B1538] to-[#1e3a5f] rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl text-gray-900">Mi Historia</h3>
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="text-justify">
              KC Corazón Joven nació de una experiencia personal profunda. Al cuidar de mis propios 
              abuelos, descubrí la importancia del cuidado especializado, la paciencia y el amor 
              incondicional que requieren nuestros adultos mayores.
            </p>
            <p className="text-justify">
              Esta experiencia transformó mi vida y me mostró mi verdadera vocación: dedicarme 
              al cuidado y bienestar de personas de la tercera edad. Cada día que pasa, me siento 
              más agradecida de poder hacer una diferencia en la vida de quienes tanto han dado a sus familias.
            </p>
            <p className="text-justify">
              Lo que comenzó como un llamado del corazón, se ha convertido en un emprendimiento 
              profesional dedicado a ofrecer servicios de calidad, donde el respeto, la empatía 
              y el cariño son los pilares fundamentales de nuestro trabajo.
            </p>
          </div>
        </div>

        {/* Experiencia y Datos Importantes */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experiencia */}
          <div className="bg-gradient-to-br from-[#8B1538] to-[#1e3a5f] rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl">Mi Experiencia</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-white/80">•</span>
                <span>Más de 3 años brindando cuidado a adultos mayores</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/80">•</span>
                <span>Formación en geriatría y primeros auxilios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/80">•</span>
                <span>Certificación en cuidado de personas con necesidades especiales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/80">•</span>
                <span>Capacitación continua en nutrición geriátrica y actividades recreativas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/80">•</span>
                <span>Experiencia en manejo de medicamentos y cuidados post-operatorios</span>
              </li>
            </ul>
          </div>

          {/* Datos Importantes */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8B1538] to-[#1e3a5f] rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl text-gray-900">Datos Importantes</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-[#8B1538] pl-4">
                <div className="text-sm text-gray-500 mb-1">Disponibilidad</div>
                <div className="text-gray-900">Servicio 24/7 según necesidades</div>
              </div>
              <div className="border-l-4 border-[#8B1538] pl-4">
                <div className="text-sm text-gray-500 mb-1">Atención</div>
                <div className="text-gray-900">Personalizada e individualizada</div>
              </div>
              <div className="border-l-4 border-[#8B1538] pl-4">
                <div className="text-sm text-gray-500 mb-1">Cobertura</div>
                <div className="text-gray-900">Servicios a domicilio y acompañamiento</div>
              </div>
              <div className="border-l-4 border-[#8B1538] pl-4">
                <div className="text-sm text-gray-500 mb-1">Enfoque</div>
                <div className="text-gray-900">Cuidado holístico: físico, emocional y social</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
