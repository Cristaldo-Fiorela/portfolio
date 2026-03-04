import { Icon } from "@iconify/react"
import Card from "./Card"
import { certifications } from '../db/db.js'
import { baseColors } from "../utils/utils.js"

const Certifications = () => {
  return (
    <section id="certifications" className='flex flex-col gap-5'>
      <div className='font-family-heading flex gap-2 text-2xl items-center justify-center'>
        <h2 className="">Certificaciones</h2>
        <Icon icon="akar-icons:sparkles" width="3rem" height="3rem" />
      </div>
      <div className="flex flex-wrap gap-3 md:grid md:grid-cols-3">
        {certifications?.map( (certificate, i) => {
          const {id, certificationProvider, date, icon, link, title} = certificate;
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