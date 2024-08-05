# Proyecto Vite React - Screaming Architecture

Este proyecto es una aplicación de front-end desarrollada con **React** y **Vite**, diseñada siguiendo los principios de la **Screaming Architecture**. La estructura de carpetas está organizada de tal manera que cada módulo refleja claramente su propósito dentro del dominio de la aplicación.

## Principales características

- **Arquitectura modular**: Los módulos principales `pokemon` y `todo` están bien definidos y organizados, facilitando la escalabilidad y el mantenimiento del proyecto.
- **Internacionalización**: La aplicación soporta múltiples idiomas mediante un sistema de localización integrado.
- **Estilos modernos**: Uso de **Tailwind CSS** y **Material UI** para un diseño rápido, eficiente y consistente.
- **Gestión de estado**: `zustand` es utilizado para la gestión del estado en el módulo `todo`.
- **Integración con APIs**: El módulo `pokemon` consume la PokeAPI para obtener y mostrar datos de Pokémon.
- **Despliegue con Docker y Nginx**: La aplicación está configurada para ser desplegada en contenedores Docker y servida a través de Nginx.

## Estructura del Proyecto

La estructura de carpetas del proyecto sigue una organización modular y coherente:

```plaintext
.
├── docker-compose.yml      # Configuración para Docker Compose
├── Dockerfile              # Archivo de construcción de la imagen Docker
├── index.html              # Archivo HTML principal
├── nginx                   # Configuración de Nginx
│   └── nginx.conf          # Archivo de configuración para Nginx
├── package.json            # Dependencias y scripts de npm
├── pnpm-lock.yaml          # Archivo de bloqueo para las dependencias instaladas
├── postcss.config.js       # Configuración de PostCSS
├── public                  # Archivos públicos
│   └── vite.svg            # Ejemplo de imagen SVG utilizada
├── README.md               # Documentación del proyecto
├── src
│   ├── locale              # Archivos de localización e internacionalización
│   ├── main.css            # Estilos globales
│   ├── main.tsx            # Punto de entrada de la aplicación
│   ├── modules             # Módulos organizados por dominio
│   │   ├── core            # Módulos base y layout general
│   │   ├── home            # Página de inicio y componentes relacionados
│   │   ├── pokemon         # Módulo relacionado con la PokeAPI
│   │   ├── shared          # Componentes compartidos reutilizables
│   │   └── todo            # Módulo de gestión de tareas (TODO)
│   ├── router              # Configuración de enrutamiento
│   └── vite-env.d.ts       # Declaraciones de tipos para el entorno Vite
├── tailwind.config.js      # Configuración de Tailwind CSS
├── tsconfig.app.json       # Configuración de TypeScript para la aplicación
├── tsconfig.json           # Configuración principal de TypeScript
├── tsconfig.node.json      # Configuración de TypeScript para Node.js
└── vite.config.ts          # Configuración de Vite
```

### Módulos

1. **Core**:
   - Contiene los componentes esenciales del layout, como la barra lateral (`aside.tsx`), el encabezado (`header.tsx`), y el menú (`menu.tsx`), utilizando **Material UI** para crear una interfaz de usuario consistente y atractiva.

2. **Home**:
   - Módulo destinado a la página principal de la aplicación con componentes específicos de la vista de inicio.

3. **Pokemon**:
   - Incluye componentes, hooks y servicios para consumir la **PokeAPI**, mostrando información de Pokémon en la aplicación.

4. **TODO**:
   - Módulo que implementa un CRUD de tareas utilizando `zustand` para la gestión del estado. Incluye componentes para agregar, editar y visualizar tareas.

5. **Shared**:
   - Contiene componentes reutilizables organizados bajo un patrón de diseño atómico, permitiendo su uso en diferentes módulos de la aplicación. Aquí se utilizan tanto **Material UI** como **Tailwind CSS** para la creación de componentes.

## Despliegue con Docker y Nginx

Este proyecto está configurado para ser desplegado utilizando **Docker** y **Nginx** como servidor web. Los archivos relevantes incluyen:

- `Dockerfile`: Define la imagen Docker de la aplicación.
- `docker-compose.yml`: Configuración de Docker Compose para orquestar el contenedor de la aplicación y Nginx.
- `nginx/nginx.conf`: Configuración personalizada de Nginx para servir la aplicación.

### Pasos para desplegar

1. Construir la imagen Docker:

   ```bash
   docker build -t nombre-de-tu-imagen .
   ```

2. Ejecutar el contenedor con Docker Compose:

   ```bash
   docker-compose up -d
   ```

3. Acceder a la aplicación desde tu navegador en `http://localhost`.

## Instalación local

Para ejecutar este proyecto localmente sin Docker, sigue los siguientes pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Luedan/FRONT_VITE_TEMPLATE.git
   ```

2. Instala las dependencias usando PNPM:

   ```bash
   pnpm install
   ```

3. Ejecuta la aplicación en modo desarrollo:

   ```bash
   pnpm dev
   ```

4. Abre tu navegador en `http://localhost:3000` para ver la aplicación en funcionamiento.

## Comandos disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Construye la aplicación para producción.
- `pnpm preview`: Previsualiza la aplicación construida.

## Contribución

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor abre un issue o crea un pull request.

¡Gracias por visitar este repositorio! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
