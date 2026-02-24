import Pill from "./Pill"

const ProjectCard = ({id, name, image, description, tags, github}) => {
  return (
    <div className="bg-neutral-800 flex flex-wrap rounded-2xl border-2 border-neutral-700">
      <img src="../../public/images/project-mockup-felino.png" alt="" className="rounded-t-2xl"/>
      <article className="p-5">
        <div>
          <p>tag</p>
          <p>tag</p>
          <p>tag</p>
          <p>tag</p>
        </div>
        <h3>TITULO</h3>
        <p>descripcion</p>
        <a href="http://" target="_blank" rel="noopener noreferrer">GITHUB</a>
      </article>
    </div>
  )
}

export default ProjectCard