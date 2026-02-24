import { Icon } from '@iconify/react';

const Skill = ({ name, icon }) => {
  return (
    <p className='bg-neutral-100 text-black w-fit flex gap-1.5 p-1 px-2 rounded-xl font-bold hover:scale-105' >
      {name}
      <Icon icon={icon} width="1.7rem" height="1.7rem" /> 
    </p>
  )
}

export default Skill