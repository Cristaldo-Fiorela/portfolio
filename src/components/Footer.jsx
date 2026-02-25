import { Icon } from '@iconify/react';

const Footer = () => {

  const handleCopy =  () => {
    navigator.clipboard.writeText('cristaldofiorela@gmail.com');
  }

  return (
    <footer>
      <section className='flex flex-col gap-5 items-center my-10 cursor-pointer' onClick={handleCopy}title='click para copiar'>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-family-heading text-2xl md:text-5xl">Te gusta mi trabajo?</h2>
          <h3 className="text-xl md:text-3xl text-neutral-300">Conectemos!</h3>
        </div>

        <div className='flex gap-3 items-center w-fit rounded-full px-5 py-2 bg-neutral-800/70 border-pink/60 hover:border-pink border-4 border-dashed font-extrabold text-neutral-300 hover:text-neutral-100 hover:bg-neutral-800'>
          <span>cristaldofiorela@gmail.com</span>
          <button title='copiar correo' className='cursor-pointer p-2 transition bg-pink rounded-full'>
            <Icon icon="streamline-flex:copy-2-solid" className='text-neutral-800'/>
          </button>
        </div>
      </section>

      <div id="social-container">
        <a href="https://www.linkedin.com/in/fiorela-cristaldo/" target="_blank" className='yellow-hl' rel='noreferrer'>
          <Icon className='icon-social' icon="ri:linkedin-fill" width="2rem" height="2rem" color='#1A1918' />
        </a>
        <a href="https://github.com/Cristaldo-Fiorela" target="_blank" className='pink-hl' rel='noreferrer'>
          <Icon className='icon-social' icon="bi:github" width="2rem" height="2rem" color='#1A1918' />
        </a>
      </div>
    </footer>
  )
}

export default Footer