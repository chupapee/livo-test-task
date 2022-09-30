export const Button = ({children}) => {
  return (
    <>
      <button className="px-11 py-3 text-darkBlue font-medium hover:text-red ease-in-out duration-150 rounded-full border-transparent border-solid border hover:border-red">{children}</button>
    </>
  )
}