import { Heart, Users, Stethoscope, Home, Utensils, Activity, Award, Trophy, Compass, Eye } from 'lucide-react';

export function WhatIDo() {
  const principles = [
    {
      icon: Compass,
      title: "Misión",
      description: "Brindar cuidado integral de calidad a los adultos mayores, promoviendo su bienestar físico, emocional y social, con amor, respeto y profesionalismo.",
      color: "from-[#8B1538] to-[#1e3a5f]"
    },
    {
      icon: Eye,
      title: "Visión",
      description: "Ser reconocidos como el referente en cuidado geriátrico personalizado, donde cada adulto mayor reciba atención digna y cariñosa que mejore su calidad de vida.",
      color: "from-[#8B1538] to-[#1e3a5f]"
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Amor, respeto, empatía, responsabilidad, profesionalismo y dedicación. Tratamos a cada adulto mayor como nos gustaría que trataran a nuestros propios abuelos.",
      color: "from-[#8B1538] to-[#1e3a5f]"
    }
  ];

  const services = [
    {
      icon: Users,
      title: "Compañía y Apoyo Emocional",
      description: "Conversación, actividades recreativas y acompañamiento diario"
    },
    {
      icon: Stethoscope,
      title: "Cuidados de Salud",
      description: "Administración de medicamentos, control de signos vitales y seguimiento médico"
    },
    {
      icon: Home,
      title: "Asistencia en el Hogar",
      description: "Ayuda con actividades diarias, movilidad y cuidado personal"
    },
    {
      icon: Utensils,
      title: "Nutrición y Alimentación",
      description: "Preparación de comidas saludables y asistencia durante las comidas"
    },
    {
      icon: Activity,
      title: "Actividades Físicas y Recreativas",
      description: "Ejercicios suaves, paseos y actividades para mantener la mente activa"
    },
    {
      icon: Award,
      title: "Cuidados Especializados",
      description: "Atención a personas con demencia, Alzheimer y otras condiciones especiales"
    }
  ];

  const achievements = [
    { 
      icon: Heart,
      number: "50+", 
      label: "Familias Atendidas",
      description: "Confiando en nuestro cuidado"
    },
    { 
      icon: Users,
      number: "100%", 
      label: "Satisfacción",
      description: "De nuestros clientes"
    },
    { 
      icon: Trophy,
      number: "3+", 
      label: "Años de Experiencia",
      description: "En cuidado geriátrico"
    },
    { 
      icon: Award,
      number: "24/7", 
      label: "Disponibilidad",
      description: "Según sus necesidades"
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Que <span className="text-[#8B1538]">Hago</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mi enfoque está en proporcionar cuidado integral con amor y dedicación
          </p>
        </div>

        {/* Misión, Visión, Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">{principle.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mis Servicios */}
        <div className="mb-16">
          <h3 className="text-3xl text-gray-900 mb-8 text-center">Mis Servicios</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#8B1538] transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B1538] to-[#1e3a5f] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Logros */}
        <div>
          <h3 className="text-3xl text-gray-900 mb-8 text-center">Nuestros Logros</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-[#8B1538]/5 to-[#1e3a5f]/5 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#1e3a5f] rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#1e3a5f] mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-900 mb-1">{achievement.label}</div>
                  <div className="text-sm text-gray-600">{achievement.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
