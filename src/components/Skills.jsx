import { Icon } from '@iconify/react';
import SKILLS from '../db/skills.json';
import Skill from './Skill';
import SectionTitle from './SectionTitle';

const Skills = () => {

  return (
    <div className='min-h-screen'>
      <section id="skills" className='my-10 flex flex-col gap-10 scroll-mt-15 max-w-5xl px-4 mx-auto items-center w-full'>
        <SectionTitle title="Habilidades" />

        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:w-4/5">
          <section className='bg-pink/20 text-pink rounded-2xl flex flex-col p-5 border-2 gap-2 md:col-span-1'>
            <h3 className="font-family-heading text-2xl">Frontend</h3>
            <div className="flex flex-wrap gap-2 md:">
              {SKILLS?.front?.map(({ id, name, icon }) => (
                <Skill
                  key={id}
                  name={name}
                  icon={icon}
                />
              ))}
            </div>
          </section>

          <section className='bg-yellow/20 text-yellow rounded-2xl flex flex-col p-5 border-2 gap-2 md:col-span-1'>
            <h3 className="font-family-heading text-2xl">Backend</h3>
            <div className='flex flex-wrap gap-2'>
              {SKILLS?.back?.map(({ id, name, icon }) => (
                <Skill
                  key={id}
                  name={name}
                  icon={icon}
                />
              ))}
            </div>
          </section>

          <section className='bg-purple/20 text-purple rounded-2xl flex flex-col p-5 border-2 gap-2 md:col-span-2'>
            <h3 className="font-family-heading text-2xl">Herramientas</h3>
            <div className='flex flex-wrap gap-2'>
              {SKILLS?.tools?.map(({ id, name, icon }) => (
                <Skill
                  key={id}
                  name={name}
                  icon={icon}
                />
              ))}
            </div>
          </section>

        </div>
      </section>
    </div>
  )
}

export default Skills