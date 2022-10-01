import { Logo } from "./logo"

export const Header = () => {
  const navList = ['About', 'Features', 'Pricing', 'Testimonials', 'Help']
  
  return (
    <>
      <header className="flex justify-between items-center mb-10 md:mb-[100px]">
        <div className="flex justify-center items-center gap-2 hover:cursor-pointer">
          <Logo />
          <span className="text-darkBlue md:font-bold font-medium">LaslesVPN</span>
        </div>
        <nav className="hidden lg:flex lg:gap-10 gap-5">
          {navList.map((item) => (
            <a key={item} href='.' className="first:ml-4 hover:text-darkBlue hover:underline">{item}</a>
          ))}
        </nav>
        <div className="hidden lg:flex ml-2">
          <button className="btn-sm">Sign in</button>
          <button className="btn-sm">Sign up</button>
        </div>
        <div className="w-[50px] flex lg:hidden">
          <span>AAA</span>
        </div>
      </header>
    </>
  )
}