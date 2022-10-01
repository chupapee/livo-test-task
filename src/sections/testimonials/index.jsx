import { Img } from "./Img"

export const Testimonials = () => {
  return (
    <>
      <div className="container-info text-center mt-[150px]">
        <h2 className="info-h">Huge Global Network of Fast VPN</h2>
        <p className="info-p">See LaslesVPN everywhere to make it easier for you when you move locations.</p>
      </div>
      <div className="container-img mt-[100px] sm:mt-[150px] mx-auto max-w-[1060px]">
        <Img />
      </div>
      <div className="flex max-h-[200px] justify-center items-center gap-4 lg:gap-[47.5px] flex-wrap mt-[115px] mb-[130px]">
        <img className="max-w-full h-[70px] lg:h-[110px]" src={'./testimonials/netflix.jpg'} alt="netflix_icon" />
        <img className="max-w-full h-[40px] lg:h-[50px]" src={'./testimonials/reddit.jpg'} alt="reddit_icon" />
        <img className="max-w-full h-[150px] lg:h-[210px]" src={'./testimonials/amazon.jpg'} alt="amazon_icon" />
        <img className="max-w-full h-[40px] lg:h-[64px]" src={'./testimonials/discord.jpg'} alt="discord_icon" />
        <img className="max-w-full h-[40px] lg:h-[50px]" src={'./testimonials/spotify.jpg'} alt="spotify_icon" />
      </div>
    </>
  )
}