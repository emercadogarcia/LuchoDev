export const Portfolio = () => {
  const projects = [
    {
      image: 'https://placehold.co/600x400/1e293b/white?text=Proyecto+Web',
      title: 'EcoStore',
      description: 'Ecommerce sustentable con carrito y pagos.',
      link: '#',
    },
    {
      image: 'https://placehold.co/600x400/1e293b/white?text=App+Gestor',
      title: 'Gestor de tareas',
      description: 'Web app con panel de control y reportes.',
      link: '#',
    },
    {
      image: 'https://placehold.co/600x400/1e293b/white?text=Landing+Sales',
      title: 'Landing SaaS',
      description: 'Alta conversión, formularios y analytics.',
      link: '#',
    },
  ]

  return (
    <section id="portafolio" className="py-20">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Últimos proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-primary font-medium no-underline hover:underline"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
