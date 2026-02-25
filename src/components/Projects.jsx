import { Icon } from '@iconify/react';

import DB from '../db/db.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className='flex flex-col gap-5'>
      <div className='font-family-heading flex gap-2 text-2xl items-center justify-center'>
        <h2 className="">Proyectos</h2>
        <Icon icon="akar-icons:sparkles" width="3rem" height="3rem" />
      </div>
      <div className='flex flex-col gap-5'>
        {DB.map( project => (
          <ProjectCard 
            id={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            tags={project.tech}
            github={project.github}

          />
        ))
        }
      </div>
    </section>
  )
}

export default Projects