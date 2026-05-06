import { useMobileMenu } from '../../hooks/useMobileMenu'

export const Header = () => {
  const { isOpen, toggle, close } = useMobileMenu()

  const navItems = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Por qué yo', href: '#porque' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      close()
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Lucho<span className="text-primary">Dev</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-600 font-medium no-underline hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggle}
          aria-label="Menú"
          className="md:hidden bg-none border-none text-3xl cursor-pointer"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-slate-100">
          <ul className="flex flex-col p-4 gap-4 list-none">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-600 font-medium no-underline block py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
