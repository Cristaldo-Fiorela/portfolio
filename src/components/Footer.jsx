import { Icon } from '@iconify/react';
import Button from './Button';

const Footer = () => {

  return (
    <footer className='mt-10 scroll-mt-15 bg-stone-950/90 min-h-fit py-10 border-y border-stone-800' id='contact'>
      <section className='flex flex-col gap-8 scroll-mt-15 max-w-5xl px-4 mx-auto'>
        <div className="flex flex-col justify-center gap-3">
          <h2 className="font-family-heading text-4xl md:text-6xl text-neutral-200">Te gusta mi trabajo?</h2>
          <h3 className="text-2xl md:text-4xl flex gap-2 font-bold bg-linear-to-r from-purple via-pink to-yellow bg-clip-text text-transparent">
            Conectemos!
            <Icon icon="pixelarticons:sparkles" />
          </h3>
        </div>

        <div className='flex gap-4 flex-wrap'>
          <Button fill={true}>
            <a
              href="https://mail.google.com/mail/?view=cm&to=cristaldofiorela@gmail.com&su=Hola%20Fiorela%20—%20Vi%20tu%20portfolio&body=Hola%20Fiorela%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              title='correo'
            >
              Enviar un correo ↗
            </a>
          </Button>


          <Button>
            <Icon className='icon-social' icon="ri:linkedin-fill" width="1rem" height="1rem" />
            <a title='linkedin' href="https://www.linkedin.com/in/fiorela-cristaldo/" target="_blank" rel='noreferrer'>
              Linkedin ↗
            </a>
          </Button>

          <Button>
            <Icon className='icon-social' icon="bi:github" width="1rem" height="1rem" />
            <a title='github' href="https://github.com/Cristaldo-Fiorela" target="_blank" rel='noreferrer'>
              Github ↗
            </a>
          </Button>
        </div>
      </section>
    </footer>
  )
}

export default Footer