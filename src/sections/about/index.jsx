import { ButtonLg } from "../../shared/buttonLg"
import { Img } from "./Img"

export const About = () => {
  return (
    <>
      <section className="flex">
        <div>
          <div className="w-full">
            <h1 className="mb-5 font-medium leading-[1.2] text-darkBlue text-lg">Want anything to be easy with LaslesVPN.</h1>
            <p className="mb-12 font-medium">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
          </div>
          <ButtonLg>Get Started</ButtonLg>
        </div>
        <div className="w-full mb-24">
          <Img />
        </div>
      </section>
    </>
  )
}