import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import banner1 from './../../img/banner-1.jpeg'
import banner2 from './../../img/banner-2.jpeg'
import banner3 from './../../img/banner-3.jpeg'
import './SwiperLib.css'

const SwiperLib = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={banner1} alt="Banner 1" className="banner-img" /></SwiperSlide>
      <SwiperSlide><img src={banner2} alt="Banner 2" className="banner-img" /></SwiperSlide>
      <SwiperSlide><img src={banner3} alt="Banner 3" className="banner-img" /></SwiperSlide>
    </Swiper>
  );
};

export default SwiperLib