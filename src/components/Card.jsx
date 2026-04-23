import { Icon } from "@iconify/react"

const Card = ({
  icon = 'boxicons:medal-star-alt-2-filled',
  date,
  textColor = 'neutral-700',
  borderColor = 'neutral-700',
  title,
  certificationProvider
}) => {
  return (
    <article className={`bg-neutral-800 p-4 rounded border-2 w-full ${borderColor} flex flex-col gap-3 justify-between hover:scale-102`}>
      <div className="flex justify-between">
        <div className={`bg-neutral-600/40 w-fit p-1 rounded border-2 border-neutral-700 ${textColor}`}>
          <Icon icon={icon} height="2rem" />
        </div>
        <small>{date}</small>
      </div>
      <div className="border-b-4 border-neutral-700/40 pb-2">
        <h4 className="font-family-heading text-neutral-200">{title}</h4>
        <p>{certificationProvider}</p>
      </div >
      <a href="#" target="_blank" rel="noopener noreferrer" className="flex gap-1 items-center text-yellow hover:underline hover:decoration-wavy w-fit">
        <Icon icon="boxicons:medal-star-alt-2-filled" />
        Certificado
      </a>
    </article>
  )
}

export default Card