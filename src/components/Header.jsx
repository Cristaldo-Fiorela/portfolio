import { useState } from 'react';
import { cvSpanish, logoWhite } from '../db/links.js';
import FullScreenMenu from './FullScreenMenu.jsx';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-stone-950/95 py-1.5 flex justify-between md:grid md:grid-cols-2 sticky top-0 z-1 border-b border-stone-800 backdrop-blur">
      <a href="#" className='col-span-1'>
        <img src={logoWhite} alt="hola" className='h-8 md:h-12 ml-5' />
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
        <a href="#about">Sobre Mi</a>
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