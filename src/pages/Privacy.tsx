import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

export const Privacy = () => {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <p className="mb-4">
              En Lucho Dev, nos comprometemos a proteger tu privacidad. Esta política
              describe cómo recopilamos, usamos y protegemos tu información personal.
            </p>
            <h2 className="text-xl font-semibold mb-4">Información que recopilamos</h2>
            <p className="mb-4">
              Recopilamos información que nos proporcionas voluntariamente a través de
              nuestro formulario de contacto, incluyendo tu nombre, correo electrónico y
              detalles del proyecto.
            </p>
            <h2 className="text-xl font-semibold mb-4">Uso de la información</h2>
            <p className="mb-4">
              Utilizamos tu información únicamente para responder a tus consultas,
              proporcionarte cotizaciones y comunicarnos sobre servicios que puedas
              solicitar. No compartimos tu información con terceros sin tu consentimiento.
            </p>
            <h2 className="text-xl font-semibold mb-4">Seguridad</h2>
            <p className="mb-4">
              Implementamos medidas de seguridad para proteger tu información personal
              contra acceso no autorizado, alteración o destrucción.
            </p>
            <h2 className="text-xl font-semibold mb-4">Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad, contáctanos en
              emercadogarcia@outlook.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
