import { Icon } from '@iconify/react';
import portrait from '../assets/image/portrait.jpeg';

const Welcome = () => {
  return (
    <div className='md:grid md:grid-cols-4 flex flex-col gap-5 items-center px-4'>
      <section id='welcome' className='flex flex-col justify-center items-center md:items-start gap-1.5 md:gap-4 md:col-span-2'>
      <div className='bg-yellow/20 text-yellow border-2 rounded-4xl animate-bounce'>
        <h2 className='flex items-center gap-2 p-1 px-1.5 md:text-xl'>
          Hola
            <Icon icon="mdi:hand-wave" width="1rem" height="1rem" />
          soy
        </h2>
      </div>

      <h1 className='font-family-heading text-2xl md:text-6xl'>Fiorela Cristaldo</h1>
      <div className='subtitle'>
        <h2 className='flex flex-col items-center md:flex-row md:items-start gap-2 text-xl md:text-4xl'>
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
{/* 
      <div className="p-0.5 rounded-4xl bg-linear-to-bl from-purple via-pink to-yellow ">
        <img src={portrait} className="rounded-4xl block"/>
      </div> */}

      <img src={portrait} alt="retrato" id='portrait' className='rounded-4xl md:col-span-2 md:justify-self-center shadow-xl/25 shadow-yellow-500/50 ring-2 ring-dashed ring-yellow ring-offset-8 ring-offset-neutral-900 w-60'/>
    </div>
    
  )
}

export default Welcome