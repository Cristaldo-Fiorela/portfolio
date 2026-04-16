import { useState } from 'react';
import FullScreenMenu from './FullScreenMenu.jsx';
import { Icon } from '@iconify/react';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-stone-950/95 py-1.5 flex justify-between md:grid md:grid-cols-2 sticky top-0 z-1 border-b border-stone-800 backdrop-blur">
      <a href="#" className='col-span-1 font-family-heading flex items-center gap-1 text-xl md:text-2xl ml-5'>
        FC
        <Icon icon="pixelarticons:sparkle" width="24" height="24" />
      </a>

      {/* BOTON MOBILE */}
      <button
        className="md:hidden cursor-pointer z-50 mr-5"
        onClick={() => setMenuOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-neutral-100 mb-1.5" />
        <span className="block w-6 h-0.5 bg-neutral-100 mb-1.5" />
        <span className="block w-6 h-0.5 bg-neutral-100" />
      </button>

      <nav className='hidden md:flex col-span-1 justify-around items-center [&_a:not(.btn-cv)]:hover:text-pink'>
        <a href="#experience">Experiencia</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>

      {menuOpen && (
        <FullScreenMenu setMenuOpen={setMenuOpen} />
      )}
    </header>
  )
}

export default Header