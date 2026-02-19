import { useState } from 'react';
import { Icon } from '@iconify/react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Footer = () => {

  const [copy, setCopy] = useState(false);

  const copied = () => {
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 1000);
  }

  return (
    <footer>
      <section id="contact-container">
        <div className='footer-action-box'>
          <h2>Te gusta mi trabajo?</h2>
          <h3>Conectemos!</h3>
        </div>
        <div id='mail-box'>
          <a href="mailto:cristaldofiorela@gmail.com">cristaldofiorela@gmail.com</a>
          <CopyToClipboard 
            text={'cristaldofiorela@gmail.com'}
            onCopy={copied}
          >
            <button title='copiar'>
              {copy ? 
                <Icon className='icon-copy' icon="tabler:copy-check" width="2rem" height="2rem" />              
                :
                <Icon className='icon-copy' icon="lucide:copy-plus" width="2rem" height="2rem" />
              }
            </button>
          </CopyToClipboard>
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