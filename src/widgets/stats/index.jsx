import { Fragment } from "react"
import { list } from "./model"

export const Stats = () => {
  return (
    <div className="w-full shadow-widget shadow-lightGray
          rounded-[10px] h-[300px] md:h-[200px] flex justify-center
          md:my-[100px] my-[40px]
          ">
      <ul className="sm:flex-row items-center justify-center flex-col flex gap-[10px] w-full">
        {list.map(( {icon, num, description, id} ) => (
          <Fragment key={id}>
            <li className="w-[33%] first:border-none flex sm:justify-center
                gap-8 items-center border-l-2 border-r-0 border-y-0
                sm:border-solid border-l-[#EEEFF2]"
            >
              <span className="inline-block w-[55px] h-[55px]" dangerouslySetInnerHTML={{__html: icon}}></span>
              <div className="flex flex-col gap-1">
                <span className="text-darkBlue font-bold text-[25px] ">{num}+</span>
                <span className="font-normal text-[20px] ">{description}</span>
              </div>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}