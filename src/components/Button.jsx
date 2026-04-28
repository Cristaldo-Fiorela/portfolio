const Button = ({ children, fill = false }) => {
  return (
    <button className={`border px-4 py-3 rounded font-bold cursor-pointer flex gap-2 items-center ${!fill ? " border-neutral-700 hover:border-pink hover:bg-pink/10 hover:text-white" : "border-pink bg-pink/85 hover:bg-pink text-neutral-950 "}`}>
      {children}
    </button>
  )
}

export default Button