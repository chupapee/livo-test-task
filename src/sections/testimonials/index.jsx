import { Img } from "./Img"

export const Testimonials = () => {
  return (
    <>
      <section id="Testimonials">
        <div className="container-info text-center mt-[150px] lg:max-w-[383px]">
          <h2 className="info-h text-medium">Huge Global Network of Fast VPN</h2>
          <p className="info-p">See LaslesVPN everywhere to make it easier for you when you move locations.</p>
        </div>
        <div className="container-img mt-[100px] mx-auto max-w-[1060px] sm:mt-[150px]">
          <Img />
        </div>
        <div className="flex max-h-[200px] justify-center items-center gap-4 cursor-pointer flex-wrap mt-[75px] mb-[150px] lg:gap-[30px] sm:mb-[40px]">
          <img loading="lazy" className="max-w-full h-[70px] lg:h-[110px]" src={'./assets/testimonials/netflix.jpg'} alt="netflix_icon" />
          <img loading="lazy" className="max-w-full h-[40px] lg:h-[50px]" src={'./assets/testimonials/reddit.jpg'} alt="reddit_icon" />
          <img loading="lazy"  className="max-w-full h-[150px] lg:h-[210px]" src={'./assets/testimonials/amazon.jpg'} alt="amazon_icon" />
          <img loading="lazy" className="max-w-full h-[40px] lg:h-[64px]" src={'./assets/testimonials/discord.jpg'} alt="discord_icon" />
          <img loading="lazy" className="max-w-full h-[40px] lg:h-[50px]" src={'./assets/testimonials/spotify.jpg'} alt="spotify_icon" />
        </div>
      </section>
    </>
  )
}