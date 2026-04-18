import { Icon } from "@iconify/react"
import { cvSpanish } from "../db/links"

const FullScreenMenu = ({ setMenuOpen }) => {
  const handleNavClick = (href) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <div className="fixed inset-0 bg-stone-950 z-50 flex flex-col items-center justify-center md:hidden min-h-screen">

      <button
        className="absolute top-6 right-6 text-neutral-100 cursor-pointer"
        onClick={() => setMenuOpen(false)}
      >
        <Icon icon="mdi:close" width="3rem" height="3rem" id='close' />
      </button>

      {/* Links */}
      <nav className="flex flex-col items-center gap-10 text-2xl font-semibold text-neutral-100">
        <a href="#experience" onClick={() => handleNavClick('#experience')}>Experiencia</a>
        <a href="#skills" onClick={() => handleNavClick('#skills')}>Habilidades</a>
        <a href="#projects" onClick={() => handleNavClick('#projects')}>Proyectos</a>
        <a href="#contact" onClick={() => handleNavClick('#contact')}>Contacto</a>

      </nav>
    </div>
  )
}

export default FullScreenMenu