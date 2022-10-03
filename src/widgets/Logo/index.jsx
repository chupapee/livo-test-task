export const Logo = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 hover:cursor-pointer">
        <img loading="lazy" src="./assets/logo/logoIcon.svg" alt="logoIcon" />
        <span className="text-darkBlue font-medium md:font-bold">LaslesVPN</span>
      </div>
    </>
  )
}