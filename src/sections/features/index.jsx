import { Img } from "./Img"
import { BsCheck } from 'react-icons/bs'

export const Features = () => {
  const features = ['Powerfull online protection.', 'Internet without borders.', 'Supercharged VPN', 'No specific time limits.']
  return (
    <>
      <section id="Features" className="container-section mb-[140px] md:mb-[200px] animate-smoothly">
        <div className="container-img">
          <Img />
        </div>
        <div className="container-info mt-16 md:mt-0">
          <h1 className="info-h">We Provide Many Features You Can Use</h1>
          <p className="info-p">You can explore the features that we provide with fun and have their own functions each feature.</p>
          <div className=" flex flex-col">
            <div className="mx-auto my-0 md:m-0">
            {features.map((item) => (
              <div className="flex gap-3 mb-[15px]" key={item}>
                <span className="w-fit">
                  <div className="flex items-center justify-center border border-green border-solid rounded-full bg-green">
                    <BsCheck size={21} fill="white"/>
                  </div>
                </span>
                <span>{item}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}