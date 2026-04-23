import { Icon } from '@iconify/react';

const Skill = ({ name, icon }) => {
  return (
    <p className='bg-neutral-200 text-black w-fit flex gap-1.5 p-1 px-2 rounded font-bold hover:scale-105 cursor-default' >
      {name}
      <Icon icon={icon} width="1.7rem" height="1.7rem" />
    </p>
  )
}

export default Skill