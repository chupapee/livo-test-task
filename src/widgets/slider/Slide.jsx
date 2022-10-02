export const Slide = ({
    imgUrl = "./customers/cust-3.svg",
    name = "Kim Young Jou",
    location = "Seoul, South Korea",
    text = "“This is very unusual for my business that currently requires a virtual private network that has high security.”."
  }) => {
  return (
    <>
      <div className='h-[230px] flex flex-col gap-[8px] sm:p-[30px] p-[20px] 
           border-2 rounded-[10px] border-lightGray border-solid hover:border-red hover:cursor-pointer'>
        <div className='flex justify-between flex-wrap'>
          <div className='flex gap-[20px]'>
            <img src={imgUrl} alt="Viezh Robert" />
            <div>
              <p className='w-fit font-medium text-darkBlue sm:text-[18px] text-primary'>{name}</p>
              <p className='w-fit font-normal text-[14px]'>{location}</p>
            </div>
          </div>
          <div className='self-center flex gap-[10px]'>
            <span className='text-darkBlue text-primary'>4.5</span>
            <img className='w-[16px]' src="./assets/customers/star.svg" alt="rating" />
          </div>
        </div>
          <div className="overflow-hidden">
          <p className='text-darkBlue sm:leading-[30px] leading-[25px]'>{text}</p>
          </div>
      </div>
    </>
  )
}