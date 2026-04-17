import { me } from '../db/db.js';
import { cvSpanish } from '../db/links.js';

const Welcome = () => {
  return (
    <div className='min-h-screen flex justify-center px-4'>
      <section id='welcome' className='flex flex-col justify-center items-start gap-1.5 md:gap-10 md:w-2xl'>

        <small className='flex gap-1.5 items-center uppercase text-pink tracking-wider'>
          <span className="relative flex size-1.5 leading-loose tracking-tight">
            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${me.available ? "bg-emerald-400" : "bg-red-300"} opacity-90`}></span>
            <span className={`relative inline-flex size-1.5 rounded-full ${me.available ? "bg-emerald-500" : "bg-red-400"}`}></span>
          </span>
          {me.available ? "Disponible" : "No disponible"} - {me.ubication}
        </small>

        <div>
          <h1 className='font-family-heading text-2xl md:text-6xl flex flex-col flex-wrap tracking-tight text-neutral-100'>{me.name}</h1>
          <h2 className='text-2xl font-bold bg-linear-to-r from-purple via-pink to-yellow bg-clip-text text-transparent'>
            {me.job}
          </h2>
        </div>


        <p>{me.about.spanish}</p>
        <div className='flex gap-4 flex-wrap'>
          <button className='border px-3 py-2 rounded border-pink bg-pink/85 hover:bg-pink font-bold text-neutral-950 cursor-pointer'>
            <a
              href="https://mail.google.com/mail/?view=cm&to=cristaldofiorela@gmail.com&su=Hola%20Fiorela%20—%20Vi%20tu%20portfolio&body=Hola%20Fiorela%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50 transition-colors duration-300"
            >
              Contactar ↗
            </a>
          </button>
          <button className='border px-3 py-2 rounded border-neutral-700 hover:border-pink hover:bg-pink/10 font-bold cursor-pointer hover:text-white'>
            <a
              href={cvSpanish}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50 transition-colors duration-300"
            >
              Ver CV ↗
            </a>
          </button>
          <button className='border px-3 py-2 rounded border-neutral-700 hover:border-pink hover:bg-pink/10 font-bold cursor-pointer hover:text-white'>
            <a
              href="#projects"
              className="relative z-50 transition-colors duration-300"
            >
              Ver proyectos ↓
            </a>
          </button>
        </div>

      </section>
    </div>
  )
}

export default Welcome