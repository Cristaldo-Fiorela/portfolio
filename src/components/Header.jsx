import { cvSpanish, logo, logoWhite } from '../db/links.js';

const Header = ({  navbarRef, whiteLogo }) => {
  return (
    <header ref={navbarRef}>
      <div className="logo">
        {whiteLogo ?
          <img src={logoWhite} alt="hola" height={55} />
          :
          <img src={logo} alt="hola" height={55} />
        }
      </div>
      <nav>
        <a href="#about">Sobre Mi</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href={cvSpanish} id='btn-cv' target='_blank' rel='noreferrer'>CV</a>
      </nav>
    </header>
  )
}

export default Header