import { Icon } from '@iconify/react';
import SKILLS from '../db/skills.json';
import Skill from './Skill';

const Skills = () => {

  return (
    <section id="skills">
      <h2 className="section-title">
        Habilidades {""}
      <Icon icon="akar-icons:sparkles" width="3rem" height="3rem" />
      </h2>
      <div className="skill-container">
        <section className='bg-pink/20 text-pink rounded-2xl flex flex-col p-5 border-2 gap-2'>
          <h3 className="font-family-heading text-2xl">Desarrollo Frontend</h3>
          <div className="flex flex-wrap gap-2">
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
          <section className='bg-yellow/20 text-yellow rounded-2xl flex flex-col p-5 border-2 gap-2'>
            <h3 className="font-family-heading text-2xl">Desarrollo Backend</h3>
            <div className='flex flex-wrap gap-2'>
              {SKILLS?.back?.map(({id, name, icon}) => (
                  <Skill 
                  key={id}
                  name={name}
                  icon={icon}
                />
              ))}
            </div>
          </section>

          <section className='bg-purple/20 text-purple rounded-2xl flex flex-col p-5 border-2 gap-2'>
            <h3 className="font-family-heading text-2xl">Dev Tools</h3>
            <div className='flex flex-wrap gap-2'>
              {SKILLS?.tools?.map(({id, name, icon}) => (
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