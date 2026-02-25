const Pill = ({ 
  children,
  bgColor = 'bg-neutral-100/20',
  textColor = 'text-neutral-100',
  className = '',
}) => {
  return (
    <div className={`${bgColor} ${textColor} border-2 rounded-4xl w-fit py-1 px-3 ${className} hover:scale-105`}>
      {children}
    </div>
  )
}

export default Pill