import { useState } from "react";
import { Mail, Linkedin, Facebook, Phone, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

interface ContactProps {
  // No props needed for now
}

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    howDidYouFind: "",
    preferredContact: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Debes aceptar el consentimiento de contacto");
      return;
    }
    toast.success("¡Mensaje enviado! Te contactaré pronto.");
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      howDidYouFind: "",
      preferredContact: "",
      consent: false,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kc.corazonjoven@ejemplo.com",
      link: "mailto:kc.corazonjoven@ejemplo.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/keyla-corazon-joven",
      link: "https://linkedin.com",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "KC Corazón Joven",
      link: "https://facebook.com",
    },
    {
      icon: Phone,
      label: "Teléfono / WhatsApp",
      value: "+51 952 967 594",
      link: "tel:+51952967594",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            <span className="text-[#8B1538]">Contáctame</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#8B1538] to-[#1e3a5f] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">
                          {info.label}
                        </div>
                        <div className="text-gray-900">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#8B1538] to-[#1e3a5f] rounded-2xl p-8 text-white">
              <h3 className="text-2xl mb-4">¿Por qué contactarme?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-white/80">•</span>
                  <span className="text-white/90">
                    Respuesta rápida a tu consulta
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/80">•</span>
                  <span className="text-white/90">
                    Evaluación inicial sin compromiso
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/80">•</span>
                  <span className="text-white/90">
                    Atención personalizada y profesional
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/80">•</span>
                  <span className="text-white/90">
                    Cuidado con amor y dedicación
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl text-gray-900 mb-6">Envíame un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Número de Contacto (Opcional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto del Mensaje</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  placeholder="Ej: Consulta sobre desarrollo web"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje / Motivo del Contacto</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="howDidYouFind">
                  ¿Cómo Conociste mi Trabajo? (Opcional)
                </Label>
                <Select
                  value={formData.howDidYouFind}
                  onValueChange={(value: string) =>
                    setFormData({ ...formData, howDidYouFind: value })
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="recommendation">
                      Recomendación
                    </SelectItem>
                    <SelectItem value="search">Búsqueda en Google</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredContact">
                  Medio de Respuesta Preferido (Opcional)
                </Label>
                <Select
                  value={formData.preferredContact}
                  onValueChange={(value: string) =>
                    setFormData({ ...formData, preferredContact: value })
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Correo Electrónico</SelectItem>
                    <SelectItem value="phone">Teléfono</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="social">Redes Sociales</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked: boolean) =>
                    setFormData({ ...formData, consent: checked })
                  }
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-gray-600 cursor-pointer">
                  Acepto que se me contacte para responder esta consulta y
                  entiendo que mis datos serán tratados de forma confidencial.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8B1538] to-[#1e3a5f] text-white py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
