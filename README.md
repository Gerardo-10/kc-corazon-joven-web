# KC Corazón Joven - Landing Page

Este proyecto es la implementación web (con **React** y **TypeScript**) de un diseño creado originalmente con Figma Make. Representa una landing page profesional, totalmente responsiva y optimizada para el rendimiento.

---

## Tecnologías y Stack

El proyecto ha sido construido bajo un stack moderno de desarrollo, optimizado con **Vite** para una experiencia ágil y eficiente:

| Componente | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Núcleo** | React, TypeScript | Desarrollo del frontend tipado. |
| **Construcción** | Vite | Bundler de alto rendimiento y servidor de desarrollo. |
| **Estilización** | Tailwind CSS | Framework de CSS utility-first para estilos rápidos y personalizables. |
| **Componentes UI** | Shadcn UI (derivados) | Componentes de interfaz (Input, Select, Checkbox) y sistema de notificaciones (`sonner`). |
| **Iconografía** | Lucide React | Conjunto moderno de iconos para la interfaz. |

---

## Estructura del Proyecto

El código fuente principal reside en la carpeta `src/`. La estructura es modular, siguiendo las mejores prácticas para facilitar la navegación y el mantenimiento del código:

```
KC Corazón Joven/
├── node_modules/         # Dependencias del proyecto (generadas por npm install)
├── src/                  # Código Fuente de la Aplicación
│   ├── assets/           # Recursos estáticos: imágenes y logo.
│   ├── components/       # Módulos de la UI reutilizables
│   │   ├── figma/        # Componentes generados por la herramienta (ej: ImageWithFallback.tsx)
│   │   ├── ui/           # Componentes base de la interfaz (Input, Checkbox, Select, etc.)
│   │   ├── AboutMe.tsx   # Sección principal: Sobre Mí.
│   │   ├── Contact.tsx   # Sección principal: Formulario de contacto y detalles.
│   │   ├── Footer.tsx    # Pie de página.
│   │   ├── Hero.tsx      # Sección principal: Introducción.
│   │   ├── Navbar.tsx    # Barra de navegación.
│   │   └── WhatIDo.tsx   # Sección principal: Qué Hago.
│   ├── styles/           # Archivos de estilos base (index.css).
│   ├── App.tsx           # Componente principal que gestiona la navegación de la aplicación.
│   ├── custom.d.ts       # Declaraciones de tipos personalizados (ej: para la importación de .png).
│   └── main.tsx          # Punto de entrada y montaje de la aplicación React.
├── index.html            # Archivo HTML raíz.
├── package.json          # Definición de dependencias y scripts.
└── vite.config.ts        # Configuración de compilación de Vite.
```

---

## Guía de Ejecución Local

Sigue estos pasos para poner en marcha el proyecto en tu entorno de desarrollo.

### 1. Instalación de Dependencias

Asegúrate de estar en la raíz del proyecto y ejecuta el comando para instalar todos los paquetes necesarios:

```bash
npm install
# Alternativa: npm i
```

### 2. Iniciar el Servidor de Desarrollo

Una vez instaladas las dependencias, inicia el servidor local de Vite.

```bash
npm run dev
```

### 3. Build para Producción (Opcional)

Si necesitas generar la versión optimizada y estática para subirla a un servidor web:

```bash
npm run build
```

Esto creará la carpeta dist/ con todos los archivos listos para producción.