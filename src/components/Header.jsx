import { cvSpanish, logo, logoWhite } from '../db/links.js';

const Header = ({  navbarRef, whiteLogo }) => {
  return (
    <header ref={navbarRef} className="bg-neutral-800 text-neutral-100 my-3 border-2 border-neutral-700 p-2 rounded-4xl grid grid-cols-5">
      <img src={logoWhite} alt="hola"  className='h-12 ml-5 col-span-1'/>
      <nav className='col-span-4 flex justify-around items-center [&_a:not(.btn-cv)]:hover:text-pink'>
        <a href="#about">Sobre Mi</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href={cvSpanish} target='_blank' rel='noreferrer' className="btn-cv bg-linear-to-bl from-purple via-pink to-yellow px-6 py-2 rounded-4xl text-neutral-800 font-extrabold hover:opacity-80 border-2 border-yellow transition hover:scale-105">CV</a>      
      </nav>
    </header>
  )
}

export default Header