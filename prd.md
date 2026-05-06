# PRD – Landing Page «Lucho Dev»  
**Versión:** MVP (3 horas de desarrollo)  
**Fecha objetivo:** 3 de mayo 2026  
**Inversión:** 300 Bs (tiempo propio)

---

## 1. Objetivo de negocio

Generar leads de dueños de pequeñas empresas, emprendedores y freelancers que necesiten:

- Sitios web institucionales  
- Web apps (pequeñas herramientas a medida)  
- Landing pages de conversión  
- Sitios con carrito de compra  
- Ecommerce completo  

**Métrica clave:** al menos 1 lead por cada 50 visitantes (2% de conversión).

**Métrica interna (diferenciador velocidad):** responder al lead en menos de 1 hora (idealmente 30 min).

---

## 2. Alcance (lo que SÍ entra en 3h)

### Incluye (indispensable)

- 1 página HTML + CSS + JS vanilla (sin frameworks, sin build).  
- Responsive con media queries (mobile first).  
- 6 secciones: Hero, Servicios, Por qué elegirme (velocidad+SEO), Portafolio (3 cards), FAQ (4 preguntas), Contacto.  
- Formulario de contacto simple: nombre, correo, tipo de proyecto (selector), mensaje.  
- Envío del formulario a tu correo usando **Formspree** (gratis, sin servidor) o **Netlify Forms** (si usas Netlify).  
- Botón flotante de WhatsApp con mensaje predefinido.  
- Meta tags básicos de SEO (title, description, keywords, open graph).  
- Schema.org para “Service” (para que Google muestre tus servicios en resultados).  
- Enlaces a redes sociales (al menos LinkedIn o Instagram).  
- Footer con copyright, año dinámico (JS) y enlace a política de privacidad.  
- Página simple `privacidad.html` con texto genérico de protección de datos.

### No incluye (para después)

- Blog, calculadora de presupuesto, panel de cliente, carrito de compras real.  
- Integración con CRM (será tu bandeja de entrada).  
- Animaciones complejas o carga lazy avanzada.

---

## 3. Estructura de archivos (para codear rápido)

lucho-dev-landing/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── img/
│   └── icons/
└── forms/
    └── gracias.html

---

---

## 4. Requerimientos funcionales (por sección)

| Prioridad | Sección | Contenido mínimo | Tiempo estimado |
|-----------|---------|------------------|------------------|
| **Alta** | Hero | Título: *"¿Web rápida que venda? Lucho Dev – Velocidad + SEO"* <br> Subtítulo: *"Sitios web, web apps, landing pages, ecommerce en tiempo récord"* <br> CTA: *"Cotizar ahora →"* (ancla a contacto) | 20 min |
| **Alta** | Servicios | 5 tarjetas con ícono: <br> • Sitios web institucionales <br> • Web apps a medida <br> • Landing pages <br> • Sitios con carrito <br> • Ecommerce completo <br> Cada una con texto breve y *"Desde 300 USD"* (opcional mostrar precio) | 30 min |
| **Media** | Por qué Lucho Dev | 2 bloques fuertes: <br> 🚀 **Velocidad de entrega**: *"Tu sitio listo en 5-7 días"* <br> 📈 **SEO integrado**: *"Aparecé en los primeros resultados de Google"* <br> (poner badge o checkmarks) | 20 min |
| **Media-Baja** | Portafolio | 3 proyectos (aunque sean simulados o reales). Cada uno: imagen, título, tecnologías, botón *"Ver proyecto"* (nueva pestaña). Usar placeholder si no tienes reales. | 30 min |
| **Baja** | FAQ | 4 preguntas realistas: <br> • *¿Cuánto cuesta mantener mi web?* <br> • *¿Puedo editar el contenido yo mismo?* <br> • *¿Qué pasa si necesito cambios rápidos?* <br> • *¿Me ayudas con el dominio y hosting?* <br> *(Si falta tiempo, reducir a 2 preguntas)* | 20 min |
| **Alta** | Contacto | Formulario con 4 campos (Nombre, Correo, Tipo de proyecto [select con opciones], Mensaje). Botón *"Enviar →"*. <br> Además mostrar: correo (lucho@luchodev.com) y WhatsApp directo. | 30 min |
| **Alta** | WhatsApp fijo | Ícono flotante en la esquina inferior derecha. Pre-carga: *"Hola Lucho, vi tu landing y quiero cotizar un proyecto de [tipo]"* | 10 min |
| **Media** | Footer | Enlaces rápidos, redes sociales, copyright 2026, enlace a `privacidad.html`. | 10 min |

**Total código + ajustes:** ≈ 2h 50m (te sobran 10 min para probar).

---

## 5. Requerimientos no funcionales (clave para tu diferenciador)

### Rendimiento (velocidad)

- Usar solo 1 fuente de Google Fonts (inter o poppins).  
- Imágenes en WebP (máx 200KB cada una).  
- CSS crítico inline (o cargar CSS sin bloquear).  
- Puntuación Lighthouse Performance > 90 (obligatorio para que puedas presumir rapidez).

### SEO (tu otro diferenciador)

- Title + Meta description personalizados por servicio.  
- URL amigable: `luchodev.com` (o dominio que uses).  
- Encabezados estructurados (`H1` en Hero, `H2` en cada sección).  
- Schema.org en JSON-LD (ver ejemplo abajo).  
- Robots.txt simple y sitemap.xml (puedes generarlos en 2 min).

**Ejemplo de Schema.org (copia y pega en tu `<head>`):**

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Desarrollo web",
  "provider": { "@type": "Person", "name": "Lucho Dev" },
  "areaServed": "Latinoamérica",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios web",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sitios web" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web apps" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing pages" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ecommerce" } }
    ]
  }
} 
```

### Leads sin CRM

- **Opción recomendada** (gratis y simple): [Formspree](https://formspree.io/). Solo agregas `action="https://formspree.io/f/tu-id"` y te llegan los emails. Límite 50 envíos/mes gratis.
- **Alternativa rápida**: Netlify Forms si despliegas ahí (también gratis).
- **Plan B**: mailto: pero no es profesional (el usuario verá su cliente de correo). *No lo recomiendo.*
- "Configura en Formspree una auto-respuesta automática (gratis) para que el usuario reciba un email de confirmación."
---

## 6. Flujo de conversión (UX)

1. Usuario aterriza → ve **Hero claro** (qué haces y para quién).
2. Desplaza a **Servicios** → identifica su necesidad.
3. Lee **Por qué Lucho Dev** → se convence con velocidad+SEO.
4. Si duda, va al **FAQ** → resuelve objeciones.
5. Clic en **"Cotizar"** (CTA fijo o en contacto).
6. Llena 4 campos → Enviar → mensaje de agradecimiento.
7. Recibes el lead por email (en 1 min) y el usuario recibe auto-respuesta.
8. Le respondes en menos de 1 hora (tu diferenciador de velocidad).

---

## 7. Criterios de aceptación (para darlo por terminado en 3h)

- [ ] La página carga en menos de 2 segundos (prueba con PageSpeed Insights móvil).
- [ ] En móvil (320px) no hay desbordes y los botones son tocables.
- [ ] El formulario envía correctamente a tu correo (prueba real).
- [ ] El formulario envía auto-respuesta al usuario (configurado en Formspree).
- [ ] Whatsapp abre el chat con el mensaje predefinido.
- [ ] Los 3 proyectos del portafolio se ven correctamente.
- [ ] El código está comentado (para que puedas modificarlo después).
- [ ] No hay errores en consola (JS).
- [ ] El footer incluye enlace a `privacidad.html` y la página existe.

---

## 8. Plan de 3 horas (cronómetro sugerido)

| Bloque | Tarea | Duración |
|--------|-------|----------|
| 0:00 – 0:20 | Preparar estructura HTML (semántica, enlaces CSS/JS) | 20 min |
| 0:20 – 1:00 | Maquetar Hero + Servicios + Por qué elegirme | 40 min |
| 1:00 – 1:30 | Portafolio + FAQ | 30 min |
| 1:30 – 2:00 | Formulario + Footer + WhatsApp flotante | 30 min |
| 2:00 – 2:30 | CSS responsivo + ajustes finos | 30 min |
| 2:30 – 2:45 | SEO (meta, schema), crear `privacidad.html` | 15 min |
| 2:45 – 2:55 | Configurar Formspree (incluyendo auto-respuesta) | 10 min |
| 2:55 – 3:00 | Desplegar (Netlify o GitHub Pages) + test final | 5 min |

---

## 9. Riesgos y cómo mitigarlos en 3h

| Riesgo | Mitigación |
|--------|-------------|
| No tengo 3 proyectos reales para portafolio | Usa maquetas de sitios que hayas hecho para amigos o proyectos de práctica. Ponles "Demo" o "Proyecto simulado". |
| El formulario no llega por spam | Usa Formspree que ya tiene filtros básicos. Además, agrega un campo oculto honeypot. |
| La página se ve fea en móvil | Usa CSS Grid + Flex con `@media (max-width: 768px)` desde el inicio. Mejor aún: diseña primero para móvil. |
| Me excedo de tiempo | Si ves que no llegas, elimina el portafolio (sustitúyelo por badges de tecnologías) y reduce FAQ a 2 preguntas. |
| Auto-respuesta no funciona | Prueba con un email real antes del despliegue. Formspree tiene guía paso a paso. |

---

## 10. Despliegue rápido y gratuito (10 minutos)

- **Opción 1 (recomendada):** [Netlify](https://netlify.com) – arrastras tu carpeta y tienes HTTPS, Forms automático si usas `<form netlify>`.
- **Opción 2:** [GitHub Pages](https://pages.github.com) – gratis, pero el formulario tendrías que manejarlo con Formspree.
- **Opción 3:** Vercel – igual de simple.

---

## ✅ Checklist final para lanzar el 3 de mayo (o antes)

- [ ] ¿Tienes el texto definitivo de cada sección? (puedes copiar el que se proporciona).
- [ ] ¿Preparaste 3 imágenes de proyectos (aunque sean mockups)?
- [ ] ¿Configuraste Formspree con tu correo y la auto-respuesta?
- [ ] ¿Probaste el envío del formulario desde tu página local (incluyendo auto-respuesta)?
- [ ] ¿Creaste `privacidad.html` con texto legal básico?
- [ ] ¿Mediste el tiempo real y no pasaste de 3 horas?
- [ ] ¿Configuraste un sistema para medir tu tiempo de respuesta a leads? (ej. alarma cada hora)

---

**¡Éxito con Lucho Dev!** 🚀