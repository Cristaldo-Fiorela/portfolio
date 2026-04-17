import SectionTitle from "./SectionTitle"
import { me } from "../db/db";

const Experience = () => {
  const { experience } = me;
  return (
    <div className="bg-stone-950/70 min-h-screen py-5">
      <section id="experience" className=" scroll-mt-15 max-w-5xl px-4 mx-auto  flex flex-col gap-10">
        <SectionTitle title="Experiencia" />

        {experience.map((work) => (
          <div className="bg-neutral-800 border border-neutral-900 rounded p-5 flex flex-col gap-3" key={work.id}>
            <div>
              <div className="md:grid md:grid-cols-3 flex flex-col-reverse gap-1">
                <h3 className="md:col-span-2 text-neutral-200 text-xl font-family-heading">{work.role}</h3>
                <span className="md:col-span-1 text-end">{work.period.from} - {work.period.to}</span>
              </div>
              <h6 className="bg-linear-to-r from-pink to-yellow bg-clip-text text-transparent  font-bold">{work.company}</h6>
            </div>
            <ul className="flex flex-col gap-0.5 list-disc list-inside ">
              {work.highlights.map((item, i) => (
                <li className="list-item" key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

      </section>
    </div>

  )
}

export default Experience