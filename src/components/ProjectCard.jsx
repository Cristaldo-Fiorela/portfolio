import { Icon } from "@iconify/react"
import Pill from "./Pill"
import { baseColors } from "../utils/utils"

const ProjectCard = ({ id, name, image, description, tags, github }) => {
  return (
    <div className="bg-neutral-900 flex flex-wrap rounded border border-neutral-700 md:grid md:grid-cols-2  md:h-96" id={id}>
      <img src={image} alt="" className="rounded-t md:rounded-none md:rounded-l md:col-span-1 w-full h-48 md:h-full object-cover overflow-hidden" />
      <article className="p-5 flex flex-col gap-5 md:col-span-1 justify-center">
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, i) => {
            const style = baseColors[i % baseColors.length]
            return (
              <Pill key={tag} bgColor={style.bgColor} textColor={style.textColor}>
                <p className="text-sm">{tag}</p>
              </Pill>
            )
          })}
        </div>
        <h3 className="font-family-heading text-lg text-neutral-200">{name}</h3>
        <p className="text-neutral-300">{description}</p>
        <a href={github} target="_blank" rel="noopener noreferrer" className="flex gap-1 items-center hover:underline hover:text-pink decoration-wavy">
          Github
          <Icon icon="mdi:github" width="2rem" height="2rem" />
        </a>
      </article>
    </div>
  )
}

export default ProjectCard