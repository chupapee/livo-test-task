import { list } from "./model"

export const Stats = () => {
  return (
    <div className="container-widget flex justify-center my-[100px]">
      <ul className="sm:flex-row items-center justify-center flex-col flex gap-[10px] w-full">
        {list.map(( {icon, num, description, id} ) => (
          <div key={id} className="w-[40%] md:w-[33%] first:border-none
            border-l-2 border-r-0 border-y-0
            sm:border-solid border-l-[#EEEFF2]">
            <li className="flex sm:justify-center gap-8 items-center">
              <span className="inline-block w-[55px] h-[55px]" dangerouslySetInnerHTML={{__html: icon}}></span>
              <div className="flex flex-col gap-1">
                <span className="text-darkBlue font-bold md:text-[25px] text-[18px]">{num}+</span>
                <span className="font-normal md:text-[20px] text-sm">{description}</span>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}