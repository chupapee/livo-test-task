import { Logo } from "./logo"

export const Header = () => {
  const navList = ['About', 'Features', 'Pricing', 'Testimonials', 'Help']
  
  return (
    <>
      <header className="flex justify-between items-center mb-10 md:mb-[100px]">
        <div className="flex justify-center items-center gap-2 hover:cursor-pointer">
          <Logo />
          <span className="text-darkBlue font-bold">LaslesVPN</span>
        </div>
        <nav className="hidden md:flex md:gap-10">
          {navList.map((item) => (
            <a key={item} href='.' className="hover:text-darkBlue hover:underline">{item}</a>
          ))}
        </nav>
        <div className="flex">
          <button className="btn-sm">Sign in</button>
          <button className="btn-sm">Sign up</button>
        </div>
      </header>
    </>
  )
}