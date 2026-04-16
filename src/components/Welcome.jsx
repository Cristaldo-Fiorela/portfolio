import { Icon } from '@iconify/react';
import portrait from '/src/assets/image/portrait.png';
import { me } from '../db/db.js';

const Welcome = () => {
  return (
    <div className='md:grid md:grid-cols-4 flex flex-col gap-5 items-center px-4'>
      <section id='welcome' className='flex flex-col justify-center items-center md:items-start gap-1.5 md:gap-4 md:col-span-2'>
        <small className='flex gap-1.5 items-center uppercase text-yellow tracking-wider'>
          <span class="relative flex size-1.5">
            <span class={`absolute inline-flex h-full w-full animate-ping rounded-full ${me.available ? "bg-emerald-400" : "bg-red-300"} opacity-75`}></span>
            <span class={`relative inline-flex size-1.5 rounded-full ${me.available ? "bg-emerald-500" : "bg-red-400"}`}></span>
          </span>
          {me.available ? "Disponible" : "No disponible"} - {me.ubication}
        </small>

        <h1 className='font-family-heading text-2xl md:text-6xl'>Fiorela Cristaldo</h1>
        <div className='subtitle'>
          <p>{me.about}</p>
          <Icon icon='mdi:sparkles' className='text-purple' />
        </div>
      </section>
      {/* 
      <div className="p-0.5 rounded-4xl bg-linear-to-bl from-purple via-pink to-yellow ">
        <img src={portrait} className="rounded-4xl block"/>
      </div> */}

      <img src={portrait} alt="retrato" id='portrait' className='rounded-4xl md:col-span-2 md:justify-self-center shadow-xl/25 shadow-yellow-500/50 ring-2 ring-dashed ring-yellow ring-offset-8 ring-offset-neutral-900 w-60' />
    </div>

  )
}

export default Welcome