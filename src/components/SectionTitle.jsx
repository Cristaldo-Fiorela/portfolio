import { Icon } from "@iconify/react"

const SectionTitle = ({
  title,
  color = ""
}) => {
  return (
    <div className="w-full">
      <h2 className="flex text-4xl gap-2 font-family-heading items-center text-neutral-100">
        <Icon icon="pixelarticons:sparkles" width="35" height="35" color={color} />
        {title}
      </h2>

      <span className="h-0.5 border-b-8 border-pink/80 pl-24" />
    </div>

  )
}

export default SectionTitle