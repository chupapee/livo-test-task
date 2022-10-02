import { Slider } from "../../widgets/slider"

export const Customers = () => {
  return (
    <>
      <div className="container-info text-center mb-[60px]">
        <h2 className="info-h">Trusted by Thousands of Happy Customer</h2>
        <p className="info-p">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
      </div>
      <div>
        <Slider />
      </div>
    </>
  )
}