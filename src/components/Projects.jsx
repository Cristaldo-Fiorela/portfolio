import { Icon } from '@iconify/react';

import { projects } from '../db/db.js';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle.jsx';

const Projects = () => {
  return (
    <section id="projects" className='flex flex-col gap-5 scroll-mt-15 max-w-5xl px-4 mx-auto'>
      <SectionTitle title="Proyectos" />
      <div className='flex flex-col gap-5'>
        {projects?.map(project => (
          <ProjectCard
            key={project.id}
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