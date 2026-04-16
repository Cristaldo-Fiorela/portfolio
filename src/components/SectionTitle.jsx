import { Icon } from "@iconify/react"

const SectionTitle = ({
  title,
  color = ""
}) => {
  return (
    <h2 className="">
      ${title}
      <Icon icon="pixelarticons:sparkles" width="24" height="24" color={color} />

    </h2>

  )
}

export default SectionTitle