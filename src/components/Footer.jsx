import { Icon } from '@iconify/react';

const Footer = () => {

  return (
    <footer className='mt-10 scroll-mt-15 bg-stone-950/90 min-h-fit py-10 border-y border-stone-800' id='contact'>
      <section className='flex flex-col gap-8 scroll-mt-15 max-w-5xl px-4 mx-auto'>
        <div className="flex flex-col justify-center gap-3">
          <h2 className="font-family-heading text-2xl md:text-5xl text-neutral-200">Te gusta mi trabajo?</h2>
          <h3 className="text-xl md:text-3xl flex gap-2">
            Conectemos!
            <Icon icon="pixelarticons:sparkles" width="35" height="35" />
          </h3>
        </div>

        <div className='flex gap-4 flex-wrap'>
          <button className='border px-3 py-2 rounded border-pink bg-pink/85 hover:bg-pink font-bold text-neutral-950 cursor-pointer'>
            <a
              href="https://mail.google.com/mail/?view=cm&to=cristaldofiorela@gmail.com&su=Hola%20Fiorela%20—%20Vi%20tu%20portfolio&body=Hola%20Fiorela%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50 transition-colors duration-300"
              title='correo'
            >
              Enviar un correo ↗
            </a>
          </button>


          <button className='border px-3 py-2 rounded border-neutral-700 hover:border-pink hover:bg-pink/10 font-bold cursor-pointer hover:text-white flex gap-2 items-center'>
            <Icon className='icon-social' icon="ri:linkedin-fill" width="1rem" height="1rem" />
            <a title='linkedin' href="https://www.linkedin.com/in/fiorela-cristaldo/" target="_blank" rel='noreferrer'>
              Linkedin ↗
            </a>
          </button>

          <button className='border px-3 py-2 rounded border-neutral-700 hover:border-pink hover:bg-pink/10 font-bold cursor-pointer hover:text-white flex gap-2 items-center'>
            <Icon className='icon-social' icon="bi:github" width="1rem" height="1rem" />
            <a title='github' href="https://github.com/Cristaldo-Fiorela" target="_blank" rel='noreferrer'>
              Github ↗
            </a>
          </button>
        </div>
      </section>
    </footer>
  )
}

export default Footer