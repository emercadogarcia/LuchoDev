export const WhyMe = () => {
  const reasons = [
  {
    emoji: '🚀',
    title: 'Velocidad de entrega',
    description: 'Tu sitio listo en 2-5 días. Sin demoras, sin excusas.',
  },
  {
    emoji: '📈',
    title: 'SEO integrado',
    description: 'Aparecé en los primeros resultados de Google desde el día 1.',
  },
  {
    emoji: '🛠️',
    title: 'Arquitectura Escalable',
    description: 'Sistemas robustos con Node.js, NestJS y SQL, diseñados para crecer sin límites técnicos.',
  },
]

  return (
    <section id="porque" className="py-20">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirme?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl text-center w-72 shadow-sm"
            >
              <span className="text-5xl block mb-4">{reason.emoji}</span>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
