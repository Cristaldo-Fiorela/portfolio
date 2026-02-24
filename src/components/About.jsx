import { Icon } from '@iconify/react';

const About = () => {
  return (
    <section className='my-10 md:w-2/3 self-center flex flex-col items-center gap-3'>
      <div className='font-family-heading flex gap-2 text-2xl items-center justify-center bg-pink/20 w-fit px-3 py-1'>
      <h2 className='text-pink'>
        Sobre Mi</h2>
        <Icon icon="akar-icons:sparkles" width="3rem" height="3rem" className='text-pink' />
      </div>

      <div className='bg-neutral-800/60 p-6 rounded-2xl border-2 border-neutral-700 '>
        <div className='flex flex-col gap-3'>
          <p>Tengo una mentalidad <span className='text-yellow'>autodidacta</span> y mucha atención al detalle. Me gusta entender los sistemas en profundidad y encontrar soluciones organizadas a problemas complejos.</p>
          <p>Trabajé como <span className='text-purple'>Mentora en Argentina Programa 4.0</span> y como <span className='text-purple'>Desarrolladora Frontend Junior en Ingenia</span>, donde crecí tanto técnicamente como en trabajo en equipo y comunicación.</p>
          <p>Hoy curso la <span className='text-pink'>Tecnicatura Superior en Programación e Innovación Tecnológica</span>, formación que me da una visión integral del software y me permite encarar proyectos <span className='text-pink'>fullstack</span>. También me manejo con <span className='text-pink'>inglés C1</span>, lo que me abre puertas tanto en documentación como en equipos internacionales.</p>
        </div>
      </div>
    </section>
  )
}

export default About