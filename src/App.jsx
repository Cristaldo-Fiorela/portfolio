import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

import { useEffect, useRef, useState } from 'react';

function App() {
  const [whiteLogo, setWhiteLogo] = useState(false);
  const navbarRef = useRef(null);
  const mainContainerRef = useRef(null);

  const spaceBtwElements = () => {
    // Obteniendo del DOM los elemenos
    const header = document.querySelector('header');
    const navbar = document.querySelector('header nav');
    const mainContainer = document.querySelector('#main-container');

    // Obteniendo su posicion en pantalla
    const positionHeader = header.getBoundingClientRect();
    const positionMainContainer = mainContainer.getBoundingClientRect();

    // Espacio disponible entre ellos al scrollear
    const spaceBtw = positionMainContainer.top - positionHeader.bottom;

    // agregando cambio de color con clases
    if(spaceBtw <= 1) {
      navbar.classList.add('active');
      setWhiteLogo(true);
    } else {
      navbar.classList.remove('active');
      setWhiteLogo(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', spaceBtwElements);
    return () => {
      window.removeEventListener('scroll', spaceBtwElements);
    };
  }, []);

  return (
    <div className='bg-amber-700'>
      <Header 
        navbarRef={navbarRef}
        whiteLogo={whiteLogo}
      />
      <Welcome />
      <main id='main-container' ref={mainContainerRef}>
        <About />
        <Skills />
        <Projects/>
      </main>
      <Footer />
    </div>
  )
}

export default App 