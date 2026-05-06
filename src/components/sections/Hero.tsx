import { ButtonLink } from '../ui/Button'

export const Hero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-surface-low to-white">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              ¿Web rápida que venda?{' '}
              <span className="text-gradient">Lucho Dev – Velocidad + SEO</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Sitios web, web apps, landing pages, ecommerce en tiempo récord. Tu proyecto listo en 5-7 días.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <ButtonLink href="#contacto" variant="primary">
                Cotizar ahora →
              </ButtonLink>
              <div className="flex items-center gap-3 text-slate-600 font-medium">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                Disponibilidad: Inmediata
              </div>
            </div>
          </div>
          <div>
            <img
              src="/img/Lucho-Dev.png"
              alt="Desarrollo web rápido"
              width={600}
              height={400}
              className="w-full rounded-2xl shadow-lg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
