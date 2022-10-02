import { useRef } from "react"
import { Img } from "./Img"
import { AiOutlineCheck } from 'react-icons/ai'

export const Option = ({title = '', options = [], price = ''}) => {
  function handleHover() {
    blockRef.current.style.borderColor = "red"
  }
  function handleLeave() {
    blockRef.current.style.borderColor = "#AFB5C0"
  }
  const blockRef = useRef(null)
  return (
    <>
      <div ref={blockRef} className="
            px-4 border-2 rounded-[10px] border-solid border-lightGray
            text-center grid grid-rows-3 md:px-0 md:h-[760px]
      ">
        <div className="mx-auto max-w-[146px] mt-[50px] md:mt-[80px]">
          <Img />
        </div>
        <div className="mx-auto h-fit">
          <h3 className="text-[18px] font-medium text-darkBlue my-[30px] mx-auto">{title}</h3>
          {options.map((item) => (
            <div key={item} className="flex items-start gap-3 mb-[10px] md:gap-[20px]">
              <AiOutlineCheck size={14} fill="#2FAB73"/>
              <p className="text-grayPrimary font-normal text-sm">{item}</p>
            </div>
          ))}
        </div>
        <div className="text-center flex flex-col self-end items-center mb-[50px] mt-[20px]">
          <p className="font-medium text-darkBlue text-[25px] mb-2 md:mb-[20px]">
            {price}
            {price.length < 4 && <span className="font-medium text-grayPrimary"> / mo</span>}
          </p>
          <button onMouseLeave={handleLeave} onMouseEnter={handleHover}
                  className="btn-sm px-[50px] py-[12px] border-2 border-red border-solid text-red font-bold
                  hover:bg-red hover:text-white sm:px-[60px] lg:px-[80px] sm:py-[15px]
          ">Select
          </button>
        </div>
      </div>
    </>
  )
}