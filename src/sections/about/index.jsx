import { Img } from "./Img"

export const About = () => {
  return (
    <>
      <section className="container-section">
        <div className="container-info md:m-0 mt-24 mb-20">
          <h1 className="info-h sm:px-0 px-4">Want anything to be easy with LaslesVPN.</h1>
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