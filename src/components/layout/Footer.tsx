import { useEffect, useState } from 'react'

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center">
      <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {currentYear} Lucho Dev. Todos los derechos reservados.</p>
        <nav>
          <a
            href="/privacidad"
            className="text-slate-400 no-underline mx-2 hover:text-white transition-colors"
          >
            Política de privacidad
          </a>
        </nav>
      </div>
    </footer>
  )
}
