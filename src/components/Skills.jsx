import { Icon } from '@iconify/react';
import SKILLS from '../db/skills.json';
import Skill from './Skill';
import SectionTitle from './SectionTitle';

const Skills = () => {

  return (
    <div className='min-h-fit bg-stone'>
      <section id="skills" className='my-10 flex flex-col gap-10 scroll-mt-15 max-w-5xl px-4 mx-auto items-center w-full'>
        <SectionTitle title="Habilidades" />

        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:w-4/5">
          <section className='bg-neutral-800 text-pink rounded flex flex-col p-5 border gap-2 md:col-span-1'>
            <h3 className=" text-2xl font-bold">Frontend</h3>
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

          <section className='bg-neutral-800 text-yellow rounded flex flex-col p-5 border gap-2 md:col-span-1'>
            <h3 className=" text-2xl font-bold">Backend</h3>
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

          <section className='bg-neutral-800 text-purple rounded flex flex-col p-5 border gap-2 md:col-span-2'>
            <h3 className="text-2xl font-bold">Herramientas</h3>
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