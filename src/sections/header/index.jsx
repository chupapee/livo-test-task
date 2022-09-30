import { Button } from "../../shared/button"
import { Logo } from "./logo"

export const Header = () => {
  const navList = ['About', 'Features', 'Pricing', 'Testimonials', 'Help']
  
  return (
    <>
      <header className="flex justify-between items-center mb-[100px]">
        <div className="flex justify-center items-center gap-2 hover:cursor-pointer">
          <Logo />
          <span className="text-darkBlue font-bold">LaslesVPN</span>
        </div>
        <nav className="flex justify-between gap-10">
          {navList.map((item) => (
            <a href='.' className="hover:text-darkBlue hover:underline">{item}</a>
          ))}
        </nav>
        <div>
          <Button>Sign in</Button>
          <Button>Sign up</Button>
        </div>
      </header>
    </>
  )
}