
export const Services = () => {
  const services = [
    {
      icon: 'language',
      title: 'Websites',
      description: 'Sitios institucionales optimizados para transmitir autoridad y profesionalismo.',
      price: 'Consultar presupuesto',
    },
    {
      icon: 'dynamic_form',
      title: 'Web Apps',
      description: 'Aplicaciones interactivas con manejo de estados complejo y reactividad total.',
      price: 'Consultar presupuesto',
    },
    {
      icon: 'rocket_launch',
      title: 'Landing Pages',
      description: 'Embudo de ventas técnico enfocado 100% en captación de leads y conversiones.',
      price: 'Consultar presupuesto',
    },
    {
      icon: 'shopping_basket',
      title: 'Control de Inventarios y Venta',
      description: 'Sistema completo de gestión de inventario con plataforma de ventas integrada.',
      price: 'Consultar presupuesto',
    },
    {
      icon: 'storefront',
      title: 'E-commerce',
      description: 'Tienda online escalable con gestión de productos, pagos y envíos.',
      price: 'Consultar presupuesto',
    },
    {
      icon: 'apartment',
      title: 'Sitio de Venta lots - inmobiliaria',
      description: 'Plataforma especializada para la venta y gestión de propiedades inmobiliarias.',
      price: 'Consultar presupuesto',
    },
  ]

  return (
    <section id="servicios" className="bg-slate-50 py-[120px] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-20 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Servicios Especializados</h2>
          <p className="text-slate-600 max-w-2xl text-lg">Soluciones arquitectónicas diseñadas para la escalabilidad y la conversión inmediata.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                <span className="material-symbols-outlined text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-10 leading-relaxed">{service.description}</p>
              <div className="flex justify-between items-center pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/59172698986?text=Quiero consultar el presupuesto para ${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
                >
                  {service.price}
                </a>
                <span className="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
