import { Icon } from "@iconify/react"
import { cvSpanish } from "../db/links"

const FullScreenMenu = ( { setMenuOpen }) => {
  const handleNavClick = (href) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }
  
  return (
      <div className="fixed inset-0 bg-neutral-900 z-50 flex flex-col items-center justify-center md:hidden">
        
        <button 
          className="absolute top-6 right-6 text-neutral-100 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          <Icon icon="mdi:close" width="3rem" height="3rem" id='close' />
        </button>

        {/* Links */}
        <nav className="flex flex-col items-center gap-10 text-2xl font-semibold text-neutral-100">
          <a href="#about"   onClick={() => handleNavClick('#about')}>Sobre Mi</a>
          <a href="#skills"  onClick={() => handleNavClick('#skills')}>Habilidades</a>
          <a href="#projects" onClick={() => handleNavClick('#projects')}>Proyectos</a>
          <a 
            href={cvSpanish} target='_blank' rel='noreferrer' 
            onClick={() => setMenuOpen(false)}
            className="btn-cv bg-linear-to-bl from-purple via-pink to-yellow px-8 py-3 rounded-4xl text-neutral-800 font-extrabold hover:opacity-80 border-2 border-yellow transition hover:scale-105 text-xl mt-4"
          >
            CV
          </a>
        </nav>
      </div>
  )
}

export default FullScreenMenu