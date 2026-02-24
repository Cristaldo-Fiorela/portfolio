import { Icon } from '@iconify/react';

import DB from '../db/db.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">
        Proyectos {""}
        <Icon icon="akar-icons:sparkles" width="3rem" height="3rem" />
      </h2>
      <div className='projects-container'>
        <ProjectCard />
        {/* { DB.map(project => (
          <div 
            className="project-card"
            key={project.id}
            style={{backgroundImage: `url('${project.image}')`}}
          >
            <div className='card-body'>
              <div className="tech-tags">
                {project.tech.map( (tech, i) => (
                  <p key={i}>#{tech}</p>
                ))}
              </div>
              <h4>{project.name}</h4>
            </div>
          </div>
          ))
        } */}
      </div>
    </section>
  )
}

export default Projects