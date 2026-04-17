import SectionTitle from "./SectionTitle"
import { me } from "../db/db";

const Experience = () => {
  return (
    <div className="bg-stone-950/70 h-screen py-5">
      <section id="experience" className=" scroll-mt-15 max-w-5xl px-4 mx-auto">
        <SectionTitle title="Experiencia" />

        <div>
          <div>
            <div>
              <h3>TITULO</h3>
              <span>23 septiembre</span>
            </div>
            <h6>SUBTITULO</h6>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At recusandae deserunt in, totam quasi ullam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At recusandae deserunt in, totam quasi ullam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At recusandae deserunt in, totam quasi ullam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At recusandae deserunt in, totam quasi ullam.</p>
          </div>

        </div>

      </section>
    </div>

  )
}

export default Experience