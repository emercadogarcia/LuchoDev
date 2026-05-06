export const Contact = () => {
  const curriculumUrl = 'https://emercadogarcia.github.io/'

  return (
    <section id="contacto" className="max-w-7xl mx-auto px-6 md:px-8 py-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] items-start">
        <div>
          <h2 className="text-5xl font-bold text-slate-900 mb-8">Inicia tu proyecto hoy</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">Cuéntame sobre tu visión técnica y te enviaré una propuesta detallada en menos de 24 horas.</p>
          
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600 text-3xl">mail</span>
              </div>
              <div>
                <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                <p className="text-slate-900 font-bold text-lg">emercadogarcia@outlook.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600 text-3xl">chat</span>
              </div>
              <div>
                <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="text-slate-900 font-bold text-lg">+591 72698986</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600 text-3xl">person</span>
              </div>
              <div>
                <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-1">Sobre mí</p>
                <a 
                  href={curriculumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 font-bold text-lg hover:text-blue-600 transition-colors"
                >
                  Ver mi curriculum
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-12 rounded-2xl border border-slate-200 shadow-xl shadow-black/5">
          <form 
            action="https://formspree.io/f/mjglgkyd"
            method="POST"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-900">Nombre</label>
                <input 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-slate-900" 
                  placeholder="Ej: Juan Pérez" 
                  type="text"
                  name="nombre"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-900">Email</label>
                <input 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-slate-900" 
                  placeholder="juan@empresa.com" 
                  type="email"
                  name="email"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider text-slate-900">Tipo de Proyecto</label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-blue-600 transition-all text-slate-900 appearance-none"
                name="tipo_proyecto"
                required
                defaultValue=""
              >
                <option value="" disabled>Selecciona una opción</option>
                <option>Website Institucional</option>
                <option>Aplicación Web</option>
                <option>Landing Page</option>
                <option>E-commerce</option>
                <option>Control de Inventarios y Venta</option>
                <option>Sitio de Venta lots - inmobiliaria</option>
              </select>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider text-slate-900">Mensaje</label>
              <textarea 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-slate-900" 
                placeholder="Cuéntame brevemente tu idea..." 
                rows={5}
                name="mensaje"
                required
              />
            </div>
            
            <input type="hidden" name="_replyto" value="{{email}}" />
            <input type="hidden" name="_subject" value="Nuevo lead desde LuchoDev.com" />
            <input type="hidden" name="_next" value="/gracias" />
            
            <button 
              className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/20 text-lg" 
              type="submit"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
