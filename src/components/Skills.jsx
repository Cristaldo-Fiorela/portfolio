import { Icon } from '@iconify/react';
import SKILLS from '../db/skills.json';
import Skill from './Skill';

// TODO: REALIZAR UN COMPONENTE PARA LOS P QUE CONTIENEN LAS SKILLS.

const Skills = () => {

  console.log(SKILLS);
  return (
    <section id="skills">
      <h2 className="section-title">
        Habilidades {""}
      <Icon icon="akar-icons:sparkles" width="3rem" height="3rem" />
      </h2>
      <div className="skill-container">
        <section id="skill-front">
          <h3>Desarrollo Frontend</h3>
          <div className="skill-name-container">
            {SKILLS?.front?.map(({id, name, icon}) => (
                <Skill 
                key={id}
                name={name}
                icon={icon}
              />
            ))}
          </div>
        </section>

        <div className="skill-container-small">
          <section id="skill-back">
            <h3>Desarrollo Backend</h3>
            <div className='skill-name-container'>
              {SKILLS?.back?.map(({id, name, icon}) => (
                  <Skill 
                  key={id}
                  name={name}
                  icon={icon}
                />
              ))}
            </div>
          </section>

          <section id="skill-ver">
            <h3>Control de versiones</h3>
            <div className='skill-name-container'>
              {SKILLS?.version?.map(({id, name, icon}) => (
                  <Skill 
                  key={id}
                  name={name}
                  icon={icon}
                />
              ))}
            </div>
          </section>
        </div>

      </div>
    </section>
  )
}

export default Skills