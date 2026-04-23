import { Icon } from "@iconify/react"
import Card from "./Card"
import { certifications } from '../db/db.js'
import { baseColors } from "../utils/utils.js"
import SectionTitle from "./SectionTitle.jsx"

const Certifications = () => {
  return (
    <section id="certifications" className='flex flex-col gap-5 scroll-mt-15 max-w-5xl px-4 mx-auto my-10'>
      <SectionTitle title="Certificaciones" />
      <div className="flex flex-wrap gap-3 md:grid md:grid-cols-3">
        {certifications?.map((certificate, i) => {
          const { id, certificationProvider, date, icon, link, title } = certificate;
          const style = baseColors[i % baseColors.length]
          return (
            <Card
              key={id}
              certificationProvider={certificationProvider}
              date={date}
              icon={icon}
              link={link}
              title={title}
              borderColor={style.borderColor}
              textColor={style.textColor}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Certifications