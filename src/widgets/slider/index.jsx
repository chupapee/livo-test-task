import { Navigation, Pagination, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Slide } from './Slide';
import './style.css'

export const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Mousewheel]}
        navigation={true}
        mousewheel={true}
        pagination={true}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={50}
        breakpoints={{
          720: {
            slidesPerView: 2,
          },
          1150: {
            slidesPerView: 3,
          }
        }}
      >
        <SwiperSlide>
          <Slide
            imgUrl='./customers/cust-1.svg'
            name='Viezh Robert'
            location='Warsaw, Poland'
            text='“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imgUrl='./customers/cust-2.svg'
            name='Yessica Christy'
            location='Shanxi, China'
            text='“I like it because I like to travel far and still can connect with high speed.”.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imgUrl='./customers/cust-3.svg'
            name='Kim Young Jou'
            location='Seoul, South Korea'
            text='“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imgUrl='./customers/cust-3.svg'
            name='Kim Young Jou'
            location='Seoul, South Korea'
            text='“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imgUrl='./customers/cust-3.svg'
            name='Kim Young Jou'
            location='Seoul, South Korea'
            text='“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imgUrl='./customers/cust-3.svg'
            name='Kim Young Jou'
            location='Seoul, South Korea'
            text='“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}