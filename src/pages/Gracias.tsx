import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Gracias = () => {
  const [countdown, setCountdown] = useState(12)
  const [userInteracted, setUserInteracted] = useState(false)

  useEffect(() => {
    document.title = 'Gracias por contactarme - LuchoDev'
  }, [])

  useEffect(() => {
    if (userInteracted || countdown <= 0) return

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          window.location.href = '/'
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [userInteracted, countdown])

  const handleUserInteraction = () => {
    if (!userInteracted) {
      setUserInteracted(true)
    }
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center px-6"
      onClick={handleUserInteraction}
      onKeyDown={handleUserInteraction}
    >
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ¡Mensaje recibido!
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Gracias por contactarme. Te responderé con una propuesta detallada en menos de 24 horas.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Qué pasa ahora?</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="material-symbols-outlined text-blue-600 text-sm">mail</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Revisión de tu proyecto</h3>
                <p className="text-slate-600">Analizaré los detalles de tu solicitud y preparé una solución personalizada.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="material-symbols-outlined text-blue-600 text-sm">schedule</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Respuesta en 24 horas</h3>
                <p className="text-slate-600">Recibirás mi respuesta con la propuesta y presupuesto detallados.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="material-symbols-outlined text-blue-600 text-sm">chat</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Coordinación</h3>
                <p className="text-slate-600">Podemos agendar una llamada para discutir los detalles y empezar a trabajar.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
          >
            <span className="material-symbols-outlined">home</span>
            Volver al inicio
          </Link>
          <a 
            href="mailto:emercadogarcia@outlook.com"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold py-3 px-6 rounded-xl hover:bg-slate-50 transition-colors border border-slate-200"
          >
            <span className="material-symbols-outlined">mail</span>
            Contactar directamente
          </a>
        </div>

        <div className="mt-8 text-sm text-slate-500">
          <p>Si no recibes respuesta en 24 horas, revisa tu carpeta de spam o contáctame directamente.</p>
        </div>

        {/* Auto-redirect countdown */}
        <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
          <div className="flex items-center justify-center gap-3">
            <span className="material-symbols-outlined text-blue-600 animate-spin">autorenew</span>
            <span className="text-blue-900 font-medium">
              Redirigiendo al inicio en <span className="font-bold text-blue-600">{countdown}</span> segundos...
            </span>
          </div>
          <Link 
            to="/"
            className="mt-3 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium underline"
          >
            Ir ahora →
          </Link>
        </div>
      </div>
    </div>
  )
}
