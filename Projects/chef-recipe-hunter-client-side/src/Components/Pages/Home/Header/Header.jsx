import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from "./Slide";
import { useLoaderData } from "react-router-dom";

const Header = () => {
  const { slides } = useLoaderData();

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide>
            <Slide key={slide.id} slide={slide}></Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
