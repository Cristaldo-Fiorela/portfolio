import { useState } from 'react';
import { cvSpanish, logoWhite } from '../db/links.js';
import FullScreenMenu from './FullScreenMenu.jsx';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-800 text-neutral-100 my-3 border-2 border-neutral-700 p-2 rounded-4xl flex justify-between md:grid md:grid-cols-5">
      <img src={logoWhite} alt="hola"  className='h-8 md:h-12 ml-5 col-span-1'/>

      <button 
        className="md:hidden cursor-pointer z-50 mr-5"
        onClick={() => setMenuOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-neutral-100 mb-1.5"/>
        <span className="block w-6 h-0.5 bg-neutral-100 mb-1.5"/>
        <span className="block w-6 h-0.5 bg-neutral-100"/>
      </button>

      <nav className='hidden md:flex col-span-4 justify-around items-center [&_a:not(.btn-cv)]:hover:text-pink'>
        <a href="#about">Sobre Mi</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href={cvSpanish} target='_blank' rel='noreferrer' className="btn-cv bg-linear-to-bl from-purple via-pink to-yellow px-6 py-2 rounded-4xl text-neutral-800 font-extrabold hover:opacity-80 border-2 border-yellow transition hover:scale-105">CV</a>      
      </nav>

      {menuOpen && (
        <FullScreenMenu setMenuOpen={setMenuOpen} />
      )}
    </header>
  )
}

export default Header