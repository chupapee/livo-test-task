import { Logo } from "../../widgets/Logo"
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

export const Footer = () => {
  const list = [
    {
      title: 'Product',
      items: ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog']
    },
    {
      title: 'Engage',
      items: ['LaslesVPN ?', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service']
    },
    {
      title: 'Earn Money',
      items: ['Affiliate', 'Become Partner']
    },
  ]
  return (
    <>
      <section id="Help">
        <div className="w-full bg-gray py-[60px]
            absolute translate-y-[-150px] z-0 pt-[205px]
        ">
          <div className="max-w-[1155px] px-[15px] flex lg:flex-row flex-col justify-between mx-auto">
            <div className="flex flex-col lg:items-start items-center">
              <Logo />
              <p className="info-p max-w-[340px] mb-0 mt-[20px] font-normal text-center lg:text-left">LaslesVPN is a private virtual network that has unique features and has high security.</p>
              <div className="my-[30px] flex cursor-pointer gap-[20px]">
                <div className="border-2 rounded-full border-red shadow-lg w-[35px] h-[35px] bg-white flex items-center justify-center hover:border-solid">
                  <FaFacebookF fill="red" stroke="red"/>
                </div>
                <div className="border-2 border-red rounded-full w-[35px] shadow-lg h-[35px] bg-white flex items-center justify-center hover:border-solid">
                  <AiOutlineTwitter fill="red"/>
                </div>
                <div className="border-2 border-red rounded-full w-[35px] shadow-lg h-[35px] bg-white flex items-center justify-center hover:border-solid">
                  <BsInstagram fill="red"/>
                </div>
              </div>
              <p className="text-[#AFB5C0] mb-[50px]">©2020LaslesVPN</p>
            </div>
            <div className="flex justify-start flex-wrap gap-[50px] lg:gap-[125px] sm:justify-between">
              {list.map(( {title, items} ) => (
                <ul key={title}>
                  <p className="mb-[20px] text-darkBlue font-medium text-[18px]">{title}</p>
                  {items.map((item) => ( <li className="mb-[10px] cursor-pointer hover:underline hover:text-darkBlue" key={item}>{item}</li> ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}