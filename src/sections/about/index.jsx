import { Img } from "./Img"

export const About = () => {
  return (
    <>
      <section id="About" className="container-section pt-[100px] lg:pt-[205px]">
        <div className="container-info mt-24 mb-20 md:m-0">
          <h1 className="info-h px-4 sm:px-0 lg:text-lg sm:text-medium text-[30px]">Want anything to be easy with LaslesVPN.</h1>
          <p className="info-p">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
          <button className="btn-lg">Get Started</button>
        </div>
        <div className="container-img">
          <Img />
        </div>
      </section>
    </>
  )
}