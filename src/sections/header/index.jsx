import { Logo } from "../../widgets/Logo"
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

export const Header = () => {
  const navList = ['About', 'Features', 'Pricing', 'Testimonials', 'Help']
  
  // burger icons controller
  const [open, setOpen] = useState({isClicked: false, isOpen: false})
  const navRef = useRef({style: {display: 'none'}})
  const headerRef = useRef({style: {display: 'none'}})
  function handleBurger() {
    setOpen({isClicked: true, isOpen:!open.isOpen})
  }

  // show the navbar when burger is clicked
  useEffect(() => {
    if(open.isClicked && open.isOpen) {
      navRef.current.style.display = 'flex'
      headerRef.current.style.height = '100vh'
    } else if(open.isClicked && !open.isOpen){
      navRef.current.style.display = 'none'
      headerRef.current.style.height = 'fit-content'
    }
  }, [open])

  return (
    <>
      <header ref={headerRef} className="max-w-[1140px] justify-between fixed w-full
              backdrop-blur-md z-50 gap-[20px] pt-10 flex pb-[30px]
              lg:pb-0 lg:items-center lg:h-[100px] lg:mb-10 lg:pt-6 md:mb-[100px]
      ">
        <div className="ml-4 z-20">
          <Logo />
        </div>
        <div onClick={handleBurger} className="w-[50px] absolute right-0 top-11 z-10 flex items-end lg:hidden">
          {open.isOpen ? <AiOutlineClose size={30}/> : <GiHamburgerMenu size={30}/>}
        </div>
        <nav ref={navRef} className="
             text-grayPrimary absolute w-full pr-6 flex-col pt-16 hidden
             lg:pb-0 lg:flex justify-end lg:static lg:gap-[150px] lg:items-center
             lg:flex-row lg:h-auto lg:pr-0 lg:translate-y-0 lg:bg-inherit lg:pt-0
        ">
          <div className="flex justify-between flex-col items-end gap-4
               lg:gap-10 lg:items-center lg:flex-row
          ">
            {navList.map((item) => (
              <a key={item} href={'#' + item} onClick={(e) => {window.screen.width < 1025 && handleBurger()}} className=" hover:text-darkBlue hover:underline">{item}</a>
            ))}
          </div>
          <div className="flex items-end flex-col ml-2 py-3 lg:py-0 lg:flex-row">
            <button className="btn-sm">Sign in</button>
            <button className="btn-sm">Sign up</button>
          </div>
        </nav>
      </header>
    </>
  )
}