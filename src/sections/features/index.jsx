import { Fragment } from "react"
import { Img } from "./Img"

export const Features = () => {
  const features = ['Powerfull online protection.', 'Internet without borders.', 'Supercharged VPN', 'No specific time limits.']
  return (
    <>
      <section className="container-section md:mb-[200px] mb-[80px]">
        <div className="container-img">
          <Img />
        </div>
        <div className="container-info mt-5">
          <h1 className="info-h">We Provide Many Features You Can Use</h1>
          <p className="info-p">You can explore the features that we provide with fun and have their own functions each feature.</p>
          <div className="mb-5 flex flex-col">
            <div className="mx-auto my-0 md:m-0">
            {features.map((item) => (
              <div className="flex gap-3 mb-[15px]" key={item}>
                <span className="w-fit">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M10.1215 0.549316C4.60746 0.549316 0.12146 5.03532 0.12146 10.5493C0.12146 16.0633 4.60746 20.5493 10.1215 20.5493C15.6355 20.5493 20.1215 16.0633 20.1215 10.5493C20.1215 5.03532 15.6355 0.549316 10.1215 0.549316ZM8.12246 14.9623L5.11691 11.9632C4.72616 11.5733 4.72537 10.9405 5.11515 10.5496C5.50517 10.1585 6.13847 10.1578 6.52939 10.548L8.12046 12.1363L12.7075 7.54932C13.0979 7.15885 13.731 7.15885 14.1215 7.54932C14.5119 7.93978 14.5119 8.57285 14.1215 8.96332L8.12246 14.9623Z" fill="#2FAB73"/>
                  </svg>
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