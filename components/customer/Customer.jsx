import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { listCustomer } from "../../utils/Data/Customer";
import styles from "./Customer.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

function Customer() {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    arrows: false,
    infinite: true,
    dots: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.customer}>
      <div className={styles.customer_slide}>
        <p className="title text-center mb-5">Our Customers</p>
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         modules={[Autoplay]}
         breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        
        {listCustomer.map((item, index) => (
            <div key={index}>
              <SwiperSlide><Image src={item.img} width={500} height={320} objectFit="cover"  alt="logo" /></SwiperSlide>
            </div>
          ))}
      </Swiper>
      </div>
    </div>
  );
}

export default Customer;
