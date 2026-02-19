import { Icon } from '@iconify/react';

import portrait from '../assets/image/portrait.jpeg';

const About = () => {
  return (
    <section id='about'>
      <h2 className='section-title'>
        Sobre Mi {""}
        <Icon icon="akar-icons:sparkles" width="3rem" height="3rem" />
      </h2>
      <div>
        <img src={portrait} alt="retrato" id='portrait'/>
        <div className='about-description'>
          <p>Soy una persona con un equilibrio entre <span className='yellow-hl'>creatividad</span> y <span className='yellow-hl'>lógica</span>. Descubrí mi pasión por el desarrollo web en 2020, donde encontré la combinación perfecta para utilizar tanto mi lado creativo en el diseño como mi habilidad lógica al codear.</p>
          <p>Mi tiempo como <span className='purple-hl'>Mentora FrontEnd</span> profundizó mis conocimientos técnicos, puso en práctica una comunicacion clara para lograr objetivos comunes y la resolución de problemas.</p>
          <p>Actualmente estoy cursando una <span className='pink-hl'>Tecnicatura Superior en Programación e Innovación Tecnológica</span>.</p>
        </div>
      </div>
    </section>
  )
}

export default About