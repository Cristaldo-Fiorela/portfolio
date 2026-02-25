import { Icon } from "@iconify/react"
import Pill from "./Pill"

const ProjectCard = ({id, name, image, description, tags, github}) => {
  return (
    <div className="bg-neutral-800 flex flex-wrap rounded-2xl border-2 border-neutral-700 md:grid md:grid-cols-2  md:h-96">
      <img src="../../public/images/project-mockup-felino.png" alt="" className="rounded-t-2xl md:rounded-none md:rounded-l-2xl md:col-span-1 w-full h-48 md:h-full object-cover overflow-hidden"/>
      <article className="p-5 flex flex-col gap-5 md:col-span-1 justify-center">
        <div className="flex flex-wrap gap-2">
          <Pill>
            <p className="text-sm">hola</p>
          </Pill>
            <Pill>
            <p>hola</p>
          </Pill>  <Pill>
            <p>hola</p>
          </Pill>
        </div>
        <h3 className="font-family-heading text-lg">TITULO NUMERO 2</h3>
        <p className="text-neutral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consectetur blanditiis eligendi fugiat voluptatum ratione!</p>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="flex gap-1 items-center hover:underline hover:text-pink decoration-wavy">
          Github
          <Icon icon="mdi:github" width="2rem" height="2rem"/>
        </a>
      </article>
    </div>
  )
}

export default ProjectCard