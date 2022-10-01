import { Img } from "./Img"

export const About = () => {
  return (
    <>
      <section className="container-section">
        <div className="container-info md:m-0 mt-20 mb-10">
          <h1 className="info-h">Want anything to be easy with LaslesVPN.</h1>
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