import { Icon } from '@iconify/react';


const Welcome = () => {
  return (
    <div id='welcome'>
      <h2>Hola {""}
      <Icon icon="mdi:hand-wave" width="3rem" height="3rem" id='welcome-hand-icon' />
      {""} soy
      </h2>
      <h1>Fiorela Cristaldo</h1>
      <div className='subtitle'>
        <h2>
          desarrolladora {""}
          <span className='subtitle-pill'>fullstack</span>
        </h2>
        <h3>
          con <span className='underline'>pasión</span> por el {""}
          <span className='subtitle-sparkle'>
            <Icon icon="lucide:sparkle" width="2rem" height="2rem" className='sparkle'/>
            {""} frontend {""}
            <Icon icon="lucide:sparkle" width="2rem" height="2rem" className='sparkle'/>
          </span>        
        </h3>
      </div>
    </div>
  )
}

export default Welcome