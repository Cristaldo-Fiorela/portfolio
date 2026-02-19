import { Icon } from '@iconify/react';

const Skill = ({ name, icon }) => {
  return (
    <p>{name}
      <Icon icon={icon} width="1.7rem" height="1.7rem" /> 
    </p>
  )
}

export default Skill