import { Icon } from '@iconify/react';


const Welcome = () => {
  return (
    <section id='welcome' className='flex flex-col justify-center items-center gap-1.5 md:gap-4 '>
      <div className='bg-yellow/20 text-yellow border-2 rounded-4xl animate-bounce'>
        <h2 className='flex items-center gap-2 p-1 px-1.5 md:text-xl'>
          Hola
            <Icon icon="mdi:hand-wave" width="1rem" height="1rem" />
          soy
        </h2>
      </div>

      <h1 className='font-family-heading text-2xl md:text-6xl'>Fiorela Cristaldo</h1>
      <div className='subtitle'>
        <h2 className='flex flex-col items-center gap-2 text-xl md:text-4xl'>
          desarrolladora
          <span className='text-pink border-2 font-extrabold rounded-4xl px-2 py-0.5 -rotate-3'>fullstack</span>
        </h2>
        <h3 className='flex gap-1 mt-2 md:text-2xl'>
          con pasión por el
          <span className='underline decoration-wavy decoration-purple'>
            frontend 
          </span>
          <Icon  icon='mdi:sparkles' className='text-purple'/>        
        </h3>
      </div>
    </section>
  )
}

export default Welcome