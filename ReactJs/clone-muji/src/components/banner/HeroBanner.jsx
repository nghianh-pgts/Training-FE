import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Controller,
} from "swiper/modules";
const HeroBanner = () => {
  return (
    <Swiper
      className="mySwiper h-[70vh] w-full max-w-[100%] lg:aspect-[1350/480]"
      // install Swiper modules
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide>
        <img
          src="https://api.muji.com.vn/media/mageplaza/bannerslider/banner/image/h/o/ho_p_qua_-_desktop_1.jpg"
          alt="ảnh"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src=" https://api.muji.com.vn/media/mageplaza/bannerslider/banner/image/j/a/jan.2025_-_vnpay_desktop.jpg"
          alt="ảnh"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://api.muji.com.vn/media/mageplaza/bannerslider/banner/image/e/c/ec_web_banner_desktop_room_makeover.jpg"
          alt="ảnh"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://api.muji.com.vn/media/mageplaza/bannerslider/banner/image/b/a/banner_o_thu_o_ng_-_desktop.jpg"
          alt="ảnh"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://api.muji.com.vn/media/mageplaza/bannerslider/banner/image/l/o/loa_-_desktop_fixed_1.png"
          alt="ảnh"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroBanner;
