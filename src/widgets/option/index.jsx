import { useRef } from "react"
import { Img } from "./Img"

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
      <div ref={blockRef} className="md:px-0 px-4
            border-2 rounded-[10px] border-solid border-lightGray
            text-center flex flex-col justify-between md:h-[760px]"
      >
        <div className="mx-auto w-fit md:mt-[80px] mt-[40px]">
          <div className="max-w-[146px]">
            <Img />
          <h3 className="text-[18px] font-medium text-darkBlue mt-[30px] mx-auto">{title}</h3>
          </div>
        </div>
        <div className="mx-auto mt-[30px] h-fit">
          {options.map((item) => (
            <div key={item} className="flex items-center md:gap-[20px] gap-3 mb-[10px]">
              <span>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M11.4487 17.2795C11.3174 17.2798 11.1874 17.2542 11.0661 17.204C10.9448 17.1539 10.8345 17.0804 10.7417 16.9875L6.4997 12.7445C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2981 6.1952 12.1669 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0491 7.0691 11.0237 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3295L11.4477 14.8645L17.8127 8.50155C18.0002 8.31391 18.2546 8.20844 18.5198 8.20834C18.7851 8.20825 19.0396 8.31354 19.2272 8.50105C19.4148 8.68855 19.5203 8.94292 19.5204 9.20819C19.5205 9.47346 19.4152 9.72791 19.2277 9.91555L12.1557 16.9875C12.0629 17.0804 11.9526 17.1539 11.8313 17.204C11.71 17.2542 11.58 17.2798 11.4487 17.2795Z" fill="#2FAB73"/>
                </svg>
              </span>
              <p className="text-gray font-normal text-sm">{item}</p>
            </div>
          ))}
        </div>
        <div className="text-center flex flex-col items-center mb-[50px] mt-[20px]">
          <p className="font-medium text-darkBlue text-[25px] md:mb-[20px] mb-2">
            {price}
            {price.length < 4 && <span className="font-medium text-[#4F5665]"> / mo</span>}
          </p>
          <button onMouseLeave={handleLeave} onMouseEnter={handleHover}
                  className="btn-sm px-[50px] sm:px-[60px] lg:px-[80px] py-[12px] sm:py-[15px] border-2 border-red border-solid
                  hover:bg-red hover:text-white text-red font-bold"
          >Select</button>
        </div>
      </div>
    </>
  )
}