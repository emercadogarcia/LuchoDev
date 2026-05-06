# Lucho Dev - Landing Page

Landing page profesional de desarrollo web con React + Vite + Tailwind CSS.

## Stack Tecnológico

- **React 18** con TypeScript
- **Vite** como bundler
- **Tailwind CSS** con sistema de diseño "Precision Minimalist"
- **Formspree** para formularios
- **Schema.org** para SEO

## Instalación

### Requisitos Previos

- Node.js 20 LTS
- npm o pnpm

### Pasos de Instalación

1. **Clonar o navegar al proyecto:**
   ```bash
   cd /home/emercado/emercado_data/Web-Site/2026/luchoDev
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en navegador:**
   ```
   http://localhost:3000
   ```

## Estructura del Proyecto

```
lucho-dev/
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, WhatsAppFloat
│   │   ├── sections/    # Hero, Services, WhyMe, Portfolio, FAQ, Contact
│   │   └── ui/          # Button, Card, Section (reutilizables)
│   ├── hooks/           # useMobileMenu
│   ├── lib/             # SEO y Schema.org
│   ├── pages/           # Home, Privacy
│   └── styles/          # globals.css
├── .devcontainer/       # Configuración DevContainer
├── public/              # Assets estáticos
└── index.html
```

## Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Compila para producción
- `npm run preview` - Previa del build de producción
- `npm run lint` - Ejecuta ESLint

## Configuración de Formspree

El formulario de contacto usa Formspree con ID: `mjglgkyd`

Para configurar la auto-respuesta:
1. Ve a [Formspree](https://formspree.io/)
2. Configura el email de respuesta automática
3. Personaliza el mensaje de confirmación

## SEO

- Meta tags configurados en `index.html`
- Schema.org JSON-LD inyectado dinámicamente
- Open Graph tags para redes sociales

## Sistema de Diseño

Colores basados en "Precision Minimalist":
- **Primary:** Royal Blue (#004ac6)
- **Surface:** Grises suaves (#faf8ff, #f8fafc)
- **Typography:** Inter font family

## DevContainer

El proyecto incluye configuración para DevContainer con:
- Node.js 20 LTS
- Git
- Puerto 3000 forward automático

Para usar DevContainer:
1. Abre el proyecto en VS Code
2. Presiona `F1` y selecciona "Dev Containers: Reopen in Container"

## Deploy

### Netlify (Recomendado)

1. Conecta tu repositorio a Netlify
2. Configura build command: `npm run build`
3. Configura publish directory: `dist`
4. Deploy automático en cada push

### Vercel

```bash
npm install -g vercel
vercel
```

## MVP Original

El MVP original en HTML/CSS/JS vanilla se preserva en la carpeta `./MVP/` como referencia.

## Contacto

- Email: emercadogarcia@outlook.com
- WhatsApp: +591 72698986
