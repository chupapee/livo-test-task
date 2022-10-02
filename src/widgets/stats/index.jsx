import { list } from "./model"

export const Stats = () => {
  return (
    <div className="container-widget flex justify-center my-[100px]">
      <ul className="w-full flex flex-col items-center justify-center gap-[10px] sm:flex-row">
        {list.map(( {icon, num, description, id} ) => (
          <div key={id} className="w-[40%] md:w-[33%]
            border-l-2 first:border-none border-r-0 border-y-0
            sm:border-solid border-l-[#EEEFF2]">
            <li className="flex gap-8 items-center sm:justify-center">
              <span className="w-[55px] h-[55px] inline-block" dangerouslySetInnerHTML={{__html: icon}}></span>
              <div className="flex flex-col gap-1">
                <span className="text-darkBlue font-bold text-[18px] md:text-[25px]">{num}+</span>
                <span className="font-normal text-sm md:text-[20px]">{description}</span>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}