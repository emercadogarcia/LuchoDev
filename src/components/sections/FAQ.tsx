export const FAQ = () => {
  const faqs = [
    {
      question: '¿Cuánto cuesta mantener mi web?',
      answer: 'El mantenimiento básico (actualizaciones de seguridad, backups) tiene un costo de 30 USD/mes. Si prefieres gestionarlo tú, te doy acceso y la documentación.',
    },
    {
      question: '¿Puedo editar el contenido yo mismo?',
      answer: 'Sí, entrego el sitio con un panel sencillo o instrucciones para que edites textos e imágenes fácilmente.',
    },
    {
      question: '¿Qué pasa si necesito cambios rápidos?',
      answer: 'Los cambios pequeños se hacen en menos de 24 horas. Tenemos un servicio de soporte express.',
    },
    {
      question: '¿Me ayudas con el dominio y hosting?',
      answer: 'Por supuesto. Te recomiendo las mejores opciones y te ayudo a configurarlo sin costo adicional.',
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200"
            >
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-4 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
