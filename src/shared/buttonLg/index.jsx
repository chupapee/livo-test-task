export const ButtonLg = ({children}) => {
  return (
    <>
      <button
        className="
          border border-solid rounded-[10px]
          border-red py-4 px-20 text-red font-bold
          ease-in-out hover:text-white hover:bg-red
          transition-all duration-300 hover:shadow-primary"
          >
          {children}
      </button>
    </>
  )
}